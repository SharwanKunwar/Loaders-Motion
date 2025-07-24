import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="md:text-4xl text-2xl font-bold ">Welcome to the Loader Demo</h1>
      <p className="mb-6 text-neutral-400">You can try different types of loading animation. build using motion</p>
      <Link href="/LoadersComponents" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Go to Loaders
      </Link>

      <p className="mt-6 text-red-400">Roatate for better Expirence</p>
    </main>
  );
}
