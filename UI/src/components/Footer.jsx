import React from 'react'
import ShareButtons from './ShareButtons'

function Footer({language}) {

  const selectLang = {
        eng: {
            tag: (<>©2025 Durood Movement 1447h</>),
            durood: "Allahumma salli wa sallim wa barik ‘ala Sayyidina Muhammad"
        },
        hindi: {
            tag: (<>©2025 दरूद आंदोलन 1447ह°</>),
            durood: "अल्लाहुम्म सल्लि व सल्लिम व बारिक अला सैय्यिदना मुहम्मद"
        },
        urdu: {
            tag: (<>©2025 درود تحریک ۱۴۴۷ھ</>),
            durood: "اللّٰهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلٰى سَيِّدِنَا مُحَمَّد"
        }
    }

  return (
    <div className='px-10 py-4 mt-15 flex items-center sm:flex-row justify-between bg-[#063626] text-white'>
      <div>{selectLang[language].tag}</div>
      <div>Contact</div>
    </div>
  )
}

export default Footer