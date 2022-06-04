import React, { useState } from "react";
import Layout from "../Layout/layout";
import Features from "../components/Catalog/features";
import Catalogcard from "../components/Catalog/cards/catalog_card";
import CommingSoonCard from "../components/Catalog/cards/commingSoon_Card";
import patternsdata from "../components/Catalog/patterns.data";
import wasmdata from "../components/Catalog/wasm.data";
import WasmCard from "../components/Catalog/cards/wasm_card";
import Filters from "../components/Catalog/filters";
import { Col, Row } from "../reusecore/Layout";
import Modal from "react-modal";

const CatalogPage = (value) => {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(patternsdata);
  
  // const types = patternsdata[3].filters

  const handleChange = () => {
    // var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    // var filters = [];
    // for (var i = 0; i < checkboxes.length; i++) {
    //   filters.push(checkboxes[i].value);
    // }
    // setFilter(filters);
    const result = data.filter((x) => x.type === "Deployment"  )
    setData(result);
  };

  return (
    <Layout>
      <div style={{ maxWidth: "1140px", margin: "auto" }}>
        <h1 style={{ marginTop: "2rem" }}>Service Mesh Catalog </h1>
        <Features />
        <div style={{display: "flex"}}>
        <Filters resources={filter} handleChange={handleChange} />
        <div className="list">
          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              // gap: "2rem",
            }}
          >
            {data.map((pattern) => {
              if (pattern.Status !== "ComingSoon") {
                return <Catalogcard pattern={pattern} />;
              }
            })}
            {wasmdata.map((pattern) => {
              return <Catalogcard pattern={pattern} />;
            })}
            {patternsdata.map((pattern) => {
              if (pattern.Status === "ComingSoon") {
                return <CommingSoonCard pattern={pattern}  />;
              }
            })}
          </Row>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
