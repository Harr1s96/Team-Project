import {SQLauthenticate} from "../sqlauth";

module.exports = {
    findVehicleByPerson: function findVehicleByPerson(forenames, surname, DoB, Addr, limit) {
        let sqlSearchString = "SELECT * FROM vehicleRegistration WHERE forenames IS \'" + forenames + "\' AND surname IS \'" + surname + "\' AND address IS \'" + Addr + "\' AND dateOfBirth IS \'" + DoB + "\' LIMIT " + limit;
        SQLauthenticate(sqlSearchString)
    }
};