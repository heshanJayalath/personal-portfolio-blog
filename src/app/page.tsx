export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          Software Engineer
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m Malinga.
        </h1>

        <p className="max-w-2xl text-lg text-gray-600">
          I build software, learn deeply, and share what I learn through articles
          and practical projects.
        </p>

        <div className="flex gap-4">
          <a
            href="/about"
            className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
          >
            About Me
          </a>
          <a
            href="/articles"
            className="rounded-xl border border-gray-300 px-5 py-3 transition hover:bg-gray-50"
          >
            Read Articles
          </a>
        </div>
      </section>
    </main>
  );
}
