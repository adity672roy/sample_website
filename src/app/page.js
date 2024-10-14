import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import About from "@/components/About"; 
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";
import Working from "@/components/Working";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Booking />
      <Products/>
      <Working />
      <Testimonial />
      <Blog />
      <Gallery />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}
