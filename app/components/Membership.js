const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
//import { fetchWeather } from '../actions/index';

class Membership extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    //this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="formWrapper">
        <h3>MEMBERSHIP APPLICATION</h3>
      <form onSubmit={this.onFormSubmit} className="form-horizontal">
        <input
          placeholder="Name"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <input
          placeholder="DOB"
          className="form-control" />
        <input
          placeholder="Chinese Name"
          className="form-control" />
        <input
          placeholder="email"
          className="form-control" />
        <input
          placeholder="address"
          className="form-control" />
        <input
          placeholder="Phone"
          className="form-control" />
        <div> Please check the club(s) you would like to join: </div>
        <div class="checkbox">
            <label><input type="checkbox" value="" />Belly Dance Club</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" value="" />Bus Tour Club</label>
        </div>
        <div class="checkbox">
            <label><input type="checkbox" value="" />Dialogue Club</label>
        </div>
        <button type="submit" class="btn btn-default">Submit</button>    
      </form>
        </div>
    );
  }
}



module.exports =connect(null, null)(Membership);

/*
const React = require('react');

module.exports = function Foo() {
  return <div>I am Membership!</div>;
}
*/