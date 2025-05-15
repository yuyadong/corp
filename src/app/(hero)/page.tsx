import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div>
      <Hero
        imgUrl="/home.jpg"
        altText="Home"
        content="Professional Cloud Hosting"
      />
    </div>
  );
}
