'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing provides direct access to your customers, improves brand visibility, and offers measurable results. It helps you reach a wider audience, generate leads, and increase customer engagement. With digital-first strategies becoming essential, having a well-executed marketing campaign can significantly boost your business growth and provide measurable results through analytics and customer feedback."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "Digital marketing strategies like SEO, content marketing, and social media marketing can significantly improve your website's visibility in search engines and across digital platforms. By optimizing your content, building quality backlinks, and engaging with your audience on social media, we help your website rank higher and attract more organic traffic."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline varies depending on the strategies implemented and your industry. SEO efforts typically show results in 3-6 months, while paid advertising can show immediate results. Content marketing and social media campaigns usually start showing engagement within 1-2 months. We provide detailed timelines during our strategy phase and keep you updated with regular performance reports."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We measure success through multiple key performance indicators (KPIs) including website traffic, conversion rates, lead generation, engagement rates, return on investment (ROI), and business-specific goals like revenue or customer acquisition. We provide comprehensive analytics dashboards and regular reports to track performance and make data-driven improvements to ensure your campaigns meet their objectives."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Digital Marketing FAQs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 border-2 border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
                More Questions
              </button>
              <button className="px-8 py-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-black pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-600 transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

