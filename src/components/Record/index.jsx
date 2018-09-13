/*
eslint

class-methods-use-this: 0,
*/

import React, { PureComponent } from 'react';
import { Col, Table } from 'reactstrap';
import PropTypes from 'prop-types';

import Timer from '../Timer';

class Record extends PureComponent {
  static propTypes = {
    record: PropTypes.arrayOf(PropTypes.object).isRequired,
    name: PropTypes.string.isRequired,
  }

  checkValue(value) {
    const values = ['TYPE', 'HOST', 'NAMESERVER', 'CONTACT', 'TTL', 'IP', 'PTR', 'TARGET', 'PRI', 'REFRESH', 'RETRY', 'MNAME', 'TXT'];
    return !values.includes(value.toUpperCase());
  }

  render() {
    const { record, name } = this.props;

    if (record.length === 0) {
      return (null);
    }
    const headings = Object.keys(record[0]);
    let counter = 1;

    return (
      <Col className={name} xs="12">
        <h3>{name}</h3>
        <Table striped>
          <thead>
            <tr>
              {
                headings.map((value) => {
                  if (this.checkValue(value)) { return (null); }

                  return (
                    <th key={counter++}>{value.toUpperCase()}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              record.map((value) => {
                const keys = Object.keys(value);

                return (
                  <tr key={counter++}>
                    {
                      keys.map((property) => {
                        if (this.checkValue(property)) { return (null); }
                        if (property === 'ttl') {
                          return (
                            <td key={counter++}>
                              <Timer seconds={value[property]} />
                            </td>
                          );
                        }

                        return (
                          <td key={counter++}>{value[property]}</td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default Record;
