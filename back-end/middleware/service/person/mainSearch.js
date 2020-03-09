const SearchByNames = require('./background/searchByNames.js');
const searchByVehicleReg = require('./background/searchByVehicleReg.js');
const findDetailsByName = require('./background/find_Citizen_Details_Main_Func/findDetailsByName.js');
const findBankCardByAccountId = require('./background/Financial/findDetailsByBankAccount');
const findTransactionsByBankCard = require('./background/Financial/findTransactionsByBankCard.js');
const findATMPointByATMId = require('./background/Financial/findDetailsByATMId.js');


module.exports = {

    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail Search in order of citizen { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE',sex: 'Male' }
     * @requires this at the end of the function to get @return .then(([citizen]) => { console.log("Advanced Detail Search in order of citizen" , citizen); });
     * */
    JsonToStringName: function JsonToStringName(input) {
        return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
    },
    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail Search in order of citizen [ { citizenID: 1125143125, forenames: 'Stuart', surname: 'White', homeAddress: '46 FRENSHAM CLOSE, SOUTHALL, UB1 2YG', dateOfBirth: '1948-10-02', placeOfBirth: 'STANMORE', sex: 'Male' } ]
     Advanced Detail Search BankAccount []
     Advanced Detail Search Mobile []
     Advanced Detail Search vehicle []
     *@requires this at the end to get @return .then(([Citizen, BankAccount, Mobiles, vehicle]) => { console.log("Advanced Detail Search in order of citizen" , Citizen,
        "Advanced Detail Search BankAccount", BankAccount,
        "Advanced Detail Search Mobile", Mobiles
        ,"Advanced Detail Search vehicle", vehicle); });
     * */
    JsonToStringDetails: function JsonToStringDetails(input) {
        return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);

    },
    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like { bankcardId: 353, cardNumber: 4298912572327611.5, sortCode: '36-40-95', bankAccountId: 84038, accountNumber: 89228899, bank: 'Clydesdale Bank' }
     * @requires this at the end to get @return }).then(([bankaccount]) => {console.log("Advanced Detail Search in order of citizen" , bankaccount); });
     * */
    JsonToStringBankDetails: function JsonToStringBankDetails(input) {
        return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.surname,input.dateOfBirth,input.homeAddress,5)
    },

    /**
     * @author Anthony Wilkinson & Chris
     *  @return an array like Advanced Detail findEPOSTransactions{ timestamp: 2015-05-01T14:37:24.000Z, eposId: 49178, bankCardNumber: 8257821168691391, payeeAccount: 26996565, amount: 59.5 }..and more
     *          Advanced Detail findATMTransactions {{ timestamp: 2015-05-01T14:37:23.000Z, atmId: 5436, bankCardNumber: 4722912624353299, type: 'Cash Withdrawal', amount: 120 }
     *  @requires this at the end to get @return }).then(([findEPOSTransactions,findATMTransactions]) => { console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);})
     *  */
    JsonToStringTransactions: function JsonToStringTransactions(input) {
        return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId, input.cardNumber, input.sortCode, input.bankAccountId, input.accountNumber, input.bank, 5)
    },

    /**
     * @author Anthony Wilkinson & Chris
     * @return an array like Advanced Detail ATMPoint [ { atmId: 5436, operator: 'Citibank International', streetName: 'Longstone Road', postcode: 'B42 2DU', latitude: 52.5354968066479, longitude: -1.90652676059225 } ]
     * @requires this at teh end to get @return .then(([ATMPoint]) => { console.log("Advanced Detail ATMPoint" , ATMPoint); );*/
    JsonToStringATM: function JsonToStringATM(input) {
        return findATMPointByATMId.findATMPointByATMId(input.timestamp, input.atmId, input.bankCardNumber, input.type, input.amount, 5)
    },


    /**
     * @author Chris & Tony
     * @param input is a JSON which contains the key vehicleRegistrationNo
     * @returns an array object of vehicles that match the vehicle registration number in the input
     * @requires the following code at the end to access data:
     *          .then(([vehicle]) => {console.log("Advanced Detail Search in order of vehicle", vehicle);});
     */
    JsonToVehicleByReg: function JsonToVehicleByReg(input) {
        return searchByVehicleReg.searchByVehicleReg(input.vehicleRegistrationNo, 5)
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////  Debugging Zone  /////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////  find a citizen on a partial input  ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function JsonToStringName(input) {
    return SearchByNames.searchByNames(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
}

JsonToStringName({
    "citizenID": "",
    "forenames": "Gillian",
    "surname": "Newton",
    "homeAddress": "",
    "dateOfBirth": "",
    "placeOfBirth": "",
    "sex": ""
}).then(([citizen]) => {
    console.log("Advanced Detail Search in order of citizen"
        , citizen);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// find details on a citizen on a full input  ////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function JsonToStringDetails(input) {
//     return findDetailsByName.findDetailsByName(input.citizenID, input.forenames, input.surname, input.homeAddress, input.dateOfBirth, input.placeOfBirth, input.sex, 5);
// }
// JsonToStringDetails(
//     {
//         "citizenID": "",
//         "forenames": "Gillian Kathryn",
//         "surname": "Newton",
//         "homeAddress": "",
//         "dateOfBirth": "",
//         "placeOfBirth": "",
//         "sex": ""
//     }
// ).then(([Citizen, BankAccount, Mobiles, vehicle]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , Citizen,
//         "Advanced Detail Search BankAccount", BankAccount,
//         "Advanced Detail Search Mobile", Mobiles
//         , "Advanced Detail Search vehicle", vehicle);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// find bank card of a citizen on a full input  //////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function JsonToStringBankDetails(input) {
//     return findBankCardByAccountId.findBankCardByAccountId(input.bankAccountId,input.accountNumber,input.bank,input.forenames,input.forenames,input.dateOfBirth,input.homeAddress,"5")
// }
// JsonToStringBankDetails({
//     "bankAccountId": "84038",
//     "accountNumber": "",
//     "bank": "",
//     "forenames": "",
//     "surname": "",
//     "dateOfBirth": "",
//     "homeAddress": ""
// }).then(([bankaccount]) => {
//     console.log("Advanced Detail Search in order of citizen"
//         , bankaccount);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// find transactions placed from a bankcard full input  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function JsonToStringTransactions(input){
//     return findTransactionsByBankCard.findTransactionsByBankCard(input.bankcardId,input.cardNumber,input.sortCode,input.bankAccountId,input.accountNumber,input.bank,5)
// }
//
// JsonToStringTransactions({
//     "bankcardId": "353",
//     "cardNumber": "",
//     "sortCode": "",
//     "bankAccountId": "",
//     "accountNumber": "",
//     "bank": ""
// }).then(([findEPOSTransactions,findATMTransactions]) => {
//     console.log("Advanced Detail findEPOSTransactions" , findEPOSTransactions, "Advanced Detail findATMTransactions",findATMTransactions);
// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find an ATM from a bank card number full input  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function JsonToStringATM(input){
//     return findATMPointByATMId.findATMPointByATMId(input.timestamp,input.atmId,input.bankCardNumber,input.type,input.amount,5)
// }
// JsonToStringATM({ "timestamp": "2015-05-01T14:37:23.000Z",
//     "atmId": "5436",
//     "bankCardNumber": "4722912624353299",
//     "type": "Cash Withdrawal",
//     "amount": "120"
// }).then(([ATMPoint]) => {
//     console.log("Advanced Detail ATMPoint" , ATMPoint);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////// find a vehicle from a vehicle reg full input  ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function  JsonToStringVehicleObs(input) {
//     return findVehicleByVehicleReg.input(input.registrationID,)
// }
//
// JsonToStringVehicleObs{
//     "registrationID": "5281",
//     "registrationDate": "1995-12-02",
//     "vehicleRegistrationNo": "TM15 WJL",
//     "make": "Mini",
//     "model": "One",
//     "colour": "red",
//     "forenames": 'Gillian Kathryn',
//     "surname": "Newton",
//     "address": "30 CASTLE STREET, GUILDFORD, GU1 3UW",
//     "dateOfBirth": "1952-03-06",
//     "driverLicenceID": "NEWTO553062GK9YW 82"
// }

//
// let testReg = {"vehicleRegistrationNo": "JL2_ ___"};
//
// function JsonToVehicleByReg(input) {
//     return searchByVehicleReg.searchByVehicleReg(input.vehicleRegistrationNo, 5)
// }
//
// JsonToVehicleByReg(testReg)
//     .then(([vehicle]) => {
//         console.log("Advanced Detail Search in order of vehicle", vehicle);
//     });
