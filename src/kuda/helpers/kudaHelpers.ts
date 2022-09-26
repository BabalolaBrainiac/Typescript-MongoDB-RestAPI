// import { Request } from '../../../helpers';
// import { Logger } from '../../../helpers/Logger';
//
// export const KudaHelper = {
//   async getAuthToken(email: any, apiKey: any): Promise<any> {
//
//     try {
//       const authUrl = 'https://kuda-openapi-uat.kudabank.com/v2/Account/GetToken';
//
//       const response = await Request.post(authUrl, {
//         email, apiKey,
//       });
//       return response.data;
//
//     } catch (err) {
//       Logger.Error(err.data, err.stack);
//     }
//   },
// };
//
// export enum KudaServiceType {
//   BANK_LIST = 'BANK_LIST',
//   NAME_ENQUIRY = 'NAME_ENQUIRY',
//   SINGLE_FUND_TRANSFER = 'SINGLE_FUND_TRANSFER',
//   TRANSACTION_STATUS_QUERY = 'TRANSACTION_STATUS_QUERY',
//   RETRIEVE_VIRTUAL_ACCOUNT_BALANCE = 'RETRIEVE_VIRTUAL_ACCOUNT_BALANCE',
//   ADMIN_MAIN_ACCOUNT_TRANSACTIONS = 'ADMIN_MAIN_ACCOUNT_TRANSACTIONS',
//   FUND_VIRTUAL_ACCOUNT = 'FUND_VIRTUAL_ACCOUNT'
//
// }
//
// export class KudaAccountVerificationParams {
//   beneficiaryAccountNumber!: string;
//   beneficiaryBankCode!: string;
//   SenderTrackingReference?: string; //Tracking reference of the virtual account trying to do the actual transfer. Leave it empty if the intended transfer is going to be from the main account
//   isRequestFromVirtualAccount!: boolean;
//   BeneficiaryName!: string;
//   SenderAccountNumber?: string;
//   SenderName?: string;
//   BeneficiaryCustomerID?: any;
//   BeneficiaryBankCode!: string;
//   NameEnquiryID?: string;
//   ResponseCode?: string;
//   TransferCharge?: number;
//   SessionID?: string;
// }
//
// export class KudaAccountEnquiryResponse {
//   BeneficiaryAccountNumber!: string;
//   data!: KudaAccountVerificationParams
// }
