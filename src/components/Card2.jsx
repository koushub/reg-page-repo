import './Card.css';

export default function Card2(props) {
    // const { inputs } = props;
    return (
        <>
            <div className="card">
                <div className="d-flex justify-content-center">
                    <div className="personal d-flex justify-content-center">
                        <h4>{props.Heading}</h4>
                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">Residence Address</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">Permanent Address</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">City</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Pincode</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Taluka</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">District </span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">State</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    
                </div>
                <div className="d-flex justify-content-center btn-margin">
                    <button className="mx-5 btn btn-color" onClick={() => {props.onNext(); console.log("Next button clicked in Card1");}} data-bs-slide-to="1">Next</button>
                    <button className="mx-5 btn btn-color">Cancel</button>
                </div>
            </div>
        </>
    )
}