import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import AppRoutes from './routes';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 w-full relative">
            <div className="w-full">
              <AppRoutes />
            </div>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App; 