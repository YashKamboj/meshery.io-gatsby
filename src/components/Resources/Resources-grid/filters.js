import React, { useState } from "react";
import { options } from "./options";


import ResourceNavigationWrapper from "./filters.style";

const Navigation = (props) => {

  const data = React.useMemo(() => options);
  let typeOptions = data.filter((data) => data.category === "Type");
  let productOptions = data.filter((data) => data.category === "Product");
  let techOptions = data.filter((data) => data.category === "Technology");
  let meshOptions = data.filter((data) => data.category === "Service Mesh");
  let i=0;
  
  const typesFieldValues = types.map(type => type.fieldValue);

  const productsFieldValues = products.map(product => product.fieldValue);
  const technologiesFieldValues = technologies.map(tech => tech.fieldValue);
  const meshesFieldValues = meshes.map(mesh => mesh.fieldValue);



  return (
    <ResourceNavigationWrapper>
      <div className="filter">
        <p className="heading"><strong>Filters</strong></p>
            

        <div className="list">
          <ul >
            {typeOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>
                  { types && types.map(type => (
                    type.fieldValue === x.value 
                  ))}
                  { typesFieldValues && !typesFieldValues.includes(x.value)}
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="list">
          <ul >
            {productOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>
                  { products && products.map(product => (
                    product.fieldValue === x.value
                  ))}
                  { productsFieldValues && !productsFieldValues.includes(x.value)}
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="list">
          <ul >
            {techOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>
                  { technologies && technologies.map(tech => (
                    tech.fieldValue === x.value 
                  ))}
                  { technologiesFieldValues && !technologiesFieldValues.includes(x.value)}

                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="list">
          <ul>
            {meshOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>
                  { meshes && meshes.map(mesh => (
                    mesh.fieldValue === x.value
                  ))}
                  { meshesFieldValues && !meshesFieldValues.includes(x.value) }

                </label> 
              </li>
            ))}
          </ul>
        </div>
      

      </div>
      
    </ResourceNavigationWrapper>
  );
};

export default Navigation;