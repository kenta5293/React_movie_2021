import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <section className="movie-detail">
          <div>
            <div className="movie-detail-poster">
              <img src={location.state.poster} alt="movie-poster" />
            </div>
            <div className="movie-detail-content">
              <h2 className="movie-title">{location.state.title}</h2>
              <p className="movie-year">{location.state.year}</p>
              <ul className="movie-genres">
                {location.state.genres.map((genre, index) => (
                  <li key={index} className="genres-text">
                    {genre}
                  </li>
                ))}
              </ul>
              <div className="movie-summary">
                <p>{location.state.summary}</p>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
