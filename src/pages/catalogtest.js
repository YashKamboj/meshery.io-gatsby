import React, { useState } from "react";

// Components
import Layout from "../Layout/layout";
import ResourcesList from "../components/Resources/Resources-grid/ResourcesList";
import ResourcesNavigation from "../components/Resources/Resources-grid/filters";
import Features from "../components/Resources/Resources-grid/Features/features"

const MembersPage = () => {
  const [filter, setFilter] = useState([]);

  const handleChange = () => {
    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    var filters = [];
    for (var i = 0; i < checkboxes.length; i++) {
      filters.push(checkboxes[i].value);
    }
    setFilter(filters);
  };

  return (
      <Layout>
        <div style={{ maxWidth: "1140px", margin: "auto" }}>
        <h1 style={{ marginTop: "2rem" }}>Service Mesh Catalog </h1>
        <Features />
        <div style={{display: "flex", gap:"2rem"}}>
              <ResourcesNavigation handleChange={handleChange} resources={filter} />
              <ResourcesList  resources={filter} />
              </div>
              </div>
      </Layout>
  );
};

export default MembersPage;
