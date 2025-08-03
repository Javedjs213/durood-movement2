import React from 'react'

function Durood({language}) {

  const selectLang = {
        eng: {
            durood: "Allahumma salli wa sallim wa barik ‘ala Sayyidina Muhammad (SAW)"
        },
        hindi: {
            durood: "अल्लाहुम्म सल्लि व सल्लिम व बारिक अला सैय्यिदना मुहम्मद (स° ल°)"
        },
        urdu: {
            durood: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ (ﷺ)"
        }
        // urdu: {
        //     durood: "اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلٰى سَيِّدِنَا مُحَمَّد"
        // }
    }

    const arabicStyle = {
      fontFamily: "'Amiri', serif",
      direction: 'rtl',
      fontWeight: 'bold',
      letterSpacing: '2px',
      wordSpacing: '2px',
      fontSize: '1.5rem', // Optional: makes it more readable
      lineHeight: '2',     // Optional: improves spacing
    };


  return (
    <div className='flex justify-center text-white'>
      {language == "urdu" && <div className='mt-10 px-10 py-4 pb-5 my-5 w-[90vw] md:w-[75vw] lg:w-[60vw] bg-[#000] text-center'
      style={arabicStyle}
      >{selectLang[language].durood}</div>}


      {language != "urdu" && <div className='px-10 py-4 pb-5 my-5 w-[90vw] md:w-[75vw] lg:w-[55vw] bg-[#000] text-center'
      >{selectLang[language].durood}</div>}



    </div>
  )
}

export default Durood