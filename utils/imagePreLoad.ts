// utils/imagePreload.ts
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  if (typeof window === 'undefined') return Promise.resolve([]);
  
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${url}`));
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

export const getModuleImagePaths = (count: number): string[] => {
  return Array.from({ length: count }, (_, i) => 
    `/module-infographics/${i + 1}.webp`
  );
};