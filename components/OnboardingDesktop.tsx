// components/OnboardingDesktop.tsx
'use client';
import { useState, useEffect } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const OnboardingDesktop: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const totalSlides = 4;

  const slides = [
    {
      icon: '🎯',
      title: 'Welcome to Qikr Desktop',
      description: 'Your powerful B-C platform with advanced features for productivity.',
    },
    {
      icon: '🖱️',
      title: 'Desktop Optimized', 
      description: 'Use keyboard shortcuts and right-click menus for faster workflow.',
    },
    {
      icon: '💼',
      title: 'B-B Features',
      description: 'Access advanced business features alongside core B-C functionality.',
    },
    {
      icon: '🚀',
      title: 'Ready to Work',
      description: 'Start being productive with our comprehensive desktop experience.',
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
    <div className={`fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-8 z-50 transition-opacity duration-500 ease-in-out ${
      isExiting ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl h-[700px] overflow-hidden relative flex flex-col">
        {/* Header with skip button */}
        <div className="absolute top-6 right-8 z-10">
          <button 
            onClick={handleSkip}
            className="bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-white shadow-sm"
          >
            Skip Tour
          </button>
        </div>

        {/* Slides Container */}
        <div 
          className="flex w-full h-full transition-transform duration-500 ease-in-out flex-1 relative z-0"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center text-white text-5xl mb-8">
                {slide.icon}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {slide.title}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                {slide.description}
              </p>

              {/* Action Button */}
              <button 
                onClick={nextSlide}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                {index === totalSlides - 1 ? 'Launch App' : 'Continue'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navigation with Centered Dots */}
        <div className="border-t border-gray-200 py-6 px-8 relative z-0">
          <div className="flex justify-between items-center">
            {/* Previous Button - Bigger Icon */}
            <button 
              onClick={prevSlide}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
                currentSlide > 0 
                  ? 'text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={currentSlide === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Centered Progress Dots */}
            <div className="flex gap-3">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    dotIndex === currentSlide 
                      ? 'bg-indigo-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button - Bigger Icon */}
            <button 
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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