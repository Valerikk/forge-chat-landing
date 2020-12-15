import style from "./Packs.module.scss";
import PrisePack from "./PricePack";
import ReasonsTextCard from '../../common/components/ReasonTextCard';
import DescribingText from '../../common/components/DescribingText';
import { withTranslation } from '../../../i18n';
import PropTypes from 'prop-types';
import {useState} from 'react'
import PackButton from "./PackButton";
function Packs({t}) {
  const RATES = {
    MONTHLY: "monthly",
    YEARLY: "yearly"
  }
  const [currentRate, setCurrentRate] = useState(RATES.MONTHLY)
  const prices = {
    [RATES.MONTHLY]:[
      {
        price: "$19",
        rate:"month",
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
        rate:"month",
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
        rate:"month",
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
        rate:"month",
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
        isPopular: false
      }
    ],
    [RATES.YEARLY]:[
      {
        price: "$119",
        rate:"year",
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
        price: "$239",
        name: "Base",
        rate:"year",
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
        price: "$399",
        name: "Pro",
        rate:"year",
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
        price: "$599",
        rate:"year",
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
        isPopular: false
      }
    ]
  }

  const ChoiseRate = (rate) => {
    setCurrentRate(rate)
  }
  return (
    <React.Fragment>
      <div className={style.packs}>
        <div className={`container ${style.packsContainer}`}>
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
          <div className={`row justify-content-center ${style.describingText}`}>
            <div className={`col-lg-4`} >
                <DescribingText
                  reasonsKey="PACKS_TEXT"
                  t={t}
                  aligment="center"
                />
            </div>
          </div>
          <div className="row justify-content-center">
            <PackButton 
              currentRate={currentRate}
              buttonRate={RATES}
              setRate={ChoiseRate}
            />
          </div>
          <div className={`row ${style.table}`}>
          {prices[currentRate].map((price) => (
            <PrisePack
            price={price.price}
            rate={price.rate}
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