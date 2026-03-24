import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsServicesPage from './pages/ProductsServicesPage.jsx';
import CorporatesInvestorsPage from './pages/CorporatesInvestorsPage.jsx';
import QualityCompliancePage from './pages/QualityCompliancePage.jsx';
import PartnersPage from './pages/PartnersPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import WhyTanzaniaPage from './pages/WhyTanzaniaPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products-services" element={<ProductsServicesPage />} />
        <Route path="/corporates-investors" element={<CorporatesInvestorsPage />} />
        <Route path="/quality-compliance" element={<QualityCompliancePage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/why-tanzania" element={<WhyTanzaniaPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

