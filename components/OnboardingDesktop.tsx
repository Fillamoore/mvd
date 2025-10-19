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

  const totalSlides = 9;

  const slides = [
    {
      image: '/people.png',
      title: 'How do you progress faster?',
      description:
        "When it's harder for organisations to promote, flatter structures mean fewer senior roles, and hybrid working is reducing the opportunities for networking, visibility and water-cooler moments.",
    },
    {
      image: '/headwinds.png',
      title: 'Given these headwinds',
      description:
        "With AI devaluing your knowledge by the second, benign neglect the best you'll get from your overstretched manager, and 'moving on to move up' nigh-on impossible in these market conditions.",
    },
    {
      image: '/knowhow.png',
      title: 'Develop know-how',
      description:
        "It's know-how that gets you noticed: reading the situation astutely, making the right calls on the 'how' and the 'why' (as well as the 'what'), enabling powerful teamwork. So how do you develop it? And then show up with it?",
    },
    {
      image: '/platform.png',
      title: "Inch by inch",
      description:
        "Imagine if you could practice day by day with real-life scenarios drawn from high-stakes professional work. You could be honing your know-how today. And showing up with it at work tomorrow.",
    },
    {
      image: '/qikr-app.png',
      title: 'With qikr...',
      description:
        "The qikr app gives you 2000+ high-stakes scenarios to practice on. It's easy to dip in and out of, so you can use it in your spare moments. The Matrix charts your progress across areas of know-how over time.",
    },
    {
      image: '/desktop.png',
      title: 'Select a module',
      description:
        "On desktop, top left is the Matrix. Underneath is the scenario modules list. Click on a tile or a list item to switch modules whenever you feel like a change. No need to work through them sequentially.",
    },
    {
      image: '/desktop2.png',
      title: 'Work through a scenario',
      description:
        "Each scenario has three responses. Consider each carefully then click to rank as gold/silver/bronze. Once they're ranked, click on the 'eye' to reveal what the experts think and see how well you scored.",
    },
    {
      image: '/desktop3.png',
      title: 'Get the \'aha\'',
      description:
        "Review each expert rationale carefully along with the summary and the key takeaway. Here's where the new insights and 'aha' moments may come. Click '+' to move on to the next scenario.",
    },
    {
      image: '/desktop4.png',
      title: 'See how you did',
      description:
        "Each scenario is scored on completion. The tile in the top right (and the Matrix) shows your running average score. The progress bar shows how far you've got to in this module. Ready to give qikr a go?",
    },
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
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="bg-white rounded-[8px] w-full max-w-[450px] h-[665px] overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out z-0 transform-gpu"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          {slides.map((slide, index) => {
            const buttonText = index < 5 ? 'Continue' : 'Show more';
            const imageWrapperClass = index < 4
              ? 'w-[302px] h-[170px] mb-12 rounded-[8px] overflow-hidden'
              : 'w-[302px] h-[170px] mb-12';

            return (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center pt-8 pb-12 px-4 text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-10">
                  {slide.title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={italicWords.includes(word.toLowerCase()) ? 'italic' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h2>

                <div className={imageWrapperClass}>
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>

                <div className="text-gray-600 text-lg leading-relaxed mb-8 px-8">
                  {slide.description.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={italicWords.includes(word.toLowerCase()) ? 'italic' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

        <div className="border-t border-gray-200 py-2 px-8 relative z-0">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className={`flex items-center justify-center w-16 h-16 transition-none focus:outline-none ${
                currentSlide > 0 ? 'text-lilac-600' : 'text-gray-400 cursor-not-allowed'
              }`}
              disabled={currentSlide === 0}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentSlide(dotIndex)}
                  className={`w-2 h-2 rounded-full transition duration-300 ${
                    dotIndex === currentSlide
                      ? 'bg-lilac-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-16 h-16 text-lilac-600 transition-none focus:outline-none"
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