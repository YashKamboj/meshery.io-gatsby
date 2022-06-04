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
        <p className="heading"><strong>Filters</strong></p>
            

        <div className="list">
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