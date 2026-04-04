import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Articles | Malinga Jayalath",
  description: "Read articles about software engineering, programming, and technology.",
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Articles</h1>
      <p className="mt-4 text-gray-600">
        This page will show all published articles as cards.
      </p>
    </main>
  );
}