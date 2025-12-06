import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export function BlogPage() {
  const featuredPost = {
    image:
      "https://images.unsplash.com/photo-1512178295672-8e697a3412f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFrZXVwfGVufDF8fHx8MTc2NDU5MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "The Ultimate Guide to Winter Skincare Routine",
    excerpt:
      "Discover the essential steps and products you need to keep your skin hydrated, healthy, and glowing throughout the cold winter months.",
    author: "Sarah Chen",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "Skincare",
  };

  const blogPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1599847987657-881f11b92a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzY0NTg3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "10 Makeup Trends to Try This Season",
      excerpt:
        "From bold lips to natural glows, explore the hottest makeup trends that are taking over this season.",
      author: "Emma Rodriguez",
      date: "Nov 25, 2024",
      readTime: "5 min read",
      category: "Makeup",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0dXRvcmlhbHxlbnwxfHx8fDE3NjQ1MDk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "How to Choose the Perfect Foundation Shade",
      excerpt:
        "Finding the right foundation can be tricky. Here's our expert guide to matching your skin tone perfectly.",
      author: "Michael Anderson",
      date: "Nov 22, 2024",
      readTime: "6 min read",
      category: "Tutorial",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1764333746618-6285bf70db23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjB0aXBzfGVufDF8fHx8MTc2NDU5MDg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "The Benefits of Natural Ingredients in Skincare",
      excerpt:
        "Learn why switching to natural skincare products can transform your skin and overall wellness.",
      author: "Dr. Sarah Chen",
      date: "Nov 20, 2024",
      readTime: "7 min read",
      category: "Skincare",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1512178295672-8e697a3412f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFrZXVwfGVufDF8fHx8MTc2NDU5MDg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Evening Skincare Routine: A Step-by-Step Guide",
      excerpt:
        "Maximize your beauty sleep with our comprehensive evening skincare routine for all skin types.",
      author: "Emma Rodriguez",
      date: "Nov 18, 2024",
      readTime: "9 min read",
      category: "Skincare",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1599847987657-881f11b92a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzY0NTg3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Bold Lip Colors for Every Skin Tone",
      excerpt:
        "Find your perfect bold lip shade with our comprehensive guide to lipstick colors for different skin tones.",
      author: "Michael Anderson",
      date: "Nov 15, 2024",
      readTime: "4 min read",
      category: "Makeup",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1585049303349-6680e6179692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjB0dXRvcmlhbHxlbnwxfHx8fDE3NjQ1MDk3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Understanding Skincare Ingredients",
      excerpt:
        "Decode your product labels and learn which ingredients your skin truly needs for optimal health.",
      author: "Dr. Sarah Chen",
      date: "Nov 12, 2024",
      readTime: "10 min read",
      category: "Skincare",
    },
  ];

  const categories = [
    "All",
    "Skincare",
    "Makeup",
    "Tutorial",
    "Tips & Tricks",
    "Product Reviews",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-rose-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl mb-4">Beauty Blog</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Tips, tutorials, and expert advice to help you look and feel your
            best
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 overflow-hidden">
            <div className="h-full">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="bg-rose-600 text-white px-4 py-1 text-sm mb-4 inline-block">
                Featured
              </span>
              <h2 className="text-4xl mb-4">{featuredPost.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 inline-flex items-center gap-2 transition-colors">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 border border-gray-300 hover:border-rose-600 hover:text-rose-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-sm text-rose-600 mb-2 inline-block">
                {post.category}
              </span>
              <h3 className="text-xl mb-3 group-hover:text-rose-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
              <div className="mt-4">
                <button className="text-rose-600 hover:underline inline-flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 border border-gray-300 hover:border-rose-600 hover:text-rose-600 transition-colors">
            Previous
          </button>
          <button className="px-4 py-2 bg-rose-600 text-white">1</button>
          <button className="px-4 py-2 border border-gray-300 hover:border-rose-600 hover:text-rose-600 transition-colors">
            2
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:border-rose-600 hover:text-rose-600 transition-colors">
            3
          </button>
          <button className="px-4 py-2 border border-gray-300 hover:border-rose-600 hover:text-rose-600 transition-colors">
            Next
          </button>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Never Miss a Post</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest beauty tips,
            tutorials, and product updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-gray-300 focus:outline-none focus:border-rose-600"
            />
            <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
