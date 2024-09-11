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
              <p>Id: {product.id}</p>
              <p>Serial Number: {product.serialNumber}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Release Date: {product.releaseDate.toDateString()}</p>
              <p>Specs:</p>
              <ul className='list-disc list-inside'>
                {Object.entries(product.specs as Record<string, string>).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
              <p>Created At: {product.createdAt.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
