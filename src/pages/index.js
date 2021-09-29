import  React from "react"
import { createGlobalStyle } from "styled-components";
import Header from "../Components/Header/index"
import Main from "../Components/Main/index"
import Footer from "../Components/ZFooter/index"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function IndexPage(){
  return(
    <div>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default IndexPage
