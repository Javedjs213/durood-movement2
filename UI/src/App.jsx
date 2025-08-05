import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/Header'
import TagLine from './components/TagLine'
import Form from './components/Form'
import BottonSection from './components/BottonSection'
import SenderList from './components/SenderList'
import Footer from './components/Footer'
import Durood from './components/Durood'
import Countdown from './components/Countdown'
import ShareButtons from './components/ShareButtons'

function App() {

  const [language, setLanguage] = useState("eng");
  const [total, setTotal] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URI; 
  
  console.log(language);

  useEffect(()=>{

    (async () => {
      try {
        const response = await axios.get(`${apiUrl}/total`);
        console.log("Success:", response.data.info);
        setTotal(response.data.info);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();


    },[])

  return (
    
    <div className="bg-[#063626] noto-nastaliq-urdu">
      <Header language={language} setLang={setLanguage}/>
      <Countdown language={language} />
      <TagLine language={language} />
      {/* <Durood language={language} /> */}
      <Form language={language} total={total} setTotal={setTotal} />
      <BottonSection language={language} total={total} />
      <ShareButtons language={language} />
      <SenderList language={language} total={total} />
      <Footer language={language} />
    </div>
  )
}

export default App