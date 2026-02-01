
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ComicPortfolio from './ComicPortfolio';
import Contact from './Contact';
import Rely from './Rely'
import SelfCheckout from './SelfCheckout';
import Ample from './Ample'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComicPortfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Rely" element={<Rely />} />
         <Route path="/SelfCheckout" element={<SelfCheckout />} />
         <Route path="/Ample" element={<Ample />} />
      </Routes>
    </Router>
  );
}

export default App;