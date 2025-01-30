import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Language from './components/Language';
import English from './components/English';
import French from './components/French';
import German from './components/German';
import Italian from './components/Italian';
import Japanese from './components/Japanese';
import Spanish from './components/Spanish';
import EnglishAlphabets from './components/EnglishAlphabets';
import EnglishWebsite from './components/EnglishWebsite';
import FrenchAlphabets from './components/FrenchAlphabets';
import FrenchWebsite from './components/FrenchWebsite';
import GermanAlphabets from './components/GermanAlphabets';
import GermanWebsite from './components/GermanWebsite';
import ItalianAlphabets from './components/ItalianAlphabets';
import ItalianWebsite from './components/ItalianWebsite';
import JapaneseAlphabets from './components/JapaneseAlphabets';
import JapaneseWebsite from './components/JapaneseWebsite';
import SpanishAlphabets from './components/SpanishAlphabets';
import SpanishWebsite from './components/SpanishWebsite';


const AppContent = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const backgroundClass = location.pathname === '/' ? 'home-bg' : 'plain-bg';

  return (
    <div className={backgroundClass}>
      <Routes>
        <Route path="/" element={<Home navigateTo={navigate} />} />
        <Route path="/signup" element={<Signup navigateTo={navigate} />} />
        <Route path="/login" element={<Login navigateTo={navigate} />} />
        <Route path="/language" element={<Language navigateTo={navigate} />} />
        <Route path="/english" element={<English navigateTo={navigate} />} />
        <Route path="/french" element={<French navigateTo={navigate} />} />
        <Route path="/german" element={<German navigateTo={navigate} />} />
        <Route path="/italian" element={<Italian navigateTo={navigate} />} />
        <Route path="/japanese" element={<Japanese navigateTo={navigate} />} />
        <Route path="/spanish" element={<Spanish navigateTo={navigate} />} />
        <Route path="/englishalphabets" element={<EnglishAlphabets navigateTo={navigate} />} />
        <Route path="/englishwebsite" element={<EnglishWebsite navigateTo={navigate} />} />
        <Route path="/frenchalphabets" element={<FrenchAlphabets navigateTo={navigate} />} />
        <Route path="/frenchwebsite" element={<FrenchWebsite navigateTo={navigate} />} />
        <Route path="/germanalphabets" element={<GermanAlphabets navigateTo={navigate} />} />
        <Route path="/germanwebsite" element={<GermanWebsite navigateTo={navigate} />} />
        <Route path="/italianalphabets" element={<ItalianAlphabets navigateTo={navigate} />} />
        <Route path="/italianwebsite" element={<ItalianWebsite navigateTo={navigate} />} />
        <Route path="/japanesealphabets" element={<JapaneseAlphabets navigateTo={navigate} />} />
        <Route path="/japanesewebsite" element={<JapaneseWebsite navigateTo={navigate} />} />
        <Route path="/spanishalphabets" element={<SpanishAlphabets navigateTo={navigate} />} />
        <Route path="/spanishwebsite" element={<SpanishWebsite navigateTo={navigate} />} />
      </Routes>
    </div>
  );
};

export default AppContent;
