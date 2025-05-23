import { motion } from 'framer-motion';

const LibraryPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl md:text-4xl mb-6 text-center">Pokémon Library</h1>
      <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-lg">
        <p className="text-text dark:text-dark-text text-center">The Pokémon library will be displayed here, allowing users to browse all Pokémon.</p>
        <p className="text-text dark:text-dark-text text-center mt-4">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default LibraryPage;