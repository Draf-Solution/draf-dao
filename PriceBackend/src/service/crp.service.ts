/**
 * Service will that interact with the blockchain.
 *
 * This service will also serve as a contract factory.
 */
export class CRPService {
  public getList(): string {
    const strRes = {
      app_body: {
        return_code: "CRP00000",
        return_desc: "Success",
        results: [
          { pt_code: "CP001", status: "Active", full_name: "CP One" },
          { pt_code: "CP002", status: " Active", full_name: "CP Two" }
        ]
      }
    };
    return JSON.stringify(strRes);
  }
}
