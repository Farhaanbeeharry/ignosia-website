//importing modules from and into node.js
const express = require("express"); //requiring module 'express'
const pool = require("./db"); //importing file 'db' which contains the database's details and authentication
const bodyParser = require("body-parser"); //requiring module 'body-parser' to be able to read data exchanged
const app = express(); //defining express

//setting up the 'app'
app.use(bodyParser.urlencoded()); //converts data into 'body' which can be used later on

//header indicates whether the response can be shared with requesting code from the given origin
//this will accept requests from the source (the links allocated)
app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

//if the link is localhost:port/addToDB, this function will be run
app.use("/addToDB", function (req, res, next) {

    //declaring variables
    var valid = true;

    //calling a method to check if the provided email by the user already exists in the database
    checkValidEmail(req.body.email).then(result => { //then -> continue into this function only when a result is obtained

        //if the checkValidEmail returns '1', the email already exists in the database
        if (result == 1) {

            valid = false; //if result is 1, valid will be false

        }

        //check valid - if valid is true it will continue into this function, else it willgo into the 'else'
        if (valid) { //if valid is true

            //declaring variables
            var userID = generate(100); //generating a userID with length 100 from a custom function
            var date = req.body.dob; //get the date input by the user
            var dob = date.split("/").reverse().join("/"); //converting the date into SQL format

            //executing queries to insert data into the database
            pool.query("INSERT INTO user (UserID, FirstName, LastName) VALUES ('" + userID + "', '" + req.body.fname + "', '" + req.body.lname + "');", (error, results, fields) => { //inserting data into 'user' table
                pool.query("INSERT INTO usercontact (UserID, PhoneNumber, EmailAddress) VALUES ('" + userID + "', '" + req.body.phone + "', '" + req.body.email + "');", (error, results, fields) => { //inserting data into 'usercontact' table
                    pool.query("INSERT INTO usermessage (UserID, Subscription, Message) VALUES ('" + userID + "', '" + req.body.Subscription + "', '" + req.body.message + "');", (error, results, fields) => { //inserting data into 'usermessage' table
                        pool.query("INSERT INTO userpersonal (UserID, Gender, Device, DateOfBirth, Country) VALUES ('" + userID + "', '" + req.body.gender + "', '" + req.body.device + "', '" + dob + "', '" + req.body.country + "');", (error, results, fields) => { //inserting data into 'userpersonal' table
                            pool.query("INSERT INTO userreview (UserID, Happiness, Satisfaction, Review) VALUES ('" + userID + "', '" + req.body.Happiness + "', '" + req.body.Satisfaction + "', '" + req.body.review + "');"); //inserting data into 'userreview' table
                        });
                    });
                });
            });

            //respond to the AJAX request with result message
            res.status(200).json({

                success: true, //setting success to true
                error: "", //send an error message if there is an error
                data: null, //sending data back to client (in this case, no data)
                msg: "" //send a message to the client if any

            });

        } else { //if valid is false

            //if the email already exists, send a response to the client
            res.status(200).json({

                success: false, //setting success to false
                error: "Email Address already exists in database!", //send an error message
                data: null, //send data to the client
                msg: "" //send a message to the client if any

            });

        }

    }).catch(err => { //in case there is an error with the first function

        console.error(JSON.stringify(err)); //display the error in the console of the node.js

    });

});

//if the link is localhost:port/getCount, this function will be run
app.use("/getCount", function (req, res, next) {

    //calling the function getCount to get the number of occurences of a specific criteria in the tables
    getCount(req.body.column, req.body.table, req.body.criteria).then(result => { //then -> continue into this function only when a result is obtained

        //respond to the AJAX request with result message
        res.status(200).json({

            success: true, //setting success to true
            error: "", //no error message has to be sent
            data: result, //sending the value(s) obtained from the table
            msg: "" //sending a message if any

        });

    }).catch(err => { //in case there is an error with the first function

        console.error(JSON.stringify(err)); //display the error in the console of the node.js

    });

});

//if the link is localhost:port/getCountDownloads, this function will be run
app.use("/getCountDownloads", function (req, res, next) {

    //calling the function getCountDownloads to get the number of times the user has clicked on the "Download" button
    getCountDownloads().then(result => { //then -> continue into this function only when a result is obtained

        res.status(200).json({
            
            success: true, //setting success to true
            error: "", //no error message has to be sent
            data: result, //sending the number of downloads back to the client
            msg: "" //sending a message if any

        });

    }).catch(err => { //in case there is an error with the first function

        console.error(JSON.stringify(err)); //display the error in the console of the node.js

    });

});

//if the link is localhost:port/addDiwnload, this function will be run
app.use("/addDownload", function (req, res, next) { //each time the client clicks on the Download button, this function will run

    //executing a query.. each time the Download button is pressed, the number of downloads will increment by 1
    pool.query("UPDATE downloads SET NumberOfDownloads = NumberOfDownloads+1;");

});

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

//function to check if the input email already exists
async function checkValidEmail(email) {

    //defining an sql query which wil return 1 if email already exists and 0 if email doesn't exist in database
    let sqlQuery = "SELECT EXISTS(SELECT * from UserContact WHERE EmailAddress='" + email + "') AS result ;";

    //creating a promise function - will complete before continuing the parent function
    return new Promise((resolve, reject) => {

        //executing the SQL query
        pool.query(sqlQuery, (err, result) => {

            if (err) { //if there is an error (if error is true)

                //the query will fail while displaying the error
                reject("Error executing query: " + JSON.stringify(err));

            } else { //if the query returns no error (error is false)

                result = JSON.stringify(result[0].result); //convert the result into string format (readable)
                resolve(result); //returns the result to the parent function

            }

        });

    });

}

//function to get the amount of occurences in the database for a specific criteria
async function getCount(column, table, criteria) {

    //defining a SQL query which will return the amount of times the criteria occurs in the table
    //using 'escape' function to prevent SQL injection
    //using 'replace' function to replace remove ' from the table name and the column name
    let sqlQuery = "SELECT COUNT(" + pool.escape(column) + ") AS count FROM `" + pool.escape(table).replace(/'/g, "") + "` WHERE " + pool.escape(column).replace(/'/g, "") + "=" + pool.escape(criteria) + ";";

    //creating a promise function - will complete before continuing the parent function
    return new Promise((resolve, reject) => {

        //executing the SQL query
        pool.query(sqlQuery, (err, result) => {

            if (err) { //if there is an error (if error is true)

                //the query will fail while displaying the error
                reject("Error executing query: " + JSON.stringify(err));

            } else { //if the query returns no error (error is false)

                result = JSON.stringify(result[0].count); //convert the result into string format (readable)
                resolve(result); //returns the result to the parent function

            }

        })

    })

}

//function to get the value of numberOfDownloads from the database
async function getCountDownloads() {

    //defining a SQL query which will return the value of the numberOfDownloads from the database
    let sqlQuery = "SELECT NumberOfDownloads AS count FROM downloads;";

    //creating a promise function - will complete before continuing the parent function
    return new Promise((resolve, reject) => {

        //executing the SQL query
        pool.query(sqlQuery, (err, result) => {

            if (err) { //if there is an error (if error is true)

                //the query will fail while displaying the error
                reject("Error executing query: " + JSON.stringify(err));

            } else { //if the query returns no error (error is false)

                result = JSON.stringify(result[0].count); //convert the result into string format (readable)
                resolve(result); //returns the result to the parent function

            }

        })

    })

}

//export the result(s) to the client so that functions and data can be used accordingly
module.exports = app;