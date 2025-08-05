import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { countryToCode } from './utlis/dataSet';



function timeAgo(dateString) {
  const now = new Date();
  const createdAt = new Date(dateString);
  const seconds = Math.floor((now - createdAt) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

console.log(timeAgo("2025-07-27T13:08:09.906Z"));



function SenderList({language, total}) {

    const [userList, setUserList] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URI; 

  console.log("API URL:", apiUrl);

    const selectLang = {
        eng: {
            tag: "Recent Submissions",
        },
        hindi: {
            tag: "हाल की सबमिशन",
        },
        urdu: {
            tag: "حالیہ گذارشات",
        }
    }



      useEffect(()=>{

    (async () => {
      try {
        const response = await axios.get(`${apiUrl}/recent`);
        console.log("Success:", response.data.info);
        setUserList(response.data.info);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    })();


    },[total])

  return (
    <div className='flex justify-center mt-5 text-white  font-sans'>
    <div className='w-[80vw] md:w-[65vw] lg:w-[50vw] flex flex-col items-center'>
        <h2 className='text-3xl self-start font-bold'>{selectLang[language].tag}</h2>
        <div className='w-full'>
            {userList.map((user, index) => {
            return (
                <div key={index} className="flex mt-2 pb-1 justify-between border-b-2 border-gray-600">
                    <div className='flex gap-3'>
                        {user.country != "" && <img src={`https://flagcdn.com/24x18/${countryToCode[user.country]}.png`} className='rounded-lg size-5 mt-2' />} 

                        {user.country == "" && 
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" className='mt-1'
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                          <path d="M12 2a15.3 15.3 0 0 0 0 20" />
                        </svg>
                        }
                        
                        <p>{user.name? `${user.name}` : "A Beloved Soul"}</p>
                    </div>
                    <div>
                        <p>{timeAgo(user.createdAt)}</p>
                    </div>
                </div>
            );
            })}

        </div>
    </div>
    </div>
  )
}

export default SenderList