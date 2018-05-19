import React, { Component, Fragment } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: props.ms };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.seconds !== 0) {
      this.setState(prevState => ({
        seconds: prevState.seconds - 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.seconds}
      </Fragment>
    );
  }
}

export default Timer;
