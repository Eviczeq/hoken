import './App.css';
import Header from './components/header/Header';
import Dummy from './components/dummy/Dummy';
import Dummy2 from './components/dummy2/Dummy2';
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';
import Banner from './components/banner/Banner'
import { useEffect, useState } from 'react';
import SurveyComponent from './components/survey/Survey';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);

    },3000);

  }, []);

  return (
    <div >
      {loading 
      ? (<Loader/>) 
      :
      (
      <>
          <Header />
          <Navbar />
          <Banner/>
          <Dummy />
          <Dummy2 />
          <SurveyComponent/>
      </>)}

    </div>
  );
}

export default App;
