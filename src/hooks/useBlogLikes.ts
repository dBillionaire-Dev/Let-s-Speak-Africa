
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export const useBlogLikes = (postId: string) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const checkIfLiked = async () => {
    if (!user || !postId) return;

    try {
      const { data, error } = await supabase
        .from('post_likes')
        .select('id')
        .eq('post_id', postId)
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking like status:', error);
        return;
      }

      setIsLiked(!!data);
    } catch (err) {
      console.error('Error checking like status:', err);
    }
  };

  const fetchLikesCount = async () => {
    if (!postId) return;

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('likes')
        .eq('id', postId)
        .single();

      if (error) throw error;

      setLikesCount(data?.likes || 0);
    } catch (err) {
      console.error('Error fetching likes count:', err);
    }
  };

  const toggleLike = async () => {
    if (!postId || loading) return;

    setLoading(true);
    try {
      if (!user) {
        // For anonymous users, just increment the count directly
        const newCount = likesCount + 1;

        const { error } = await supabase
          .from('blog_posts')
          .update({ likes: newCount })
          .eq('id', postId);

        if (error) {
          console.error('Error updating likes for anonymous user:', error);
          throw error;
        }

        setLikesCount(newCount);
        console.log('Anonymous like added successfully');
      } else {
        // For authenticated users, manage individual likes
        if (isLiked) {
          // Unlike
          const { error } = await supabase
            .from('post_likes')
            .delete()
            .eq('post_id', postId)
            .eq('user_id', user.id);

          if (error) throw error;
          setIsLiked(false);
          setLikesCount(prev => Math.max(0, prev - 1));
        } else {
          // Like
          const { error } = await supabase
            .from('post_likes')
            .insert({
              post_id: postId,
              user_id: user.id
            });

          if (error) throw error;
          setIsLiked(true);
          setLikesCount(prev => prev + 1);
        }
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      checkIfLiked();
      fetchLikesCount();
    }
  }, [postId, user]);

  return {
    isLiked,
    likesCount,
    toggleLike,
    loading
  };
};