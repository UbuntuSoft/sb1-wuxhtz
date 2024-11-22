import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  source: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Kenya Launches Ambitious Tree Planting Campaign",
    source: "Environmental News Network",
    date: "March 12, 2024",
    excerpt: "The government announces a nationwide initiative to plant 15 billion trees by 2032.",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Corporate Leaders Join Forces for Green Initiative",
    source: "Business Daily",
    date: "March 11, 2024",
    excerpt: "Major corporations pledge support for national reforestation efforts.",
    image: "https://images.unsplash.com/photo-1507666664345-c49224b2c053?auto=format&fit=crop&q=80",
    link: "#"
  },
  {
    title: "Youth Environmental Programs Show Promise",
    source: "Kenya Times",
    date: "March 9, 2024",
    excerpt: "Student-led environmental programs are making significant impact across counties.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    link: "#"
  }
];

export function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-gray-600 max-w-2xl">
              Stay updated with the latest environmental news and developments.
            </p>
          </div>
          <button className="text-green-600 hover:text-green-700 flex items-center">
            More News <ChevronRight className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="relative h-48">
        <img 
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{item.source}</span>
          <span>{item.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
        <a 
          href={item.link}
          className="inline-flex items-center text-green-600 hover:text-green-700"
        >
          Read Full Story <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
}