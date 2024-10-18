import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const DiseaseDetection: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [disease, setDisease] = useState('');
  const [solution, setSolution] = useState('');

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate AI disease detection (replace with actual API call in production)
    const diseases = ['Leaf Blight', 'Powdery Mildew', 'Rust', 'Bacterial Spot', 'Early Blight'];
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    setDisease(randomDisease);
    setSolution(`To treat ${randomDisease}, apply a fungicide and ensure proper plant spacing for better air circulation.`);
  };

  return (
    <animated.div style={fadeIn} className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Disease Detection</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Upload Crop Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Preview" className="max-w-full h-auto" />
          </div>
        )}
        <div className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Detect Disease
          </button>
        </div>
      </form>
      {disease && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="font-bold">Detected Disease:</p>
          <p className="text-xl mb-2">{disease}</p>
          <p className="font-bold">Recommended Solution:</p>
          <p>{solution}</p>
        </div>
      )}
    </animated.div>
  );
};

export default DiseaseDetection;