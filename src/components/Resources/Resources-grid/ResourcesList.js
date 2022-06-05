import React from "react";

// Components
import ResourcesGrid from "./index";
import DataWrapper from "./DataWrapper";
import { options } from "./options";


const ResourcesList = (props) => {
  let data = [];
  let all = [];
  //arrays to store filtered list of resources based on individual filters
  let typeData = [];  
  let productData = [];  
  let techData = [];   
  let result = [];
  
  //arrays storing the options selected to filter
  let types =[];
  let products =[];
  let tech =[];

  const optionData = React.useMemo(() => options);
  let typeOptions = optionData.filter((data) => data.category === "Categories");
  let productOptions = optionData.filter((data) => data.category === "Compatibilty");
  let techOptions = optionData.filter((data) => data.category === "Technology");

  //mapping all filters to separate individual category filters
  props.resources.map((type) => {
    typeOptions[0].subdata.map((x) => {
      if(type === x.value){
        types.push(type);
      }
    });
    productOptions[0].subdata.map((x) => {
      if(type === x.value){
        products.push(type);
      }
    });
    techOptions[0].subdata.map((x) => {
      if(type === x.value){
        tech.push(type);
      }
    });
  });

  let totalTypes = types.length;
  let totalProducts = products.length;
  let totalTech = tech.length;

  if(props.allResources.length>0) {
    props.allResources.forEach((resources) => {
      all.push(resources);
      types.map((type) => {
        if(resources.type === type) {
          typeData.push(resources);
        }
      });

      products.map((product) => {
        if(resources.compatibility === product) {
          productData.push(resources);
        }
      });

      tech.map((tech) => {
        if(resources.technology === tech) {
          techData.push(resources);
          console.log(resources)
        }
      });

      if(totalTypes === 0) typeData = all;
      if(totalProducts === 0) productData = all;
      if(totalTech === 0) techData = all;

      result = [typeData, productData, techData]
      
      data = result.reduce((a, b) => a.filter(c => b.includes(c)));
    });
  } else{ 
    props.allResources.forEach((resources) => {
      data.push(resources);
    });
  }
    
    return <ResourcesGrid data={[...new Set(data)]} {...props} />;

};

export default DataWrapper(ResourcesList);
