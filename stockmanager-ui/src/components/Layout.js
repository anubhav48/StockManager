import '../styles/Layout.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import StockCalculator from './StockCalculator';

export default function Layout() {

    return (
        <>
            <Navbar />
            <div className="layout">
                <div className="left-panel">
                    <StockCalculator />
                </div>
                <div className="dashboard">
                    <Dashboard />
                </div>
            </div>
        </>
    );
}
