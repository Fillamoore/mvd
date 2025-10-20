// components/OnboardingMobile.tsx
'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OnboardingProps {
  onComplete: () => void;
}

const italicWords = ['do'];

const OnboardingMobile: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const startXRef = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const totalSlides = 9;

  const slides = [
    {
      image: '/people.webp',
      title: 'How do you progress faster?',
      description:
        "When it's harder for organisations to promote, flatter structures mean fewer senior roles, and hybrid working is reducing the opportunities for networking, visibility and water-cooler moments.",
    },
    {
      image: '/headwinds.webp',
      title: 'Given these headwinds',
      description:
        "With AI devaluing your knowledge by the second, benign neglect the best you'll get from your overstretched manager, and 'moving on to move up' nigh-on impossible in these market conditions.",
    },
    {
      image: '/knowhow.webp',
      title: 'Develop know-how',
      description:
        "It's know-how that gets you noticed: reading situations astutely, making the right calls on the 'how' and the 'why' (as well as the 'what'), enabling powerful teamwork. So how do you develop it?",
    },
    {
      image: '/platform.webp',
      title: "Inch by inch",
      description:
        "Imagine if you could practice day by day with real-life scenarios drawn from high-stakes professional work. You could be honing your know-how today. And showing up with it at work tomorrow.",
    },
    {
      image: '/qikr-app-mobile.webp',
      title: 'With qikr...',
      description:
        "The qikr app gives you 2000+ high-stakes scenarios to practice on. It's easy to dip in and out of, so you can use it in your spare moments. The Matrix charts your progress across areas of know-how over time.",
    },
    {
      image: '/mobile.webp',
      title: 'Work through a scenario',
      description:
        "Each scenario has three responses. Consider each carefully then tap to rank as gold/silver/bronze. Once they're ranked, tap on the 'eye' to reveal what the experts think and see how well you scored.",
    },
    {
      image: '/mobile.webp',
      title: 'Get the \'aha\'',
      description:
        "Review each expert rationale carefully along with your score, the summary and the key takeaway. Here's where the new insights and 'aha' moments may come. '+' moves you on to the next scenario.",
    },
    {
      image: '/mobile.webp',
      title: 'How am I doing?',
      description:
        "The tile in the top right (and the Matrix) shows your running average score. The progress bar shows how far you've gone in the module. You can try it for free for 10 days. Ready to give it a go?",
    },
    {
      image: '/mobile.webp',
      title: 'Select a module',
      description:
        "On desktop, top left is the Matrix. Underneath is the scenario modules list. Click on a tile or a list item to switch modules whenever you feel like a change. No need to work through sequentially.",
    }
  ];

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image(); // Use window.Image instead of Image
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Continue even if some images fail to load
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

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

  const handleSkip = () => {
    handleComplete();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    
    const currentX = e.touches[0].clientX;
    const diff = startXRef.current - currentX;
    
    // Optional: Add visual feedback during swipe
    // You can implement this if you want swipe animations
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;
    const swipeThreshold = 50;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsSwiping(false);
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-start z-50 transition-opacity duration-500 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Loading overlay - only shows briefly while images preload */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-white">Loading...</div>
        </div>
      )}
      
      <div className={`bg-white rounded-[8px] w-full max-w-[380px] h-[635px] overflow-hidden transition-opacity duration-300 ${
        !imagesLoaded ? 'opacity-0' : 'opacity-100'
      }`}>
        <div
          className="flex w-full transition-transform duration-500 ease-in-out z-0 transform-gpu"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            perspective: '1000px', // Enhanced hardware acceleration
          }}
        >
          {slides.map((slide, index) => {

            const titleMargins = index < 4 ? 'mt-10 mb-10' : 'mt-6 mb-4';
            const textMargins = index < 4 ? 'mt-[-70px] mb-[95px]' : 'mt-[5px] mb-[16px]';

            return (
              <div
                key={index}
                className={`w-full flex-shrink-0 flex flex-col items-center justify-start px-4 text-center`}
              >
                <h2 className={`text-2xl font-bold text-gray-800 ${titleMargins}`}>
                  {slide.title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={italicWords.includes(word.toLowerCase()) ? 'italic' : ''}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </h2>

                  <div className="w-full h-full flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={index < 4 ? 'w-[320px] h-[180px] rounded-[10px]' : 'w-[150px] h-auto mb-3'}
                    />
                  </div>

                <div className={`text-gray-600 text-lg leading-relaxed ${textMargins} px-1`}>
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

export default OnboardingMobile;