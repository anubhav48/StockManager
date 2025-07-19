import '../styles/stockCalc.css';
import React from 'react';
import { useState } from 'react';

function StockCalculator() {

  //   document.getElementById('calc-form').addEventListener('submit', async function(event) {
  //   event.preventDefault();

    const [profit, setProfit] = useState(18000);
    const [currPrice, setCurrPrice] = useState(261);
    const [taxPercent, setTaxPercent] = useState(12.5);
    const [extraUnitsPercent, setExtraUnitsPercent] = useState(10);

    const payload = {
      profit: parseFloat(profit),
      currPrice: parseFloat(currPrice),
      taxPercent: parseFloat(taxPercent),
      extraUnitsPercent: parseFloat(extraUnitsPercent),
    };

    async function getData(event){
      event.preventDefault();
      const response = await fetch("http://localhost:8080/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const targetPrice = data.targetPrice;
      console.log(targetPrice);
      document.getElementById('result').textContent = `🎯 Target Buy-Back Price: ₹${targetPrice.toFixed(2)}`;
    }

  return (
    <>
      <div className="card m-3">
        <div className="card-body">
          <h5>Stock Buy-Back Price Calculator</h5>
          <form className='calc-form' onSubmit={getData}>
            <div className="mb-3">
              <label for="profit">Profit</label>
              <input type="number" className="form-control" id="profit" placeholder="Profit" value={profit} onChange={e => setProfit(e.target.value)} />
            </div>

            <div className="mb-3">
              <label for="currPrice">Current Price:</label>
              <input type="number" step="any" className="form-control" id="currPrice" placeholder="Current Price" value={currPrice} onChange={e => setCurrPrice(e.target.value)} />
            </div>

            <div className="mb-3">
              <label for="taxPercent">Tax (%):</label>
              <input type="number" className="form-control" id="taxPercent" placeholder="Tax" value={taxPercent} onChange={e => setTaxPercent(e.target.value)} />
            </div>

            <div className="mb-3">
              <label for="extraUnitsPercent">Extra Units (%): </label>
              <input type="number" className="form-control" id="extraUnitsPercent" placeholder="Extra Units" value={extraUnitsPercent} onChange={e => setExtraUnitsPercent(e.target.value)} />
            </div>
            <button type="submit" className='btn btn-success'>Calculate</button>
          </form>
          <p id="result"></p>
        </div>
      </div>
    </>
  );
}

export default StockCalculator;
