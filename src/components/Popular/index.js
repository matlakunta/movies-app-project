import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Loading from '../Loading'
import FailureView from '../FailureView'
import MovieDetails from '../MovieDetails'
import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Popular extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    popularMoviesList: [],
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const popularMovieApiUrl = 'https://apis.ccbp.in/movies-app/popular-movies'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(popularMovieApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.results.map(eachMovie => ({
        backdropPath: eachMovie.backdrop_path,
        id: eachMovie.id,
        overview: eachMovie.overview,
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
      }))
      this.setState({
        popularMoviesList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {popularMoviesList} = this.state
    return (
      <>
        <ul className="popular-movies-list">
          {popularMoviesList.map(eachMovie => (
            <MovieDetails movieDetails={eachMovie} key={eachMovie.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoadingView = () => <Loading />

  onClickRetry = () => {
    this.getPopularMovies()
  }

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderPopularPage = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="popular-container">
        <Header />
        {this.renderPopularPage()}
        <Footer />
      </div>
    )
  }
}
export default Popular
