import React from 'react';
import { ChevronRight, Clock, User } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Impact of Urban Forests on Climate Change",
    excerpt: "Discover how urban forests are becoming crucial in fighting climate change and improving city life.",
    author: "Dr. Sarah Kimani",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
    category: "Climate Action"
  },
  {
    title: "Community-Led Conservation Success Stories",
    excerpt: "How local communities are leading the charge in environmental conservation across Kenya.",
    author: "James Omondi",
    date: "March 8, 2024",
    image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80",
    category: "Community"
  },
  {
    title: "Sustainable Practices in Corporate Tree Planting",
    excerpt: "Best practices for corporations engaging in large-scale tree planting initiatives.",
    author: "Lucy Wanjiru",
    date: "March 5, 2024",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
    category: "Corporate"
  }
];

export function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="section-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Insights and stories from our environmental journey and impact.
            </p>
          </div>
          <button className="text-primary-600 hover:text-primary-700 flex items-center text-lg font-medium">
            View All Posts <ChevronRight className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.title} className="section-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover-card border border-gray-100">
      <div className="relative h-56">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-primary-500" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-primary-500" />
            {post.date}
          </div>
        </div>
      </div>
    </article>
  );
}