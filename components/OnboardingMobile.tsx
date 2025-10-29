// components/FirstOnboardingMobile.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { createUser } from '@/app/actions/createUser';
import { useLocalStore } from '@/store/useLocalStore';

interface OnboardingProps {
  onComplete: () => void;
}

const italicWords = ['do'];

const OnboardingMobile: React.FC<OnboardingProps> = ({ onComplete }) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [email, setEmail] = useState('');
  const startXRef = useRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isOnline = useLocalStore((state) => state.isOnline);
  const setEmailInStore = useLocalStore((state) => state.setEmail);

  const emailRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);  

  const totalSlides = 10;

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
        "Imagine if you could practice day by day with real-life scenarios drawn from high-stakes professional work? You could be honing your know-how today. And putting ti into practice at work tomorrow.",
    },
    {
      image: '/qikr-app-mobile.webp',
      title: 'With qikr...',
      description:
        "The qikr app gives you 2000+ high-stakes scenarios to practice on. It's easy to dip in and out of from your mobile or laptop and it works fine offline. The Matrix charts your progress over time.",
    },
    {
      image: '/mobile.webp',
      title: 'Work through a scenario',
      description:
        "Each scenario has three responses. Consider each carefully then tap to rank as bronze/silver/gold. Once they're ranked, tap on the 'eye' to reveal what the experts think and see how well you scored.",
    },
    {
      image: '/mobile2.webp',
      title: 'Get the \'aha\'',
      description:
        "Review each expert rationale carefully along with your score, the summary and the key takeaway. Here's where the new insights and 'aha' moments may come. '+' moves you on to the next scenario.",
    },
    {
      image: '/mobile3.webp',
      title: 'How am I doing?',
      description:
        "The tile in the top right (and the Matrix) shows your average score. The progress bar shows how far you've gone in the module. To change to a different module, tap the bottom left icon.",
    },
    {
      image: '/mobile4.webp',
      title: 'Choose a module',
      description:
        "In module view, topmost is the Matrix, underneath is the modules list. Tap on a tile or a list item to switch modules whenever you like. You can try qikr free for 10 days. Ready to give it a go?",
    },
    {
      image: '/desktop4.webp',
      title: 'Free trial',
      description: "Try qikr free for 10 days by registering below. Most people dip in and out of the app on both their iPhone and laptop. Register on your laptop with the same email and we'll synchonise your progress automatically."
    },
  ];

  // Focus on name input when last slide is reached
  useEffect(() => {
    if (currentSlide === totalSlides - 1) {
      setTimeout(() => {
        emailRef.current?.focus();
      }, 500);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    // currentSlide is zero-based 
    if (currentSlide < totalSlides - 1){
      setCurrentSlide(currentSlide + 1);
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
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

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    
    // NEW: Check online status before proceeding
    if (!isOnline) {
      alert('You need to be online to complete onboarding. Please check your internet connection and try again.');
      return;
    }
    
    setIsLoading(true);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {

      // 1. CREATE USER IN DATABASE 
      {/*
      console.log("about to createUser with email:",email)
      const userCreation = await createUser(email.trim());
    
      if (!userCreation.success) {
        throw new Error(userCreation.error || 'Failed to create user account');
      }
      */}

      console.log("📡 About to POST to /api/create-user with:", email);

      const response = await fetch('/api/create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const userCreation = await response.json();

      if (!userCreation.success) {
        throw new Error(userCreation.error || 'Failed to create user account');
      }

      setEmailInStore(email);      
      handleComplete();
      
    } catch (error) {
      console.error('Error during onboarding:', error);
      alert(`There was an error setting up your account, email: ${email}.`);
      alert(`There was an error setting up your account: ${(error as Error).message}. Please try again.`);    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-start z-50 transition-opacity duration-500 ease-in-out ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    > 
      <div className={`bg-white rounded-[8px] w-full max-w-[380px] h-[635px] overflow-hidden transition-opacity duration-300 opacity-100'}`}>
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
            const lastSlide = index === 9;
            const lastSlideBottomMargin = lastSlide? 'mb-[30px]': 'mb-[70px]';
            const lastSlideBottomContainerMargin = lastSlide? 'pb-2': 'pb-8';

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

                {!lastSlide && (
                  <div className="w-full h-full flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={index < 4 ? 'w-[320px] h-[180px] rounded-[10px]' : 'w-[150px] h-auto mb-3'}
                    />
                  </div>
                )}

                <div className={`text-gray-600 text-lg leading-relaxed ${textMargins} px-1`}>
                  {slide.description.split(' ').map((word, i) => {
                    const hasAsterisk = word.endsWith('*');
                    const displayWord = hasAsterisk ? word.slice(0, -1) : word;
                    const isItalic = italicWords.includes(word.toLowerCase().replace('*', ''));
                    
                    return (
                      <span
                        key={i}
                        className={isItalic ? 'italic' : ''}
                      >
                        {displayWord}
                        {hasAsterisk && <sup>*</sup>}
                        {' '}
                      </span>
                    );
                  })}
                </div>

                {/* Form only on the last slide */}
                {lastSlide && (
                  <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-xs">
                    <div className="mb-4">
                      <input
                        ref={emailRef}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <button
                      ref={submitButtonRef}
                      type="submit"
                      disabled={isLoading || !isOnline}
                      className="w-full bg-lilac-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-lilac-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lilac-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Setting up...' : 'Try qikr out for 10 days'}
                    </button>
                    <div className="text-sm text-gray-400 mt-6">
                      * we won&apos;t use your email in any other way
                    </div>
                  </form>
                )}

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