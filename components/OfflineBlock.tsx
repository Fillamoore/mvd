// components/OfflineBlock.tsx
export default function OfflineBlock() {
  const handleRetry = () => {
    window.location.reload(); // Reloads the entire app
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Internet Connection Required</h2>
        <p className="text-gray-600 mb-2">
          You need to be online to set up qikr for the first time whether on desktop or iPhone. 
        </p>
        <div className="text-gray-600 mb-6">
          Please try again when you&apos;re back online. Once set up, you can use qikr offline and your progress is synchonised automatically.
        </div>
        <button
          onClick={handleRetry}
          className="bg-blue-500 text-white font-bold py-2 px-5 rounded-[5px] mb-1"
        >
          Retry
        </button>
      </div>
    </div>
  );
}