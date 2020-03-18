const auth = require('../sqlauth.js');
const wildStr = require('../inputvalidation/wildStr.js');

module.exports =
    /**
     *
     * @param input
     * @param mobiles
     * @returns promised information about the owner of a given phone number
     */
    function findPersonByMobile(input, mobiles) {
        try {
            let aqNumber;
            if ((input.callerNumber === undefined) && input.receiverNumber) {
                aqNumber = wildStr(input.receiverNumber);
            }
            if ((input.receiverNumber === undefined) && input.callerNumber) {
                aqNumber = wildStr(input.callerNumber);
            }

            let sqlSearchString = "SELECT * FROM mobiles WHERE" +
                " phoneNumber LIKE " + aqNumber;
            return Promise.all([auth(sqlSearchString)]);

        }
        catch (e) {
            console.info(e);
            console.info(e.name);
            console.info(e.message);
            throw new Error('error occured at find person by mobile');
        }
    }
;