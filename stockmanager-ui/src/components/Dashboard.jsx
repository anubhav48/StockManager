import FinanceTracker from "./FinanceTracker.jsx";

export default function Dashboard() {
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <FinanceTracker />
                </div>
                <div class="col">
                    <div class="card mt-3 m-2">
                        <div class="card-body">
                            <h3>Dashboard</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}