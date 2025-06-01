
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BlogPost } from '../types/blog';
import { Save, Eye, Upload, User, ArrowLeft, FileText, Plus } from 'lucide-react';
import BlogPostView from '../components/BlogPostView';
import ArticleManager from '../components/ArticleManager';

type AdminView = 'create' | 'manage' | 'preview' | 'edit';

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<AdminView>('create');
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: {
      name: '',
      image: '',
      social: ''
    },
    category: '',
    image: '',
    published: false
  });
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const resetForm = () => {
    setPost({
      title: '',
      excerpt: '',
      content: '',
      author: {
        name: '',
        image: '',
        social: ''
      },
      category: '',
      image: '',
      published: false
    });
    setEditingPost(null);
  };

  const validateRequiredFields = () => {
    if (!post.title?.trim()) {
      alert('Title is required');
      return false;
    }
    if (!post.excerpt?.trim()) {
      alert('Excerpt is required');
      return false;
    }
    if (!post.content?.trim()) {
      alert('Content is required');
      return false;
    }
    if (!post.author?.name?.trim()) {
      alert('Author name is required');
      return false;
    }
    if (!post.author?.social?.trim()) {
      alert('Author contact information is required');
      return false;
    }
    if (!post.category?.trim()) {
      alert('Category is required');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (!post.title?.trim()) {
      alert('Title is required to save draft');
      return;
    }

    const savedPost: BlogPost = editingPost ? {
      ...editingPost,
      ...post,
      published: false,
      id: editingPost.id,
      date: editingPost.date
    } : {
      id: Date.now(),
      title: post.title || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      author: post.author || { name: '', image: '', social: '' },
      category: post.category || '',
      image: post.image || '',
      published: false,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: calculateReadTime(post.content || ''),
      likes: 0
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    let updatedPosts;

    if (editingPost) {
      updatedPosts = existingPosts.map((p: BlogPost) =>
        p.id === editingPost.id ? savedPost : p
      );
    } else {
      updatedPosts = [savedPost, ...existingPosts];
    }

    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    setEditingPost(savedPost);

    console.log('Saving draft:', savedPost);
    alert(editingPost ? 'Draft updated successfully!' : 'Draft saved successfully!');
  };

  const handlePublish = () => {
    if (!validateRequiredFields()) {
      return;
    }

    const publishedPost: BlogPost = editingPost ? {
      ...editingPost,
      ...post,
      published: true,
      id: editingPost.id,
      date: editingPost.date
    } : {
      id: Date.now(),
      title: post.title || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      author: post.author || { name: '', image: '', social: '' },
      category: post.category || '',
      image: post.image || '',
      published: true,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: calculateReadTime(post.content || ''),
      likes: 0
    };

    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    let updatedPosts;

    if (editingPost) {
      updatedPosts = existingPosts.map((p: BlogPost) =>
        p.id === editingPost.id ? publishedPost : p
      );
    } else {
      updatedPosts = [publishedPost, ...existingPosts];
    }

    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    console.log('Publishing post:', publishedPost);
    alert(editingPost ? 'Post updated and published successfully!' : 'Post published successfully!');

    navigate('/blog');
  };

  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleImageUpload = (field: 'image' | 'authorImage') => {
    const imageUrl = prompt(`Enter image URL for ${field}:`);
    if (imageUrl) {
      if (field === 'image') {
        setPost(prev => ({ ...prev, image: imageUrl }));
      } else {
        setPost(prev => ({
          ...prev,
          author: { ...prev.author!, image: imageUrl }
        }));
      }
    }
  };

  const handleEditArticle = (article: BlogPost) => {
    setPost({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      category: article.category,
      image: article.image,
      published: article.published
    });
    setEditingPost(article);
    setCurrentView('edit');
  };

  const handlePreviewArticle = (article: BlogPost) => {
    setPost({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      author: article.author,
      category: article.category,
      image: article.image,
      published: article.published
    });
    setEditingPost(article);
    setCurrentView('preview');
  };

  const handleNewArticle = () => {
    resetForm();
    setCurrentView('create');
  };

  const handleBackToEditor = () => {
    if (editingPost) {
      setCurrentView('edit');
    } else {
      setCurrentView('create');
    }
  };

  // Create a complete blog post for preview
  const previewPost: BlogPost = {
    id: editingPost?.id || 0,
    title: post.title || 'Untitled Post',
    excerpt: post.excerpt || 'No excerpt provided',
    content: post.content || 'No content provided',
    author: post.author || { name: 'Anonymous', image: '', social: '' },
    category: post.category || 'Uncategorized',
    image: post.image || '',
    published: post.published || false,
    date: editingPost?.date || new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: calculateReadTime(post.content || ''),
    likes: editingPost?.likes || 0
  };

  // If in preview mode, show the full blog post view
  if (currentView === 'preview') {
    return (
      <BlogPostView
        post={previewPost}
        onBack={handleBackToEditor}
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
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Blog Admin</h1>
            <div className="flex gap-2">
              <Button
                onClick={handleNewArticle}
                variant={currentView === 'create' ? 'default' : 'outline'}
                className="flex items-center gap-2"
              >
                <Plus size={20} />
                New Article
              </Button>
              <Button
                onClick={() => setCurrentView('manage')}
                variant={currentView === 'manage' ? 'default' : 'outline'}
                className="flex items-center gap-2"
              >
                <FileText size={20} />
                Manage Articles
              </Button>
            </div>
          </div>

          {(currentView === 'create' || currentView === 'edit') && (
            <div className="flex gap-2">
              <Button
                onClick={() => setCurrentView('preview')}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Eye size={20} />
                Preview
              </Button>
              <Button onClick={handleSave} variant="outline">
                <Save size={20} />
                {editingPost ? 'Update Draft' : 'Save Draft'}
              </Button>
              <Button onClick={handlePublish} className="btn-primary">
                {editingPost ? 'Update & Publish' : 'Publish'}
              </Button>
            </div>
          )}
        </div>

        {currentView === 'manage' ? (
          <ArticleManager
            onEditArticle={handleEditArticle}
            onPreviewArticle={handlePreviewArticle}
          />
        ) : (
          <div>
            {editingPost && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Editing: "{editingPost.title}" - Status: {editingPost.published ? 'Published' : 'Draft'}
                </p>
                <Button
                  onClick={handleNewArticle}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Cancel & Create New Article
                </Button>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Editor */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Article Content</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <Input
                        value={post.title}
                        onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="Enter article title..."
                        className="text-lg"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Category/Section <span className="text-red-500">*</span>
                      </label>
                      <Input
                        value={post.category}
                        onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
                        placeholder="e.g., Climate Action, Storytelling, Gender Equity..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Excerpt <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={post.excerpt}
                        onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                        placeholder="Brief description of the article..."
                        className="h-20"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Image</label>
                      <div className="flex gap-2">
                        <Input
                          value={post.image}
                          onChange={(e) => setPost(prev => ({ ...prev, image: e.target.value }))}
                          placeholder="Image URL..."
                        />
                        <Button
                          onClick={() => handleImageUpload('image')}
                          variant="outline"
                        >
                          <Upload size={20} />
                        </Button>
                      </div>
                      {post.image && (
                        <div className="mt-2">
                          <img src={post.image} alt="Cover" className="w-full h-32 object-cover rounded" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Content (Markdown supported) <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={post.content}
                        onChange={(e) => setPost(prev => ({ ...prev, content: e.target.value }))}
                        placeholder="Write your article content here...

**Bold text**
*Italic text*
- List item
- Another item

![Image](url)
[Link](url)"
                        className="min-h-[400px] font-mono"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Supports Markdown formatting. Use **bold**, *italic*, lists, links, and images.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Author Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User size={20} />
                      Author Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Author Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        value={post.author?.name || ''}
                        onChange={(e) => setPost(prev => ({
                          ...prev,
                          author: { ...prev.author!, name: e.target.value }
                        }))}
                        placeholder="Author name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Author Image</label>
                      <div className="flex gap-2">
                        <Input
                          value={post.author?.image || ''}
                          onChange={(e) => setPost(prev => ({
                            ...prev,
                            author: { ...prev.author!, image: e.target.value }
                          }))}
                          placeholder="Image URL..."
                        />
                        <Button
                          onClick={() => handleImageUpload('authorImage')}
                          variant="outline"
                        >
                          <Upload size={20} />
                        </Button>
                      </div>
                      {post.author?.image && (
                        <div className="mt-2">
                          <img src={post.author.image} alt="Author" className="w-16 h-16 rounded-full object-cover" />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Social Contact <span className="text-red-500">*</span>
                      </label>
                      <Input
                        value={post.author?.social || ''}
                        onChange={(e) => setPost(prev => ({
                          ...prev,
                          author: { ...prev.author!, social: e.target.value }
                        }))}
                        placeholder="@username or email"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Meta Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Article Meta</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={post.published}
                        onChange={(e) => setPost(prev => ({ ...prev, published: e.target.checked }))}
                      />
                      <label htmlFor="published" className="text-sm font-medium">Published</label>
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>Creation Date: {editingPost?.date || new Date().toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                      <p>Estimated Read Time: {calculateReadTime(post.content || '')}</p>
                    </div>

                    <div className="text-sm text-gray-500">
                      <p className="font-medium mb-2">Required fields for publishing:</p>
                      <ul className="space-y-1 text-xs">
                        <li>• Title</li>
                        <li>• Category</li>
                        <li>• Excerpt</li>
                        <li>• Content</li>
                        <li>• Author Name</li>
                        <li>• Author Contact</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;