import {SQLauthenticate} from "../sqlauth";

module.exports = {
    searchByVehicleReg: function findBankCard(bankAccountId, limit) {
        let sqlSearchString = "SELECT * FROM bankcard WHERE bankAccountID LIKE \'" + bankAccountId + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};