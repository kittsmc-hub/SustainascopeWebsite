import React, { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import { ArrowRight, ArrowLeft, ArrowRightCircle, ArrowLeftCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  readTime: string;
  link: string;
}

const ITEMS_PER_PAGE = 6;

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwUfYO2MfSTPBx9nEfhP0DVAw5zx19YI8FeS10dg9gUYtYmfxd0EcKjhaoRWoelE-x7dv8Rax0-NKm/pub?output=csv';
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch news');
        
        const text = await response.text();
        const rows = text.split('\n').slice(1); // Skip header row
        
        const parsedNews = rows.map((row, index) => {
          const [date, title, summary, content, author, readTime, link] = row.split(',').map(cell => cell.replace(/^"|"$/g, ''));
          return { id: index.toString(), date, title, summary, content, author, readTime, link };
        });
        
        setNews(parsedNews);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load news');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      const parsedDate = parse(dateStr, 'MM/dd/yyyy', new Date());
      return format(parsedDate, 'MMMM d, yyyy');
    } catch (err) {
      return 'Date unavailable';
    }
  };

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = news.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-olive-900"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 py-8">
      {error}
    </div>
  );

  if (news.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-olive-900">No news articles available at the moment.</p>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-olive-900 mb-4">Latest News</h2>
          <p className="text-lg text-olive-900 max-w-3xl mx-auto">
            Stay updated with the latest developments in sustainable aviation and environmental conservation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentNews.map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <time className="text-sm text-olive-900 mb-2 block">
                  {formatDate(item.date)}
                </time>
                <h3 className="text-xl font-semibold text-olive-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-olive-900 mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-olive-900 hover:text-olive-800 font-medium group"
                >
                  Read more 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1
                  ? 'text-olive-400 cursor-not-allowed'
                  : 'text-olive-900 hover:bg-olive-100'
              }`}
            >
              <ArrowLeftCircle className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-full ${
                    currentPage === page
                      ? 'bg-olive-900 text-white'
                      : 'text-olive-900 hover:bg-olive-100'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages
                  ? 'text-olive-400 cursor-not-allowed'
                  : 'text-olive-900 hover:bg-olive-100'
              }`}
            >
              <ArrowRightCircle className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;