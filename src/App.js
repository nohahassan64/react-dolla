import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from "./components/globalStyle"
import Home from "./pages/Home"
import SingInPage from "./pages/SignInPage"

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
    </BrowserRouter>
  )
}

export default App
