
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Comment } from '../types/blog';
import { useAuth } from './useAuth';

export const useBlogComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchComments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });

      if (error) throw error;

      const transformedComments: Comment[] = (data || []).map(comment => ({
        id: comment.id,
        postId: postId,
        author: comment.author,
        content: comment.content,
        date: new Date(comment.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        isAnonymous: comment.is_anonymous || false
      }));

      setComments(transformedComments);
    } catch (err) {
      console.error('Error fetching comments:', err);
    } finally {
      setLoading(false);
    }
  };

  const addComment = async (commentData: Omit<Comment, 'id' | 'date'>) => {
    try {
      const { error } = await supabase
        .from('comments')
        .insert({
          post_id: postId,
          author: commentData.author,
          content: commentData.content,
          is_anonymous: commentData.isAnonymous
        });

      if (error) throw error;
      
      await fetchComments(); // Refresh comments
    } catch (err) {
      console.error('Error adding comment:', err);
      throw err;
    }
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  return {
    comments,
    loading,
    addComment,
    refreshComments: fetchComments
  };
};
