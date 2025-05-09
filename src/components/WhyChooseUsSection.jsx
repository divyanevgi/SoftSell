import React from 'react';
import { ShieldCheck, TrendingUp, Clock, DollarSign } from 'lucide-react';
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

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Maximum Value",
      description: "We leverage our industry connections and market expertise to secure the highest possible value for your software licenses."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      title: "Secure Transactions",
      description: "Our secure process ensures your company information and license details are protected throughout the entire transaction."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment typically within 3 business days after accepting an offer."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      title: "No Hidden Fees",
      description: "Our pricing is transparent with no hidden fees or charges. The offer you accept is the amount you receive."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've helped hundreds of companies recover value from their unused software investments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
