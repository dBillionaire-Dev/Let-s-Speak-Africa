
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types/blog';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Edit, Trash2, Eye, Calendar, User } from 'lucide-react';

interface ArticleManagerProps {
    onEditArticle: (post: BlogPost) => void;
    onPreviewArticle: (post: BlogPost) => void;
}

const ArticleManager = ({ onEditArticle, onPreviewArticle }: ArticleManagerProps) => {
    const [articles, setArticles] = useState<BlogPost[]>([]);

    useEffect(() => {
        const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        setArticles(savedPosts);
    }, []);

    const handleDeleteArticle = (id: number) => {
        if (window.confirm('Are you sure you want to delete this article? This action cannot be undone.')) {
            const updatedArticles = articles.filter(article => article.id !== id);
            setArticles(updatedArticles);
            localStorage.setItem('blogPosts', JSON.stringify(updatedArticles));
        }
    };

    const refreshArticles = () => {
        const savedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
        setArticles(savedPosts);
    };

    // Refresh articles when component mounts or when localStorage changes
    useEffect(() => {
        const handleStorageChange = () => {
            refreshArticles();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Separate published and draft articles
    const publishedArticles = articles.filter(article => article.published);
    const draftArticles = articles.filter(article => !article.published);

    const ArticleTable = ({ articles, title }: { articles: BlogPost[], title: string }) => (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {title} ({articles.length})
                    <Button onClick={refreshArticles} variant="outline" size="sm">
                        Refresh
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {articles.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        <p>No {title.toLowerCase()} yet.</p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Likes</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {articles.map((article) => (
                                <TableRow key={article.id}>
                                    <TableCell className="font-medium">
                                        <div>
                                            <p className="font-semibold">{article.title}</p>
                                            <p className="text-sm text-gray-500 truncate max-w-xs">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <span className="inline-block bg-lsa-green text-white px-2 py-1 rounded-full text-xs">
                                            {article.category}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {article.author.image && (
                                                <img
                                                    src={article.author.image}
                                                    alt={article.author.name}
                                                    className="w-6 h-6 rounded-full object-cover"
                                                />
                                            )}
                                            <span className="text-sm">{article.author.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <Calendar size={14} />
                                            <span>{article.date}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm">
                                            <span>{article.likes}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                onClick={() => onPreviewArticle(article)}
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-1"
                                            >
                                                <Eye size={16} />
                                                Preview
                                            </Button>
                                            <Button
                                                onClick={() => onEditArticle(article)}
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-1"
                                            >
                                                <Edit size={16} />
                                                Edit
                                            </Button>
                                            <Button
                                                onClick={() => handleDeleteArticle(article.id)}
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-1 text-red-600 hover:text-red-700"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );

    return (
        <div className="space-y-6">
            <ArticleTable articles={draftArticles} title="Draft Articles" />
            <ArticleTable articles={publishedArticles} title="Published Articles" />
        </div>
    );
};

export default ArticleManager;