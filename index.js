import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import App from './src/components/App';

const BodyWrapper = styled.div`
  background: #f9fafb;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 30px;
`;

render(
  <BodyWrapper>
    <App />
  </BodyWrapper>,
  document.getElementById('root')
);
