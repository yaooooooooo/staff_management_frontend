import {
    isRequiredValidator,
    userMaxLengthValidator,
    emailValidator,
    phoneValidator,
} from '../validator';

describe('validator', () => {
    describe('requiredValidator', () => {
        it('should return true given a value', () => {
            expect(isRequiredValidator(20)).toBeTruthy();
        });

        it('should return true given a string', () => {
            expect(isRequiredValidator('good')).toBeTruthy();
        });

        it('should return falsy given a empty', () => {
            expect(isRequiredValidator('')).toBeFalsy();
        });
    });

    describe('lengthRangeValidator', () => {
        let configuration;
        beforeEach(() => {
            configuration = {
                lengthRange: [0, 10],
            };
        });

        it('should return true when in given range', () => {
            expect(userMaxLengthValidator('123', configuration)).toBeTruthy();
        });

        it('should return falsy when out of given range', () => {
            expect(userMaxLengthValidator('12345678901', configuration)).toBeFalsy();
        });
    });

    describe('emailValidator', () => {
        it('should return true given valid email', () => {
            expect(emailValidator('2537599099@qq.com')).toBeTruthy();
        });

        it('should return false given invalid email', () => {
            expect(emailValidator('123')).toBeFalsy();
        });
    });

    describe('phoneValidator', () => {
        it('should return true given phone number', () => {
            expect(phoneValidator(13190180001)).toBeTruthy();
        });

        it('should return false given phone number', () => {
            expect(phoneValidator(123)).toBeFalsy();
        });
    });
});
