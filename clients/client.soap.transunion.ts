//import { createClient } from "soap";
import axios from "axios";

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

export async function clientTransunion() {
  try {
    const response = await axios.post(url, xml, {
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
      },
    });

    console.log("Response axios: ", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
