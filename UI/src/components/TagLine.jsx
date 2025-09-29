import React from 'react'

function TagLine({language}) {
  return (
    <div className="min-h-[20vh] px-5 flex justify-center items-center text-[#FFF8DB]">
        {language === 'eng' && 
        <div className=" text-3xl font-bold text-center leading-11">
            "Collecting 15.1 million Durood for the 1501<sup>th</sup> Milad of Prophet Muhammad (PBUH)"
            {/* <p className='flex justify-center mt-5 text-lg font-bold'>(Peace Be Upon Him)</p> */}
        </div>
        }
        {language === 'hindi' && 
        <div className="text-3xl font-bold text-center leading-12">
            "हमें पैग़ंबर मुहम्मद (सल्लल्लाहु अलैहि वसल्लम) के 1501<sup>वें</sup> मिलाद के लिए 1.51 करोड़ दरूद इकट्ठा करने हैं"
            <p className='flex justify-center mt-5 text-lg font-bold'></p>
        </div>
        }
        {language === 'urdu' && 
        <div className="text-lg lg:text-2xl xl:text-3xl font-bold text-center leading-12 lg:leading-25">
            ہم پیغمبر محمد ﷺ کی 1501<sup>ویں</sup> سالگرہ کے لیے 1.51 کروڑ درود اکٹھا کر رہے ہیں
        </div>
        }



    </div>
  )
}

export default TagLine
