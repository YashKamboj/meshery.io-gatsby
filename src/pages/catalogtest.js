import React, { useState } from "react";

// Components
import Layout from "../Layout/layout";
import ResourcesList from "../components/Resources/Resources-grid/ResourcesList";
// import ResourcesNavigation from "../components/Resources/Resources-grid/filters";


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
              {/* <ResourcesNavigation handleChange={handleChange} resources={filter} /> */}
              <ResourcesList resource={filter} />
              {/* <h1>Catalog</h1> */}
      </Layout>
  );
};

export default MembersPage;
