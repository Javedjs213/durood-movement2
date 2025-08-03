import React from 'react'

function TagLine({language}) {
  return (
    <div className="min-h-[40vh] px-5 flex justify-center items-center text-[#FFF8DB]">
        {language === 'eng' && 
        <div className=" text-3xl font-bold text-center leading-11">
            "Collecting 15 million Durood for the 1500<sup>th</sup> Birthday of Prophet Muhammad"
            <p className='flex justify-center mt-5 text-lg font-bold'>(Peace Be Upon Him)</p>
        </div>
        }
        {language === 'hindi' && 
        <div className="text-3xl font-bold text-center">
            "हमें पैग़ंबर मुहम्मद के 1500<sup>वें</sup> जन्मदिन के लिए 1.5 करोड़ दरूद इकट्ठा करने हैं"
            <p className='flex justify-center mt-5 text-lg font-bold'>(सल्लल्लाहु अलैहि वसल्लम)</p>
        </div>
        }
        {language === 'urdu' && 
        <div className="text-lg lg:text-2xl xl:text-3xl font-bold text-center leading-12 lg:leading-25">
            ہم پیغمبر محمد ﷺ کی 1500<sup>ویں</sup> سالگرہ کے لیے 1.5 کروڑ درود اکٹھا کر رہے ہیں
            <p className='flex justify-center mt-5 text-lg font-bold'>(صلی اللہ علیہ وآلہ وسلم)</p>
        </div>
        }



    </div>
  )
}

export default TagLine