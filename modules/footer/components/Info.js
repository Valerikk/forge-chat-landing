import style from './info.module.scss';


export default function Footer(){
  return(
    <React.Fragment>
      <div className={`container ${style.footer}`}>
        <div className="row">
          <div className="col-md-3">
            <img src="/assets/images/footer_images/LogoChat.png"></img>
            <p className={style.forgeChat}>Forge:chat</p>
          </div>
          <div className="col-md-3">
            <div className={style.title}>Product</div>
              <div>
                <ul className={style.list}>
                  <li><a>How it works</a></li>
                  <li><a>Pricing</a></li>
                  <li><a>Customization</a></li>
                  <li><a>Integration</a></li>
                  <li><a>Documentation</a></li>
                </ul>
              </div>
          </div>
          <div className="col-md-3">
            <div className={style.title}>Company</div>
              <div>
                <ul className={style.list}>
                  <li><a>About Us</a></li>
                  <li><a>Blog</a></li>
                  <li><a>Contact Us</a></li>
                  <li><a>Our Products</a></li>
                  <li><a>Terms and Conditions</a></li>
                </ul>
              </div>
          </div>
          <div className="col-md-3">
            <div className={style.title}>Contact Us</div>
            <div>
                <ul className={style.list}>
                  <li>
                    <img src="/assets/images/footer_images/mail.png"></img>
                    forge.solutions@gmail.com
                  </li>
                  <li>
                    <img src="/assets/images/footer_images/phone.png"></img>
                    +38000000000   +38000000000
                  </li>
                  <li>
                    <img src="/assets/images/footer_images/adress.png"></img>
                    Ukraine, Kharkiv, Blagoveshen’ska str.,1
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}