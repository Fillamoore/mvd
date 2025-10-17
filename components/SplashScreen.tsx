// components/SplashScreen.tsx
'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { generateCorrectClockwiseSpiralOrder } from '@/utils/spiral';
// import { authService } from '@/services/authService';

const GRID_SIZE = 7;
const TOTAL_TILES = 49;
const ANIMATION_INTERVAL = 50;

interface SplashScreenProps {
  onComplete?: () => void;
}

type SplashPhase = 'logo' | 'grid' | 'animating' | 'done' | 'fading';
// type AuthPhase = 'email' | 'otp' | 'success';

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<SplashPhase>('logo');
  const [visibleTiles, setVisibleTiles] = useState(TOTAL_TILES);
  const [spiralOrder, setSpiralOrder] = useState<{ id: number; row: number; col: number }[]>([]);
  const [tileScores, setTileScores] = useState<number[][]>([]);
  const [animatedTiles, setAnimatedTiles] = useState<Set<number>>(new Set());
  const [dotPosition, setDotPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Enhanced Auth States - COMMENTED OUT
  /*
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authPhase, setAuthPhase] = useState<AuthPhase>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');
  const [showPopup, setShowPopup] = useState(false);
  */

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentTileRef = useRef<number>(0);
  const isMountedRef = useRef(true);
  
  // Auth refs - COMMENTED OUT
  /*
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const otpInputRef = useRef<HTMLInputElement | null>(null);
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  */

  // Clear message timeout on unmount - COMMENTED OUT
  /*
  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
    };
  }, []);
  */

  /*
  const showMessage = (newMessage: string, type: 'success' | 'error' | 'info') => {
    setMessage(newMessage);
    setMessageType(type);
    setShowPopup(true);
    
    // Clear existing timeout
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    
    // Auto-dismiss after 3 seconds
    messageTimeoutRef.current = setTimeout(() => {
      setShowPopup(false);
      setMessage('');
    }, 5000);
  };

  const clearMessage = () => {
    setShowPopup(false);
    setMessage('');
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
  };
  */

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const order = generateCorrectClockwiseSpiralOrder(GRID_SIZE);
    setSpiralOrder(order);

    const scores = Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null)
    );
    order.forEach(({ row, col }) => {
      scores[row][col] = 0.3 + Math.random() * 0.7;
    });
    setTileScores(scores);

    return () => {
      isMountedRef.current = false;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const startTileAnimation = useCallback(() => {
    currentTileRef.current = 0;
    setVisibleTiles(0);
    setDotPosition(0);
    setAnimatedTiles(new Set());

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const next = currentTileRef.current + 1;

      if (next <= TOTAL_TILES) {
        currentTileRef.current = next;
        setVisibleTiles(next);
        setDotPosition(Math.min(next * (100 / TOTAL_TILES), 100));
        setAnimatedTiles((prev) => new Set(prev).add(next - 1));
      }

      if (next >= TOTAL_TILES) {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, ANIMATION_INTERVAL);
  }, []);

  /*
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);

    try {
      const result = await authService.requestOTP(email);
      
      if (result.success) {
        setAuthPhase('otp');
        // Focus OTP input after state update
        setTimeout(() => otpInputRef.current?.focus(), 100);
      } else {
        showMessage(result.error || 'Failed to send verification code. Please try again.', 'error');
      }
    } catch (error) {
      showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6 || isLoading) return;

    setIsLoading(true);
    //showMessage('Verifying code...', 'info');

    try {
      const result = await authService.verifyOTP(email, otp);
      
      if (result.success) {
        localStorage.setItem('hasLoggedIn', 'y');
        localStorage.setItem('userEmail', email);
        
        // Store auth token if your API returns one
        if (result.data?.token) {
          localStorage.setItem('authToken', result.data.token);
        }
        
        setTimeout(() => {
          setShowAuthForm(false);
          setPhase('fading');
        }, 1000);
      } else {
        showMessage(result.error || 'Invalid verification code. Please try again.', 'error');
      }
    } catch (error) {
      showMessage('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    showMessage('Sending new code...', 'info');

    try {
      const result = await authService.requestOTP(email);
      
      if (result.success) {
        showMessage('New verification code sent!', 'success');
        setOtp('');
        otpInputRef.current?.focus();
      } else {
        showMessage(result.error || 'Failed to resend code. Please try again.', 'error');
      }
    } catch (error) {
      showMessage('Failed to resend code. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToEmail = () => {
    setAuthPhase('email');
    setOtp('');
    clearMessage();
    setTimeout(() => emailInputRef.current?.focus(), 100);
  };
  */

  // Simplified handleContinue - always proceed to fading
  const handleContinue = useCallback(() => {
    // const hasLoggedIn = localStorage.getItem('hasLoggedIn') === 'y';
    
    // if (hasLoggedIn) {
      setPhase('fading'); 
    // } else {
    //   setShowAuthForm(true);
    //   setAuthPhase('email');
    // }
  }, []);

  useEffect(() => {
    switch (phase) {
      case 'logo':
        setTimeout(() => isMountedRef.current && setPhase('grid'), 700);
        break;

      case 'grid':
        setVisibleTiles(TOTAL_TILES);
        setTimeout(() => {
          if (isMountedRef.current) {
            setVisibleTiles(0);
            setAnimatedTiles(new Set());
            setPhase('animating');
          }
        }, 700);
        break;

      case 'animating':
        startTileAnimation();
        break;

      case 'done':
        handleContinue();
        break;
        
      case 'fading':
        setTimeout(() => {
          if (isMountedRef.current) {
            onComplete?.(); 
          }
        }, 400); 
        break;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [phase, onComplete, startTileAnimation, handleContinue]);

  useEffect(() => {
    if (visibleTiles === TOTAL_TILES && phase === 'animating') {
      setTimeout(() => {
        if (isMountedRef.current) setPhase('done');
      }, 700);
    }
  }, [visibleTiles, phase]);
  
  /*
  useEffect(() => {
    if (showAuthForm && authPhase === 'email') {
      const timer = setTimeout(() => {
        if (emailInputRef.current) {
          emailInputRef.current.focus();
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [showAuthForm, authPhase]);
  */

  const renderGrid = () => {
    if (!spiralOrder.length || !tileScores.length) return null;

    const spiralMap = new Map<string, { index: number; id: number }>();
    spiralOrder.forEach(({ row, col, id }, index) => {
      spiralMap.set(`${row},${col}`, { index, id });
    });

    // RESPONSIVE SIZING
    const tileSize = isMobile ? 'w-10 h-10' : 'w-14 h-14';
    const gridGap = isMobile ? 'gap-1' : 'gap-2';

    return (
      <div className={`grid grid-cols-7 ${gridGap} mx-auto mt-2`}>
        {Array(GRID_SIZE).fill(null).map((_, rowIndex) =>
          Array(GRID_SIZE).fill(null).map((_, colIndex) => {
            const key = `${rowIndex},${colIndex}`;
            const spiralEntry = spiralMap.get(key);
            const score = tileScores[rowIndex][colIndex];

            if (!spiralEntry) {
              return (
                <div
                  key={key}
                  className={`${tileSize} border border-gray-700 rounded-lg bg-black`}
                />
              );
            }

            const { id, index } = spiralEntry;
            const isVisible = phase === 'grid' || animatedTiles.has(index);
            const isFinal = animatedTiles.has(TOTAL_TILES - 1) && index === TOTAL_TILES - 1;

            let bgClass = '';
            if (id <= 9) bgClass = 'bg-lilac-charcoal-f';
            else if (id <= 25) bgClass = 'bg-lilac-charcoal-i';
            else bgClass = 'bg-lilac-charcoal-a';

            const dynamicBg = isVisible && phase !== 'grid'
              ? `rgba(200, 160, 255, ${score})`
              : undefined;

            return (
              <div
                key={key}
                className={`${tileSize} border border-gray-700 rounded-lg ${isFinal ? 'animate-once-pulse' : ''} ${!dynamicBg ? bgClass : ''}`}
                style={dynamicBg ? { backgroundColor: dynamicBg } : undefined}
              />
            );
          })
        )}
      </div>
    );
  };

  const renderProgressBar = () => {
    const isFinalDot = animatedTiles.has(TOTAL_TILES - 1);
    const barWidth = isMobile ? 'max-w-[360px]' : 'max-w-xs md:max-w-md';

    return (
      <div className={`w-full ${barWidth} h-1.5 bg-gray-800 rounded-full relative mt-6`}>
        <div
          className={`absolute w-4 h-4 bg-gray-700 rounded-full border border-white shadow transition-all duration-75 ${
            isFinalDot ? 'animate-once-pulse' : ''
          }`}
          style={{
            left: `${dotPosition}%`,
            top: 'calc(50% - 8px)',
            marginLeft: '-8px',
          }}
        />
      </div>
    );
  };

  /*
  const renderMessagePopup = () => {
    if (!showPopup || !message) return null;

    const inputWidth = isMobile ? 'w-[380px]' : 'w-[440px]';
    const baseClasses = "absolute left-0 p-3 rounded-md text-center text-lg font-medium transition-all duration-300 animate-fade-in z-[1000]";
    const typeClasses = {
      success: "bg-green-500/95 text-white border border-green-400 shadow-lg",
      error: "bg-red-500/95 text-white border border-red-400 shadow-lg", 
      info: "bg-blue-500/95 text-white border border-blue-400 shadow-lg"
    };

    return (
      <div className={`${baseClasses} ${inputWidth} ${typeClasses[messageType]}`}>
        {message}
      </div>
    );
  };

  const renderAuthForm = () => {
    const inputWidth = isMobile ? 'w-[390px]' : 'w-[440px]';
    const promptSize = isMobile ? 'text-base' : 'text-xl';
    
    return (
      <form
        onSubmit={authPhase === 'email' ? handleEmailSubmit : handleOTPSubmit}
        noValidate
        className={`flex flex-col z-[100] pointer-events-auto min-h-[100px] transition-opacity duration-300 ${
          showAuthForm ? 'opacity-100' : 'opacity-0'
        } ${showAuthForm ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {authPhase === 'email' ? (
          <>
            <div className={'pb-5 pt-10 text-xl text-center text-lilac-400'}>
              Enter email to get one-time login passcode:
            </div>
            
            {/* Integrated input + button *\/}
            <div className="relative">
              <input 
                ref={emailInputRef}
                type="email" 
                placeholder="you@work-email.com"
                autoFocus
                className={`p-3 pr-16 ${inputWidth} bg-lilac-400 text-black text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-lilac-600 transition-all duration-200`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (messageType === 'error') clearMessage();
                }}
                disabled={isLoading}
              />
              <button 
                type="submit"
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-lilac-500 text-black rounded-md transition-all duration-200 ${
                  !email || isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'opacity-100 hover:bg-lilac-600'
                }`}
                disabled={!email || isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Message popup appears below the input *\/}
            <div className={`${inputWidth} relative mt-2`}>
              {renderMessagePopup()}
            </div>           
          </>
        ) : (
          <>
            <div className="pb-5 pt-10 text-xl text-lilac-400">
              Enter passcode from the email just sent:
            </div>
            
            {/* Integrated OTP input + button - same as email *\/}
            <div className="relative">
              <input 
                ref={otpInputRef}
                type="text" 
                placeholder="Enter 6-digit code"
                maxLength={6}
                autoFocus
                className={`p-3 pr-16 ${inputWidth} bg-lilac-400 text-black text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-lilac-600 transition-all duration-200 text-center tracking-widest`}
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                  if (messageType === 'error') clearMessage();
                }}
                disabled={isLoading}
              />
              <button 
                type="submit"
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-lilac-500 text-black rounded-md transition-all duration-200 ${
                  otp.length !== 6 || isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'opacity-100 hover:bg-lilac-600'
                }`}
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Message popup appears below the input *\/}
            <div className={`${inputWidth} relative mt-2`}>
              {renderMessagePopup()}
            </div>
            
            {/*
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                onClick={handleBackToEmail}
                className="text-lilac-300 hover:text-lilac-400 transition-colors"
                disabled={isLoading}
              >
                Change Email
              </button>
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-lilac-300 hover:text-lilac-400 transition-colors"
                disabled={isLoading}
              >
                Resend Code
              </button>
            </div>
            *\/}
          </>
        )}
      </form>
    );
  };
  */

  return (
    <div className={`fixed inset-0 flex flex-col ${isMobile ? 'justify-start' : 'justify-center'} h-screen bg-black text-white z-50 
        transition-opacity duration-300 ease-in-out ${phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}> 
      <div className={`flex flex-col items-center ${isMobile ? 'scale-75' : 'scale-[0.8]'} ${phase === 'logo' ? 'opacity-0 pointer-events-none' : 'opacity-100 transition-opacity duration-500'}`}>
        <Image
          src="/qikr-logo.png"
          alt="App Logo"
          width={isMobile ? 180 : 290}
          height={isMobile ? 105 : 169}
          priority
        />
        <div className={`mt-2 flex flex-col items-center ${isMobile ? 'min-h-[200px]' : 'min-h-[360px]'}`}>
          {renderGrid()}
          {renderProgressBar()}
        </div>
        {/*
        {renderAuthForm()}
        */}  
      </div>
    </div>
  );
}