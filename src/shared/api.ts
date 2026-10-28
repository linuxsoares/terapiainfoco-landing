// Contratos da API pública usados pela landing, copiados de packages/shared do repositório do app
// (linuxsoares/terapiainfoco). Mantenha em sincronia com dtos.ts, enums.ts e models.ts de lá.

/** Pedido de acesso antecipado (formulário de demonstração da landing page) */
export interface CreateLeadDTO {
  name: string;
  email: string;
  crp: string;
  whatsapp?: string;
  practiceType?: string;
  consent: boolean;
  /** Campo invisível para pessoas: preenchido só por robôs */
  website?: string;
}

export type DocumentType = 'DECLARACAO' | 'ATESTADO' | 'RELATORIO' | 'LAUDO';

export interface IcpCertificateInfo {
  subject: string;
  issuer: string;
  serialNumber: string;
  validFrom: string;
  validTo: string;
  cpf: string;
  crp?: string;
  /** NONE: assinatura eletrônica da plataforma, sem certificado digital */
  certificateType: 'A1' | 'A3' | 'NONE';
  complianceIcpBrasil: boolean;
}

export interface IcpSignatureData {
  certificate: IcpCertificateInfo;
  signatureHash: string;
  timestampToken: string;
  signedAt: string;
  padesSubFilter: 'ETSI.CAdES.detached' | 'adbe.pkcs7.detached';
}

export interface ValidateDocumentResponse {
  valid: boolean;
  document?: {
    id: string;
    type: DocumentType;
    title: string;
    therapistName: string;
    therapistCrp: string;
    patientInitials: string;
    issuedAt: string;
    signaturePadesHash: string;
    regulationReference: string;
    icpSignature?: IcpSignatureData;
  };
  message?: string;
}
