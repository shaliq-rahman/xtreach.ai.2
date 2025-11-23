'use client';

import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'App Lancer - Freelance N',
    company: 'Lancer Corporation, 2023',
    category: 'Mobile App',
    image: '/project1.jpg',
    color: 'bg-white',
    isWhite: true,
    content: { main: "Let's F", sub: "Oppr", button: "See Details", stat: "3.2k" }
  },
  {
    id: 2,
    title: 'Ai Wave - AI Chatbot Mobile App',
    company: 'AI Corporation, 2023',
    category: 'Mobile App',
    image: '/project2.jpg',
    color: 'bg-gray-800',
    isWhite: false,
    content: { question: "What is digital abstract image and find 3 example" }
  },
  {
    id: 3,
    title: 'App Lancer - Freelance N',
    company: 'Lancer Corporation, 2023',
    category: 'Mobile App',
    image: '/project3.jpg',
    color: 'bg-gray-800',
    isWhite: false,
    content: { amount: "$8,435.00", rating: "4.9" }
  },
];

const categories = ['All Work', 'UU/UX Design', 'Digital Marketing', 'Branding'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('UU/UX Design');

  const getFilteredProjects = () => {
    if (activeCategory === 'All Work') {
      return projects;
    } else if (activeCategory === 'UU/UX Design') {
      return projects;
    } else if (activeCategory === 'Digital Marketing') {
      return [];
    } else if (activeCategory === 'Branding') {
      return [];
    }
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Real-world examples of how we have helped companies achieve their marketing objectives.
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            let count = 0;
            if (category === 'All Work') {
              count = 20;
            } else if (category === 'UU/UX Design') {
              count = 10;
            } else if (category === 'Digital Marketing') {
              count = 5;
            } else if (category === 'Branding') {
              count = 5;
            }

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${activeCategory === category
                    ? 'bg-transparent border-2 border-[#00C569] text-[#00C569]'
                    : 'bg-gray-800 text-gray-400 border-2 border-transparent hover:text-white'
                  }`}
              >
                {category} [{count}]
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02] border border-gray-700/50">
                {/* Phone Mockup */}
                <div className="relative p-8 bg-gray-700">
                  <div className="mx-auto w-48 h-96 bg-black rounded-[2.5rem] p-2 shadow-2xl">
                    <div className={`w-full h-full rounded-[2rem] ${project.color} flex items-center justify-center p-6`}>
                      {project.isWhite ? (
                        <div className="text-center w-full space-y-4">
                          <div className="text-left space-y-2">
                            <div className="text-2xl font-bold text-black">Let's F</div>
                            <div className="text-xl font-semibold text-black">Oppr</div>
                          </div>
                          <div className="pt-4">
                            <button className="w-full bg-[#00C569] text-white py-3 rounded-lg font-semibold">See Details</button>
                          </div>
                          <div className="text-3xl font-bold text-black pt-4">3.2k</div>
                        </div>
                      ) : project.content?.question ? (
                        <div className="text-center w-full space-y-4">
                          <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto"></div>
                          <div className="text-sm text-gray-300 px-4">{project.content.question}</div>
                        </div>
                      ) : (
                        <div className="text-center w-full space-y-4">
                          <div className="text-3xl font-bold text-white">{project.content?.amount}</div>
                          <div className="text-xl text-gray-300">Rating: {project.content?.rating}</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 bg-gray-800">
                  <p className="text-gray-400 text-sm mb-1">{project.company}</p>
                  <h3 className="text-white text-xl font-semibold group-hover:text-[#00C569] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

