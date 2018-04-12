import React from 'react';
import styled from 'styled-components';

import keenImage from '../../assets/keen.png';

const Wrapper = styled.div`
  #keen {
    width: 200px;
  }
`;
const App = () => (
  <Wrapper>
    <img src={keenImage} id="keen" alt="Commander Keen" />
    <p>Hello from React Component Hello</p>
  </Wrapper>
);

export default App;
