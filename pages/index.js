import Head from 'next/head'
import Chatbot from '../components/chatbot_block/Chatbot';
import Livechat from '../components/livechat_block/Livechat';
import Calls from '../components/calls_block/Calls';
import Main from '../components/main_block/Main';
import Reasons from '../components/reason_block/reasons';
import Email from '../components/email_block/Email';
import Customitization from '../components/customitization_block/Customitization';
import Integration from '../components/integration_block/Integartion';
import Crm from '../components/crm_block/crm';
import Direct from '../components/direct_block/Direct';

export default function Home() {
  return (
    <React.Fragment>
    <Head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link href="./assets/fonts/Gilroy/stylesheet.css" rel="stylesheet"></link>
    </Head>

      <Main />

      <Reasons/>
      
      <Chatbot/>

      <Livechat/>

      <Calls/>

      <Email/>

      <Customitization />

      <Integration/>

      <div class="packs">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <h1 class="packs-title">
                <div class="boxed-letter">P</div> ricing to suit{" "}
                <p class="blue-text">all sizes</p> of buisiness
              </h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <p class="packs-text">
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
          <div class="row table" style={{ "margin-top": "60px" }}>
            <div class="col-md-3 pack">
              <h1 class="price">
                15$<p class="per-month">/ month</p>
              </h1>
              <h1 class="pack-name">Intro</h1>
              <p class="pack-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul class="packs-ul">
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
              </ul>
              <button class="choose-pack-button">Choose plan</button>
            </div>
            <div class="col-md-3 pack">
              <h1 class="price">
                39$<p class="per-month">/ month</p>
              </h1>
              <h1 class="pack-name">Base</h1>
              <p class="pack-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul class="packs-ul">
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
              </ul>
              <button class="choose-pack-button">Choose plan</button>
            </div>
            <div class="col-md-3 blue-pack">
              <div class="most-popular">Most popular</div>
              <h1 class="price">
                99$<p class="per-month">/ month</p>
              </h1>
              <h1 class="pack-name">Pro</h1>
              <p class="pack-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul class="packs-ul">
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
              </ul>
              <button class="choose-blue-pack-button">Choose plan</button>
            </div>
            <div class="col-md-3 pack">
              <h1 class="price">
                199$<p class="per-month">/ month</p>
              </h1>
              <h1 class="pack-name">Interprise</h1>
              <p class="pack-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul class="packs-ul">
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
                <li>Lorem ipsum </li>
              </ul>
              <button class="choose-pack-button">Choose plan</button>
            </div>
          </div>
        </div>
      </div>

      <Crm/>

      <Direct/>

      <div class="comments">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <h1 class="comments-title">
                <div class="boxed-letter">S</div> ee what our{" "}
                <p class="blue-text">users</p> say
              </h1>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-5">
              <p class="comments-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow1.png" />
              </button>
            </div>
            <div class="col-lg-10 slider">
              <ul class="comment">
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
            <div class="col-sm-1">
              <button>
                <img src="/assets/images/comments_images/arrow2.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
