import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import List from '../List';
import PageHeader from '../PageHeader';
import Query from '../Query';

const Main = ({ query }) => (
  <Container>
    <PageHeader domain={query.toUpperCase()} />
    <Query domain={query} />
    <List />
  </Container>
);

Main.propTypes = {
  query: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  query: state.dns.query,
});

export default connect(mapStateToProps)(Main);
