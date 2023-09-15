// import { useState } from 'react';

import { styled } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>

            <div>
              <Heading as="h2">Check in or Out</Heading>
              <Button
                variations="primary"
                sizes="medium"
                onClick={() => console.log('Check in')}
              >
                Check in
              </Button>
              <Button
                variations="secondary"
                sizes="small"
                onClick={() => console.log('Check out')}
              >
                Check out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of Guest"></Input>
              <Input type="number" placeholder="Number of Guest"></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
