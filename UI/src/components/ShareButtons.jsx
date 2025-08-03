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
    <div className="flex gap-4 text-2xl">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${encodedMessage}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600"
      >
        <FaWhatsapp />
      </a>

      {/* Instagram (link to profile as no direct share URL) */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500"
      >
        <FaInstagram />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <FaFacebook />
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default ShareButtons;
