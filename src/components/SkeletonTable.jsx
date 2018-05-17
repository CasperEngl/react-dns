import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const animationDuration = 2;

const SkeletonTable = () => (
  <Fragment>
    <h3>
      <Row>
        <Col xs={3}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={1}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={1}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={2}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={2}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={2}>
          <Skeleton duration={animationDuration} />
        </Col>
        <Col xs={1}>
          <Skeleton duration={animationDuration} />
        </Col>
      </Row>
    </h3>
    <Row>
      <Col xs={3}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={1}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={1}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={2}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={2}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={2}>
        <Skeleton duration={animationDuration} />
      </Col>
      <Col xs={1}>
        <Skeleton duration={animationDuration} />
      </Col>
    </Row>
    <div className="mb-4" />
  </Fragment>
);

export default SkeletonTable;
