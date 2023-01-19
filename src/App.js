import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'

import Login from './components/Login'

import Popular from './components/Popular'
import PageNotFound from './components/PageNotFound'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'
import MovieItemDetails from './components/MovieItemDetails'
import Account from './components/Account'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/search" component={Search} />
    <ProtectedRoute exact path="/movies/:id" component={MovieItemDetails} />
    <ProtectedRoute exact path="/account" component={Account} />
    <Route path="/not-found" component={PageNotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
