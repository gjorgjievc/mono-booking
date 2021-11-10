import { render } from '@testing-library/react';
import TreatmentCard from './treatment-card';
describe('TreatmentCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TreatmentCard />);
    expect(baseElement).toBeTruthy();
  });
});
