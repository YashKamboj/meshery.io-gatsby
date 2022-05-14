import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import InfoBannerStyle from "./infoBanner.style";
import { Link } from "gatsby";
import Data from './sampleData'

function InfoBanner() {
  return (
    <InfoBannerStyle>
      <Container fullWidthSM>
        {Data.map((Data) => {
          return(
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Link to="/service-mesh-management/meshery">
              <img
                className="mesh-image"
                alt="Meshery - the multi-service mesh manager"
                src={Data.img}
              />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text"><p>{Data.title}</p></div>
              <div className="description">
                <p>{Data.content}</p>
              </div>

              <div className="backBtn">
                <br />
                <Link to="/service-mesh-management/meshery">
                  <button>
                    {Data.button}
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
          );
        })}
      </Container>
    </InfoBannerStyle>
  );
}

export default InfoBanner;
