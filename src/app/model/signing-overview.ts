export class SigningOverview {
    id: string;
    status: number;
    files: any;
    seal: boolean;
    signers: Signer[];
    receivers: [];
    signRequestMode: number;
    daysToExpire: number;
    sendEmailNotifications: boolean;
    createdDateTime: Date;
    modifiedDateTime: Date;
    canceledDateTime: Date;

}


export class Verification {
    type: string;
    requireHandsignature: boolean;
    scribbleNameFixed: boolean;
}
export class SignerRequest {
    email: string;
    mobile: number;
    requireScribble = true;
    sendSignRequest = false;
    signRequestMessage = 'Kindly review and sign the document';
    daysToRemind = 7;
    verifications: Verification[] = [];
}

export class SigningOverviewRequest {
    signers: SignerRequest[];
    sendEmailNotifications = true;
}

export class Signer {
    id: string;
    expires: number;
    email: string;
    authentications: string[];
    verifications: Verification[] = [];
    mobile: number;
    iban: string;
    bsn: string;
    requireScribbleName: boolean;
    requireScribble: boolean;
    requireEmailVerification: boolean;
    requireSmsVerification: boolean;
    requireIdealVerification: boolean;
    requireDigidVerification: boolean;
    requireKennisnetVerification: boolean;
    requireSurfnetVerification: boolean;
    sendSignRequest: boolean;
    sendSignConfirmation: boolean;
    signRequestMessage: string;
    daysToRemind: number;
    language: string;
    scribbleName: string;
    scribbleNameFixed: boolean;
    reference: string;
    introText: string;
    activities: string[];
    rejectReason: string;
    signUrl: string;
    signedDateTime: Date;
    rejectDateTime: Date;
    createdDateTime: Date;
    modifiedDateTime: Date;
}
