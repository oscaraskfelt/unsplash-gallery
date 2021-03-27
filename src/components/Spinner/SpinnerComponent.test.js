import React from 'react';
import renderer from 'react-test-renderer';

import { Spinner } from './';

describe('Spinner', () => {
  test('snapshot renders', () => {
    const tree = renderer.create(<Spinner show={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
