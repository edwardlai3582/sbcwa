const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const EachEvent = require('./EachEvent');

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = { events:[
        {
         title:' 2015 New Year Party ', 
         imgs:[
            'http://www.sbcwa.org/CNY-1.jpg',
            'http://www.sbcwa.org/CNY-2.jpg',
            'http://www.sbcwa.org/CNY-3.jpg',
            'http://www.sbcwa.org/CNY-4.jpg' 
         ]
        },
        {
         title:' 2014 Xmas ', 
         imgs:[
            'http://www.sbcwa.org/Event1.jpg',
            'http://www.sbcwa.org/Trip2.jpg' 
         ]
        }
    ] };
  }

  showEvent(event){
      /*
    let imgdisplay=[];
    for (var i=0; i < event.imgs.length; i++) {
        imgdisplay.push(
            <div key={i}>
                <img src={event.imgs[i]} />
            </div>
        );
    } 
      
    return(
        <div key={event.title} className="eachEvent">
            <div className="eventTitle">{event.title}</div>
            <div className="eventImgsWrapper">
                {imgdisplay}
            </div>
        </div>
    );
    */
    return(
        <EachEvent key={event.year} event={event}></EachEvent>
    );  
  }
    
   
    
  render() {
    return (
      <div className="eventsWrapper">
        {this.state.events.map(this.showEvent)} 
      </div>
    );
  }
}



module.exports =connect(null, null)(Events);

/*
const React = require('react');

module.exports = function Foo() {
  return <div>I am Membership!</div>;
}
*/