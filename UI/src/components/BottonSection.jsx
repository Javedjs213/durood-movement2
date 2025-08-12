import React from 'react'

function BottonSection({language, total}) {

    const selectLang = {
        hindi: {
            tag: "कुल दरूद एकत्रित",
            discripiton: `"जो मुझ पर एक बार दरूद भेजता है, अल्लाह उस पर दस गुना रहमतें भेजता है..."`,
            book: "(मुस्लिम)"
        },
        eng: {
            tag: "Total Durood Collected",
            discripiton: `"Whoever sends blessings upon me once, Allah sends blessings upon him tenfold..."`,
            book: "(Muslim)"
        },
        urdu: {
            tag: "کل درود جمع ہو چکے ہیں",
            discripiton: `جو مجھ پر ایک بار درود بھیجتا ہے، اللہ اس پر دس گنا رحمتیں بھیجتا ہے`,
            book: "(مسلم)"
        }
    }

  return (
    <div className='w-full flex flex-col items-center mt-5 text-white'>
<div className="flex flex-col items-center text-white mb-10">
  <h1
    className="text-5xl sm:text-6xl"
    style={{ fontFamily: 'Arial, sans-serif' }}
  >
    {Number(total).toLocaleString('en-IN')}
  </h1>
  <h2
    className="text-base sm:text-lg md:text-xl font-medium"
    style={{ fontFamily: 'Arial, sans-serif' }}
  >
    {selectLang[language].tag}
  </h2>
</div>


        <div className='flex flex-col items-center'>
            <p className={`${language == "urdu" ? "text-3xl" : "text-md"} lg:text-xl xl:text-2xl flex justify-center items-center w-[80vw] md:w-[65vw] lg:w-[50vw] text-center`}>{selectLang[language].discripiton}</p>
            <div className={`${language == "urdu" ? "text:xl" :"text-md"} lg:text-lg w-[80vw] md:w-[65vw] lg:w-[50vw] flex ${language == "urdu" ? "justify-start" :"justify-end"} pt-1 py-3 font`}
            style={{fontFamily: 'Arial, sans-serif'}}
            >{selectLang[language].book}</div>
        </div>
    </div>
  )
}

export default BottonSection