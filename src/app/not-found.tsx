import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-black px-5 py-3 text-white"
      >
        Go Home
      </Link>
    </main>
  );
}