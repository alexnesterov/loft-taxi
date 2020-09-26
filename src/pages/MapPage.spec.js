import React from 'react';
import { render } from '@testing-library/react';
import MapPage from './MapPage';
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('MapPage', () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<MapPage />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      container: getByTestId('map'),
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  });
});
