import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

async function getPeople() {
  return await prisma.person.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });
}

export async function PeopleSection() {
  const people = await getPeople();

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>People</h2>
      <p className='mb-4'>
        Endpoint: <code>/api/people</code>
      </p>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {people.map((person) => (
          <Card key={person.id}>
            <CardHeader>
              <CardTitle>{person.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Age: {person.age}</p>
              <p>Location: {person.location}</p>
              <p>Created: {person.createdAt.toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
