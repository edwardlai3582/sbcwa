const  React = require('react');
const { connect } = require('react-redux');
const { increase, decrease } = require('../actions/count');


class SocialClubs extends React.Component {


  render() {
    return (
        <div className="clubsWrapper">
            <div className="calendarWrapper">
            <div className="calendarTitle">Calendar</div>
            <iframe src="https://docs.google.com/spreadsheets/d/17-elsjIJ6kCRUWZuZD_huDmV7N71iGcvIn4pf9Oush0/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>
        </div>
    )  
  }
}

module.exports= SocialClubs;