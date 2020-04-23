//Chatra - Live Chat Widget
(function (d, w, c) {

    w.ChatraID = 'FdQkiqonDTNpH3dsp';
    var s = d.createElement('script');

    w[c] = w[c] || function () {

        (w[c].q = w[c].q || []).push(arguments);

    };

    s.async = true;
    s.src = 'https://call.chatra.io/chatra.js';

    if (d.head) d.head.appendChild(s);

})(document, window, 'Chatra');
//End of chatra live chat

//function to check user input data from the contact form
function getDataValidation(callback = null) {

    //defining regex for email and phone to validate values
    var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //Regex for email to allow input only in email format
    var phoneRegex = /^[0-9]{8}$/; //regex to allow only numeric input with only 8 digits

    setTimeout(a => { //callback function to complete before doing the next function

        //declaring variables
        var first = true;
        var valid = true;
        var data = {}; //creating an empty JSON variable to store user input to send to the server

        //for-loop for each element in the contact form
        $(".form-control-input").each((i, elem) => {

            //for each time an error is obtained
            $(".list-unstyled").each((i, elem) => {

                //add the class "error-msg" which contains css for the error messages to be displayed
                elem.children[0].classList.add("error-msg");

            });

            if (true) { //always do this if statement

                var parentDiv = $(elem.parentNode).find(".help-block.with-errors")[0]; //get the id of the element where there is an error
                var msg = ""; //a variable for the error message
                var id = generate(15); //generate an id which will be used for the error message (to allow easy scroll to the error)

                //switch case to check all input data of the user
                switch (elem.id) { //for each input textbox's id

                    case "fname": //checking the first name

                        //if the first name field is empty
                        if (elem.value == "") msg = "First Name field cannot be empty!";

                        //if the input first name contains more than 32 characters
                        else if (elem.value.length > 32) msg = "First Name cannot be longer than 32 characters!";

                        //end the switch case
                        break;

                    case "lname": //checking the last name

                        //if last name field is empty
                        if (elem.value == "") msg = "Last Name field cannot be empty!";

                        //if last name contains more than 32 characters
                        else if (elem.value.length > 32) msg = "Last Name cannot be longer than 32 characters!";

                        //end the switch case
                        break;

                    case "gender": //checking the gender

                        //if the gender field is empty
                        if (elem.value == "") msg = "Gender field cannot be empty!";

                        //if the input gender is not "male" nor "female" nor "other"
                        else if ((elem.value.toLowerCase() != "male") && (elem.value.toLowerCase() != "female") && (elem.value.toLowerCase() != "other")) msg = "Gender should be male or female or other!";

                        //end the switch case
                        break;

                    case "email": //checking email

                        //if the email field is empty
                        if (elem.value == "") msg = "Email field cannot be empty!";

                        //if the email contains more than 64 characters
                        else if (elem.value.length > 64) msg = "Email cannot be longer than 64 characters!";

                        //if the email does not match the regex
                        else if (!emailRegex.test(elem.value)) msg = "Check email format!";

                        //end the switch case
                        break;

                    case "phone": //checking the mobile number

                        //if the mobile number field is empty
                        if (elem.value == "") msg = "Mobile Number field cannot be empty!";

                        //if the mobile number contains more than 8 digits
                        else if (elem.value.length > 8) msg = "Mobile Number cannot be more than 8 digits!";

                        //if the mobile number does not match the regex
                        else if (!phoneRegex.test(elem.value)) msg = "Mobile phone number format!";

                        //end the switch case
                        break;

                    case "device": //checking the device field

                        //if the device field is empty
                        if (elem.value == "") msg = "Device field cannot be empty!";

                        //if the device is not "iOS" nor "Android"
                        if ((elem.value.toLowerCase() != "ios") && (elem.value.toLowerCase() != "android")) msg = "Device should be iOS or Android!";

                        //end the switch case
                        break;

                    case "dob": //checking the date of birth input

                        //if the date of birth field is empty
                        if (elem.value == "") msg = "Date of Birth field cannot be empty!";

                        //using a custom method "checkDOB()" to check the date of birth input
                        else if (checkDOB() == 1) { //if checkDOB() returns 1

                            //date of birth is in incorrect format
                            msg = "Date format is invalid!";

                        } else if ((checkDOB() == 2) || (checkDOB() == 3)) { //if checkDOB() returns 2 or 3

                            //date of birth is in the future or is today
                            msg = "Invalid input date (Date cannot be in the future or today) !";

                        }

                        //end the switch case
                        break;

                    case "country": //checking the country input

                        //if the country field is empty
                        if (elem.value == "") msg = "Country field cannot be empty!";

                        //if the country contains more than 32 characters
                        else if (elem.value.length > 32) msg = "Country cannot countain more than 32 characters!";

                        //end the switch case
                        break;

                    case "review": //checking the review field

                        //if the review field is empty
                        if (elem.value == "") msg = "Review field cannot be empty!";

                        //if the review contains less than 12 characters
                        else if (elem.value.length < 12) msg = "Review should have at least 12 characters!";

                        //end the switch case
                        break;

                    case "message": //checking the message field

                        //if the message field is empty
                        if (elem.value == "") msg = "Message field cannot be empty!";

                        //if the message is less than 16 characters
                        else if (elem.value.length < 16) msg = "Message should have at least 16 characters!";

                        //end the switch case
                        break;

                }

                if (msg != "") { //if msg is NOT empty (which means there is an error)

                    if (parentDiv.children.length == 0) { //if it's the first error

                        var ul = document.createElement("ul"); //create an element (list)
                        ul.classList.add("list-unstyled");  //add the class "list-unstyled" to the element
                        ul.id = id; //assign the generated id to the element

                        var li = document.createElement("li"); //create an element (list value)
                        li.innerHTML = msg; //put the message into the element
                        ul.appendChild(li); //add the element to the list
                        parentDiv.appendChild(ul); //add the list where the error is found

                    } else { //if there was already an error

                        //just change the error message to the new error message
                        parentDiv.children[0].children[0].innerHTML = msg;

                    }

                }

                //if the value of each element is not empty, then add it to the JSON variable
                if (elem.value != "") data[elem.id] = elem.value;

                if (msg != "") { //if the message is not empty

                    valid = false; //user data is not valid

                    if (first && elem.id != "message") { //for the first error in the form (not the error message itself)

                        $('html, body').animate({ //use the animate function for scroll

                            //scroll to the element where there is an error
                            //use window.height/2 for the element to appear in the middle
                            scrollTop: $("#" + elem.id).offset().top - $(window).height() / 2

                        }, 800); //set 800 milliseconds for the animation (the greater the value, the longer the animation will be)

                        first = false; //set first to false

                    }

                }

            }

            //remove the class "error-msg" from successMessage and notesMessage so that they do not become red (stays white in color)
            document.getElementById("successMessage").classList.remove("error-msg");
            document.getElementById("notesMessage").classList.remove("error-msg");

        });

        //checking the checkboxes and assigning values
        if (document.getElementById("happyCustomer").checked) document.getElementById("happyCustomer").value = "Happy"; //if happy is checked, value becomes happy
        if (document.getElementById("satisfaction").checked) document.getElementById("satisfaction").value = "Excellent"; //if satisfied is check, value becomes excellent
        if (document.getElementById("subscription").checked) document.getElementById("subscription").value = "Subscribed"; //if subscribe is checked, value becomes subscribed

        //adding the values to the JSON variable
        data["Happiness"] = document.getElementById("happyCustomer").value; //set Happiness to its value
        data["Satisfaction"] = document.getElementById("satisfaction").value; //sets Satisfaction to its value
        data["Subscription"] = document.getElementById("subscription").value; //set Subscription to its value

        //if the checkbox "I agree..." is not checked
        if (!document.getElementById("terms").checked) {

            if (valid) { //if all the remaining data is valid

                $('html, body').animate({ //use the animate function for scroll

                    //scroll to the terms checkbox
                    //use window.height/2 for the element to appear in the middle
                    scrollTop: $("#terms").offset().top - $(window).height() / 2

                }, 800); //set 800 milliseconds for the animation (the greater the value, the longer the animation will be)

            }

            valid = false; //set valid to false

        }

        //if the callback is valid, continue to the next function with the JSON variable
        if (typeof callback != "undefined") callback(valid, data);

    }, 500); //timeout of callback function is 500ms

}

