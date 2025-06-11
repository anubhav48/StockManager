import logo from './logo.svg';
import './App.css';

function App() {

//   document.getElementById('calc-form').addEventListener('submit', async function(event) {
//   event.preventDefault();

//   const payload = {
//     profit: parseFloat(document.getElementById('profit').value),
//     currPrice: parseFloat(document.getElementById('currPrice').value),
//     taxPercent: parseFloat(document.getElementById('taxPercent').value),
//     extraUnitsPercent: parseFloat(document.getElementById('extraUnitsPercent').value),
//   };

//   const response = await fetch("http://localhost:8080/calculate", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(payload),
//   });

//   const targetPrice = await response.json();
//   document.getElementById('result').textContent = `🎯 Target Buy-Back Price: ₹${targetPrice.toFixed(2)}`;
// });

  return (
  <div class="container">
    <h1>Stock Buy-Back Price Calculator</h1>
    <form id="calc-form">
      <label>Profit: <input type="number" id="profit" value="18493.25" /></label>
      <label>Current Price: <input type="number" id="currPrice" value="261.86" /></label>
      <label>Tax Percent: <input type="number" id="taxPercent" value="12.5" /></label>
      <label>Extra Units Percent: <input type="number" id="extraUnitsPercent" value="10" /></label>
      <button type="submit">Calculate</button>
    </form>
    <p id="result"></p>
  </div>
  );
}

export default App;
