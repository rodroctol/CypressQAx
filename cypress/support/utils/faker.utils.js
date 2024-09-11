import * as faker from require('@faker-js/faker');

export class FakerUtils {

    static generateRandomString(length) {
        return faker.internet.password(length, false, /[0-9A-Z]/);
    }

    static generateRandomNumber(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += faker.datatype.number({ min: 0, max: 9 });
        }
        return +result;
    }

    static randomSkuType(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += faker.datatype.number({ min: 1, max: 7 });
        }
        return +result;
    }

    static generateRandomNumberAsString(length) {
        return this.generateRandomNumber(length).toString();
    }

    static generateRandomPhoneNumber() {
        return faker.phone.phoneNumber();
    }

    static generateRandomWords(length) {
        return faker.lorem.words(length);
    }

    static generateRandomPostalCode() {
        return faker.address.zipCode();
    }

    static generateRandomStateAbbreviation() {
        return faker.address.stateAbbr();
    }

    static generateRandomCityName() {
        return faker.address.cityName();
    }

    static generateRandomStreetName() {
        return faker.address.streetName();
    }

    static generateRandomEmail() {
        return faker.internet.email();
    }

    static generateRandomArrayBetweenIndexes(array, min, max) {
        const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return array[generatedNumber];
    }

    static generateRandomUrl() {
        return faker.internet.url();
    }
}

module.exports = FakerUtils;
