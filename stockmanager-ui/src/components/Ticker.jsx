import React, { useEffect, useState, useRef } from "react";
import "../styles/ticker.css"; 
import axios from "axios";

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
  const [stockData, setStockData] = useState({name: "", price: 0, change: 0});
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  const [loading, setLoading] = useState(true);
  const tickerRef = useRef(null);
  const [noFade, setNoFade] = useState(false);


 const handleAnimationEnd = () => {
      const ticker = tickerRef.current;
      if (!ticker) return;
      setNoFade(true);
      console.log("Animation ended");
      ticker.classList.remove("animate-fade-marquee");
      ticker.classList.add("animate-marquee");
    };

  useEffect(() => {
    setLoading(true);
    const fetchStockData = async () => {
        
        const stockData = await axios.get("http://localhost:8080/indianapi-trending");

        stockData.data.trending_stocks.top_gainers.forEach((stock) => {
            setTopGainers((prev) => [...prev, {name: stock.company_name, price: stock.price, change: stock.percent_change}]);
        });

        stockData.data.trending_stocks.top_losers.forEach((stock) => {
            setTopLosers((prev) => [...prev, {name: stock.company_name, price: stock.price, change: stock.percent_change}]);
        });
        setTimeout(() => {
            setLoading(false);
        }, 10000);
    }

  // fetchStockData();
  }, []);

  return (
    <div className="overflow-hidden bg-body-tertiary text-white py-1 px-4 no-wrap border-bottom ">
    {loading ? (
      <div ref={tickerRef} className="animate-fade-marquee inline-block min-w-full inline-flex overflow d-inline-flex flex-nowrap"
        onAnimationEnd={handleAnimationEnd}>
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Loading latest updates...</strong>
        </span>
      </div>): ""}
        {!loading ? (
          <>
      <div ref={tickerRef} className="animate-fade-marquee inline-block min-w-full inline-flex overflow d-inline-flex flex-nowrap"
      onAnimationEnd={handleAnimationEnd}>
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Gainers - </strong>
        </span>
        {topGainers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'green', marginLeft:'5px'}}><i class="bi bi-caret-up-fill"></i>{stock.change}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Losers - </strong>
        </span>
        {topLosers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'red', marginLeft:'5px'}}><i class="bi bi-caret-down-fill"></i>{Math.abs(stock.change)}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Gainers - </strong>
        </span>
        {topGainers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'green', marginLeft:'5px'}}><i class="bi bi-caret-up-fill"></i>{stock.change}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Losers - </strong>
        </span>
        {topLosers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'red', marginLeft:'5px'}}><i class="bi bi-caret-down-fill"></i>{Math.abs(stock.change)}%</span>
            </span>
        ))}
      </div>
           <div ref={tickerRef} className="animate-fade-marquee inline-block min-w-full inline-flex overflow d-inline-flex flex-nowrap"
      onAnimationEnd={handleAnimationEnd}>
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Gainers - </strong>
        </span>
        {topGainers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'green', marginLeft:'5px'}}><i class="bi bi-caret-up-fill"></i>{stock.change}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Losers - </strong>
        </span>
        {topLosers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'red', marginLeft:'5px'}}><i class="bi bi-caret-down-fill"></i>{Math.abs(stock.change)}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Gainers - </strong>
        </span>
        {topGainers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'green', marginLeft:'5px'}}><i class="bi bi-caret-up-fill"></i>{stock.change}%</span>
            </span>
        ))}
        <span className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>Top Losers - </strong>
        </span>
        {topLosers.map((stock, index) => (
            <span key={index} className="mx-1 d-inline-flex flex-nowrap flex-shrink-0">
                <strong>{stock.name}</strong> - ₹{stock.price} <span style={{color: 'red', marginLeft:'5px'}}><i class="bi bi-caret-down-fill"></i>{Math.abs(stock.change)}%</span>
            </span>
        ))}
      </div>
      </>
        ) : ""}

      {/* <button className="btn btn-primary ms-3" onClick={fetchStockData} /> */}
    </div>
  );
};

export default Ticker;
