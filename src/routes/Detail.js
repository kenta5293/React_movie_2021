import React from 'react';

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
        <div className="movie-detail">
          <span>{location.state.title}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
