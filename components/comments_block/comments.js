import styles from './comments.module.scss'
import titleStyles from '../titleStyles.module.scss'

export default function Comments(){
  return(
    <React.Fragment>
      <div className={styles.comments}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h2 className={styles.title}>
                <div className={titleStyles.boxedLetter}>S</div> ee what our{" "}
                <p className={titleStyles.blueText}>users</p> say
              </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow1.png" />
              </button>
            </div>
            <div className="col-lg-10 slider">
              <ul className="comment">
                <li>
                  <img src="/assets/images/comments_images/Ellipse 161.png"/>
                  <h1>Ivanov Ivan</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow2.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}