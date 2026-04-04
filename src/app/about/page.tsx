import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Malinga Jayalath",
  description: "Learn about Malinga Jay, background, skills, and career journey.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-gray-600">
        This page will include my background, experience, skills, career journey,
        and the things I care about as a software engineer.
      </p>
    </main>
  );
}