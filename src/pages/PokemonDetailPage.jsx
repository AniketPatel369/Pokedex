import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const PokemonDetailPage = () => {
  const { name } = useParams();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl md:text-4xl mb-6 text-center">{name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Pokémon'} Details</h1>
      <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-lg">
        <p className="text-text dark:text-dark-text text-center">Detailed information about {name ? name.charAt(0).toUpperCase() + name.slice(1) : 'this Pokémon'} will be displayed here.</p>
        <p className="text-text dark:text-dark-text text-center mt-4">Coming soon...</p>
      </div>
    </motion.div>
  );
};

export default PokemonDetailPage;