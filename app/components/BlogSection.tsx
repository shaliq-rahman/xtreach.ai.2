import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "How a Digital Marketing Agency Can Boost Your Business",
    readTime: "5 min read",
    color: "bg-[#00C569]",
    category: "Digital Marketing"
  },
  {
    id: 2,
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    readTime: "5 min read",
    color: "bg-orange-500",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    readTime: "5 min read",
    color: "bg-purple-500",
    category: "Business"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              We are the top digital marketing agency for branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.
            </p>
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors group"
            >
              See more
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${post.color}`}></div>
                  <span className="text-sm text-gray-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-black leading-tight group-hover:text-[#00C569] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">{post.category}</p>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:bg-[#00C569] transition-colors group"
                  aria-label={`Read ${post.title}`}
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

