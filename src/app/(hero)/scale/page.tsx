import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
};

export default function Scale() {
  return (
    <div>
      <Hero imgUrl="/scale.jpg" altText="Scale " content="Scale" />
    </div>
  );
}
