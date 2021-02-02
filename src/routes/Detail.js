import React from 'react';

function Detail(props) {
  console.log(props);
  return (
    <div>
      <img src={props.location.state.poster} alt="poster img"></img>
    </div>
  );
}

export default Detail;
