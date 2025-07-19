import { useEffect, useState } from "react";
import "../styles/dashboard.css"
import FinanceUpdateModal from "./FinanceUpdateModal";

const FinanceTracker = () => {
    const [mutualFunds, setMutualFunds] = useState(0);
    const [stocks, setStocks] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setMutualFunds(34000);
        setStocks(56000);
    },[]);

    useEffect(() => {
        setTotal(mutualFunds + stocks); 
    }, [mutualFunds, stocks]);
    
    return (
        <>
        <div class="row mt-3 m-2">
            <div class="col pl-0">
                <div class="card ">
                    <div class="card-body">
                        <span>Total</span>
                        <h5>₹ {total}</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card card-clickable" data-bs-toggle="modal" data-bs-target="#financeUpdateModal">
                    <div class="card-body">
                        <span>Mutual Funds</span>
                        <h5>₹ {mutualFunds}</h5>
                    </div>
                </div>
            </div>
            <div class="col pr-0">
                <div class="card card-clickable">
                    <div class="card-body">
                        <span>Stocks</span>
                        <h5>₹ {stocks}</h5>
                    </div>
                </div>
            </div>
        </div>

        <FinanceUpdateModal />
        </>
    );
}

export default FinanceTracker;