/* const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedUsers() {
  await prisma.User.createMany({
    data: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "Charlie", email: "charlie@example.com" },
    ],
  });
}

async function seedFinancialData() {
  await prisma.FinancialData.create({
    data: {
      stockSymbol: "AAPL",
      price: 150.25,
      date: new Date(),
    },
  });
}

async function seedNewsArticles() {
  await prisma.NewsArticle.create({
    data: {
      title: "Tech Industry Trends 2023",
      content: "Lorem ipsum dolor sit amet...",
      publishDate: new Date(),
    },
  });
}

async function seedPeople() {
  await prisma.Person.create({
    data: {
      name: "John Doe",
      age: 30,
      occupation: "Software Engineer",
    },
  });
}

async function seedTechProducts() {
  await prisma.TechProduct.create({
    data: {
      name: "Next-Gen Smartphone",
      description: "The latest in mobile technology...",
      price: 999.99,
    },
  });
}

async function main() {
  await seedUsers();
  await seedFinancialData();
  await seedNewsArticles();
  await seedPeople();
  await seedTechProducts();
  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 */

import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid"; // To generate unique IDs

const prisma = new PrismaClient();

async function main() {
  // Seed TechProduct
  for (let i = 1; i <= 10; i++) {
    await prisma.techProduct.create({
      data: {
        id: uuidv4(),
        name: `TechProduct ${i}`,
        serialNumber: `SN-${i}-${uuidv4().slice(0, 8)}`,
        specs: {
          cpu: "Intel i7",
          ram: `${16 + i}GB`,
          storage: `${256 + i * 100}GB`,
        },
        price: 999.99 + i * 50,
        releaseDate: new Date(),
        createdAt: new Date(),
      },
    });
  }

  // Seed NewsArticle
  for (let i = 1; i <= 10; i++) {
    await prisma.newsArticle.create({
      data: {
        id: uuidv4(),
        headline: `Headline for News Article ${i}`,
        byline: `Byline Author ${i}`,
        lead: `This is the leading paragraph of News Article ${i}.`,
        body: `This is the body of News Article ${i}. It's full of important information.`,
        subheading: `Subheading of Article ${i}`,
        media: `https://example.com/media${i}.jpg`,
        summary: `Summary of Article ${i}`,
        attribution: `Attribution Info ${i}`,
        links: {
          relatedArticles: [`https://example.com/article${i}`, `https://example.com/article${i + 1}`],
        },
        createdAt: new Date(),
      },
    });
  }

  // Seed Person
  for (let i = 1; i <= 10; i++) {
    await prisma.person.create({
      data: {
        id: uuidv4(),
        name: `Person ${i}`,
        age: 20 + i,
        location: `Location ${i}`,
        createdAt: new Date(),
      },
    });
  }

  // Seed FinancialData
  for (let i = 1; i <= 10; i++) {
    await prisma.financialData.create({
      data: {
        id: uuidv4(),
        data: {
          date: new Date(),
          revenue: Math.floor(Math.random() * 100) + 1,
          expenses: Math.floor(Math.random() * 100) + 1,
        },
        createdAt: new Date(),
      },
    });
  }

  // Seed User
  for (let i = 1; i <= 10; i++) {
    await prisma.user.create({
      data: {
        id: uuidv4(),
        name: `User ${i}`,
        email: `user${i}@example.com`,
        emailVerified: i % 2 === 0 ? new Date() : null, // Even users verified
        image: `https://example.com/avatar${i}.jpg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
