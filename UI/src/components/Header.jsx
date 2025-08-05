import React from 'react'

function Header({ language, setLang }) {

    const handleChange = (e) =>{
        const lang = e.target.value;
        // console.log(lang);
        setLang(lang);
    }

  return (
    <div className="flex justify-between px-10 py-2 pb-3 pt-2 items-center  bg-[#063626]">
        <div className='text-[#FFF8DB]'>
            {language === 'eng' && <div>Durood <br /> Movement 1447h</div>}
            {language === 'hindi' && <div> दरूद <br /> आंदोलन 1447ह°</div>}
            {language === 'urdu' && 
            <div><div className='flex justify-center'> درود </div> تحریک ۱۴۴۷ھ</div>
            }
            
        </div>
            <select name="lang" className=" text-sm font-extrabold border-0 mr-1 px-1 pb-1  lg:pe-5 lg:ps-3 bg-[#FFF8DB] rounded"
                onChange={handleChange}
            >
                <option value="eng">English</option>
                <option value="hindi">हिन्दी</option>
                <option value="urdu">اردو</option>
            </select>
       
    </div>
  )
}

export default Header