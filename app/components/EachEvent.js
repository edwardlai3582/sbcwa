const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class EachEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        hide: true
    }  
    this.handleClick = this.handleClick.bind(this);
  }

  showImg(imgs){
    return(
        <div>
           <div key={imgs}>
                <img src={imgs} />
            </div>
        </div>
    );   
  }

  handleClick(event) {
    this.setState({hide: !this.state.hide});
  }

  render() {  
    var component;
    	if (!this.state.hide) {
        	component = this.props.event.imgs.map(this.showImg);
        }
      
    return (  
      <div className="eachEvent">
        <button className={this.state.hide ? 'eventTitle' : 'eventTitlelarger'}  onClick={this.handleClick}> {this.props.event.title} </button>
        <ReactCSSTransitionGroup transitionName="thing">
            <div className="eventImgsWrapper">
                {component}
            </div>
		  
        </ReactCSSTransitionGroup>
      </div>       
    );
  }
}


module.exports = EachEvent ;
