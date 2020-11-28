import styles from './main.module.scss';
export default function Main(){
  return(
    <React.Fragment>
      <div className={styles.main}>
        <div className="container">
          <img
            className={styles["second-background"]}
            src="assets/images/main_images/screens.svg"
          />
          <div className="row">
            <div className="col-md-2">
              <img
                className={styles["logo"]}
                src="assets/images/main_images/logo.svg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2 className={styles["first-text"]}>
                Engage your customers with a{" "}
                <div className="conversation-text">conversations</div>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className={styles["under-first-text"]}>
                Helping your customers quickly, with real and smart responses.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <button className={styles["try-button"]}>Try for free</button>
              <button className={styles["play"]}>
                <img
                  className={styles["play-img"]}
                  src="assets/images/main_images/play button.svg"
                  alt="text"
                />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p className={styles["guestion-under-button"]}>
                Already have an account?
                <a href="#" className={styles["sign-link"]}>
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}