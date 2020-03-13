const auth = require('../sqlauth.js');
const wildStr = require("../inputvalidation/wildStr");

module.exports =
    /**
     * @author Anthony Wilkinson & Chris
     *
     * @function this function takes an input from the function findDetailsByName comprised of which is the forenames,
     * surname, dateOfBirth, Address and the limit which is hardcoded for the moment
     *
     * The function then constructs a string for the MYSQL query to the database through SQLauthenticate (see mysql auth JSDocs
     * for more info) and then returns it here.
     *
     * This is then passed up to findDetailsByName
     *
     * @return this returns a JSON object from the MYSQL database
     *
     * @requires this function requires string inputs selected from findDetailsByName to function
     * */
     function findVehicleByPerson(input) {
        let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE " +
            "forenames LIKE " + wildStr(input.forenames) +
            " AND surname LIKE " + wildStr(input.surname) +
            " AND address LIKE " + wildStr(input.homeAddress) +
            " AND dateOfBirth LIKE " + wildStr(input.dateOfBirth);
        return auth(sqlSearchString);

};