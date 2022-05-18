import React from "react";
import Layout from "../Layout/layout";
import Features from "../components/Catalog/features"
import Catalogcard from "../components/Catalog/catalog_card"
import patternsdata from "../components/Catalog/patterns.data" 
import Col from "../reusecore/Layout/Col"

const CatalogPage = () => {
    return (
      <Layout >
          <div style={{maxWidth:"1140px", margin: "0 auto"}}>
          <h1>Service Mesh Catalog </h1>
          <Features />
          
          <div className="list" >
          {patternsdata.map((pattern) => {
            if(pattern.Status !== "ComingSoon"){
            return(
              <Col xs={12}>
                <Catalogcard pattern={pattern} /> 
              </Col>
            )
            }
          })}
          </div>
          </div>
      </Layout>

      );
    };
    
    export default CatalogPage;