import React from 'react';
import ScrollCue from '@/components/layout/ScrollCue';

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
    <section className="relative flex min-h-screen items-center justify-center pb-32 pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mb-6 text-6xl font-bold leading-tight text-white md:text-8xl">
            {titleGradient ? (
              <>
                {title.split(titleGradient)[0]}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {titleGradient}
                </span>
                {title.split(titleGradient)[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl">{subtitle}</p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-400">{description}</p>
          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryButton && (
                <a
                  href={primaryButton.href}
                  className="hero-btn rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-lg text-white shadow-[0_14px_34px_-12px_rgba(99,102,241,0.9),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 hover:brightness-110 active:scale-[0.97]"
                >
                  {primaryButton.icon && <i className={`fas fa-${primaryButton.icon} mr-2`}></i>}
                  {primaryButton.text}
                </a>
              )}
              {secondaryButton && (
                /* glass-pill supplies the real backdrop blur + rim light, so the
                   aurora and particles behind this button are visibly frosted. */
                <a
                  href={secondaryButton.href}
                  className="hero-btn glass-pill rounded-full px-8 py-4 text-lg text-white hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  {secondaryButton.icon && (
                    <i className={`fas fa-${secondaryButton.icon} mr-2 text-cyan-300`}></i>
                  )}
                  {secondaryButton.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
