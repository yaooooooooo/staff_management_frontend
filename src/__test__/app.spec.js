import React from "react";
import App from '../App';

jest.mock('react-redux', () => ({
    connect: () => component => component,
}));

describe('CurrentVehicleSection', () => {
    it('should render component', () => {
        expect(App()).toBeTruthy();
    });
});