import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import BlogPostView from "../components/BlogPostView";
import { BlogPost, Comment } from "../types/blog";

// Enhanced blog data with full content
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Youth-Led Climate Action in Nigeria",
    excerpt: "How young activists are leading the charge against climate change in Lagos",
    content: `Climate change is one of the most pressing issues of our time, and nowhere is this more evident than in Nigeria, where young activists are taking the lead in environmental protection and sustainability efforts.

In Lagos, a group of passionate young people has formed the "Green Future Initiative," a grassroots organization dedicated to raising awareness about climate change and implementing practical solutions in their communities.

The initiative started with simple beach cleanups but has since evolved into a comprehensive program that includes tree planting, renewable energy advocacy, and educational workshops in schools and communities.

One of the most impressive aspects of this movement is how these young activists are using social media and technology to amplify their message and connect with like-minded individuals across the continent.

Their efforts have not gone unnoticed. Local government officials have begun consulting with the group on environmental policies, and several international organizations have provided funding for their projects.

This is just one example of how young people across Africa are refusing to wait for others to solve the climate crisis. They are taking action now, and their impact is being felt far beyond their local communities.`,
    author: {
      name: "Ruth Bassey Okim",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      social: "@ruthbassey"
    },
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Climate Action",
    image: "https://images.unsplash.com/photo-1621274403997-37aace184f49?w=800",
    likes: 45,
    published: true
  },
  {
    id: 2,
    title: "The Power of Storytelling in Advocacy",
    excerpt: "Exploring how personal narratives can drive social change across communities",
    content: `Stories have the power to change minds, hearts, and ultimately, the world. In the realm of advocacy and social change, personal narratives serve as powerful catalysts that can inspire action and create lasting impact.

When we share our personal experiences, we create connections that transcend barriers of culture, geography, and background. These connections are the foundation of empathy, and empathy is what drives people to care about issues that may not directly affect them.

In my work with youth advocacy groups across Africa, I have witnessed firsthand how powerful storytelling can be. Young people who share their stories of overcoming challenges, fighting for their communities, and working toward positive change inspire others to join their cause.

One particularly powerful example comes from a young woman in Kenya who shared her story of starting a clean water initiative in her village. Her narrative about the daily struggles her community faced in accessing clean water, and her determination to find a solution, inspired donors from around the world to support her project.

The key to effective advocacy storytelling is authenticity. People can sense when a story is genuine, and they respond to that authenticity with support and action.

Another important aspect is making the story relatable. Even if people haven't experienced the exact same challenges, they can understand the emotions and motivations behind the story.

Technology has also amplified the reach of these stories. Social media platforms, podcasts, and online publications have given advocates new ways to share their narratives with global audiences.`,
    author: {
      name: "Sarah Mwangi",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
      social: "@sarahmwangi"
    },
    date: "April 22, 2023",
    readTime: "4 min read",
    category: "Storytelling",
    image: "https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800",
    likes: 32,
    published: true
  },
  {
    id: 3,
    title: "Women's Rights Advocacy in Rural Communities",
    excerpt: "Breaking down barriers for gender equity in traditionally conservative areas",
    content: `Working for women's rights in rural communities presents unique challenges and opportunities. Traditional structures and conservative mindsets can create significant barriers, but they also provide opportunities for meaningful, grassroots change.

In many rural African communities, women face systemic discrimination that limits their access to education, healthcare, economic opportunities, and decision-making roles. However, change is happening, often led by brave women who are willing to challenge these long-standing norms.

One approach that has proven effective is working with local leaders and elders to demonstrate how women's empowerment benefits the entire community. When traditional leaders see the positive impact of women's participation in community development, they become advocates for change.

Education plays a crucial role in this transformation. Girls' education programs not only provide knowledge and skills but also serve as powerful symbols of what's possible when barriers are removed.

Economic empowerment is another key strategy. When women have access to income-generating activities, they gain not only financial independence but also respect and influence within their communities.

The work is slow and sometimes frustrating, but the progress is real and lasting. Each girl who stays in school, each woman who starts a business, each female voice that is heard in community meetings represents a step toward a more equitable future.

Support from urban areas and international organizations is important, but the real change must come from within these communities. That's why building local capacity and supporting indigenous women leaders is so crucial to this work.`,
    author: {
      name: "Fatima Diallo",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150",
      social: "@fatimadiallo"
    },
    date: "March 8, 2023",
    readTime: "6 min read",
    category: "Gender Equity",
    image: "https://images.unsplash.com/photo-1531384370597-8590413be50a?w=800",
    likes: 67,
    published: true
  },
  {
    id: 4,
    title: "Our Experience at the Africa Youth Summit",
    excerpt: "Reflections and insights from our participation in the continent-wide gathering",
    content: `The Africa Youth Summit was more than just a conference; it was a transformative experience that brought together young leaders from across the continent to share ideas, build connections, and plan for the future of Africa.

Representing our organization at this prestigious event was both an honor and a responsibility. We knew that we were carrying the voices and dreams of countless young people who couldn't be there in person.

The summit covered a wide range of topics, from economic development and entrepreneurship to climate change and governance. What struck me most was the diversity of perspectives and approaches that young people are taking to address these challenges.

One of the most inspiring sessions was on innovation and technology. Young entrepreneurs from different countries shared how they're using technology to solve local problems, from mobile banking solutions in rural areas to apps that connect farmers with markets.

The networking opportunities were invaluable. We met young leaders who are doing similar work in different countries, and we were able to share strategies and learn from each other's experiences.

Perhaps most importantly, the summit gave us a sense of being part of something larger than ourselves. The challenges we face in our individual communities are part of broader continental and global issues, and the solutions we develop can have impact far beyond our borders.

We left the summit with new partnerships, fresh ideas, and renewed energy for our work. The connections we made continue to be sources of support and collaboration.

The summit also reinforced our belief that young people are not just the leaders of tomorrow – we are the leaders of today, and we have the power to shape the future of our continent.`,
    author: {
      name: "Daniel Osei",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      social: "@danielosei"
    },
    date: "February 17, 2023",
    readTime: "3 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
    likes: 23,
    published: true
  },
  {
    id: 5,
    title: "Building Environmental Storytelling Clubs",
    excerpt: "A step-by-step guide to starting your own youth advocacy group",
    content: `Starting an environmental storytelling club is one of the most effective ways to engage young people in climate action while building their communication and leadership skills.

The concept is simple: combine environmental education with storytelling techniques to create compelling narratives that inspire action and change.

**Step 1: Define Your Purpose**
Begin by clearly defining what you want to achieve. Are you focusing on local environmental issues, or do you want to address broader climate change topics? Having a clear mission will help guide all your future activities.

**Step 2: Find Your Core Team**
Look for 3-5 passionate individuals who share your vision. Diversity in skills and backgrounds will strengthen your group. You'll want people with different strengths: writers, speakers, organizers, and subject matter experts.

**Step 3: Choose Your Focus Areas**
Environmental storytelling can cover many topics: waste management, renewable energy, biodiversity, water conservation, and more. Start with one or two areas that are most relevant to your community.

**Step 4: Develop Your Storytelling Skills**
Organize workshops on narrative techniques, public speaking, and digital storytelling. Invite local journalists, writers, or activists to share their expertise.

**Step 5: Create Content**
Start producing stories in various formats: written articles, podcasts, videos, social media content, and live presentations. Document local environmental issues and highlight positive initiatives.

**Step 6: Build Your Audience**
Use social media, school networks, and community events to share your stories and build a following. Partner with local environmental organizations and schools.

**Step 7: Take Action**
Stories should inspire action. Organize events, campaigns, and initiatives that allow your audience to get involved in environmental protection.

The key to success is consistency and authenticity. Your stories should be based on real experiences and genuine passion for environmental protection.`,
    author: {
      name: "Ruth Bassey Okim",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
      social: "@ruthbassey"
    },
    date: "January 30, 2023",
    readTime: "7 min read",
    category: "Resources",
    image: "/blog-storytelling.jpeg",
    likes: 89,
    published: true
  },
];

