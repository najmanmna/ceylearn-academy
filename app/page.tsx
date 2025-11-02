import About from "@/components/About";
import FeaturedCourses from "@/components/FeaturedCourses";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <>
      {/* The Header is included here, outside the 'main' tag */}
      <Header />

      <main>
        {/* Hero Section */}
      
<Hero />
<WhyChoose />
<FeaturedCourses />
<About /> 
        {/* You can add more sections here */}
        {/* <section>...</section> */}
        {/* <section>...</section> */}
      </main>
    </>
  );
}
