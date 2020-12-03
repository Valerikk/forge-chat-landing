import style from '../services/email.module.scss';

export default function Email(){
  return(
    <React.Fragment>
      <div className={style.email}>
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
            style={{ "padding-top": 70 + "px", "padding-bottom": 30 + "px" }}
          >
            <div className="col-md-4">
              <h2 className={style.title}>Start engage with your customer 24/7</h2>
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor{" "}
              </p>
            </div>
            <div className="col-md-6">
              <div className={style.form}>
                <input type="email" id="input" className={style.input} />
                <button type="submit" className={style.submit}>
                  <p className={style.buttonText}>Get started</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}