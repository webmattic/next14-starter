"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATION
  //   const router = useRouter();
  //   const pathname = usePathname();
  // ====

  
  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  console.log(q);
  return (
    <div>
      NavigationTestPage
      <div>
        <h1>This is Router</h1>
        {/* <h1>This is from Query: {q}</h1>, */}
      </div>
    </div>
  );
};

export default NavigationTestPage;
