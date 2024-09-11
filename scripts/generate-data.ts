import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function generateTechProduct() {
  return prisma.techProduct.create({
    data: {
      name: faker.commerce.productName(),
      serialNumber: faker.string.alphanumeric(10),
      specs: faker.helpers.objectValue({
        cpu: faker.commerce.productName(),
        ram: faker.number.int({ min: 4, max: 64 }) + "GB",
        storage: faker.number.int({ min: 128, max: 2048 }) + "GB",
      }),
      price: parseFloat(faker.commerce.price()),
      releaseDate: faker.date.past(),
    },
  });
}

// Create similar functions for other data types

async function generateData() {
  await generateTechProduct();
  // Generate other data types
  console.log("Data generated successfully");
}

generateData()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
