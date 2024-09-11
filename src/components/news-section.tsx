import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

async function getLatestNews() {
  return await prisma.news.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });
}

export async function NewsSection() {
  const newsItems = await getLatestNews();

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>Latest News</h2>
      <p className='mb-4'>
        Endpoint: <code>/api/news</code>
      </p>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {newsItems.map((newsItem) => (
          <Card key={newsItem.id}>
            <CardHeader>
              <CardTitle>{newsItem.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{newsItem.summary}</p>
              <p>Author: {newsItem.author}</p>
              <p>Published: {newsItem.createdAt.toDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
