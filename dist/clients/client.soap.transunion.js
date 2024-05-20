"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientTransunion = void 0;
const axios_1 = __importDefault(require("axios"));
const url = "https://uat.transunionauto.com.mx/webserviceconsulta/";
const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
        <soapenv:Body>
            <tem:AutoVerificacionFormato>
                <tem:documento_xml>
                    <CONSULTAWS>
                        <BASICA>
                            <USUARIO>UATSURA</USUARIO>
                            <VALIDACION>|BhzO3|hDPm8</VALIDACION>
                            <VIN>3N1AB7AD3GL605204</VIN>
                            <TIPOFORMATO>1</TIPOFORMATO>
                        </BASICA>
                    </CONSULTAWS>
                </tem:documento_xml>
            </tem:AutoVerificacionFormato>
        </soapenv:Body>
    </soapenv:Envelope>`;
function clientTransunion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post("https://uat.transunionauto.com.mx/webserviceconsulta/", xml, {
                headers: {
                    "Content-Type": "text/xml; charset=utf-8",
                },
            });
            console.log("Response axios: ", response.data);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
exports.clientTransunion = clientTransunion;
//# sourceMappingURL=client.soap.transunion.js.map