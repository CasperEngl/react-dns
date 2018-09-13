import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ domain }) => (
  <h2 className="pb-2 mt-0 mb-3 border-bottom">{domain}</h2>
);

PageHeader.propTypes = {
  domain: PropTypes.string.isRequired,
};

export default PageHeader;
