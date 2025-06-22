import React, { useEffect, useState } from "react";
import "../styles/ticker.css"; 

const messages = [
  "Breaking News: React 19 is out!",
  "Weather Update: It's sunny in Bangalore!",
  "Stock Alert: Nifty 50 up by 1.2%",
  "Reminder: Stand up and stretch!",
  "Deal of the Day: 50% off on tech gadgets!",
  "Quote: 'Code is like humor. When you have to explain it, it’s bad.'",
];

const Ticker = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const getRandomText = () =>
      messages[Math.floor(Math.random() * messages.length)];

    setText(getRandomText());

    const interval = setInterval(() => {
      setText(getRandomText());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-black text-white py-2 px-4">
      <div className="animate-marquee inline-block min-w-full">
        {text}
      </div>
    </div>
  );
};

export default Ticker;
