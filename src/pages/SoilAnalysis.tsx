import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const SoilAnalysis: React.FC = () => {
  const [location, setLocation] = useState('');
  const [depth, setDepth] = useState('');
  const [minerals, setMinerals] = useState<string[]>([]);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI soil analysis (replace with actual API call in production)
    const possibleMinerals = ['Nitrogen', 'Phosphorus', 'Potassium', 'Calcium', 'Magnesium', 'Sulfur', 'Iron', 'Manganese', 'Zinc'];
    const randomMinerals = possibleMinerals.sort(() => 0.5 - Math.random()).slice(0, 4);
    setMinerals(randomMinerals);
  };

  return (
    <animated.div style={fadeIn} className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Soil Analysis</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter soil sample location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="depth">
            Sample Depth (cm)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="depth"
            type="number"
            placeholder="Enter sample depth in cm"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Analyze Soil
          </button>
        </div>
      </form>
      {minerals.length > 0 && (
        <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
          <p className="font-bold mb-2">Detected Minerals:</p>
          <ul className="list-disc list-inside">
            {minerals.map((mineral, index) => (
              <li key={index} className="text-lg">{mineral}</li>
            ))}
          </ul>
        </div>
      )}
    </animated.div>
  );
};

export default SoilAnalysis;