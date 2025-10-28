// hooks/useOnlineStatus.ts
import { useEffect } from 'react';
import { useLocalStore } from '../store/useLocalStore';

export const useOnlineStatus = () => {
  const setOnlineStatus = useLocalStore((state) => state.setOnlineStatus);

  useEffect(() => {
    // Set initial status
    setOnlineStatus(navigator.onLine);

    // Update on changes
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

  }, []);
};