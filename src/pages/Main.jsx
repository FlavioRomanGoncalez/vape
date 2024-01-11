// COMPONENTS
import Hero from "../components/Hero/main";
import About from "../components/About/main";
import Navbar from "../components/Navbar/main";
import Footer from "../components/Footer/main";
import Dealers from "../components/Dealers/main";
import Products from "../components/Products/main";
import TopButton from "../components/TopButton/main";
import Testimonials from "../components/Testimonials/main";
import Authentication from "../components/Authentication/main";

// CUSTOM HOOK
import useButtonTop from "../hooks/useButtonTop";
import ProductsTest from "../components/Products_test/main";

export default function Main() {
  const { show } = useButtonTop();

  return (
    <>
      <Navbar />

      <About />

      <Hero />

      <Products />

      <ProductsTest />

      <Testimonials />

      <Dealers />

      <Authentication />

      <Footer />

      {show && <TopButton />}
    </>
  );
}