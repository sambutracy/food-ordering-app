import { lazy, Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Lazy load the Hero component
const Hero = lazy(() => import("@/components/Hero"));

// Loading placeholder that matches your site's style
const LoadingPlaceholder = () => (
  <div className="h-[500px] w-full bg-gray-100 flex items-center justify-center">
    <div className="text-purple-800 text-xl">Loading...</div>
  </div>
);

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {showHero && (
              <Suspense fallback={<LoadingPlaceholder />}>
                <Hero />
              </Suspense>
            )}
            
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;