// Sample comments data
const sampleComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: "Michael Johnson",
    content: "This is incredibly inspiring! I'd love to connect with similar initiatives in my area.",
    date: "May 16, 2023",
    isAnonymous: false
  },
  {
    id: 2,
    postId: 1,
    author: "Anonymous",
    content: "Thank you for sharing this. It gives me hope for the future of our continent.",
    date: "May 17, 2023",
    isAnonymous: true
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [blogPostsWithLikes, setBlogPostsWithLikes] = useState<BlogPost[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    // Load user-created posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    const userPosts = savedPosts ? JSON.parse(savedPosts) : [];

    // Combine user posts with default posts
    const allPosts = [...userPosts, ...blogPosts];

    const savedComments = localStorage.getItem('blogComments');
    const savedLikes = localStorage.getItem('blogLikes');
    const savedPostLikes = localStorage.getItem('blogPostLikes');

    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      setComments(sampleComments);
    }

    if (savedLikes) {
      setLikedPosts(new Set(JSON.parse(savedLikes)));
    }

    if (savedPostLikes) {
      const postLikes = JSON.parse(savedPostLikes);
      setBlogPostsWithLikes(allPosts.map(post => ({
        ...post,
        likes: postLikes[post.id] || post.likes || 0
      })));
    } else {
      setBlogPostsWithLikes(allPosts);
    }
  }, []);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem('blogComments', JSON.stringify(comments));
  }, [comments]);

  // Save liked posts to localStorage whenever likedPosts change
  useEffect(() => {
    localStorage.setItem('blogLikes', JSON.stringify(Array.from(likedPosts)));
  }, [likedPosts]);

  // Save post likes to localStorage whenever blogPostsWithLikes change
  useEffect(() => {
    const postLikes = blogPostsWithLikes.reduce((acc, post) => {
      acc[post.id] = post.likes;
      return acc;
    }, {} as Record<number, number>);
    localStorage.setItem('blogPostLikes', JSON.stringify(postLikes));
  }, [blogPostsWithLikes]);

  const handleReadMore = (post: BlogPost) => {
    // Get the updated post with current like count
    const updatedPost = blogPostsWithLikes.find(p => p.id === post.id) || post;
    setSelectedPost(updatedPost);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleAddComment = (newComment: Omit<Comment, 'id' | 'date'>) => {
    const comment: Comment = {
      id: Date.now(), // Use timestamp as ID for uniqueness
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      ...newComment
    };
    setComments(prev => [...prev, comment]);
  };

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      let increment = 0;

      if (newSet.has(postId)) {
        newSet.delete(postId);
        increment = -1;
      } else {
        newSet.add(postId);
        increment = 1;
      }

      // Update the like count for the specific post
      setBlogPostsWithLikes(prevPosts =>
        prevPosts.map(post =>
          post.id === postId
            ? { ...post, likes: post.likes + increment }
            : post
        )
      );

      // Update selectedPost if it's the same post
      if (selectedPost && selectedPost.id === postId) {
        setSelectedPost(prev => prev ? { ...prev, likes: prev.likes + increment } : null);
      }

      return newSet;
    });
  };

  if (selectedPost) {
    const postComments = comments.filter(comment => comment.postId === selectedPost.id);
    return (
      <BlogPostView
        post={selectedPost}
        onBack={handleBack}
        comments={postComments}
        onAddComment={handleAddComment}
        onLike={() => handleLike(selectedPost.id)}
        isLiked={likedPosts.has(selectedPost.id)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsWithLikes.filter(post => post.published).map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
                onReadMore={() => handleReadMore(post)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle
              title="Subscribe to Our Newsletter"
              subtitle="Get the latest updates delivered directly to your inbox"
            />

            <form className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
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
          src={post.image}
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
