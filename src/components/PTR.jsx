/*
eslint

no-plusplus: 0,
*/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import servers from '../data/servers';

const PTR = ({ address }) => {
  let counter = 1;

  return (
    <Fragment>
      {
        servers.some(server => server.address === address) &&
        <h3 className="mb-1 text-white-50">PTR</h3>
      }
      {
        servers.map((server) => {
          if (server.address === address) {
            return (
              <Fragment key={counter++}>
                <h2>{server.name} <small className="text-white-50">({address})</small></h2>
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
