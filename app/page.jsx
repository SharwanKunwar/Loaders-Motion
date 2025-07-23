import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Loader Demo</h1>
      <Link href="/LoadersComponents" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Go to Loaders
      </Link>
    </main>
  );
}
