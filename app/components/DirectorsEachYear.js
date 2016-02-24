const React = require('react');
const { connect } = require('react-redux');
const { bindActionCreators } = require('redux');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class DirectorsEachYear extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
        hide: true
    }  
    this.handleClick = this.handleClick.bind(this);
  }

  showMember(member){
    return(
        <div key={member.order} className="eachMember"><img src={member.link} /></div>
    );    
  }

  handleClick(event) {
    this.setState({hide: !this.state.hide});
  }

  render() {  
    var component;
    if (!this.state.hide) {
        component = this.props.members.map(this.showMember);
    }
      
    return (  
      <div className="socialWrapper">
        <button className={this.state.hide ? 'socialTitle' : 'socialTitlelarger'} onClick={this.handleClick}> {this.props.year} Board of Directors </button>

        <ReactCSSTransitionGroup transitionName="thing">
		  {component}
        </ReactCSSTransitionGroup>
      </div>       
    );
  }
}

/*
        <div className="memberList" className={this.state.hide ? 'hidden' : ''}>
            {component}    
        </div>
*/
module.exports = DirectorsEachYear;
