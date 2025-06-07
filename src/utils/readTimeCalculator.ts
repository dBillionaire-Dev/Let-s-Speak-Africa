export const calculateReadTime = (content: string): string => {
    if (!content) return '<1 min read';

    // Remove HTML tags and markdown syntax for accurate word count
    const cleanText = content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/[#*`_~\[\]()]/g, '') // Remove markdown syntax
        .replace(/!\[.*?\]\(.*?\)/g, '') // Remove image markdown
        .replace(/\[.*?\]\(.*?\)/g, '') // Remove link markdown
        .trim();

    // Count words (split by whitespace and filter out empty strings)
    const words = cleanText.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Average reading speed: 200 words per minute
    const readingSpeed = 200;
    const minutes = Math.max(1, Math.ceil(wordCount / readingSpeed));

    return `${minutes} min read`;
};