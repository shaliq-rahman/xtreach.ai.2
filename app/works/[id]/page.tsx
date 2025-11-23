import Link from 'next/link';
import { notFound } from 'next/navigation';

const projectData: { [key: number]: any } = {
  1: {
    id: 1,
    title: 'AI Wave - AI Chatbot Mobile App',
    company: 'AI Corporation',
    year: '2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'from-purple-500 to-pink-500',
    overview: 'AI Wave is a cutting-edge AI chatbot mobile application designed to provide intelligent conversation experiences. The app combines advanced natural language processing with an intuitive, user-friendly interface.',
    challenge: 'The client needed a mobile app that could handle complex AI interactions while maintaining a clean, accessible user experience. The challenge was balancing powerful functionality with simplicity.',
    solution: 'We developed a comprehensive mobile app using React Native with a custom-designed UI that emphasizes clarity and ease of use. The app features real-time AI responses, conversation history, and personalized user experiences.',
    results: [
      'Increased user engagement by 340%',
      'Achieved 4.8-star rating on app stores',
      'Reached 50,000+ downloads in first month',
      'Reduced support tickets by 60%'
    ],
    technologies: ['React Native', 'TypeScript', 'OpenAI API', 'Firebase', 'Figma'],
    features: [
      'Real-time AI conversation',
      'Conversation history',
      'Multi-language support',
      'Dark mode',
      'Customizable AI personality'
    ]
  },
  2: {
    id: 2,
    title: 'E-Commerce Platform',
    company: 'TechCommerce',
    year: '2023',
    category: 'Website',
    type: 'Digital Marketing',
    color: 'from-blue-500 to-cyan-500',
    overview: 'A comprehensive e-commerce platform designed to provide seamless shopping experiences across all devices. Built with modern web technologies and optimized for performance and conversions.',
    challenge: 'Creating a scalable e-commerce solution that handles high traffic while maintaining fast load times and excellent user experience.',
    solution: 'We built a custom e-commerce platform using Next.js with server-side rendering, integrated payment processing, and comprehensive analytics to track user behavior and optimize conversions.',
    results: [
      'Increased conversion rate by 280%',
      'Reduced page load time by 65%',
      'Boosted mobile sales by 420%',
      'Achieved 99.9% uptime'
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Vercel'],
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Order tracking',
      'Customer accounts'
    ]
  },
  3: {
    id: 3,
    title: 'Freelance Network App',
    company: 'Lancer Corporation',
    year: '2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'from-green-500 to-teal-500',
    overview: 'A mobile application connecting freelancers with clients, enabling seamless project management, communication, and payment processing all in one platform.',
    challenge: 'Designing a platform that serves both freelancers and clients with different needs while maintaining a cohesive user experience.',
    solution: 'We created a dual-interface mobile app with role-based views, integrated messaging, project management tools, and secure payment processing.',
    results: [
      'Connected 25,000+ freelancers',
      'Processed $2M+ in transactions',
      'Achieved 4.9-star rating',
      '95% user retention rate'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
    features: [
      'Profile management',
      'Project matching',
      'In-app messaging',
      'Payment processing',
      'Portfolio showcase'
    ]
  }
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = projectData[projectId];

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${project.color} py-20 px-6`}>
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/works"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
              {project.type}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-white/90">
            {project.company}, {project.year}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {project.overview}
          </p>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-black mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="bg-[#00C569]/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-black mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-black mb-8">Key Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#00C569] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies & Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C569]"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-900 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Let's discuss how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00C569] text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

