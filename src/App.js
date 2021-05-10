import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from "./components/globalStyle"
import Home from "./pages/Home"
import SingInPage from "./pages/SignInPage"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sing-in" component={SingInPage} /> 
        </Switch>        
      </div> 
    </BrowserRouter>
  )
}

export default App
