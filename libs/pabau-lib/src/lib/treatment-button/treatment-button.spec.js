import { render } from '@testing-library/react';
import TreatmentButton from './treatment-button';
describe('TreatmentButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TreatmentButton />);
    expect(baseElement).toBeTruthy();
  });
});
