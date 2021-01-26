import React from "react";
import {ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import styled, { createGlobalStyle } from 'styled-components'
import SignUp from "./components/UI/SignUp/Form/SignUp";
import 'typeface-roboto'

const client = new ApolloClient({
  uri: 'https://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
});


const App: React.FC = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Wrapper>
        <SignUp />
      </Wrapper>
      </ApolloProvider>
    </>
  )
}

export default App;

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #102250;
`;


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    box-sizing: border-box;
  }
  input{
    background: #F5F8FA 0% 0% no-repeat padding-box;
    border-radius: 8px;
  }
`
