import React from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import SkeletonTable from '../SkeletonTable';

const GhostDNS = () => (
  <SkeletonTheme color="#252525" highlightColor="#282828">
    <Row>
      <Col xs={3}>
        <h3>
          <Skeleton duration={2} />
        </h3>
      </Col>
    </Row>
    <Row>
      <Col xs={5}>
        <h2>
          <Skeleton duration={2} count={2} />
        </h2>
      </Col>
    </Row>
    <div className="mb-5" />

    <SkeletonTable />
    <SkeletonTable />
    <SkeletonTable />
    <SkeletonTable />
    <SkeletonTable />
  </SkeletonTheme>
);

export default GhostDNS;
