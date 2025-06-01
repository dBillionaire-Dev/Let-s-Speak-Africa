
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image?: string;
    social?: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  likes: number;
  published: boolean;
}

export interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  date: string;
  isAnonymous: boolean;
}
