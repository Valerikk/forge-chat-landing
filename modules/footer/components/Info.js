import FooterTitle from "./FooterTitle";
import style from "./info.module.scss";
import Product from "./Product";
import { withTranslation } from "../../../i18n";
import PropTypes from "prop-types";

function Footer({ t }) {
  const footerLinks = [
    {
      title: t("INFO.PRODUCT.TITLE"),
      links: [
        {
          text: t("INFO.PRODUCT.PRODUCTS.HOW_IT_WORKS"),
          href: "#",
        },
        {
          text: t("INFO.PRODUCT.PRODUCTS.PRISING"),
          href: "#",
        },
        {
          text: t("INFO.PRODUCT.PRODUCTS.CUSTOMIZATION"),
          href: "#",
        },
        {
          text: t("INFO.PRODUCT.PRODUCTS.INTEGRATION"),
          href: "#",
        },
        {
          text: t("INFO.PRODUCT.PRODUCTS.DOCUMENTATION"),
          href: "#",
        },
      ],
    },
    {
      title: t("INFO.COMPANY.TITLE"),
      links: [
        {
          text: t("INFO.COMPANY.PRODUCTS.ABOUT_US"),
          href: "#",
        },
        {
          text: t("INFO.COMPANY.PRODUCTS.BLOG"),
          href: "#",
        },
        {
          text: t("INFO.COMPANY.PRODUCTS.CONTACT_US"),
          href: "#",
        },
        {
          text: t("INFO.COMPANY.PRODUCTS.OUR_PRODUCTS"),
          href: "#",
        },
        {
          text: t("INFO.COMPANY.PRODUCTS.TERMS_AND_CONDITIONS"),
          href: "#",
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className={`container ${style.footer}`}>
        <div className="row">
          <FooterTitle />
          {footerLinks.map((item) => (
            <Product title={item.title} array={item.links} />
          ))}
          <div className="col-md-4">
            <div className={style.title}>Contact Us</div>
            <div>
              <ul className={style.list}>
                <li>
                  <img src="/assets/images/footer_images/mail.png"></img>
                  forge.solutions@gmail.com
                </li>
                <li>
                  <img src="/assets/images/footer_images/phone.png"></img>
                  +38000000000 +38000000000
                </li>
                <li>
                  <img src="/assets/images/footer_images/adress.png"></img>
                  Ukraine, Kharkiv, Blagoveshen’ska str.,1
                </li>
                <li className={style.networks}>
                  <img
                    className={style.miniImg}
                    src="/assets/images/footer_images/Inst.png"
                  ></img>
                  <img
                    className={style.miniImg}
                    src="/assets/images/footer_images/facebook.png"
                  ></img>
                  <img
                    className={style.miniImg}
                    src="/assets/images/footer_images/twitter.png"
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Footer.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Footer);