//a function to generate alphanumeric data with the length of the data as parameter
function generate(length) {

    //declaring variables
    var result = ''; //declaring an empty variable for the result of the generator
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; //setting the permissible characters of the result
    var charactersLength = characters.length; //getting the length of the characters allowed

    //a for-loop from 0 to the length of the requested data
    for (var i = 0; i < length; i++) {

        //adding a random character to the result for each index of the for-loop from the characters list above
        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }

    //returning the result to where this function was called
    return result;

}

//function to check the date of birth input
function checkDOB() {

    var dateOfBirth = document.getElementById("dob").value; //get the date of birth input
    var currentYear = new Date().getFullYear(); //get the current year
    var currentMonth = new Date().getMonth(); //get the current month
    var currentDate = new Date().getDate(); //get the current date
    var birthYear = dateOfBirth[6] + dateOfBirth[7] + dateOfBirth[8] + dateOfBirth[9]; //get the user input year
    var birthMonth = dateOfBirth[3] + dateOfBirth[4]; //get the user input month
    var birthDate = dateOfBirth[0] + dateOfBirth[1]; //get the user input date

    //defining a regex for date format
    var dobRegex = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/;

    //if the input date does not match the regex
    if (dobRegex.test(dateOfBirth) == false) {

        return 1; //return 1

    } else if (birthYear > currentYear) { //if the birth year is greater than the current year

        return 2; //return 2

    } else if (birthYear == currentYear) { //if the birth year is same as the current year

        if (birthMonth == currentMonth) { //if the birth month is same as the current month

            if (birthDate >= currentDate) { //if the birth date is greater or equal to the current date

                return 3; //return 3

            } else if (birthMonth > currentMonth) { //if the birth month is greater than the current month

                return 3; //return 3

            }

        }

    }

    return 0; //if the date is valid, return 0

}

