import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
    </main>
  );
}
