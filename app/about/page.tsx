import Link from 'next/link';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    avatar: 'SC',
    description: '10+ years of experience in UI/UX design'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead Developer',
    avatar: 'MR',
    description: 'Expert in mobile app development'
  },
  {
    name: 'Emily Johnson',
    role: 'Product Designer',
    avatar: 'EJ',
    description: 'Specialist in brand identity and design systems'
  },
  {
    name: 'David Kim',
    role: 'Technical Lead',
    avatar: 'DK',
    description: 'Full-stack developer and architect'
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Xtreach
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a passionate team of digital experts dedicated to helping businesses succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with cutting-edge digital solutions that drive growth, engagement, and success. We believe in the power of exceptional design and innovative technology to transform ideas into reality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to create digital experiences that not only look beautiful but also deliver measurable results. We combine creativity with technical expertise to build products that users love.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00C569] mb-2">920+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00C569] mb-2">230+</div>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00C569] mb-2">50+</div>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#00C569] mb-2">10+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Xtreach was founded in 2013 with a simple vision: to bridge the gap between innovative technology and exceptional design. What started as a small team of passionate developers and designers has grown into a leading digital agency trusted by businesses worldwide.
            </p>
            <p>
              Over the years, we've helped hundreds of companies transform their digital presence through mobile app development, website design, UI/UX expertise, and comprehensive branding solutions. Our commitment to quality, innovation, and client success has been the cornerstone of our growth.
            </p>
            <p>
              Today, we continue to push the boundaries of what's possible in digital product development. We stay at the forefront of industry trends, continuously learning and adapting to deliver solutions that exceed expectations and drive measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Meet the talented individuals who bring creativity, expertise, and passion to every project.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00C569] to-green-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-[#00C569] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-[#00C569] flex items-center justify-center text-white text-2xl font-bold mb-6">
                01
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Discovery</h3>
              <p className="text-gray-400 leading-relaxed">
                We start by understanding your business, goals, and target audience through comprehensive research and consultation.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-[#00C569] flex items-center justify-center text-white text-2xl font-bold mb-6">
                02
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Design & Develop</h3>
              <p className="text-gray-400 leading-relaxed">
                We create intuitive designs and build robust solutions using cutting-edge technologies and best practices.
              </p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-[#00C569] flex items-center justify-center text-white text-2xl font-bold mb-6">
                03
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Launch & Support</h3>
              <p className="text-gray-400 leading-relaxed">
                We deploy your product with comprehensive testing and provide ongoing support to ensure continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to work with us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

