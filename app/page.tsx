import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Advisory Accelerator MVD</h1>
      <p className="text-lg mb-8">Welcome to the development platform.</p>
      
      {/* Add this link to navigate to your test page */}
      <Link 
        href="/test-rating" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Test Rating Component
      </Link>

      <p className="mt-12 text-sm text-gray-600">
        This is the main landing page. The test page is available via the link above.
      </p>
    </main>
  );
}