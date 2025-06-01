
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BlogPost } from '../types/blog';
import { Save, Eye, Upload, User, ArrowLeft } from 'lucide-react';
import BlogPostView from '../components/BlogPostView';

const BlogAdmin = () => {
  const navigate = useNavigate();
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

  const [isPreview, setIsPreview] = useState(false);

  const handleSave = () => {
    const savedPost = { 
      ...post, 
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime: calculateReadTime(post.content || '')
    };
    console.log('Saving post:', savedPost);
    alert('Post saved successfully!');
  };

  const handlePublish = () => {
    const publishedPost: BlogPost = { 
      id: Date.now(), // Generate unique ID
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
    
    // Save to localStorage so it appears on the blog page
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const updatedPosts = [publishedPost, ...existingPosts];
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    console.log('Publishing post:', publishedPost);
    alert('Post published successfully!');
    
    // Navigate to blog page after publishing
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

  // Create a complete blog post for preview
  const previewPost: BlogPost = {
    id: 0,
    title: post.title || 'Untitled Post',
    excerpt: post.excerpt || 'No excerpt provided',
    content: post.content || 'No content provided',
    author: post.author || { name: 'Anonymous', image: '', social: '' },
    category: post.category || 'Uncategorized',
    image: post.image || '',
    published: post.published || false,
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: calculateReadTime(post.content || ''),
    likes: 0
  };

  // If in preview mode, show the full blog post view
  if (isPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={() => setIsPreview(false)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Edit
            </Button>
            <div className="flex gap-2">
              <Button onClick={handleSave} variant="outline">
                <Save size={20} />
                Save Draft
              </Button>
              <Button onClick={handlePublish} className="btn-primary">
                Publish
              </Button>
            </div>
          </div>
          
          <BlogPostView
            post={previewPost}
            onBack={() => setIsPreview(false)}
            comments={[]}
            onAddComment={() => {}}
            onLike={() => {}}
            isLiked={false}
            isPreview={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Admin</h1>
          <div className="flex gap-2">
            <Button 
              onClick={() => setIsPreview(true)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Eye size={20} />
              Preview
            </Button>
            <Button onClick={handleSave} variant="outline">
              <Save size={20} />
              Save Draft
            </Button>
            <Button onClick={handlePublish} className="btn-primary">
              Publish
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Article Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={post.title}
                    onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter article title..."
                    className="text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category/Section</label>
                  <Input
                    value={post.category}
                    onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="e.g., Climate Action, Storytelling, Gender Equity..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <Textarea
                    value={post.excerpt}
                    onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                    placeholder="Brief description of the article..."
                    className="h-20"
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
                  <label className="block text-sm font-medium mb-2">Content (Markdown supported)</label>
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
                  <label className="block text-sm font-medium mb-2">Author Name</label>
                  <Input
                    value={post.author?.name || ''}
                    onChange={(e) => setPost(prev => ({ 
                      ...prev, 
                      author: { ...prev.author!, name: e.target.value }
                    }))}
                    placeholder="Author name"
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
                  <label className="block text-sm font-medium mb-2">Social Contact</label>
                  <Input
                    value={post.author?.social || ''}
                    onChange={(e) => setPost(prev => ({ 
                      ...prev, 
                      author: { ...prev.author!, social: e.target.value }
                    }))}
                    placeholder="@username or email"
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
                  <p>Creation Date: {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p>Estimated Read Time: {calculateReadTime(post.content || '')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAdmin;
