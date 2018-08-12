import React from 'react';
import { storiesOf } from '@storybook/react';
import Pluralize from './index.jsx';

storiesOf('Pluralize', module)
  .add('single', () => (<Pluralize word={'component'} count={1} />))
  .add('multiple', () => (<Pluralize word={'component'} count={5} />))
  .add('single, do not include counts', () => (<Pluralize word={'component'} count={1} includeCounts={false} />))
  .add('multiple, do not include counts', () => (<Pluralize word={'component'} count={5} includeCounts={false} />))
  .add('single, explicitly include counts', () => (<Pluralize word={'component'} count={1} includeCounts />))
  .add('multiple, explicitly include counts', () => (<Pluralize word={'component'} count={5} includeCounts />));
