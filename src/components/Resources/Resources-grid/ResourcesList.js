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
  let meshData = [];  
  let result = [];
  
  //arrays storing the options selected to filter
  let types =[];
  let products =[];
  let tech =[];
  let mesh =[];

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
  let totalMesh = mesh.length;

  if(props.allResources.length>0) {
    props.allResources.forEach((resources) => {
      all.push(resources);

      types.map((type) => {
        console.log(resources.filters.type, "catalog")

        if(resources.filters.type === type) {
          typeData.push(resources);
        }
      });

      products.map((product) => {
        if(resources.filters.compatibility.includes(product) ) {
          productData.push(resources);
        }
      });

      tech.map((tech) => {
        if(resources.filters.technology === tech) {
          techData.push(resources);
        }
      });

      if(totalTypes === 0) typeData = all;
      if(totalProducts === 0) productData = all;
      if(totalTech === 0) techData = all;
      if(totalMesh === 0) meshData = all;

      result = [typeData, productData, techData, meshData]
      data = result.reduce((a, b) => a.filter(c => b.includes(c)));
    });
  } else{ 
    props.data.forEach((resources) => {
      data.push(resources);
    });
  }

    return <ResourcesGrid data={[...new Set(data)]} {...props} />;

};

export default DataWrapper(ResourcesList);
