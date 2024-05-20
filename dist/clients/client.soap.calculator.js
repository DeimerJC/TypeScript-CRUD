"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const soap_1 = require("soap");
const url = "http://www.dneonline.com/calculator.asmx?WSDL";
function client() {
    (0, soap_1.createClient)(url, (err, client) => {
        if (err) {
            console.error(err);
        }
        else {
            const args = { intA: 20, intB: 30 };
            client.Add(args, (err2, result) => {
                if (err) {
                    console.error(err);
                }
                else {
                    console.log(result);
                }
            });
        }
    });
}
exports.client = client;
//# sourceMappingURL=client.soap.calculator.js.map