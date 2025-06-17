import React, { useState } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import BlogPostView from "../components/BlogPostView";
import { BlogPost, Comment } from "../types/blog";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { useBlogComments } from "../hooks/useBlogComments";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { posts, loading } = useBlogPosts();
  const { comments, addComment } = useBlogComments(selectedPost?.id || '');
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

  if (selectedPost) {
    return (
      <BlogPostView
        post={selectedPost}
        onBack={handleBack}
        comments={comments}
        onAddComment={handleAddComment}
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
