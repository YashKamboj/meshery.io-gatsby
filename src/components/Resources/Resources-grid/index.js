import React from "react";
import Card from "./Card";
import { Row, Col } from "../../../reusecore/Layout";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {
  // Get current posts
  // const indexOfLastPost = props.currentPage * props.postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - props.postsPerPage;
  // const currentPosts = props.data.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  
  console.log(props.allResources, "hi")
  return (
    <ResourcePageWrapper>
      <div className="resource-grid-wrapper">
        <Row>
          {props.allResources.map(( data ) => (
            
            <Col  xs={12} sm={6} xl={4}>
              <Card data={data} />
            </Col>
          ))}
        </Row> 
      </div>
     </ResourcePageWrapper>
  );
};

export default ResourceGrid;
