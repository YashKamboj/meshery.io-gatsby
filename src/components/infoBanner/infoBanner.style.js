import styled from "styled-components";

const InfoBannerStyle = styled.section`
  margin: 0rem 0 5rem
  position: relative;
  overflow: hidden;
  .title { 
    text-transform: uppercase;
    color: #A0AAAA;
  }
  .side-text {
    font-size: 1.45rem;
    font-weight: 600;
    line-height: 2rem;
    color: ${(props) =>
      props.theme.headingColor ? props.theme.headingColor : "#2C0075"};
    margin: 50px 0 24px 0;
    span {
           font-weight: 600;
            color: ${(props) => props.theme.keppelColor};
        }
   }
   .side{
       vertical-align: center;
      
   }
   .mesh-image{
        width: 100%; 
   }
   .icon{
       padding: 0px;
       margin: 3px;
       cursor: pointer;
       vertical-align: middle;
       }
   
   .description{
       margin-bottom: 24px;
       font-style: normal;
       font-weight: 300;
       font-size: 1rem;
       line-height: 27px;
   }
   .strikethrough {
    text-decoration: line-through;
    font-weight: 400;
   }



  @media only screen and (max-width: 780px) {
    .mesh-image{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .section-title{
        margin-bottom: 1.5rem;
        /* padding-bottom: 1.5rem; */
        
    }
    .side-text{
        padding-top: 0rem;
        font-weight: 500;
        font-size: 1.25rem;
        text-align: center;
        line-height: 2rem;
        margin-top: 1rem;
        span {
           font-weight: 600;
            color: ${(props) => props.theme.keppelColor};
        }
    }
    .big-title{
        margin: 0;
        padding: 0;
    }

    .description{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 300;
        margin: 0;
    }
    .backBtn{
        text-align: center;
    }

  }
  @media only screen and (max-width: 568px) {
    padding: 60px 0 40px 0;
      .section-title{
          margin: 0;
          padding: 0;
      }
     .section-title,
     .content-wrap{
        text-align: center;
    }
    .mesh-image{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    .side-text{
            font-size: 1.25rem;
            font-weight: 400;
            text-align: center;
            line-height: 21px;
            span {
                font-weight: 400;
            }
            
    }
    .big-title{
        margin: 0;
        padding: 0;
    }
    
    .description{
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 300;
        margin: 0;
    }

  @media only screen and (max-width: 480px) {
    padding: 40px 20px 60px 20px;
    .section-title{
          margin-bottom: 1rem;
          padding: 0;
      }

    .description{
        margin: 0px;
    }
  }

  }
  
`;
export default InfoBannerStyle;
