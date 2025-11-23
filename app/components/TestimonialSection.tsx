'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
    avatar: "/avatar1.jpg"
  },
  {
    id: 2,
    quote: "boostim transformed our digital presence with their exceptional digital marketing and SEO expertise. The team's attention to detail and innovative approach resulted in campaigns that exceeded our expectations.",
    author: "Sarah Chen",
    role: "Product Manager at TechCorp",
    avatar: "/avatar2.jpg"
  },
  {
    id: 3,
    quote: "Working with boostim was a game-changer for our business. Their digital marketing strategies and data-driven approach helped us reach more customers and increase our online visibility significantly.",
    author: "David Rodriguez",
    role: "Founder of StartupX",
    avatar: "/avatar3.jpg"
  },
  {
    id: 4,
    quote: "The marketing campaigns boostim created for us perfectly captured our brand voice and resonated with our audience. Their strategic thinking combined with creative execution created campaigns that drove real results.",
    author: "Emily Johnson",
    role: "Marketing Director at BrandCo",
    avatar: "/avatar4.jpg"
  },
  {
    id: 5,
    quote: "boostim delivered world-class digital marketing services that have revolutionized how we reach our customers. Their expertise in SEO and digital advertising made the entire process smooth and results-driven.",
    author: "James Wilson",
    role: "CTO of CloudSolutions",
    avatar: "/avatar5.jpg"
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-bl-full -z-0 opacity-50"></div>
          <div className="relative z-10">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-black leading-relaxed mb-8">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author & Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00C569] to-green-600 flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-black font-semibold text-lg">{currentTestimonial.author}</p>
                  <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors group"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-black font-medium min-w-[60px] text-center">
                  {String(currentIndex + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors group"
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

