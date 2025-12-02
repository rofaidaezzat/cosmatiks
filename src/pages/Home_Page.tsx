import { Hero } from "../components/home/Hero";
import CategorySection from "../components/home/CategorySection";
import ProductShowcase from "../components/home/ProductShowcase";
import TwoImageSection from "../components/home/TwoImageSection";
import NewCollectionSection from "../components/home/NewCollectionSection";
import FeelingBlushBanner from "../components/home/FeelingBlushBanner";
import BeautyForEveryStory from "../components/home/BeautyForEveryStory";
import Testimonials from "../components/home/Testimonials";
import OurLatestNews from "../components/home/OurLatestNews";

export function HomePage() {
  return (
    <>
      <Hero />
      {/* Category Section */}
      <CategorySection />
      {/* Product Showcase */}
      <ProductShowcase />
      {/* Two Image Section */}
      <TwoImageSection />
      {/* New Collection Section */}
      <NewCollectionSection />
      {/* Feeling Blush Banner */}
      <FeelingBlushBanner />
      {/* Beauty for Every Story */}
      <BeautyForEveryStory />
      {/* Testimonials */}
      <Testimonials />
      {/* OurLatestNews */}
      <OurLatestNews />
    </>
  );
}

export default HomePage;
