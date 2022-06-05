import React from "react";
import Card from "./Card";
import  CommingSoonCard from "./Card/commingSoon_Card"
import { Row, Col } from "../../../reusecore/Layout";

import { ResourcePageWrapper } from "./resourceGrid.style";

const ResourceGrid = (props) => {

  return (
    <ResourcePageWrapper>
      <div className="resource-grid-wrapper">
        <Row>
          {props.data.map(( data ) => {
             if(data.Status !== "ComingSoon") {
           return ( <Col  xs={12} sm={6} xl={4}>   
             <Card data={data} />
            </Col>
           )
             }

            })}
         {props.data.map(( data ) => {
           if (data.Status === "ComingSoon") {
              return ( <Col  xs={12} sm={6} xl={4}>   
                <CommingSoonCard data={data} />
               </Col>
              )
             }
            })}
        </Row> 
      </div>
     </ResourcePageWrapper>
  );
};

export default ResourceGrid;
