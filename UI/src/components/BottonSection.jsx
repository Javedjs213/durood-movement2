import React from 'react'

function BottonSection({language, total}) {

    const selectLang = {
        hindi: {
            tag: "कुल दरूद एकत्रित",
            discripiton: "जो मुझ पर एक बार दरूद भेजता है, अल्लाह उस पर दस गुना रहमतें भेजता है...",
            book: "मुस्लिम शरीफ"
        },
        eng: {
            tag: "Total Durood Collected",
            discripiton: "Whoever sends blessings upon me once, Allah sends blessings upon him tenfold...",
            book: "Muslim Shareef"
        },
        urdu: {
            tag: "کل درود جمع ہو چکے ہیں",
            discripiton: "جو مجھ پر ایک بار درود بھیجتا ہے، اللہ اس پر دس گنا رحمتیں بھیجتا ہے",
            book: "مسلم شریف"
        }
    }

  return (
    <div className='w-full flex flex-col items-center mt-10 text-white'>
        <div className='flex flex-col items-center gap-1 text-2xl font-bold mb-15'>
            <h1 className='text-5xl text-[#FFF8DB] p-2 px-5 mb-4 rounded-md'>{total}</h1>
            <h2 className='mt-2 text-md lg:text-2xl xl:text-3xl'>{selectLang[language].tag}</h2>
        </div>

        <div className='flex flex-col items-center '>
            <p className='text-lg lg:text-xl xl:text-2xl flex justify-center items-center w-[80vw] md:w-[65vw] lg:w-[50vw] text-center mb-5'>"{selectLang[language].discripiton}"</p>
            <div className='text-md lg:text-lg bg-[#000] w-[80vw] md:w-[65vw] lg:w-[50vw] flex justify-center mt-2 pt-1 py-3'>{selectLang[language].book}</div>
        </div>
    </div>
  )
}

export default BottonSection