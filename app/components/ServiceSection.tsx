export default function ServiceSection() {
  return (
    <section id="services" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Provide the best service with out of the box ideas
            </h2>
            
            {/* Stats Card */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">920+</span>
              </div>
              <p className="text-gray-400 text-lg mb-6">Project finish with superbly</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white -ml-3"></div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white -ml-3"></div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white -ml-3"></div>
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white -ml-3 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
            </p>

            {/* How We Work Card */}
            <div className="bg-gray-100 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-bold text-black mb-6">HOW WE WORK</h3>
              <div className="relative">
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Team Collaboration</p>
                  </div>
                </div>
                {/* Green Play Button Overlay */}
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#00C569] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

