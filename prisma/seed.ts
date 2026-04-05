import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { ArticleStatus } from "../src/generated/prisma/enums";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.article.createMany({
    data: [
      {
        title: "What I Learned About Clean Code",
        slug: "what-i-learned-about-clean-code",
        summary:
          "A simple summary of lessons I learned about writing cleaner and more maintainable code.",
        content:
          "Clean code is not about being clever. It is about making code easy to read, easy to change, and easy for future developers to understand.",
        status: ArticleStatus.PUBLISHED,
        publishedAt: new Date(),
        thumbnailUrl:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      },
      {
        title: "How I Think About System Design as a Software Engineer",
        slug: "how-i-think-about-system-design",
        summary:
          "My practical approach to understanding systems, tradeoffs, and architecture decisions.",
        content:
          "System design is about understanding components, responsibilities, tradeoffs, and how data moves through a system.",
        status: ArticleStatus.PUBLISHED,
        publishedAt: new Date(),
        thumbnailUrl:
          "https://images.unsplash.com/photo-1518770660439-4636190af475",
      },
      {
        title: "Draft Article Example",
        slug: "draft-article-example",
        summary:
          "This article is still a draft and should not show on the public site.",
        content:
          "This is draft content and should remain hidden from public pages.",
        status: ArticleStatus.DRAFT,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });