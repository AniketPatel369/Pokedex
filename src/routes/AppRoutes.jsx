import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LandingPage from '../pages/LandingPage';
import StarterPage from '../pages/StarterPage';
import PokemonDetailPage from '../pages/PokemonDetailPage';
import LibraryPage from '../pages/LibraryPage';
import TeamBuilderPage from '../pages/TeamBuilderPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="starter" element={<StarterPage />} />
          <Route path="pokemon/:name" element={<PokemonDetailPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="team" element={<TeamBuilderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;