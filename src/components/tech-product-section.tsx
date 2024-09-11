import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

async function getTechProducts() {
  return await prisma.techProduct.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  });
}

export async function TechProductsSection() {
  const products = await getTechProducts();

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>Tech Products</h2>
      <p className='mb-4'>
        Endpoint: <code>/api/tech-products</code>
      </p>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Serial Number: {product.serialNumber}</p>
              <p>Price: ${product.price}</p>
              <p>Release Date: {product.releaseDate.toDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
