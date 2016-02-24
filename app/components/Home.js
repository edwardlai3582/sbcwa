const  React = require('react');
const { connect } = require('react-redux');
const { increase, decrease } = require('../actions/count');
/*
function Home({ number, increase, decrease }) {
  return (
    <div className="homeWrapper">
      <div className="sbcwaTitle">
          <div>South</div>
          <div>Bay</div>
          <div>Chinese</div>
          <div>Women's</div>
          <div>Association</div>
          <div>南灣婦女會</div>
      </div>
      <div className="sbcwaInfo">
            
      </div>
    </div>
  );
};

module.exports = connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home);
*/

/*
    <div className="homeWrapper">
      Some state changes:
      {number}
      <button onClick={() => increase(1)}>Increase</button>
      <button onClick={() => decrease(1)}>Decrease</button>
    </div>
*/


class Home extends React.Component {


  render() {
    return (
        <div className="homeWrapper">
          <div className="sbcwaTitle">
              <div>South</div>
              <div>Bay</div>
              <div>Chinese</div>
              <div>Women's</div>
              <div>Association</div>
              <div>南灣婦女會</div>
          </div>
          <div className="sbcwaInfo">
             <img src={"http://www.sbcwa.org/cny%202016.jpg"} alt=" " />       
          </div>
        </div>
    )  
  }
}

module.exports= Home;