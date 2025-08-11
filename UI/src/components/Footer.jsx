import React from 'react'
import ShareButtons from './ShareButtons'

function Footer({language, onOpen}) {

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
    <div className=' pt-4'>
    <div className='px-10 mt-15 flex items-center sm:flex-row justify-between bg-[#063626] text-white text-sm sm:text-lg'>
      <div>{selectLang[language].tag}</div>
      <div onClick={onOpen} className='cursor-pointer'>Contact</div>
    </div>
    <div className='w-full flex justify-center mt-4 text-[#063626] bg-[#FFF8DB] font-sans text-center text-sm sm:text-md'><span className='italic'>Powered by &nbsp;</span>  Aqsa Islamic Academy Lilbanat Khairabad Mau.</div>
    </div>
  )
}

export default Footer