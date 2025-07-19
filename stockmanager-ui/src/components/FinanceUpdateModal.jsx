import InputField from "./InputField";

const FinanceUpdateModal = () => {

    const fields = ["Mutual Fund name", "Mutual Fund amount"];
    return (
        <div class="modal fade modal-xl" tabindex="-1" id="financeUpdateModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {fields.map((field, index) => (
                            <InputField key={index} field={field} label={field} />
                        ))
                    }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinanceUpdateModal;