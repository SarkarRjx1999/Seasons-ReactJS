import React from 'react'
import ReactDOM from 'react-dom'
import Spin from './spin';
import SsnDisp from './SsnDisp';

class App extends React.Component {
  state = { lat: null, message: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ message: err.message })
    );
  }

  renderContent() {
    if (!this.state.message && this.state.lat) {
      return (
        <div>
          <SsnDisp lat={this.state.lat} />
        </div>
      );
    }

    if (this.state.message && !this.state.lat) {
      return (
        <div>
          Error: {this.state.message}
        </div>
      );
    }
    return <Spin msg="Please allow us to know your loaction :)" />;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );

  }
}


ReactDOM.render(<App />, document.getElementById("root"));
