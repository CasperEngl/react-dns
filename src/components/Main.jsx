import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import List from './List';
import PageHeader from './PageHeader';

const Main = ({ query }) => (
  <Container>
    <PageHeader domain={query.toUpperCase()} />
    <Switch>
      <Route path="/:domain" component={List} />
      <Route component={List} />
    </Switch>
  </Container>
);

const mapStateToProps = state => ({
  query: state.dns.query,
});

export default connect(mapStateToProps)(Main);
