// components/OnboardingDesktop.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OnboardingProps {
  onComplete: () => void;
}

const italicWords = ['do'];

const OnboardingDesktop: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const totalSlides = 4;

  const slides = [
    {
      image: '/people.png',
      title: 'So how do you progress faster?',
      description: 'When it\'s harder for organisations to promote, flatter structures mean fewer leadership roles, and hybrid working reduces the opportunities for networking and visibility.',
    },
    {
      image: '/headwinds.png',
      title: 'Given these headwinds', 
      description: 'AI devaluing knowledge by the second, benign neglect the best you\’ll get from your overstretched manager, and \'moving on to move up\' nigh-on impossible in this market.',
    },
    {
      image: '/knowhow.png',
      title: 'Develop and demonstate know-how',
      description: 'Reading situations astutely, making the right calls on the \'how\' and the \'why\' (as well as the \'what\'), enabling powerful teamwork. How do you develop it? How do you demonstrate it?'
    },
    {
      image: '/platform.png',
      title: 'Build your know-how daily',
      description: '2000+ scenarios covering all facets of high-stakes professional work. Mobile-first. Pick-up-and-put-down. Self-paced with \'how am I doing\' cohort comparators. Hone it today. Apply it tomorrow.',
    }
  ];

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      localStorage.setItem('onboardingCompleted', 'true');
      onComplete();
    }, 500);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleComplete();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        handleComplete();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out ${
      isExiting ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="bg-white rounded-[8px] w-full max-w-xl h-[650px] overflow-hidden ">
        
        {/* 
        <div className="absolute top-6 right-8 z-10">
          <button 
            onClick={handleSkip}
            className="bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-white shadow-sm"
          >
            Skip Tour
          </button>
        </div>
        */}

        {/* Slides Container */}
        <div 
          className="flex w-full transition-transform duration-500 ease-in-out z-0"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center pt-8 px-4 text-center">
              {/* Image Container - 4:1 aspect ratio, ~100px height */}
              <div className="w-full max-w-lg h-[220px] mb-6 rounded-[8px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 448px"
                    priority={index === 0}
                  />
                </div>
              </div>

              
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className={italicWords.includes(word.toLowerCase()) ? 'italic' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 px-16">
                {slide.description.split(' ').map((word, i) => (
                  <span key={i} className={italicWords.includes(word.toLowerCase()) ? 'italic' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={nextSlide}
                className="bg-lilac-400 text-gray-800 px-6 py-3 mb-6 rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {index === totalSlides - 1 ? 'Launch app' : 'Continue'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navigation with Centered Dots */}
        <div className="border-t border-gray-200 py-4 px-8 mt-auto relative z-0">
          <div className="flex justify-between items-center">

            {/* Previous Button - No ring, no hover */}
            <button 
              onClick={prevSlide}
              className={`flex items-center justify-center w-16 h-16 rounded-full ${
                currentSlide > 0 
                  ? 'text-lilac-600' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={currentSlide === 0}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Centered Progress Dots - Smaller and Tighter */}
            <div className="flex gap-1.5">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === currentSlide 
                      ? 'bg-lilac-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button - No ring, no hover */}
            <button 
              onClick={nextSlide}
              className="flex items-center justify-center w-16 h-16 rounded-full text-lilac-600"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default OnboardingDesktop;