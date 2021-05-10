import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { GlobalStyle } from "./components/globalStyle"
import Home from "./pages/Home"
import SingInPage from "./pages/SignInPage"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route  path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
