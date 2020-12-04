import style from "../services/Packs.module.scss";
import PrisePack from "./PricePack";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
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
                backURL="/assets/images/packs_images/underline.png"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4">
                <DescribingText
                  reasonsKey="PACKS_TEXT"
                  t={t}
                  aligment="center"
                />
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