module.exports = {
    /**
     *
     * @param input in radians
     * @returns number equivalent of input
     */
    rad2Deg: function rad2Deg(input) {
        let pi = Math.PI;
        return input * (180 / pi);
    },
    deg2Rad: function deg2Rad(input) {
        let pi = Math.PI;
        return pi * (180 / input);
    }
};

