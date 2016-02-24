const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
//const { routeActions } = require('redux-simple-router');

function App({ push, children }) {
  return (
      <div className="wrapper">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">SBCWA</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right liWrapper">
                        <li><Link data-toggle="collapse" data-target=".navbar-collapse.in" to="/">Home</Link></li>
                        <li><Link data-toggle="collapse" data-target=".navbar-collapse.in" to="/directors">Board of Directors</Link></li>
                        <li><Link data-toggle="collapse" data-target=".navbar-collapse.in" to="/socialclubs">Social Clubs</Link></li>
                        <li><Link data-toggle="collapse" data-target=".navbar-collapse.in" to="/events">Events</Link></li>
                        <li><Link data-toggle="collapse" data-target=".navbar-collapse.in" to="/membership">Membership</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="content">{children}</div>
        <div className="footer">
            <div className="copyright">
                {new Date().getFullYear()+' copy right www.sbcwa.org'}
            </div>
            <div className="facebook">
                {'FOLLOW US ON '}
                <a href="https://www.facebook.com/SouthBayCWA" target="_blank">
                    <img src="http://www.ellingvin.dk/images/facebook_icon_blue.png" />
                </a>        
            </div>
        </div>
      </div>
  );
};

/*
module.exports = connect(
  null,
  { push: routeActions.push }
)(App);
*/
module.exports = App;




/*
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button onClick={() => push('/foo')}>Go to /foo</button>
      </div>
      <div style={{marginTop: '1.5em'}}>{children}</div>
    </div>
*/
