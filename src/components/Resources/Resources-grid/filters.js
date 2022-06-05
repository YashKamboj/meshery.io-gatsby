import React, { useState } from "react";
import { options } from "./options";


import ResourceNavigationWrapper from "./filters.style";

const Navigation = (props) => {

  const data = React.useMemo(() => options);
  let typeOptions = data.filter((data) => data.category === "Categories");
  let productOptions = data.filter((data) => data.category === "Compatibilty");
  let techOptions = data.filter((data) => data.category === "Technology");
  let i=0;


  return (
    <ResourceNavigationWrapper>
      <div className="filter">
        <div className="list">
        <p className="heading"><strong>Categories:</strong></p>
          <ul >
            {typeOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>     
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="list">
        <p className="heading"><strong>Compatibilty:</strong></p>
          <ul >
            {productOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>
  
                </label> 
              </li>
            ))}
          </ul>
        </div>

        <div className="list">
        <p className="heading"><strong>Technology:</strong></p>
          <ul >
            {techOptions[0].subdata.map((x) => (
              <li key={x.id}>
                <label>
                  <input type="checkbox"  value={x.value} onChange={props.handleChange} />
                  <span> {x.label}</span>

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