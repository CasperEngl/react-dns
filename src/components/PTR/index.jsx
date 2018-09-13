/*
eslint

no-plusplus: 0,
*/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import servers from '../../data/servers';

const PTR = ({ address }) => {
  let counter = 1;

  return (
    <Fragment>
      <h3 className="mb-1 text-white-50">PTR</h3>
      {
        servers.some(server => server.address !== address) && (
          <Fragment>
            <h2>{address}</h2>
            <div className="mb-4" />
          </Fragment>
        )
      }
      {
        servers.map((server) => {
          if (server.address === address) {
            return (
              <Fragment key={counter++}>
                <h3>{server.name} <small className="text-white-50">({address})</small></h3>
              </Fragment>
            );
          }

          return (null);
        })
      }
      {
        servers.some(server => server.address === address) &&
        <div className="mb-5" />
      }
    </Fragment>
  );
};

PTR.propTypes = {
  address: PropTypes.string.isRequired,
};

export default PTR;
