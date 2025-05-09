import React from 'react';
import { Upload, DollarSign, Clock, CreditCard } from 'lucide-react';
import PropTypes from 'prop-types';

const Benefit = ({ icon, title, description }) => (
  <div className="flex flex-col items-start p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

Benefit.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Upload License",
      description: "Submit your unused or excess software license details through our secure portal.",
      icon: <Upload className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    },
    {
      id: 2,
      title: "Get Valuation",
      description: "Our experts analyze your licenses and provide a market-competitive valuation within 24 hours.",
      icon: <DollarSign className="w-8 h-8 text-teal-600 dark:text-teal-400" />
    },
    {
      id: 3,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment typically within 3 business days after accepting an offer.",
      icon: <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
    },
    {
      id: 4,
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method, usually within 3 business days.",
      icon: <CreditCard className="w-8 h-8 text-teal-600 dark:text-teal-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes it easy to turn your unused software licenses into cash.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <Benefit
              key={step.id}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
