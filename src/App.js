import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Login from './components/Login'

import Popular from './components/Popular'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
  </Switch>
)

export default App
