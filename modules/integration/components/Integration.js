import style from "./integration.module.scss";
import ReasonsTextCard from "../../common/components/ReasonTextCard";
import DescribingText from "../../common/components/DescribingText";
import { withTranslation } from "../../../i18n";
import PropTypes from "prop-types";
import IntegrationCard from "./integrationCard";

function Integration({ t }) {
  return (
    <React.Fragment>
      <div className={style.integration}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-md-auto">
              <ReasonsTextCard
                reasonsKey="PERFECT_INTEGRATION"
                t={t}
                alignment="right"
                backURL="/assets/images/integration_images/underline.png"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <IntegrationCard
                reasonsKey="SLACK"
                t={t}
                linkToIcon="/assets/images/integration_images/Slack.png"
                buttonLink="https://slack.com/intl/en-ua/"
                right={false}
              />
              <IntegrationCard
                reasonsKey="SLACK"
                t={t}
                linkToIcon="/assets/images/integration_images/Slack.png"
                buttonLink="https://slack.com/intl/en-ua/"
                right={true}
              />
              <IntegrationCard
                reasonsKey="SLACK"
                t={t}
                linkToIcon="/assets/images/integration_images/Slack.png"
                buttonLink="https://slack.com/intl/en-ua/"
                right={false}
              />
              <IntegrationCard
                reasonsKey="SLACK"
                t={t}
                linkToIcon="/assets/images/integration_images/Slack.png"
                buttonLink="https://slack.com/intl/en-ua/"
                right={true}
              />
            </div>
            <div className="col-md-5 ml-md-auto">
              <DescribingText
                reasonsKey="INTEGRATION_TEXT"
                t={t}
                aligment="right"
              />
            </div>
          </div>
          {/*<div className="row">
          <IntegrationCard
            reasonsKey="SLACK"
            t={t}
            linkToIcon="/assets/images/integration_images/Slack.png"
            buttonLink="https://slack.com/intl/en-ua/"
            right={false}
          />
          <IntegrationCard
            reasonsKey="SLACK"
            t={t}
            linkToIcon="/assets/images/integration_images/Slack.png"
            buttonLink="https://slack.com/intl/en-ua/"
            right={true}
          />
  </div>*/}
        </div>
      </div>
    </React.Fragment>
  );
}
Integration.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Integration.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Integration);
