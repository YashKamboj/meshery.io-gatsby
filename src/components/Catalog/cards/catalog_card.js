import React from 'react'
import patternslogo from "../../../assets/images/service-mesh-pattern.svg"
// import patternsdata from "./patterns.data"
import CardWrapper from "./card.styles"

const Catalogcard = ({pattern}) => {
  return (
    <CardWrapper>
    {/* <div className="link open-modal-btn"> */}
    <div className="card">
      <div className="chip">
        <small className="pattern-type"> {pattern.filters.type}</small>
      </div>
      <h4 className="pattern-name">{pattern.name}</h4>
      <img className="pattern-image" src={pattern.image} />
      <div>
        <h6 className="pattern-id">
          <img className="smp" src={patternslogo} loading="lazy" />
          {pattern.patternId}
        </h6>
      </div>
    </div>
    {/* </div> */}
    </CardWrapper>
  )
}

export default Catalogcard