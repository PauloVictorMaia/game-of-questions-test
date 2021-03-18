import React from 'react';
import SinIn from '../../pages/login/sin-in';
import { render } from '@testing-library/react-native';

describe('SinIn', () => {
  it('rendered input button', () => {
    const { getByTestId } = render(<SinIn />);

    expect(getByTestId('button-sin-in')).toBeTruthy();
  });
});
