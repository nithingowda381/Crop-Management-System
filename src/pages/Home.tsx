import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import { Sprout, Bug, Flask } from 'lucide-react';

const Home: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Welcome to CropAI</h1>
      <p className="text-xl mb-12 text-gray-700">
        Revolutionizing agriculture with AI-powered insights
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Sprout className="w-12 h-12 text-green-600" />}
          title="Crop Prediction"
          description="Predict the best crops for your region"
          link="/crop-prediction"
        />
        <FeatureCard
          icon={<Bug className="w-12 h-12 text-red-600" />}
          title="Disease Detection"
          description="Identify and treat crop diseases"
          link="/disease-detection"
        />
        <FeatureCard
          icon={<Flask className="w-12 h-12 text-blue-600" />}
          title="Soil Analysis"
          description="Analyze soil composition and health"
          link="/soil-analysis"
        />
      </div>
    </animated.div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;