//function for the AJAX request is the data is valid
function validateInput() {

    getDataValidation(function (valid, data) { //when the callback function is over

        if (valid) { //is the callback function returns a valid data (valid == true)

            $.ajax({ //send an AJAX request

                type: "post", //type of request is set to post
                data: data, //send the user data as the data of the request
                url: "http://localhost:90/addToDB", //use this url for a specific function
                success: function (data) { //is the AJAX returns a success

                    if (data.success) { //if the function is successful

                        //the contact form will be removed (removeElem is a custom function)
                        removeElem(document.getElementById("contactForm"));

                        //for each element in the contact info box
                        $(".contact-info").each((i, elem) => {

                            //remove the element (removeElem is a custom function)
                            removeElem(elem);

                        });

                        //Display a success message to the user - to let the user know his/her data is stored
                        document.getElementById("success-message").innerHTML = "SUCCESS !";
                        document.getElementById("successMessage").innerHTML = "Thank you for your review and message!";

                        $('html, body').animate({//use the animate function for scroll

                            //scroll to the successMessage
                            scrollTop: $("#success-message").offset().top - $(window).height() / 2 + 50

                        }, 200); //set the duration of the animation to 200 milliseconds

                    } else { //if the function is not successful

                        //the contact form will be removed (removeElem is a custom function)
                        removeElem(document.getElementById("contactForm"));

                        //for each element in the contact info box
                        $(".contact-info").each((i, elem) => {

                            //remove the element (removeElem is a custom function)
                            removeElem(elem);

                        });

                        //Display an error message to the user - to let the user know that he/she already submitted data
                        document.getElementById("success-message").innerHTML = "ERROR !";
                        document.getElementById("successMessage").innerHTML = "You have already submitted a form using this email address!";

                        $('html, body').animate({//use the animate function for scroll

                            //scroll to the successMessage
                            scrollTop: $("#success-message").offset().top - $(window).height() / 2 + 50

                        }, 200); //set the duration of the animation to 200 milliseconds

                    }

                },
                error: function (data) { //is the AJAX request fails

                    //the contact form will be removed (removeElem is a custom function)
                    removeElem(document.getElementById("contactForm"));

                    //for each element in the contact info box
                    $(".contact-info").each((i, elem) => {

                        //remove the element (removeElem is a custom function)
                        removeElem(elem);

                    });

                    //Display an error message to the user - to let the user know that the database is currently not working
                    document.getElementById("success-message").innerHTML = "ERROR !";
                    document.getElementById("successMessage").innerHTML = "We are sorry. Our database system is currently down!<br>Please try again after a while!";

                    $('html, body').animate({//use the animate function for scroll

                        //scroll to the successMessage
                        scrollTop: $("#success-message").offset().top - $(window).height() / 2 + 50

                    }, 200); //set the duration of the animation to 200 milliseconds

                }

            })

        }

    });

}

//custom function to remove an element with the element's id as the parameter
function removeElem(elem) {

    //remove the element from its parent
    elem.parentNode.removeChild(elem);

}

//function to increase the download count each time the user clicks on download
function addDownload() {

    $.ajax({ //send an AJAX request

        type: "post", //type of request is set to post
        data: null, //send no data
        url: "http://localhost:90/addDownload", //use this url for a specific function
        success: function () { //do nothing on success
        },
        error: function () { //do nothing on error
        }

    })

}

//function to get the count of happy, excellent and subscribed from the database
function getCount(columnName, tableName, criteriaName) {

    $.ajax({ //send an AJAX request

        type: "post", //type of request is set to post
        //send a JSON data to the server with the column name, table name and criteria looking for
        data: {
            column: columnName,
            table: tableName,
            criteria: criteriaName
        },
        url: "http://localhost:90/getCount", //use the url for a specific function
        success: function (data) { //if the AJAX request is successful

            if (data.success) { //if the getCount is successful

                //set the value of the specific counter to the value from the server
                document.getElementById(criteriaName).setAttribute("data-count", data.data);

            } else { //if the getCount is not successful

                //set the value of the specific counter to 0
                document.getElementById(criteriaName).setAttribute("data-count", "0");

            }
        },
        error: function (data) { //if the AJAX request fails

            //set the value of the specific counter to 0
            document.getElementById(criteriaName).setAttribute("data-count", "0");

        }
    })

}

//function to get the amount of times the user clicked on download button
function getCountDownload() {

    $.ajax({ //send an AJAX request

        type: "post", //type of request is set to post
        data: null, //send no data to the server
        url: "http://localhost:90/getCountDownloads", //use this url for a specific function
        success: function (data) { //if the AJAX request is successful

            if (data.success) { //if the getDownloadCount is successful

                //set the value of the download counter to the value from the server
                document.getElementById("downloads").setAttribute("data-count", data.data);

            } else { //if the getDownloadCount is not successful

                //set the download counter to 0
                document.getElementById("downloads").setAttribute("data-count", "0");

            }

        },
        error: function (data) { //if the AJAX request fails

            //set the download counter to 0
            document.getElementById("downloads").setAttribute("data-count", "0");

        }

    })

}