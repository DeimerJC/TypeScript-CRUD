import { createClient } from "soap";

const url = "http://www.dneonline.com/calculator.asmx?WSDL";

export function client() {
  createClient(url, (err, client) => {
    if (err) {
      console.error(err);
    } else {
      const args = { intA: 20, intB: 30 };
      client.Add(args, (err2: any, result: number) => {
        if (err) {
          console.error(err);
        } else {
          console.log(result);
        }
      });
    }
  });
}
