import { render } from '@testing-library/react';
import PabauLib from './pabau-lib';
describe('PabauLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PabauLib />);
    expect(baseElement).toBeTruthy();
  });
});
