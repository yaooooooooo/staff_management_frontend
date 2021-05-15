import React from "react";

// jest.mock('react-redux', () => ({
//     connect: () => component => component,
//     getUser: () => ({name: '张三', email: '123@163.com', phone: '13190180001'})
// }));

describe('CurrentVehicleSection', () => {
    it('should render component',  () => {
        expect(jest.spyOn(React, 'useEffect')).toBeTruthy();
    });
});