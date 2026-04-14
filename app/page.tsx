import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { SocialProof } from "../components/SocialProof";
import { CallToAction } from "../components/CallToAction";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
