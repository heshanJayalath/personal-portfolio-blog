import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArticleStatus } from "@/generated/prisma/enums";

export const metadata: Metadata = {
  title: "Articles | Malinga Jayalath",
  description: "Articles and lessons learned throughout my software engineering journey.",
};

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    where: {
      status: ArticleStatus.PUBLISHED,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="mt-3 text-gray-600">
          Things I learned during my software engineering journey.
        </p>
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-500">No published articles yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: (typeof articles)[number]) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="rounded-2xl border border-gray-200 p-5 transition hover:shadow-md"
            >
              <div className="mb-3 h-40 rounded-xl bg-gray-100" />
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                {article.summary}
              </p>
              <p className="mt-4 text-sm font-medium text-black">Read article →</p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}