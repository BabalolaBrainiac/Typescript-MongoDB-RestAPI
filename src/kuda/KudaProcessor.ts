// import { IProcessor, IProcessorAccountLookup, IProcessorMoney, IProcessorResponse } from '../interfaces';
// import { ITransactionRecipient } from '../../interfaces';
// import { CustomError, Request } from '../../helpers';
// import { ErrorCode } from '../../constants';
// import { Logger } from '../../helpers/Logger';
// import { KudaAccountVerificationParams, KudaHelper } from './helpers/kudaHelpers';
//
// const kudaBaseUrl = 'https://kuda-openapi-uat.kudabank.com/v2';
//
// /*eslint-disable */
// export class KudaProcessor implements IProcessor {
//   static PROVIDER_ID: string = 'Kuda';
//
//   providerId: string = KudaProcessor.PROVIDER_ID;
//
//   callbackUrl!: string;
//
//   //Fetch List of supported banks
//   static async getBankList(): Promise<any> {
//     let res: any;
//     try {
//       res = await Request.post(
//         kudaBaseUrl,
//         {
//           data: '{"serviceType":"BANK_LIST", "requestRef":"7637949"}',
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${await KudaHelper.getAuthToken(process.env.KUDA_EMAIL, process.env.KUDA_API_KEY)}`,
//           },
//         },
//       );
//       console.log(res.lastModified)
//       return res;
//     } catch (e) {
//       console.log(e);
//       Logger.Error(e.message, e.stack);
//     }
//   }
//
//   static async lookupAccount(bankId: string, accountNumber: string): Promise<IProcessorAccountLookup> {
//     const [, bankCode] = bankId.split('::');
//     let accountRequestInfo = <KudaAccountVerificationParams>{
//       beneficiaryAccountNumber: accountNumber,
//       beneficiaryBankCode: bankId,
//       SenderTrackingReference: '',
//       isRequestFromVirtualAccount: false,
//     };
//
//     try {
//       console.log(accountRequestInfo);
//
//       let response: any = await Request.post(
//         kudaBaseUrl,
//         {
//           data: `{"serviceType":"NAME_ENQUIRY", "requestRef":"767949",
//                   "data": { 'beneficiaryAccountNumber': ${accountRequestInfo.beneficiaryAccountNumber},
//                              'beneficiaryBankCode': ${accountRequestInfo.beneficiaryBankCode},
//                              'isRequestFromVirtualAccount': ${accountRequestInfo.isRequestFromVirtualAccount}}}`,
//           // "data": `${accountRequestInfo}`
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${await KudaHelper.getAuthToken(process.env.KUDA_EMAIL, process.env.KUDA_API_KEY)}`,
//           },
//         },
//       );
//
//       console.log(response.data);
//       return <IProcessorAccountLookup>{
//         accountName: response.data,
//         accountNumber: response.BeneficiaryAccountNumber,
//         bankId,
//       };
//     } catch (err) {
//       console.log(err);
//       if (err.message.includes('400') || err.message.includes('404') || err.message.includes('403')) {
//         throw new CustomError(ErrorCode.RESOURCE_NOT_FOUND, 'Could not validate account information');
//       } else if (err.message.includes('500') || err.message.includes('501') || err.message.includes('503')) {
//         throw new CustomError(ErrorCode.SERVER_ERROR, 'Provider Server Error');
//       }
//       return err;
//     }
//   }
//
//   setCallbackUrl(url: string): void {
//     this.callbackUrl = url;
//   }
//
//   // @ts-ignore
//   initWithdrawal(amount: IProcessorMoney, reference: string, recipient: ITransactionRecipient): Promise<IProcessorResponse> {
//     const { bank, momo } = recipient;
//   }
//
//   // @ts-ignore
//   initWithdrawalMigration() {}
//
//   // @ts-ignore
//   mapNotificationData() {}
//
//   // @ts-ignore
//   verifyCharge() {}
// }
