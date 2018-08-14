import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

const Pluralize = ({
  children,
  count,
  word,
  includeCounts,
  ...other
}) => (
  <div {...other} >
    { pluralize(word, count, includeCounts) }
    { children }
  </div>
);

Pluralize.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  includeCounts: PropTypes.bool,
};

Pluralize.defaultProps = {
  includeCounts: true,
};

export default Pluralize;
