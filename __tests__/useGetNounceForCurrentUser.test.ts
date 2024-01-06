import {renderHook} from '@testing-library/react-native';
import {useGetNounceForCurrentUser} from '../src/hooks/useGetNounceForCurrentUser';
import * as redux from 'react-redux';
import * as api from 'api';

// Mock the necessary modules
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));
jest.mock('api', () => ({
  useLazyGetNonceByAddressQuery: jest.fn(),
}));
jest.mock('utils', () => ({
  exploreMnemonic: jest.fn().mockReturnValue({address: 'mock address'}),
}));

describe('useGetNounceForCurrentUser', () => {
  const mockMnemonic = 'mock mnemonic';
  const mockAddress = 'mock address';

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Mock useSelector to return the mock mnemonic
    redux.useSelector.mockImplementation(callback =>
      callback({mnemonic: mockMnemonic}),
    );

    // Mock useLazyGetNonceByAddressQuery to return a function and an object
    api.useLazyGetNonceByAddressQuery.mockReturnValue([jest.fn(), {}]);
  });

  it('should call getNonce with the correct address when address is available', () => {
    // Mock exploreMnemonic to return an object with address
    // jest.mock('utils', () => ({
    //   exploreMnemonic: () => ({address: mockAddress}),
    // }));

    const {result} = renderHook(() => useGetNounceForCurrentUser());

    // Assert that getNonce was called with the correct address
    expect(api.useLazyGetNonceByAddressQuery()[0]).toHaveBeenCalledWith({
      address: mockAddress,
    });
  });
});
