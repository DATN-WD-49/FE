import { useLocation } from "react-router";
import Banner from "./components/Banner";
import BookingSection from "./components/BookingSection";
import IntroduceSection from "./components/IntroduceSection";
import QuantitySection from "./components/QuantitySection";
import RoadSection from "./components/RoadSection";
import ServicesSection from "./components/ServicesSection";
import { useEffect } from "react";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "booking") {
      const el = document.getElementById("booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section id="booking">
        <BookingSection />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <IntroduceSection />
      </section>
      <section>
        <RoadSection />
      </section>
      <section>
        <QuantitySection />
      </section>
      <section>
        <ServicesSection />
      </section>
    </>
  );
};

export default HomePage;
