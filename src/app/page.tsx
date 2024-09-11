import { Suspense } from "react";
import { TechProductsSection } from "@/components/tech-product-section";
import { NewsSection } from "@/components/news-section";
import { PeopleSection } from "@/components/peoples-section";
import { FinancialDataSection } from "@/components/financial-data-section";

export default function Home() {
  return (
    <div className='container py-8'>
      <h1 className='text-4xl font-bold mb-8'>Dummy Data API Documentation</h1>
      <Suspense fallback={<div>Loading Tech Products...</div>}>
        <TechProductsSection />
      </Suspense>
      <Suspense fallback={<div>Loading News...</div>}>
        <NewsSection />
      </Suspense>
      <Suspense fallback={<div>Loading People...</div>}>
        <PeopleSection />
      </Suspense>
      <Suspense fallback={<div>Loading Financial Data...</div>}>
        <FinancialDataSection />
      </Suspense>
    </div>
  );
}
