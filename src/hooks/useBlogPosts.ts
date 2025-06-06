
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '../types/blog';
import { useAuth } from './useAuth';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const transformedPosts: BlogPost[] = (data || []).map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: {
          name: post.author_name,
          image: post.author_image || undefined,
          social: post.author_social || undefined,
        },
        date: new Date(post.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        readTime: post.read_time || '5 min read',
        category: post.category,
        image: post.image || '',
        likes: post.likes || 0,
        published: post.published || false
      }));

      setPosts(transformedPosts);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData: Omit<BlogPost, 'id' | 'date' | 'likes'>) => {
    if (!user) throw new Error('User must be authenticated');

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content,
          author_id: user.id,
          author_name: postData.author.name,
          author_image: postData.author.image,
          author_social: postData.author.social,
          category: postData.category,
          image: postData.image,
          published: postData.published,
          read_time: postData.readTime
        }])
        .select()
        .single();

      if (error) throw error;
      
      await fetchPosts(); // Refresh posts
      return data;
    } catch (err) {
      console.error('Error creating post:', err);
      throw err;
    }
  };

  const updatePost = async (id: string, postData: Partial<BlogPost>) => {
    if (!user) throw new Error('User must be authenticated');

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content,
          author_name: postData.author?.name,
          author_image: postData.author?.image,
          author_social: postData.author?.social,
          category: postData.category,
          image: postData.image,
          published: postData.published,
          read_time: postData.readTime,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('author_id', user.id)
        .select()
        .single();

      if (error) throw error;
      
      await fetchPosts(); // Refresh posts
      return data;
    } catch (err) {
      console.error('Error updating post:', err);
      throw err;
    }
  };

  const deletePost = async (id: string) => {
    if (!user) throw new Error('User must be authenticated');

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)
        .eq('author_id', user.id);

      if (error) throw error;
      
      await fetchPosts(); // Refresh posts
    } catch (err) {
      console.error('Error deleting post:', err);
      throw err;
    }
  };

  const refreshPosts = () => {
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    refreshPosts
  };
};
