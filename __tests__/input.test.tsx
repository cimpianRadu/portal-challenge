import React from 'react';
import {render} from '@testing-library/react-native';
import Input from 'components/Input';

describe('Input Component', () => {
  const testLabel = 'Test Label';
  const testErrorMessage = 'Error message';

  it('renders correctly', () => {
    const {getByText} = render(<Input label={testLabel} />);
    expect(getByText(testLabel)).toBeTruthy();
  });

  it('displays the label correctly', () => {
    const {getByText} = render(<Input label={testLabel} />);
    expect(getByText(testLabel)).toBeDefined();
  });

  it('shows an error message when provided', () => {
    const {getByText} = render(
      <Input label={testLabel} errorMessage={testErrorMessage} />,
    );
    expect(getByText(testErrorMessage)).toBeDefined();
  });
});
