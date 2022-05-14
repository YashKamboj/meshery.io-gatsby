import React from "react";
import { Container, Row, Col } from "../../reusecore/Layout";
import InfoBannerStyle from "./infoBanner.style";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function InfoBanner({InfoImage, InfoTitle, InfoContent,InfoButton}) {
  return (
    <InfoBannerStyle>
      <Container fullWidthSM>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <Link to="/service-mesh-management/meshery">
              <StaticImage
                className="mesh-image"
                alt="Meshery - the multi-service mesh manager"
                src={InfoImage}
              />
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="side">
              <div className="side-text">{InfoTitle}</div>
              <div className="description">
                <p>{InfoContent}</p>
              </div>

              <div className="backBtn">
                <br />
                <Link to="/service-mesh-management/meshery">
                  <button>
                    {InfoButton}
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </InfoBannerStyle>
  );
}

export default InfoBanner;
