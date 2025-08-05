import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";



const ShareButtons = ({language}) => {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  

  const messageEnglish = `🌟 Join me in sending Durood upon our beloved Prophet ﷺ!\n🕊️ Every Durood counts. Let’s reach our goal before 12th Rabi' al-Awwal!\n\n🤲 Submit your Durood now: ${currentUrl}\n\n💖 A small deed, a great reward.`;
  const messageHindi = `🌟 आइए हमारे प्यारे नबी ﷺ पर दरूद भेजें!\n🕊️ हर दरूद मायने रखता है। आइए 12 रबीउल अव्वल से पहले अपना लक्ष्य पूरा करें!\n\n🤲 अभी दरूद भेजें: ${currentUrl}\n\n💖 एक छोटा-सा अमल, बड़ी नेमत।`;
  const messageUrdu = `🌟 آئیے ہمارے پیارے نبی ﷺ پر درود بھیجیں!\n🕊️ ہر درود قیمتی ہے۔ آئیے 12 ربیع الاول سے پہلے ہمارا ہدف پورا کریں!\n\n🤲 اپنا درود ابھی جمع کروائیں: ${currentUrl}\n\n💖 ایک چھوٹا سا عمل، بڑا انعام۔`;

  let message;

  if(language == "urdu"){
    message = messageUrdu;
  }else if(language == "hindi"){
    message = messageHindi;
  }else {
    message = messageEnglish;
  }
  
  const encodedMessage = encodeURIComponent(message);

  return (
    
<div className="flex gap-4 justify-center font-sans">
  {/* WhatsApp Button */}
  <a
    href={`https://wa.me/?text=${encodedMessage}%20${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-green-800 text-white px-4 py-2 rounded-full shadow-sm hover:bg-green-900 transition"
  >
    <FaWhatsapp className="text-white w-4 h-4" />
    <span className="text-sm font-medium">Share</span>
  </a>

  {/* Facebook Button (outlined) */}
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 border bg-blue-700 border-green-800 text-green-800 px-4 py-2 rounded-full hover:bg-blue-600 transition"
  >
    <FaFacebook className="w-4 h-4 text-white" />
    <span className="text-sm font-medium text-white">Share</span>
  </a>
</div>

  );
};

export default ShareButtons;
