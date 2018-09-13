import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getDNS } from '../../actions/dnsActions';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeft: this.props.ms,
    };

    this.tick = this.tick.bind(this);
  }

  static propTypes = {
    getDNS: PropTypes.func.isRequired,
  }

  // Wait until the component has mounted to start the animation frame
  componentDidMount() {
    this.start();
  }

  // Clean up by cancelling any animation frame previously scheduled
  componentWillUnmount() {
    this.stop();
  }

  start() {
    this.frameId = requestAnimationFrame(this.tick);
  }

  stop() {
    const { query } = this.props;

    cancelAnimationFrame(this.frameId);

    getDNS(query);
  }

  tick() {
    const { timeLeft } = this.state;

    if (timeLeft <= 0) {
      this.stop();
    } else {
      this.setState(
        {
          timeLeft: timeLeft - 1,
        },
        () => requestAnimationFrame(this.tick),
      );
    }
  }

  render() {
    const time = Math.round(this.state.timeLeft / 60);
    return (
      <Fragment>
        {time}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  query: state.dns.data.query,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDNS,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
