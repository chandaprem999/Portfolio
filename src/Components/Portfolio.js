import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {/* lumen5 clone */}
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/srikanta30/Shoppers-Stop-Back-End"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/thumbs/shoppers-stop-clone.png"
                      alt="js-capstone"
                    />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Shoppers-Stop</h3>
                      <p>
                        Shoppers Stop is an Indian department store chain, owned
                        by the K Raheja Corp. There are 86 stores across 40
                        cities in India, with clothing, accessories, handbags,
                        shoes, jewellery, fragrances, cosmetics, health and
                        beauty products, home furnishing, and decor products
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://shoppers-stop-com.herokuapp.com/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/srikanta30/Shoppers-Stop-Back-End"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-mongodb-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              {/* Premeir League clone */}
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/chandaprem999/Unit2-TVC-mall-project"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/thumbs/TVC-mall-clone.png"
                      alt="react-capstone"
                    />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>TVC-mall Clone</h3>
                      <p>
                        TVC-mall is a cross-border e-commerce company which is
                        mainly specialized in mobile phone accessories products
                        wholesale, and with the expansion of electronic products
                        and related accessories.{" "}
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://tvcmallclone.netlify.app"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/chandaprem999/Unit2-TVC-mall-project"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-javascript-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              {/* urbanCompany clone */}
              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/AleemAlam/Urban-Company"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/thumbs/UrbanCompany_clone.png"
                      alt="pic-some"
                    />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Urban Company Clone</h3>
                      <p>
                        Urban Company is an Indian gig marketplace that offers
                        home installation, maintenance and repair services, and
                        home beauty and wellness services. We have focused on
                        the AC services section.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="https://urban-company-clone.netlify.app/"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/AleemAlam/Urban-Company"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                        <i className="devicon-redux-original technology"></i>
                      </div>
                    </ul>
                  </div>
                </article> 
               </div> */}

              {/* <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a
                    href="https://github.com/kamalgupta97/yatra_clone"
                    className="image fit thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="images/thumbs/yatra_clone.png"
                      alt="final-capstone"
                    />
                  </a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Yatra Clone</h3>
                      <p>
                        Yatra.com is an Indian online travel agency and travel
                        search engine. We mainly focused on bus booking.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a
                            href="#"
                            className="button project-button"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-disabled
                          >
                            Demo
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/kamalgupta97/yatra_clone"
                            className="button project-button brands"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-github icon"></i>View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology"></i>
                        <i className="devicon-redux-original technology"></i>

                        <i className="devicon-nodejs-plain technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div> */}

              {/* <ul className="actions">
                <li className="wide-button"><a href="https://github.com/rammazzoti2000" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Full Portfolio</a></li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
