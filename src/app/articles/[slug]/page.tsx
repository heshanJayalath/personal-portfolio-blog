import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ArticleStatus } from "@/generated/prisma/enums";
import type { Metadata } from "next";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article || article.status !== ArticleStatus.PUBLISHED) {
    return {
      title: "Article Not Found | Malinga Jay",
    };
  }

  return {
    title: `${article.title} | Malinga Jay`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;

  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article || article.status !== ArticleStatus.PUBLISHED) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Article
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          {article.title}
        </h1>

        <p className="mt-4 text-lg text-gray-600">{article.summary}</p>

        <div className="mt-10 rounded-2xl bg-gray-100 p-6">
          <p className="whitespace-pre-line leading-8 text-gray-800">
            {article.content}
          </p>
        </div>
      </article>
    </main>
  );
}