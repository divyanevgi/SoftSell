import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-teal-50/50 dark:from-indigo-950/30 dark:to-teal-950/30 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-teal-500/20 dark:bg-teal-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight gradient-text">
            Unlock the Value in Your Unused Software Licenses
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Turn idle software assets into immediate revenue. Fast valuations, transparent process, secure transactions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={scrollToContact} 
              variant="primary" 
              size="large" 
              className="group"
            >
              Sell My Licenses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="large">
              Get a Free Valuation
            </Button>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-16 md:mt-24">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-6 uppercase text-sm font-medium tracking-wider">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Adobe', 'Microsoft', 'Salesforce', 'Oracle', 'SAP'].map((company) => (
              <div key={company} className="text-gray-400 dark:text-gray-500 font-semibold text-lg md:text-xl">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;