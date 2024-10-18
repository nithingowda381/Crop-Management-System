import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout size={32} />
          <span className="text-2xl font-bold">CropAI</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/crop-prediction" className="hover:text-green-200">Crop Prediction</Link></li>
            <li><Link to="/disease-detection" className="hover:text-green-200">Disease Detection</Link></li>
            <li><Link to="/soil-analysis" className="hover:text-green-200">Soil Analysis</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;