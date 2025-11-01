// hooks/useOnlineStatus.ts
import { useEffect } from 'react';
import { useLocalStore } from '../store/useLocalStore';

export const useOnlineStatus = () => {
  const setOnlineStatus = useLocalStore((state) => state.setOnlineStatus);

  useEffect(() => {
    setOnlineStatus(navigator.onLine); // Safe in useEffect
    
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setOnlineStatus]);
};