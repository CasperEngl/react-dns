/*
eslint

no-plusplus: 0,
*/

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PTR = ({ address }) => {
  const servers = [
    {
      name: 'ST1',
      address: 'wsb24.surf-town.net',
    },
    {
      name: 'ST2',
      address: 'wsb22.surf-town.net',
    },
    {
      name: 'ST3',
      address: 'wsb1.surf-town.net',
    },
    {
      name: 'ST4',
      address: 'wsb5.surf-town.net',
    },
    {
      name: 'ST5',
      address: 'wsb1.surf-town.net',
    },
    {
      name: 'ST6',
      address: 'wsb5.surf-town.net',
    },
    {
      name: 'ST7',
      address: 'wsb5.surf-town.net',
    },
    {
      name: 'ST8',
      address: 'wsb6.surf-town.net',
    },
    {
      name: 'ST9',
      address: 'wsb19.surf-town.net',
    },
    {
      name: 'ST10',
      address: 'wsb7.surf-town.net',
    },
    {
      name: 'ST11',
      address: 'wsb8.surf-town.net',
    },
    {
      name: 'ST12',
      address: 'wsb21.surf-town.net',
    },
  ];
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
      <div className="mb-5" />
    </Fragment>
  );
};

PTR.propTypes = {
  address: PropTypes.string.isRequired,
};

export default PTR;
