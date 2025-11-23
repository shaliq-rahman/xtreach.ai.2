import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side - Headline & Buttons */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.1] tracking-tight">
                Stay ahead of the curve with our forward-thinking
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                An award-winning SEO agency with disciplines in digital marketing, design, and website development, focused on understanding you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors group shadow-md"
              >
                Schedule Call
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/works"
                className="text-black underline font-medium hover:text-gray-700 transition-colors pt-2"
              >
                View Case Study
              </Link>
            </div>
            <div className="pt-6">
              <p className="text-xs text-gray-500 mb-4 font-medium">Trusted by the world's biggest brands</p>
              <div className="flex items-center gap-8">
                <span className="text-gray-400 font-semibold text-sm">afterpay</span>
                <span className="text-gray-400 font-semibold text-sm">Basecamp</span>
                <span className="text-gray-400 font-semibold text-sm">maze</span>
              </div>
            </div>
          </div>

          {/* Right Side - Images & Stats */}
          <div className="relative space-y-6">
            {/* Top Row: Laptop Image and Stats Card */}
            <div className="grid grid-cols-2 gap-6">
              {/* Main Image - Left with curved right edge */}
              <div className="relative">
                {/* Circular Icon - Above laptop, positioned to the right */}
                <div className="absolute -top-5 right-6 z-20 w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-[#A5F36B] rounded flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl" style={{ borderRadius: '1rem 0 0 1rem' }}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-80 flex items-center justify-center relative pt-8 shadow-lg" style={{ borderRadius: '1rem 0 0 1rem' }}>
                    {/* Laptop representation */}
                    <div className="w-56 h-36 bg-gray-200 rounded-lg shadow-xl relative z-10">
                      <div className="absolute inset-2 bg-white rounded flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded"></div>
                      </div>
                    </div>
                    {/* Headphones representation */}
                    <div className="absolute bottom-12 left-6 w-14 h-14 bg-gray-300 rounded-full border-4 border-white shadow-md"></div>
                    {/* Curved shape on right */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gray-50" style={{ clipPath: 'ellipse(100% 50% at 0% 50%)' }}></div>
                  </div>
                </div>
              </div>

              {/* Stats Card - Right, same height */}
              <div className="h-80">
                <div className="bg-white rounded-xl p-7 shadow-lg h-full flex flex-col justify-between border border-gray-100">
                  <div>
                    <div className="mb-4">
                      <span className="text-6xl font-bold text-black tracking-tight">230+</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">some big companies that we work with, and trust us very much</p>
                  </div>
                  <div className="w-full bg-black rounded-full h-1.5 mt-4">
                    <div className="bg-[#A5F36B] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bar Chart Card - Below, full width with gradient */}
            <div className="bg-gradient-to-r from-black via-gray-800 to-gray-200 rounded-xl p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex-1 pr-4">
                  <div className="w-12 h-0.5 bg-white mb-4"></div>
                  <p className="text-white text-sm font-medium mb-2.5 opacity-95">Drive More Traffic and Sales</p>
                  <h3 className="text-white text-2xl font-bold leading-tight">Drive more traffic and product sales</h3>
                </div>
                <div className="flex items-end gap-2.5 ml-6">
                  <div className="w-3.5 bg-[#A5F36B] rounded-t shadow-sm" style={{ height: '28px' }}></div>
                  <div className="w-3.5 bg-[#A5F36B] rounded-t shadow-sm" style={{ height: '44px' }}></div>
                  <div className="w-3.5 bg-[#A5F36B] rounded-t shadow-sm" style={{ height: '60px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

