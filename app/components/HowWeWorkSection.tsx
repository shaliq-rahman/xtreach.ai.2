export default function HowWeWorkSection() {
  const steps = [
    { number: '01', title: 'Discovery', description: 'Understanding your vision, goals, and target audience through comprehensive research and analysis.' },
    { number: '02', title: 'Design', description: 'Creating intuitive, beautiful user experiences with wireframes, prototypes, and visual designs.' },
    { number: '03', title: 'Development', description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.' },
    { number: '04', title: 'Launch', description: 'Deploying your product with comprehensive testing, optimization, and ongoing support.' },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Workflow Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to launch, we follow a proven methodology that ensures exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow h-full">
                <div className="text-5xl font-bold text-[#00C569] mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00C569] transform -translate-y-1/2">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#00C569] border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

