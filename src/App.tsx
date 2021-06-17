import React from 'react';
import styled from "styled-components"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { Content } from './components/Content/Content';


const AppDivStyle = styled.div`
    display: grid;
    grid-template-areas: "content ";
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

`

const ContentSectionStyle = styled.section`
  grid-area: content;
`



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <AppDivStyle >
          <ContentSectionStyle>
            <Route path='/' component={Content} />
          </ContentSectionStyle>
        </AppDivStyle>
      </Switch>
    </BrowserRouter>
  );
}




export default App;
