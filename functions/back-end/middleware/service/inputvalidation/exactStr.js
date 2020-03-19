const sanitiseSQLInput = require("./sanitiseSQLInputs");

module.exports =
    /**
     * @author Anthony Wilkinson & chris
     *
     * @function this function takes in an input string that will be used in the sqlauth function and the user wants to search
     * exactly the input in the findBy functions. This places the syntax for the exact search in the MYSQL query
     *
     * @return this returns the input string with the appropriate syntax
     *
     * @requires this function requires an input which is a string
     * */
    function addExactStr(inputString) {
        try {
            inputString = sanitiseSQLInput("" + inputString);
            inputString = "\"" + inputString + "\"";
            return inputString
        } catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at exact str');
        }
};