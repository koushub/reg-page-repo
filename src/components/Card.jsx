import './Card.css';
export default function Card() {
    return (
        <>
            <div className="card">
                <div className="d-flex justify-content-center">
                    <div className="personal d-flex justify-content-center">
                        <h4>Personal Information</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div class="input-group flex-nowrap long-input">
                        <span class="input-group-text" id="addon-wrapping">Name</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div class="input-group flex-nowrap long-input">
                        <span class="input-group-text" id="addon-wrapping">Organization Name</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">Email</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">Contact No.</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">Password</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">Confirm Password</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">DOB</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="mx-5 input-group flex-nowrap short-input">
                        <span class="input-group-text" id="addon-wrapping">Photo</span>
                        <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button className="mx-5 btn bg-warning">Next</button>
                    <button className="mx-5 btn bg-warning">Cancel</button>
                </div>
            </div>
        </>
    )
}