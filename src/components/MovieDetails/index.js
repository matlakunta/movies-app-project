import './index.css'

const MovieDetails = props => {
  const {movieDetails} = props
  const {posterPath, title} = movieDetails

  return (
    <li>
      <img className="popular-img" src={posterPath} alt={title} />
    </li>
  )
}
export default MovieDetails
