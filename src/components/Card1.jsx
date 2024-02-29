import { useState } from 'react';
import './Card.css';

export default function Card1(props) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, setShowAlert] = useState(true);
   
    const [email, setEmail] = useState('');
    const [emailAlert, setEmailAlert] = useState(false);

    const [contactNumber, setContactNumber] = useState('');
    const [contactNumberAlert, setContactNumberAlert] = useState(false);

    const checkEmail = (e) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(e.target.value);
        setEmail(e.target.value);
        setEmailAlert(!isValidEmail);
    };

    const checkContactNumber = (e) => {
        const isValidContactNumber = e.target.value.length === 10;
        setContactNumber(e.target.value);
        setContactNumberAlert(!isValidContactNumber);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setShowAlert(true);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setShowAlert(true);
    };

    const passwordsMatch = () => {
        return password === confirmPassword;
    };

    function importData() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            let files = Array.from(input.files);
            console.log(files);
        };
        input.click();
    }

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
                        <span className="input-group-text" id="addon-wrapping">Name</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">Organization Name</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={email} onChange={checkEmail} />
                    </div>
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Contact No.</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={contactNumber} onChange={checkContactNumber} />
                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Confirm Password</span>
                        <input type="password" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" value={confirmPassword} onChange={handleConfirmPasswordChange} />

                    </div>
                </div>

                <div className="d-flex justify-content-center my-2">
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">DOB</span>
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="mx-5 input-group flex-nowrap short-input">
                        <span className="input-group-text" id="addon-wrapping">Photo</span>
                        <div className='image-select'>
                            <button onClick={importData} className='btn pg-3-btn'>Choose File</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center btn-margin">
                    <button className="mx-5 btn btn-color" onClick={() => { props.onNext(); console.log("Next button clicked in Card1"); }} data-bs-slide-to="1">Next</button>
                    <button className="mx-5 btn btn-color">Cancel</button>
                </div>
                {!passwordsMatch() && showAlert && <div className="alert-pass">Passwords do not match</div>}
                {emailAlert && <div className="alert-pass">Invalid email</div>}
                {contactNumberAlert && <div className="alert-pass">Number must be 10 digits</div>}

            </div>
        </>
    )
}
