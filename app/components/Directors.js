const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const DirectorsEachYear = require('./DirectorsEachYear');
//import { fetchWeather } from '../actions/index';

class Directors extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
        years:[
            {   
                year: '2015',
                members:[
                    {order:0, link:'http://www.sbcwa.org/JESSIE-2015.png'},
                    {order:1, link:'http://www.sbcwa.org/JULIA-2015.png'},
                    {order:2, link:'http://www.sbcwa.org/BETTY-2015.png'},
                    {order:3, link:'http://www.sbcwa.org/STEPHANIE-2015.png'},
                    {order:4, link:'http://www.sbcwa.org/LOUISE-2015.png'},
                ]
            },
            {   
                year: '2014',
                members:[
                    {order:0, link:'http://www.sbcwa.org/LOUISE-2015.png'}
                ]
            }
        ]
    };
  }
 
    
  showMember(year){
    return(
        <DirectorsEachYear key={year.year} year={year.year} members={year.members}></DirectorsEachYear>

    );    
  }
    
  render() {
    return (
      <div>
        <div>
            {this.state.years.map(this.showMember)}
        </div>
      </div>
    );
  }
}


module.exports =connect(null, null)(Directors);

/*
const React = require('react');

module.exports = function Foo() {
  return <div>I am Membership!</div>;
}
*/