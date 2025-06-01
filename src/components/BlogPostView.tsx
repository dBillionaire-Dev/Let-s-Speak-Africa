
import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Calendar, Clock, User } from 'lucide-react';
import { BlogPost, Comment } from '../types/blog';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  comments: Comment[];
  onAddComment: (comment: Omit<Comment, 'id' | 'date'>) => void;
  onLike: () => void;
  isLiked: boolean;
  isPreview?: boolean;
  backButtonText?: string;
}

const BlogPostView = ({
  post,
  onBack,
  comments,
  onAddComment,
  onLike,
  isLiked,
  isPreview = false,
  backButtonText = 'Back to Blog'
}: BlogPostViewProps) => {
  const [newComment, setNewComment] = useState('');
  const [commenterName, setCommenterName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    onAddComment({
      postId: post.id,
      author: isAnonymous ? 'Anonymous' : commenterName || 'Anonymous',
      content: newComment,
      isAnonymous: isAnonymous
    });

    setNewComment('');
    if (!isAnonymous) setCommenterName('');
  };

  const formatContent = (content: string) => {
    // Simple markdown formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="w-full max-w-2xl mx-auto my-4 rounded-lg" />')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-lsa-gold hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="container-custom py-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            {backButtonText}
          </Button>

          {post.category && (
            <span className="inline-block bg-lsa-green text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            {!isPreview && (
              <div className="flex items-center gap-2">
                <Heart size={16} />
                <span>{post.likes} likes</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.image && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
            {post.author.image && (
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <User size={16} className="text-gray-500" />
                <span className="font-semibold">{post.author.name}</span>
              </div>
              {post.author.social && (
                <p className="text-gray-600 text-sm">{post.author.social}</p>
              )}
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />

          {!isPreview && (
            <>
              {/* Action Buttons */}
              <div className="flex items-center gap-4 py-6 border-y border-gray-200 mb-8">
                <Button
                  onClick={onLike}
                  variant="outline"
                  className={`flex items-center gap-2 ${isLiked ? 'text-red-500 border-red-500' : ''}`}
                >
                  <Heart size={20} className={isLiked ? 'fill-current' : ''} />
                  {isLiked ? 'Liked' : 'Like'} ({post.likes})
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => document.getElementById('comments')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageCircle size={20} />
                  Comment ({comments.length})
                </Button>
              </div>

              {/* Comments Section */}
              <div id="comments" className="space-y-6">
                <h3 className="text-2xl font-bold">Comments ({comments.length})</h3>

                {/* Add Comment Form */}
                <form onSubmit={handleSubmitComment} className="space-y-4 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Leave a Comment</h4>

                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                      />
                      <span className="text-sm">Comment anonymously</span>
                    </label>
                  </div>

                  {!isAnonymous && (
                    <Input
                      placeholder="Your name"
                      value={commenterName}
                      onChange={(e) => setCommenterName(e.target.value)}
                      required={!isAnonymous}
                    />
                  )}

                  <Textarea
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                    className="min-h-[100px]"
                  />

                  <Button type="submit" className="btn-primary">
                    Post Comment
                  </Button>
                </form>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No comments yet. Be the first to comment!</p>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-semibold text-lsa-green">
                            {comment.isAnonymous ? 'Anonymous' : comment.author}
                          </span>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;