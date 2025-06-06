
import { BlogPost, Comment } from '../types/blog';

const API_BASE_URL = '/api'; // This would be your backend URL

export const blogApi = {
  // Blog Posts
  async fetchPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  },

  async fetchDrafts(): Promise<BlogPost[]> {
    const response = await fetch(`${API_BASE_URL}/drafts`);
    if (!response.ok) throw new Error('Failed to fetch drafts');
    return response.json();
  },

  async savePost(post: Partial<BlogPost>): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (!response.ok) throw new Error('Failed to save post');
    return response.json();
  },

  async updatePost(id: number, post: Partial<BlogPost>): Promise<BlogPost> {
    const response = await fetch(`${API_BASE_URL}/save`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...post, id }),
    });
    if (!response.ok) throw new Error('Failed to update post');
    return response.json();
  },

  async deletePost(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) throw new Error('Failed to delete post');
  },

  // Comments
  async fetchComments(postId?: number): Promise<Comment[]> {
    const url = postId ? `${API_BASE_URL}/comments?postId=${postId}` : `${API_BASE_URL}/comments`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
  },

  async saveComment(comment: Omit<Comment, 'id' | 'date'>): Promise<Comment> {
    const response = await fetch(`${API_BASE_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    if (!response.ok) throw new Error('Failed to save comment');
    return response.json();
  },

  // Likes
  async updateLikes(postId: number, increment: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postId, increment }),
    });
    if (!response.ok) throw new Error('Failed to update likes');
  },

  async fetchLikes(): Promise<{ postId: number; count: number }[]> {
    const response = await fetch(`${API_BASE_URL}/likes`);
    if (!response.ok) throw new Error('Failed to fetch likes');
    return response.json();
  }
};
