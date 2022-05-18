import styled from "styled-components";

const CardWrapper = styled.section`

width: auto;  
flex-direction: row-reverse;


.card {
    position: relative;
    width: 220px;
    height: 300px;
    padding: 20px;
    border-radius: 15px;
    border: 0;
    transition: 0.4s ease-out;
    box-shadow: 2px 2px 6px 0px  #00D3A9;
    margin-bottom: 20px;
		flex-direction: row-reverse;

  }
  .card:hover {
    background: rgba(0, 0, 0, 0.3);
    transition: 0.5s;
    cursor: pointer;
  }
  .pattern-name{
    margin-top: 0;
  }
  .pattern-image{
    margin: 0;
  }
  .pattern-image-overlay{
    opacity: 0.5;
    width: 60%;
    -o-object-fit: contain;
       object-fit: contain;
    position: absolute;
    margin-left: 5%;
    border-radius: 15px;
  }
  .card-overlay {
    position: relative;
    width: 220px;
    height: 250px;
    padding: 20px;
    border-radius: 15px;
    border: 0;
    background: rgba(0,0,0,0.7) ;
    box-shadow: 2px 2px 6px 0px  #00D3A9;
    margin-bottom: 20px;
  }
  .card:hover {
    background: rgba(0, 0, 0, 0.3);
    transition: 0.5s;
    cursor: pointer;
  }
  
   .overlay-text{
    position: absolute;
    top: 40%;
    left: 50%;
    color: white;
    font-size: 19px;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    z-index: 2;
    white-space: nowrap;
  }  
  .pattern-id-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-top: 10px;
    margin-right: 14px;
    color: white;
    opacity: 0.7;
  }
  .catalog {
      padding-top: 5rem;
  }
  
   h3{
     font-weight: 300;
   }
   p{
    font-family: "Qanelas Soft", "Open Sans", "sans-serif";
    -webkit-font-smoothing: antialiased;
     font-size: .9rem;
   }
    .inner-span {
      font-size: 16px;
      position: relative;
      color: black;
    }
    .column {
    float: left;
    padding: 0 10px;
  }
  .smp-overlay{
    width: 25px;
    bottom: 0;
    right: 0;
    opacity: 0.7;
    vertical-align: middle;
    padding-right: 2px;
  }
  .smp {
    width: 25px;
    bottom: 0;
    right: 0;
    vertical-align: middle;
    padding-right: 2px;
   
  }
  .tooltip-modal:hover .tooltiptext-modal {
      visibility: visible;
    }
  
    .tooltip-modal .tooltiptext-modal {
      visibility: hidden;
      width: 100px;
      display: inline-block;
      color: white;
      background-color: #1a2421;
      text-align: center;
      padding: 7px;
      font-size: 1em;
      border-radius: 7px;
      position: absolute;
      z-index: 1;
      left:60%;
      font-size: 15px; 
      width: 140px;
      height: 40px;
      padding: 0;
      line-height: 40px;
      top: -1.3rem;
    }
  .import{
    background-color: #00b39fff;
    color: white;
    border-radius: 4px;
    border: none;
    padding: 10px;
  
  }

    .import:hover,
.import:focus {
  box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.75);
  transition: 0.4s ease-out;
  color: #1a2421;
}

  .vertical-center {
    -ms-transform: translateY(-60%);
    transform: translateY(25%) translateX(0%);
  }

  `;

export default CardWrapper;