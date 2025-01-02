// src/components/PageTransition.jsx
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;

// Update App.jsx
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';

const App = () => {
  const location = useLocation();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16 px-4 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/skills" element={
                <PageTransition>
                  <Skills />
                </PageTransition>
              } />
              <Route path="/experience" element={
                <PageTransition>
                  <Experience />
                </PageTransition>
              } />
              <Route path="/education" element={
                <PageTransition>
                  <Education />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};