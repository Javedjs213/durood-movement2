import React, { useEffect, useState } from 'react';

const Countdown = ({language}) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(now.getFullYear(), 8, 25);

    
    if (now > target) {
      target.setFullYear(now.getFullYear() + 1);
    }

    const total = target.getTime() - now.getTime();

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white font-mono text-sm p-4">
      {language == "eng" && <p>💫 Countdown to the <strong>Day of Noor</strong></p>}

      {language == "hindi" && <p className='text-sm'>💫 बख़्शिशों वाली रात करीब हैं, <strong>नूर का दिन आने को है...</strong></p>}

      {language == "urdu" && <p>💫 <strong>یومِ نور</strong> کی آمد کا شمار</p>}
    
      <p>
        {String(timeLeft.days).padStart(2, '0')}d :
        {String(timeLeft.hours).padStart(2, '0')}h :
        {String(timeLeft.minutes).padStart(2, '0')}m :
        {String(timeLeft.seconds).padStart(2, '0')}s
      </p>
    </div>
  );
};

export default Countdown;
