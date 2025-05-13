import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Main pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';

// Services pages
import ServicesPage from './pages/Services/ServicesPage'; // the main services page
import AiDevelopment from './pages/Services/ai-development';
import WebDevelopment from './pages/Services/web-development';
import MobileDevelopment from './pages/Services/mobile-development';
import DataAnalysis from './pages/Services/data-analysis';
import UiUxDesign from './pages/Services/ui-ux-design';
import Seo from './pages/Services/seo';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<BlogPostPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />

          {/* Services route split into parent and children to respect v7_relativeSplatPath */}
          <Route path="services">
            <Route index element={<ServicesPage />} />
            <Route path="ai-development" element={<AiDevelopment />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
            <Route path="data-analysis" element={<DataAnalysis />} />
            <Route path="ui-ux-design" element={<UiUxDesign />} />
            <Route path="seo" element={<Seo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;