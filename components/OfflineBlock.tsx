// components/OfflineBlock.tsx
export default function OfflineBlock() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Internet Connection Required</h2>
        <p className="text-gray-600 mb-6">
          You need to be online to set up qikr for the first time whether on desktop or iPhone. 
          Please check your internet connection and try again.
        </p>
        <div className="text-sm text-gray-500">
          Once set up, you can use qikr offline.
        </div>
      </div>
    </div>
  );
}