//File containing the functions that we are testing
import {countDownloads, checkAge, checkPhone, checkEmail, checkGenderAndDevice} from '../test-functions.js';

//Import expect from chai
let expect = chai.expect;

//Mocha test for multiply function
describe('#addDownloadTest', () => {
    it('should increment number of downloads by 1 when download button is pressed', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = countDownloads(100, 1);
        expect(result).to.equal(101);

        result = countDownloads(541, 1);
        expect(result).to.equal(542);

        //Call function to signal that test is complete
        done();
    });
});

describe('#checkAge', () => {
    it('it should take the user date input and convert it to SQL format', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = checkAge(1998);
        expect(result).to.equal(1);

        result = checkAge(2021);
        expect(result).to.equal(0);

        //Call function to signal that test is complete
        done();
    });
});

describe('#checkPhone', () => {
    it('it should check whether the input phone number contains 8 digits', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = checkPhone(57076881);
        expect(result).to.equal(1);

        result = checkPhone(12345);
        expect(result).to.equal(0);

        //Call function to signal that test is complete
        done();
    });
});

describe('#checkEmail', () => {
    it('it should check whether the input email format is good, the email is too long or acceptable', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = checkEmail("farhaanbeeharry.ms@gmail.com");
        expect(result).to.equal(1);

        result = checkEmail("farhaanbeeharry.com");
        expect(result).to.equal(0);

        result = checkEmail("farhaanbeeharry.ms.this.is.a.simple.test.for.more.than.64.characters.checking.@gmail.com");
        expect(result).to.equal(0);

        //Call function to signal that test is complete
        done();
    });
});

describe('#checkGenderAndDevice', () => {
    it('it should check whether the input gender and device type is acceptable by the database', (done) => {
        //Run some tests that sensibly explore the behaviour of the function
        let result = checkGenderAndDevice("male", "android");
        expect(result).to.equal(1);

        result = checkGenderAndDevice("female", "ios");
        expect(result).to.equal(1);

        result = checkGenderAndDevice("other", "blackberry");
        expect(result).to.equal(0);

        result = checkGenderAndDevice("animal", "android");
        expect(result).to.equal(0);

        //Call function to signal that test is complete
        done();
    });
});