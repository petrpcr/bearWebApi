var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ctrl = require("../../src/Http/controller");
var model = require("./model");
var TestCtrl = (function (_super) {
    __extends(TestCtrl, _super);
    function TestCtrl(req, res) {
        _super.call(this, req, res);
    }
    TestCtrl.prototype.Get = function () {
        this.Response.statusCode = 200;
        var instance = new model.Osoba();
        instance.Jmeno = "Petr";
        instance.Prijmeni = "Pokorný";
        this.Response.end(JSON.stringify(instance));
    };
    return TestCtrl;
})(ctrl.ApiController);
exports.TestCtrl = TestCtrl;
//# sourceMappingURL=controller.js.map