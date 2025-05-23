import { motion } from 'framer-motion';

const StarterPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl md:text-4xl mb-6 text-center">Choose Your Starter Pokémon</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Starter Pokémon cards will be added here in future implementations */}
        <div className="card hover:shadow-lg transition-all duration-300 flex flex-col items-center">
          <div className="h-48 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <h2 className="text-xl mb-2">Grass Type</h2>
          <p className="text-center">Coming soon...</p>
        </div>
        
        <div className="card hover:shadow-lg transition-all duration-300 flex flex-col items-center">
          <div className="h-48 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <h2 className="text-xl mb-2">Fire Type</h2>
          <p className="text-center">Coming soon...</p>
        </div>
        
        <div className="card hover:shadow-lg transition-all duration-300 flex flex-col items-center">
          <div className="h-48 w-48 bg-gray-200 dark:bg-gray-700 rounded-full mb-4"></div>
          <h2 className="text-xl mb-2">Water Type</h2>
          <p className="text-center">Coming soon...</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StarterPage;