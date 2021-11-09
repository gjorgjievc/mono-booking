import { render } from '@testing-library/react';
import CategoryButton from './category-button';
describe('CategoryButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryButton />);
    expect(baseElement).toBeTruthy();
  });
});
