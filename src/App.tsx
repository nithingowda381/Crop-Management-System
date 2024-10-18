import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropPrediction from './pages/CropPrediction';
import DiseaseDetection from './pages/DiseaseDetection';
import SoilAnalysis from './pages/SoilAnalysis';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-green-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crop-prediction" element={<CropPrediction />} />
            <Route path="/disease-detection" element={<DiseaseDetection />} />
            <Route path="/soil-analysis" element={<SoilAnalysis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;