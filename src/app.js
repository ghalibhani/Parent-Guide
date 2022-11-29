import NavBar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import ArtikelPage from './pages/artikel-page';
import DetailPage from './pages/detail-page';
import AboutPage from './pages/about-page';

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/*" element={<p>Halaman Tidak Ditemukan..</p>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArtikelPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/article/detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
