import React from 'react'

export function About(props) {

  let backgroundClass = () => {
    return (props.mode === 'dark') ? ' bg-dark text-light' : ' bg-light text-dark'
  }
  let backgroundHeaderClass = () => {
    return (props.mode === 'dark') ? ' bg-dark text-light' : ' bg-light text-primary'
  }
  return (
    <div className="container my-5">
      <div className={backgroundClass()}>
        <div className="accordion" id="accordionExample">
          <div className={"accordion-item " + backgroundClass()}>
            <h2 className="accordion-header" id="headingOne">
              <button className={"accordion-button" + backgroundHeaderClass()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Text Utils
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>One stop for all your text utilities</strong> <br />
                Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data.
              </div>
            </div>
          </div>
          <div className={"accordion-item" + backgroundClass()}>
            <h2 className="accordion-header" id="headingTwo">
              <button className={"accordion-button collapsed" + backgroundHeaderClass()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Ad free
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong> Enjoy ad free experience  </strong>
              </div>
            </div>
          </div>
          <div className={"accordion-item" + backgroundClass()}>
            <h2 className="accordion-header" id="headingThree">
              <button className={"accordion-button collapsed" + backgroundHeaderClass()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Free to Use
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>It is absolutely free to use</strong><br />
                You can also download your text once done with necessary modifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
