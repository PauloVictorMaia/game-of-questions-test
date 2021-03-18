import React from 'react';
import Index from '../../pages/index';
import { render } from '@testing-library/react-native';

describe('SinIn', () => {
  it('rendered category list', () => {
    const { getByTestId } = render(<Index />);

    expect(getByTestId('category-list')).toBeTruthy();
  });
});
