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

  console.log(props)

  const optionData = React.useMemo(() => options);
  let typeOptions = optionData.filter((data) => data.category === "Type");
  let productOptions = optionData.filter((data) => data.category === "Product");
  let techOptions = optionData.filter((data) => data.category === "Technology");
  let meshOptions = optionData.filter((data) => data.category === "Service Mesh");

  //mapping all filters to separate individual category filters
  props.resource.map((type) => {
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
    meshOptions[0].subdata.map((x) => {
      if(type === x.value){
        mesh.push(type);
      }
    });
  });

  let totalTypes = types.length;
  let totalProducts = products.length;
  let totalTech = tech.length;
  let totalMesh = mesh.length;

  if(props.resource.length>0) {
    props.resource.forEach((resources) => {

      all.push(resources);

      types.map((type) => {
        if(resources.filters.type === type) {
          typeData.push(resources);
        }
      });

      products.map((product) => {
        if(resources.filters.product === product) {
          productData.push(resources);
        }
      });

      tech.map((tech) => {
        if(resources.filters.technology === tech) {
          techData.push(resources);
        }
      });

      mesh.map((mesh) => {
        if(resources.filters.mesh === mesh) {
          meshData.push(resources);
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
   
    props.allResources.allMdx.nodes.forEach((resources) => {
      data.push(resources);
    });
  }

    return <ResourcesGrid data={[...new Set(data)]} {...props} />;

};

export default DataWrapper(ResourcesList);
