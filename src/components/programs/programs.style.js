import styled from "styled-components";

const ProgramsWrapper = styled.section`
  .programs-section {
    padding: 4rem;
    background: #3c494f;

    h3 {
      text-align: center;
      color: aliceblue;
      margin: 0;

      a {
        text-decoration: none;
        color: gold;
      }
    }
  }

  .smallcard-a {
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    background-color: #3eb5a1;
    position: relative;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.5px;
    margin-top: 2rem;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
    z-index: 1;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    width: 18rem;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    border-radius: 0.25rem;

    &:hover {
      text-decoration: none;
      transition-timing-function: ease-in;
      transition: 0.2s;
      transition: 0.25s ease-out;
      box-shadow: 0 7px 7px 1px rgba(0, 0, 0, 0.14),
        0 3px 6px 2px rgba(0, 0, 0, 0.12), 0 4px 4px -3px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0 7px 7px 1px rgba(0, 0, 0, 0.14),
        0 3px 6px 2px rgba(0, 0, 0, 0.12), 0 4px 4px -3px rgba(0, 0, 0, 0.3);
    }
  }

  .minicard-span {
    text-align: center;
    vertical-align: middle;
    width: 20%;
    font-size: 1.3rem;
    line-height: 110%;
    margin: 0.82rem 0 0.656rem 0;

    img {
      width: 10%;
      height: inherit;
      vertical-align: middle;
      position: relative;
      marginBottom: "0"
      z-index: -1;
    }

    .inner-span {
      position: relative;
      bottom: -3px;
      color: #f5faf9;
    }
  }

  .card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  @media (max-width: 992px) {
    .minicard-span {
      width: 22%;
    }
    .card-content {
      // padding: 0 4vw;
    }
  }
`;

export default ProgramsWrapper;
