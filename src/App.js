import { 
  BrowserRouter as Router, Routes,

  Route  } from 'react-router-dom';
import './App.css';
import Header from './component/Header'
import NoteSection from './page/NoteSection'
import NotePage from './page/NotePage'



function App() {
  return (
    <Router>
          <div className="container dark">
            <div className='app'>

            
          <Header />
          <Routes>
          <Route path='/'  element = {<NoteSection />} />
          <Route path='/note/:id' element = {<NotePage />} />
          </Routes>
          </div>
          </div>
      </Router>

  );
}

export default App;
