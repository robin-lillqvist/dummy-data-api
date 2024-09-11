import { PrismaClient } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FinancialDataType = {
  id: string;
  data: {
    date: Date; // Assuming the date is stored as a string inside the JSON
    revenue: number;
    expenses: number;
  };
  createdAt: Date;
};

const prisma = new PrismaClient();

async function getFinancialData(): Promise<FinancialDataType[]> {
  return (await prisma.financialData.findMany({
    take: 10,
    orderBy: { createdAt: "desc" },
  })) as unknown as FinancialDataType[];
}

export async function FinancialDataSection() {
  const financialData = await getFinancialData();

  return (
    <section className='mb-8'>
      <h2 className='text-2xl font-bold mb-4'>Financial Data</h2>
      <p className='mb-4'>
        Endpoint: <code>/api/financial-data</code>
      </p>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {financialData.map((data) => {
          const { revenue, expenses, date } = data.data;

          return (
            <Card key={data.id}>
              <CardHeader>
                <CardTitle>{new Date(date).toDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Revenue: ${revenue.toFixed(2)}</p>
                <p>Expenses: ${expenses.toFixed(2)}</p>
                <p>Profit: ${(revenue - expenses).toFixed(2)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
