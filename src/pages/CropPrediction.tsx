import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const CropPrediction: React.FC = () => {
  const [region, setRegion] = useState('');
  const [soilType, setSoilType] = useState('');
  const [climate, setClimate] = useState('');
  const [prediction, setPrediction] = useState('');

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI prediction (replace with actual API call in production)
    const crops = ['Wheat', 'Rice', 'Corn', 'Soybeans', 'Cotton'];
    const randomCrop = crops[Math.floor(Math.random() * crops.length)];
    setPrediction(randomCrop);
  };

  return (
    <animated.div style={fadeIn} className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Crop Prediction</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
            Region
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="region"
            type="text"
            placeholder="Enter your region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="soilType">
            Soil Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            required
          >
            <option value="">Select soil type</option>
            <option value="clay">Clay</option>
            <option value="sandy">Sandy</option>
            <option value="loamy">Loamy</option>
            <option value="silt">Silt</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="climate">
            Climate
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="climate"
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
            required
          >
            <option value="">Select climate</option>
            <option value="tropical">Tropical</option>
            <option value="dry">Dry</option>
            <option value="temperate">Temperate</option>
            <option value="continental">Continental</option>
            <option value="polar">Polar</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Predict Crop
          </button>
        </div>
      </form>
      {prediction && (
        <div className="mt-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
          <p className="font-bold">Recommended Crop:</p>
          <p className="text-xl">{prediction}</p>
        </div>
      )}
    </animated.div>
  );
};

export default CropPrediction;