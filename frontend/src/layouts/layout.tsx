import { lazy, Suspense, useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Lazy load the Hero component
const Hero = lazy(() => import("@/components/Hero"));

// Improved loading placeholder with animation
const LoadingPlaceholder = () => (
  <div className="loading-placeholder">
    <div className="loading-content">
      <div className="loading-spinner"></div>
      <div>Loading...</div>
    </div>
  </div>
);

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  // Set page as loaded after a small delay to allow for smoother transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-container ${pageLoaded ? 'loaded' : ''}`}>
      <Header />
      
      {showHero && (
        <Suspense fallback={<LoadingPlaceholder />}>
          <Hero />
        </Suspense>
      )}
      
      <div className="container mx-auto flex-1 py-10 px-4 sm:px-6">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;