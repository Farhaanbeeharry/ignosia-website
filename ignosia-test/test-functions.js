export function countDownloads(currentValue, add) {

    return currentValue + add;

}

export function checkAge(rawDate) {

    var result = -1;

    if (rawDate >= 2020) {

        result = 0;

    } else result = 1;

    return result;

}

export function checkPhone(rawPhoneNumber) {

    var result = -1;

    if (rawPhoneNumber.toString().length == 8) result = 1;
    else if (rawPhoneNumber.toString().length != 8) result = 0;

    return result;

}

export function checkEmail(email) {

    var result = -1;
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email = email.toString();

    if (emailRegex.test(email) == false) result = 0;
    else if (email.length > 64) result = 0;
    else result = 1;

    return result;

}

export function checkGenderAndDevice(gender, device) {

    var result = -1;
    gender = gender.toString();
    device = device.toString();

    if (gender != "male" && gender != "female" & gender != "other") result = 0;
    else if (device != "android" && device != "ios") result = 0;
    else result = 1;

    return result;
    
}