import React from 'react';
import PropTypes from 'prop-types';
import pluralize from 'pluralize';

const Pluralize = ({
  word,
  count,
  includeCounts,
  ...other
}) => (
  <div {...other} >
    { pluralize(word, count, includeCounts) }
  </div>
);

Pluralize.propTypes = {
  word: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  includeCounts: PropTypes.bool,
};

Pluralize.defaultProps = {
  includeCounts: true,
};

export default Pluralize;
