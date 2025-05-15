import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};

export default function Reliability() {
  return (
    <div>
      <Hero imgUrl="/reliability.jpg" altText="Reliability " content="Reliability" />
    </div>
  );
}
