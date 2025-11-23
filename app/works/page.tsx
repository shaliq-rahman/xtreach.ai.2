import Link from 'next/link';

const projects = [
  { 
    id: 1, 
    title: 'AI Wave - AI Chatbot Mobile App', 
    company: 'AI Corporation, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  { 
    id: 2, 
    title: 'E-Commerce Platform', 
    company: 'TechCommerce, 2023',
    category: 'Website',
    type: 'Digital Marketing',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  { 
    id: 3, 
    title: 'Freelance Network App', 
    company: 'Lancer Corporation, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-green-500 to-teal-500'
  },
  { 
    id: 4, 
    title: 'SaaS Dashboard', 
    company: 'CloudBase, 2023',
    category: 'Dashboard',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  { 
    id: 5, 
    title: 'Brand Identity System', 
    company: 'StartupCo, 2023',
    category: 'Branding',
    type: 'Branding',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  { 
    id: 6, 
    title: 'Fitness Tracking App', 
    company: 'FitLife, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-yellow-500 to-orange-500'
  },
  { 
    id: 7, 
    title: 'Fintech Mobile App', 
    company: 'FinancePro, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-500'
  },
  { 
    id: 8, 
    title: 'Travel Booking Platform', 
    company: 'TravelHub, 2023',
    category: 'Website',
    type: 'Digital Marketing',
    color: 'bg-gradient-to-br from-sky-500 to-blue-500'
  },
  { 
    id: 9, 
    title: 'Healthcare App', 
    company: 'HealthCare Plus, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-rose-500 to-pink-500'
  },
  { 
    id: 10, 
    title: 'Corporate Website', 
    company: 'Enterprise Corp, 2023',
    category: 'Website',
    type: 'Digital Marketing',
    color: 'bg-gradient-to-br from-gray-700 to-gray-900'
  },
  { 
    id: 11, 
    title: 'Food Delivery App', 
    company: 'FoodExpress, 2023',
    category: 'Mobile App',
    type: 'UI/UX Design',
    color: 'bg-gradient-to-br from-amber-500 to-orange-500'
  },
  { 
    id: 12, 
    title: 'Restaurant Branding', 
    company: 'Culinary Co, 2023',
    category: 'Branding',
    type: 'Branding',
    color: 'bg-gradient-to-br from-red-500 to-rose-500'
  },
];

export default function WorksPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto">
            Real-world examples of how we have helped companies achieve their digital objectives through mobile app development, website design, and branding.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/works/${project.id}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 h-full flex flex-col">
                  {/* Project Image/Preview */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    <div className={`absolute inset-0 ${project.color} flex items-center justify-center`}>
                      <div className="text-center space-y-4 p-8">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-white/20 rounded w-32 mx-auto"></div>
                          <div className="h-3 bg-white/20 rounded w-24 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                    {/* Mobile Mockup for mobile apps */}
                    {project.category === 'Mobile App' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-56 bg-black rounded-[2rem] p-2 shadow-2xl">
                          <div className={`w-full h-full rounded-[1.5rem] ${project.color} flex items-center justify-center`}>
                            <div className="text-white text-2xl font-bold">App</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-[#00C569]/10 text-[#00C569] text-xs font-medium rounded-full mb-2">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{project.company}</p>
                    <h3 className="text-xl font-semibold text-black group-hover:text-[#00C569] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-auto">
                      View Case Study →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

