import React, { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import BlogPostView from "../components/BlogPostView";
import { BlogPost, Comment } from "../types/blog";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useBlogComments } from "../hooks/useBlogComments";
import { useBlogLikes } from "../hooks/useBlogLikes";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { posts, loading } = useBlogPosts();
  const { comments, addComment } = useBlogComments(selectedPost?.id || '');
  const { isLiked, toggleLike } = useBlogLikes(selectedPost?.id || '');

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleAddComment = async (newComment: Omit<Comment, 'id' | 'date'>) => {
    if (selectedPost) {
      try {
        await addComment(newComment);
      } catch (error) {
        console.error('Failed to add comment:', error);
      }
    }
  };

  const handleLike = async () => {
    await toggleLike();
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    try {
      // Use the Supabase edge function for newsletter subscription
      const response = await fetch(`https://wawdcljubsrtpqirplej.supabase.co/functions/v1/newsletter-subscription`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Thank you for subscribing to our newsletter!');
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        console.error('Newsletter subscription error:', errorData);
        alert('There was an error subscribing. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('There was an error subscribing. Please try again.');
    }
  };

  if (selectedPost) {
    return (
      <BlogPostView
        post={selectedPost}
        onBack={handleBack}
        comments={comments}
        onAddComment={handleAddComment}
        onLike={handleLike}
        isLiked={isLiked}
      />
    );
  }

  return (
    <div>
      <Hero
        title="Our Blog"
        subtitle="Stories, insights and resources from our community of changemakers"
        backgroundImage="https://images.unsplash.com/photo-1567428485548-c499e4931c10?w=1200"
        overlayOpacity="opacity-60"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Latest Articles" 
            subtitle="Explore our latest stories, insights, and resources" 
          />

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-gray-500">Loading articles...</div>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="text-gray-500">No articles published yet.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.filter(post => post.published).map((post) => (
                <BlogPostCard 
                  key={post.id} 
                  post={post} 
                  onReadMore={() => handleReadMore(post)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle 
              title="Subscribe to Our Newsletter" 
              subtitle="Get the latest updates delivered directly to your inbox" 
            />
            
            <form className="mt-8" onSubmit={handleNewsletterSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lsa-gold focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

interface BlogPostCardProps {
  post: BlogPost;
  onReadMore: () => void;
}

const BlogPostCard = ({ post, onReadMore }: BlogPostCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image || 'https://images.unsplash.com/photo-1567428485548-c499e4931c10?w=800'} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-lsa-green font-medium">{post.category}</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">By {post.author.name}</span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <button 
          onClick={onReadMore}
          className="w-full mt-4 py-2 border-2 border-lsa-gold hover:bg-lsa-gold/10 rounded-md font-medium transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
