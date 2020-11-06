export class TransactionOverviewRequest {
    signers: SignerRequest[];
    sendEmailNotifications = true;
}

export class SignerRequest {
    email: string;
    mobile: string;
    requireScribble = true;
    sendSignRequest = false;
    signRequestMessage = 'Kindly review and sign the document';
    daysToRemind = 7;
    activities: Activities[] = [];
    verifications: Verification[] = [];
}

export class SigerDetails extends TransactionOverviewRequest {
    firstName: string;
    lastName: string;

    transactionId: string;
    fileName: string;
}

export class Transaction {
    Id: string;
    Status: number;
    Files: Map<string, FileEntry>;
    Seal: boolean;
    Signers: Signer[];
    Receivers: [];
    SignRequestMode: number;
    DaysToExpire: number;
    SendEmailNotifications: boolean;
    CreatedDateTime: string;
    ModifiedDateTime: string;
    CanceledDateTime: string;

}


export class Signer {
    Id: string;
    Expires: number;
    Email: string;
    Authentications: string[];
    Verifications: Verification[] = [];
    Mobile: string;
    Iban: string;
    Bsn: string;
    RequireScribbleName: boolean;
    RequireScribble: boolean;
    RequireEmailVerification: boolean;
    RequireSmsVerification: boolean;
    RequireIdealVerification: boolean;
    RequireDigidVerification: boolean;
    RequireKennisnetVerification: boolean;
    RequireSurfnetVerification: boolean;
    SendSignRequest: boolean;
    SendSignConfirmation: boolean;
    SignRequestMessage: string;
    DaysToRemind: number;
    Language: string;
    ScribbleName: string;
    ScribbleNameFixed: boolean;
    Reference: string;
    IntroText: string;
    Activities: Activities[];
    RejectReason: string;
    SignUrl: string;
    SignedDateTime: string;
    RejectDateTime: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
}

export class Activities {
    id: string;

    code: number;
    activities: string;
    info: string;
    creationDateTime: string;
}

export class Verification {
    Type: string;
    RequireHandsignature: boolean;
    ScribbleNameFixed: boolean;
}

export class FileEntry {
    DisplayName: string;
    Links: Link[] = [];
}

export class Link {

    Rel: string;
    Type: string;
    Link: string;
}
