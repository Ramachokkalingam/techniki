import React from 'react';

interface HeroProps {
  title: string;
  titleGradient?: string;
  subtitle: string;
  description: string;
  primaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
}

export default function Hero({
  title,
  titleGradient,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            {titleGradient ? (
              <>
                {title.split(titleGradient)[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  {titleGradient}
                </span>
                {title.split(titleGradient)[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {description}
          </p>
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className="hero-btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  {primaryButton.icon && <i className={`fas fa-${primaryButton.icon} mr-2`}></i>}
                  {primaryButton.text}
                </a>
              )}
              {secondaryButton && (
                <a
                  href={secondaryButton.href}
                  className="hero-btn bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-blue-400 hover:text-white"
                >
                  {secondaryButton.icon && (
                    <i className={`fas fa-${secondaryButton.icon} mr-2`}></i>
                  )}
                  {secondaryButton.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
