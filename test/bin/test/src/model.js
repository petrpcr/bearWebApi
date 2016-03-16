var Osoba = (function () {
    function Osoba() {
    }
    Osoba.prototype.CeleJmeno = function () {
        return this.Jmeno + " " + this.Prijmeni;
    };
    return Osoba;
})();
exports.Osoba = Osoba;
//# sourceMappingURL=model.js.map