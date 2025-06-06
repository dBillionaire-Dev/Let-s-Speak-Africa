
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { BlogPost } from '../types/blog';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import BlogPostView from '../components/BlogPostView';
import ArticleManager from '../components/ArticleManager';
import ImageUpload from '@/components/ImageUpload';
import { calculateReadTime } from '../utils/readTimeCalculator';
import { useToast } from '../components/ToastProvider';


const BlogAdmin = () => {
  const { showToast } = useToast();
  const { user } = useAuth();
  const { posts, createPost, updatePost, deletePost, loading } = useBlogPosts();
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);
  const [activeTab, setActiveTab] = useState('create');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    imageUrl: '',
    published: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageUpload = (imageData: string) => {
    setFormData(prev => ({
      ...prev,
      image: imageData,
      imageUrl: '' // Clear URL when image is uploaded
    }));
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      imageUrl: e.target.value,
      image: '' // Clear uploaded image when URL is entered
    }));
  };

  const clearImage = () => {
    setFormData(prev => ({
      ...prev,
      image: '',
      imageUrl: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      const readTime = calculateReadTime(formData.content);
      const finalImage = formData.image || formData.imageUrl;

      const postData: Omit<BlogPost, 'id' | 'date' | 'likes'> = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        image: finalImage,
        readTime: readTime,
        published: formData.published,
        author: {
          name: user.user_metadata?.full_name || user.email || 'Anonymous',
          image: user.user_metadata?.avatar_url,
          social: user.user_metadata?.social
        }
      };

      if (isEditing && editingPost) {
        await updatePost(editingPost.id, postData);
      } else {
        await createPost(postData);
      }

      resetForm();

      // Show appropriate success message
      if (formData.published) {
        showToast('Post published successfully!');
      } else {
        showToast('Draft saved successfully!');
      }
    } catch (error) {
      console.error('Error saving post:', error);
      showToast('Error saving post. Please try again.');
    }
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image: post.image.startsWith('data:') ? post.image : '',
      imageUrl: !post.image.startsWith('data:') ? post.image : '',
      published: post.published
    });
    setActiveTab('create');
  };

  const handleDelete = async (postId: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(postId);
        showToast('Post deleted successfully!');
      } catch (error) {
        console.error('Error deleting post:', error);
        showToast('Error deleting post. Please try again.');
      }
    }
  };

  const handlePreview = () => {
    if (!user) return;

    const readTime = calculateReadTime(formData.content);
    const finalImage = formData.image || formData.imageUrl;

    const previewData: BlogPost = {
      id: 'preview',
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      image: finalImage,
      readTime: readTime,
      published: formData.published,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      likes: 0,
      author: {
        name: user.user_metadata?.full_name || user.email || 'Anonymous',
        image: user.user_metadata?.avatar_url,
        social: user.user_metadata?.social
      }
    };

    setPreviewPost(previewData);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      image: '',
      imageUrl: '',
      published: false
    });
    setIsEditing(false);
    setEditingPost(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You need to be authenticated to access the admin panel.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (previewPost) {
    return (
      <BlogPostView
        post={previewPost}
        onBack={() => setPreviewPost(null)}
        comments={[]}
        onAddComment={() => { }}
        onLike={() => { }}
        isLiked={false}
        isPreview={true}
        backButtonText="Back to Editor"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Blog Admin Panel</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="create">Create/Edit Post</TabsTrigger>
            <TabsTrigger value="manage">Manage Articles</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>{isEditing ? 'Edit Post' : 'Create New Post'}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Title</label>
                      <Input
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter post title"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select category</option>
                        <option value="Environmental Storytelling">Environmental Storytelling</option>
                        <option value="Voices for Her">Voices for Her</option>
                        <option value="Youth Empowerment">Youth Empowerment</option>
                        <option value="Community Impact">Community Impact</option>
                        <option value="News & Updates">News & Updates</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Excerpt</label>
                    <Textarea
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      placeholder="Brief description of the post"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <Textarea
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      placeholder="Write your post content here..."
                      rows={15}
                      required
                    />
                    <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                      <p className="font-medium mb-2">Markdown Guide:</p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>**Bold Text**</strong> - Makes text bold</li>
                        <li><em>*Italic Text*</em> - Makes text italic</li>
                        <li><strong>[Link Text](URL)</strong> - Creates a clickable link</li>
                        <li><strong>![Alt Text](Image URL)</strong> - Embeds an image</li>
                        <li><strong>- List Item</strong> - Creates a bullet point</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Cover Image</label>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Upload Image</label>
                        <ImageUpload
                          onImageSelect={handleImageUpload}
                          currentImage={formData.image}
                          onClear={clearImage}
                        />
                      </div>

                      <div className="text-center text-gray-500 text-sm">OR</div>

                      <div>
                        <label className="block text-sm text-gray-600 mb-2">Image URL</label>
                        <Input
                          value={formData.imageUrl}
                          onChange={handleImageUrlChange}
                          placeholder="https://example.com/image.jpg"
                          disabled={!!formData.image}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                      onChange={handleInputChange}
                      className="rounded"
                    />
                    <label className="text-sm font-medium">Publish immediately</label>
                    <span className="text-xs text-gray-500 ml-2">
                      (Check to publish post, leave unchecked to save as draft)
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit" className="bg-lsa-green hover:bg-lsa-green/90 text-white">
                      {isEditing ? 'Update Post' : 'Create Post'}
                    </Button>
                    <Button type="button" onClick={handlePreview} variant="outline">
                      Preview
                    </Button>
                    {isEditing && (
                      <Button type="button" onClick={resetForm} variant="outline">
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage">
            <ArticleManager
              posts={posts}
              loading={loading}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogAdmin;