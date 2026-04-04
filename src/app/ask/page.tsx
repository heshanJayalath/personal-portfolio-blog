import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Me | Malinga Jayalath",
  description: "Have a question for Malinga Jayalath? Submit it here.",
};

export default function AskPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold">Ask Me</h1>
      <p className="mt-4 text-gray-600">
        Visitors will be able to submit questions here in a future phase.
      </p>
    </main>
  );
}