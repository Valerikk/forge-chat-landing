import style from '../services/Questions.module.scss';

export default function Questions(){
  return(
    <React.Fragment>
      <div className={style.questions}>
        <div className="container">
          <div className={`row justify-content-center align-items-center ${style.block}`}>
            <div className="col-md-4">
              <h2 className={style.title}>Still have a questions?</h2>
              <p className={style.text}>Send us a message and we will get back to you as soon as possible</p>
            </div>
            <div className={`col-md-5 ${style.inputCol}`}>
              <form>
                <input className={style.nameInput} placeholder="Name"></input>
                <input className={style.emailInput} placeholder="Email"></input>
                <input className={style.areaInput}></input>
                <button className={style.button} type="submit" >Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}