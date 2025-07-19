import '../styles/Layout.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import StockCalculator from './StockCalculator';
import Ticker from './Ticker';

export default function Layout() {

    return (
        <>
        <Ticker />
            <Navbar />
            <div className="layout">
                <div className="left-panel">
                    <StockCalculator />
                    <StockCalculator />
                </div>
                <div className="dashboard">
                    <Dashboard />
                </div>
            </div>
        </>
    );
}
