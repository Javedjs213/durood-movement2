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
import ContactOptions from './components/ContactOptions'

function App() {

  const [language, setLanguage] = useState("eng");
  const [contactVisible, setContactVisible] = useState(false);
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
      {/* <div className={`${contactVisible? "hidden": ""}`}> */}
      <div className={``}>
        <Header language={language} setLang={setLanguage}/>
      <Countdown language={language} />
      <TagLine language={language} />
      {/* <Durood language={language} /> */}
      <Form language={language} total={total} setTotal={setTotal} />
      <BottonSection language={language} total={total} />
      <ShareButtons language={language} />
      <SenderList language={language} total={total} />
      <Footer language={language} onOpen={()=> setContactVisible(true)} />
      </div>
      <ContactOptions visibility={contactVisible}  onClose={()=> setContactVisible(false)} />
    </div>
  )
}

export default App