import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NEETCoachingPage from "./pages/NEETCoaching";
import TuitionCentrePage from "./pages/TuitionCentre";
import Class610Page from "./pages/Class610Tuition";
import Class1112Page from "./pages/Class1112Science";
import ResultsPage from "./pages/Results";
import TestimonialsPage from "./pages/Testimonials";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import FAQPage from "./pages/FAQ";
import AboutPage from "./pages/About";

const queryClient = new QueryClient();

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return <><ScrollToTop />{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
          <Route path="/neet-coaching-in-chennai" element={<PageWrapper><NEETCoachingPage /></PageWrapper>} />
          <Route path="/tuition-centre-in-chennai" element={<PageWrapper><TuitionCentrePage /></PageWrapper>} />
          <Route path="/class-6-10-tuition" element={<PageWrapper><Class610Page /></PageWrapper>} />
          <Route path="/class-11-12-science-coaching" element={<PageWrapper><Class1112Page /></PageWrapper>} />
          <Route path="/results-achievements" element={<PageWrapper><ResultsPage /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPostPage /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
