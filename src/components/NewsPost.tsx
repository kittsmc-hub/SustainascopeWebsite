import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Copy, Check } from 'lucide-react';
import { format, parse } from 'date-fns';

interface NewsItem {
  date: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  readTime: string;
  link: string;
}

const NewsPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwUfYO2MfSTPBx9nEfhP0DVAw5zx19YI8FeS10dg9gUYtYmfxd0EcKjhaoRWoelE-x7dv8Rax0-NKm/pub?output=csv';
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch post');
        
        const text = await response.text();
        const rows = text.split('\n').slice(1); // Skip header row
        const posts = rows.map((row, index) => {
          const [date, title, summary, content, author, readTime, link] = row.split(',').map(cell => cell.replace(/^"|"$/g, ''));
          return { id: index.toString(), date, title, summary, content, author, readTime, link };
        });
        
        const currentPost = posts.find(p => p.id === id);
        if (!currentPost) throw new Error('Post not found');
        
        setPost(currentPost);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load post');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const formatDate = (dateStr: string) => {
    try {
      const parsedDate = parse(dateStr, 'MM/dd/yyyy', new Date());
      return format(parsedDate, 'MMMM d, yyyy');
    } catch (err) {
      return 'Date unavailable';
    }
  };

  const handleShare = async () => {
    if (!post) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.summary,
          url: window.location.href
        });
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      // If share/copy fails, we just ignore it
      console.log('Share failed:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-olive-900"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-olive-900 mb-4">
          {error || 'Post not found'}
        </h2>
        <Link
          to="/"
          className="flex items-center text-olive-900 hover:text-olive-800 transition-colors"
        >
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-olive-900 hover:text-olive-800 mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to News
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-olive-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-olive-800">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {formatDate(post.date)}
            </div>
            {post.author && (
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-olive-100 flex items-center justify-center mr-2">
                  {post.author.charAt(0).toUpperCase()}
                </div>
                {post.author}
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime} min read
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-olive-800 mb-8 font-medium">
            {post.summary}
          </p>
          
          <div className="text-olive-900 space-y-6">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-olive-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleShare}
                className="flex items-center text-olive-900 hover:text-olive-800 group relative"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    {navigator.share ? <Share2 className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                    {navigator.share ? 'Share this article' : 'Copy link'}
                  </>
                )}
              </button>
            </div>
            
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-900 hover:text-olive-800 underline"
              >
                View original source
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsPost;