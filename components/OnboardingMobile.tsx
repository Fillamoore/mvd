// components/OnboardingMobile.tsx
'use client';
import { useState } from 'react';

interface OnboardingProps {
  onComplete: () => void;
}

const OnboardingMobile: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);

  const totalSlides = 4;

  const slides = [
    {
      icon: '👋',
      title: 'Welcome to Qikr',
      description: 'Swipe through to learn how to get started with our app.',
    },
    {
      icon: '⚡',
      title: 'Quick Actions', 
      description: 'Tap to access features quickly. Everything is optimized for touch.',
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Designed specifically for your iPhone experience.',
    },
    {
      icon: '🚀',
      title: "Let's Go!",
      description: 'You\'re ready to start using Qikr on your mobile device.',
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
    localStorage.setItem('onboardingCompleted', 'true');
    onComplete();
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    setStartX(touchStartX);
    
    const handleTouchEnd = (e: React.TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      const swipeThreshold = 50;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    e.currentTarget.addEventListener('touchend', handleTouchEnd as any, { once: true });
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm h-[80vh] overflow-hidden relative">
        {/* Slides Container */}
        <div 
          className="flex w-full h-full transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                {slide.icon}
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {slide.title}
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {slide.description}
              </p>

              {/* Progress Dots */}
              <div className="flex gap-2 mb-6">
                {slides.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      dotIndex === currentSlide ? 'bg-purple-500 scale-125' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={nextSlide}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold text-base w-full max-w-[200px]"
              >
                {index === totalSlides - 1 ? 'Get Started' : 'Continue'}
              </button>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <button 
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
          >
            Skip
          </button>
          
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="text-purple-600 hover:text-purple-700 px-3 py-2 text-sm font-medium"
            >
              Back
            </button>
          )}
        </div>

        {/* Swipe Hint */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center">
          <div className="text-gray-400 text-xs animate-pulse">
            Swipe to navigate
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingMobile;