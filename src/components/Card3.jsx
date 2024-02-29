import './Card.css';

export default function Card3(props) {
    // const { inputs } = props;
    function importData() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
          // you can use this method to get file and perform respective operations
                  let files =   Array.from(input.files);
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

                <div className="d-flex justify-content-center my-2 top-margin">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">Aadhar No.</span>
                        <div className='image-select-2'>
                            <button onClick={importData} className='btn pg-3-btn'>Choose File</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">ABC ID</span>
                        <div className='image-select-3'>
                            <button onClick={importData} className='btn pg-3-btn'>Choose File</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-2">
                    <div className="input-group flex-nowrap long-input">
                        <span className="input-group-text" id="addon-wrapping">Enrollment ID</span>
                        <div className='image-select image-select-4'>
                            <button onClick={importData} className='btn pg-3-btn'>Choose File</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center my-5">
                    <button className="mx-5 btn btn-color">Next</button>
                    <button className="mx-5 btn btn-color">Cancel</button>
                </div>
            </div>
        </>
    )
}