import style from "../services/Packs.module.scss";
import PrisePack from "./PricePack";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

function Packs({t}) {
  const prices = [
    {
      price: "$19",
      name: "Intro",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
      ],
      isPopular: false,
    },
    {
      price: "$39",
      name: "Base",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum "
      ],
      isPopular: false,
    },
    {
      price: "$99",
      name: "Pro",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
      ],
      isPopular: true,
    },
    {
      price: "$199",
      name: "Interprise",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      list: [
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
        "Lorem ipsum ",
      ],
      isPopular: false,
    }
  ];
  return (
    <React.Fragment>
      <div className={style.packs}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <ReasonsTextCard
                reasonsKey="PRISING"
                t={t}
                alignment="center"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <p className={style.text}>
                Choose a plan that works best for you and your team.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div id="buttons" class="packs-buttons">
              <button class="button">Monthly</button>
              <button class="button">Yearly</button>
            </div>
          </div>
          <div className="row table">
          {prices.map((price) => (
            <PrisePack
            price={price.price}
            name={price.name}
            text={price.text}
            list={price.list}
            isPopular={price.isPopular}
          />
          ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
Packs.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Packs.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Packs)