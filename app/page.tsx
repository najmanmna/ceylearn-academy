import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* The Header is included here, outside the 'main' tag */}
      <Header />

      <main>
        {/* Hero Section */}
      
<Hero />
        {/* You can add more sections here */}
        {/* <section>...</section> */}
        {/* <section>...</section> */}
      </main>
    </>
  );
}
