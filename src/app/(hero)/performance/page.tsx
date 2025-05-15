import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
};

export default function Performance() {
  return (
    <div>
      <Hero imgUrl="/performance.jpg" altText="Performance " content="Performance" />
    </div>
  );
}
