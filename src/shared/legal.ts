// Cópia de packages/shared/src/legal.ts do repositório do app (linuxsoares/terapiainfoco).
// O app é a fonte da verdade: ao mudar os termos lá, atualize esta cópia e LEGAL_TERMS_VERSION juntos.

/**
 * Termos de Uso e Aviso de Privacidade: fonte única para a landing, o cadastro e o aceite no painel.
 * Mudança de conteúdo relevante exige nova `LEGAL_TERMS_VERSION`: quem aceitou a anterior
 * precisa aceitar de novo no próximo acesso.
 *
 * Texto preparado pela equipe técnica a partir do funcionamento real do sistema; deve ser
 * revisado por assessoria jurídica antes do lançamento comercial.
 */

/** Versão vigente (data de publicação) dos Termos de Uso e do Aviso de Privacidade */
export const LEGAL_TERMS_VERSION = '2026-10-28';

/** Versão vigente do texto de consentimento da newsletter; mudou o texto, muda a versão */
export const NEWSLETTER_CONSENT_VERSION = '2026-10-29';

/** Texto ao lado da caixa de consentimento da newsletter (LGPD Art. 7º, I e Art. 8º) */
export const NEWSLETTER_CONSENT_TEXT =
  'Quero receber por e-mail novidades do TerapiaInFoco e conteúdos sobre gestão de consultório e LGPD. ' +
  'Posso sair da lista a qualquer momento pelo link no fim de cada e-mail.';

/** Canal do encarregado de dados (LGPD Art. 41) e de contato geral */
export const PRIVACY_CONTACT_EMAIL = 'dpo@terapiainfoco.com.br';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDocument {
  title: string;
  summary: string;
  sections: LegalSection[];
}

export const TERMS_OF_USE: LegalDocument = {
  title: 'Termos de Uso',
  summary: 'Regras de uso da plataforma TerapiaInFoco por psicólogos, equipe do consultório e pacientes.',
  sections: [
    {
      heading: '1. O que é a TerapiaInFoco',
      paragraphs: [
        'A TerapiaInFoco é uma plataforma on-line de gestão de consultório de psicologia: agenda, prontuário eletrônico, documentos, teleatendimento, transcrição e síntese de sessões com inteligência artificial, controle financeiro e portal do paciente.',
        'Ao criar uma conta ou usar a plataforma você concorda com estes Termos e declara ter lido o Aviso de Privacidade.'
      ]
    },
    {
      heading: '2. Fase de testes',
      paragraphs: [
        'A plataforma está em fase de testes com psicólogos convidados, sem cobrança. Funcionalidades podem mudar, apresentar instabilidade ou ficar indisponíveis temporariamente.',
        'Recomendamos manter cópia própria das informações essenciais durante esse período. Você pode exportar os dados dos seus pacientes a qualquer momento pelas ferramentas de portabilidade.',
        'Se a plataforma passar a ser paga, os preços e condições serão informados com antecedência e só valerão após o seu aceite.'
      ]
    },
    {
      heading: '3. Contas e acesso',
      paragraphs: [
        'Cada pessoa usa a própria conta. As credenciais (senha, código de dois fatores, chave de acesso) são pessoais e intransferíveis; você responde pelo uso feito com elas.',
        'O psicólogo titular é responsável pelas contas que cria para a equipe do consultório e pelos acessos que concede.',
        'Informe imediatamente pelo e-mail de contato qualquer suspeita de uso indevido da sua conta.'
      ]
    },
    {
      heading: '4. Responsabilidade profissional',
      paragraphs: [
        'O psicólogo é o único responsável técnico e ético pelo atendimento, pelo conteúdo do prontuário, pelos documentos que emite e pelas decisões clínicas, nos termos do Código de Ética Profissional do Psicólogo e das resoluções do Conselho Federal de Psicologia.',
        'Textos gerados pela inteligência artificial (transcrições e sínteses) são rascunhos: precisam ser revisados e aprovados pelo psicólogo antes de entrar no prontuário. A plataforma não faz diagnóstico nem substitui o julgamento profissional.',
        'Cabe ao psicólogo obter e registrar o consentimento do paciente para gravação, transcrição e uso de inteligência artificial antes de usar esses recursos.'
      ]
    },
    {
      heading: '5. Uso permitido',
      paragraphs: [
        'É proibido usar a plataforma para fins ilícitos, inserir dados de pessoas sem base legal, tentar acessar contas ou dados de terceiros, contornar controles de segurança, sobrecarregar o serviço ou fazer engenharia reversa.',
        'Contas usadas em desacordo com estes Termos podem ser suspensas, preservados os dados clínicos pelo prazo legal.'
      ]
    },
    {
      heading: '6. Dados e sigilo',
      paragraphs: [
        'Os dados clínicos inseridos pelo psicólogo pertencem à relação entre psicólogo e paciente. A TerapiaInFoco trata esses dados apenas para prestar o serviço, conforme o Aviso de Privacidade, e não os usa para outra finalidade.',
        'Prontuários são guardados pelo prazo mínimo de 5 anos exigido pela Resolução CFP nº 001/2009, mesmo após o encerramento da conta, salvo determinação legal diferente.'
      ]
    },
    {
      heading: '7. Disponibilidade e limitação de responsabilidade',
      paragraphs: [
        'Empregamos medidas técnicas para manter o serviço disponível e seguro, mas não garantimos funcionamento ininterrupto, especialmente durante a fase de testes.',
        'A TerapiaInFoco não responde por decisões clínicas, por conteúdo inserido pelos usuários, por falhas de conexão do usuário ou por indisponibilidade de serviços de terceiros, nos limites da lei.'
      ]
    },
    {
      heading: '8. Encerramento',
      paragraphs: [
        'Você pode encerrar o uso a qualquer momento. Antes, exporte os dados de que precisa. Os prontuários permanecem guardados pelo prazo legal e depois são eliminados com segurança.'
      ]
    },
    {
      heading: '9. Alterações e foro',
      paragraphs: [
        'Estes Termos podem ser atualizados. Mudanças relevantes serão avisadas no painel e exigirão novo aceite.',
        'Aplica-se a legislação brasileira. Dúvidas: ' + PRIVACY_CONTACT_EMAIL + '.'
      ]
    }
  ]
};

export const PRIVACY_NOTICE: LegalDocument = {
  title: 'Aviso de Privacidade',
  summary: 'Como a TerapiaInFoco trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
  sections: [
    {
      heading: '1. Quem trata os seus dados',
      paragraphs: [
        'Dados de conta dos psicólogos e da equipe (nome, e-mail, telefone, CRP): a TerapiaInFoco é a controladora.',
        'Dados dos pacientes e informações clínicas: o psicólogo ou consultório é o controlador, e a TerapiaInFoco atua como operadora, tratando os dados apenas conforme as instruções do psicólogo e para prestar o serviço. Pacientes devem procurar primeiro o seu psicólogo para exercer seus direitos; também podem usar o portal do paciente ou o e-mail do encarregado.'
      ]
    },
    {
      heading: '2. Quais dados tratamos',
      paragraphs: [
        'Conta: nome, e-mail, telefone, CRP e região, senha (guardada apenas como hash), configuração de dois fatores e chaves de acesso (passkeys).',
        'Pacientes: dados cadastrais (nome, CPF, contato, contato de emergência), agendamentos, prontuário, anamnese, documentos, pagamentos de sessões e registros de consentimento.',
        'Sessões com transcrição: o áudio é enviado ao provedor de transcrição e descartado em seguida, sem ser armazenado pela plataforma; a transcrição e a síntese aprovadas ficam no prontuário.',
        'Diário Guiado (opcional, só para pacientes que o ativarem): mensagens escritas pelo paciente, respostas da inteligência artificial, alertas de segurança e o resumo gerado para o psicólogo, tudo guardado cifrado.',
        'Uso e segurança: endereço IP, data e hora de acesso e ações realizadas, registrados em trilha de auditoria imutável.'
      ]
    },
    {
      heading: '3. Para que usamos e com qual base legal',
      paragraphs: [
        'Prestar o serviço contratado (agenda, prontuário, documentos, lembretes): execução de contrato e, para dados de saúde, tutela da saúde por profissional de saúde (LGPD Art. 11, II, f).',
        'Guardar o prontuário pelo prazo legal: cumprimento de obrigação legal e regulatória (Resolução CFP nº 001/2009).',
        'Transcrição e síntese por inteligência artificial: somente com consentimento específico do paciente, registrado por finalidade e revogável a qualquer momento; sem ele, o recurso fica bloqueado.',
        'Diário Guiado com inteligência artificial entre sessões: consentimento específico e em destaque dado pelo próprio paciente (LGPD Art. 11, I), revogável a qualquer momento; a equipe do consultório não pode aceitar por ele. O resumo e a conversa ficam disponíveis só para o psicólogo responsável. Mensagens que indiquem risco à vida mostram contatos de emergência e geram um aviso ao psicólogo (proteção da vida, LGPD Art. 11, II, e).',
        'Segurança, prevenção a fraudes e auditoria: legítimo interesse e cumprimento de obrigação legal.',
        'Não vendemos dados, não fazemos publicidade com dados de saúde e não usamos dados clínicos para treinar modelos de inteligência artificial.'
      ]
    },
    {
      heading: '4. Com quem compartilhamos',
      paragraphs: [
        'Somente com fornecedores necessários ao funcionamento, sob contrato: Supabase (banco de dados), Railway (hospedagem dos servidores), Resend (envio de e-mails) e OpenAI (transcrição de áudio, síntese de sessões e Diário Guiado, apenas quando houver consentimento do paciente).',
        'Antes da síntese, nome, CPF, telefones e e-mails do paciente são removidos do texto enviado à OpenAI. Conforme a política do provedor, dados enviados pela API não são usados para treinar modelos, podendo ser retidos temporariamente para monitoramento de abuso.',
        'No Diário Guiado, cada mensagem tem nome do paciente, do psicólogo e do contato de emergência, CPF, telefones e e-mails removidos antes do envio, e o recurso só funciona com retenção zero contratada com a OpenAI (o conteúdo não fica guardado no provedor). Mensagens que indiquem crise não são enviadas à inteligência artificial.',
        'Autoridades públicas, quando houver obrigação legal ou ordem judicial.'
      ]
    },
    {
      heading: '5. Transferência internacional',
      paragraphs: [
        'Os servidores e o banco de dados ficam nos Estados Unidos, assim como a OpenAI, que processa a transcrição, a síntese e o Diário Guiado. A transferência ocorre com base em cláusulas contratuais e garantias de proteção adequadas (LGPD Art. 33), e os dados sensíveis são cifrados antes de serem gravados.'
      ]
    },
    {
      heading: '6. Segurança',
      paragraphs: [
        'Dados sensíveis são cifrados campo a campo (AES-256-GCM) com chaves gerenciadas separadamente; a comunicação usa TLS; o acesso é restrito por perfil (psicólogo, supervisor, recepção, paciente); há autenticação em dois fatores, chaves de acesso e trilha de auditoria encadeada por hash.',
        'Em caso de incidente de segurança relevante, avisaremos os afetados e a Autoridade Nacional de Proteção de Dados nos prazos legais.'
      ]
    },
    {
      heading: '7. Por quanto tempo guardamos',
      paragraphs: [
        'Prontuários e documentos clínicos: no mínimo 5 anos após o último atendimento (Resolução CFP nº 001/2009); depois, eliminação segura.',
        'Dados de conta: enquanto a conta estiver ativa e pelo prazo necessário para cumprir obrigações legais.',
        'Trilha de auditoria: guardada para comprovar a integridade dos registros e atender a fiscalizações.'
      ]
    },
    {
      heading: '8. Seus direitos',
      paragraphs: [
        'Você pode pedir confirmação e acesso aos dados, correção, portabilidade, informação sobre compartilhamentos, revogação de consentimento e eliminação dos dados tratados com base em consentimento (LGPD Art. 18).',
        'Dados de prontuário não podem ser eliminados antes do prazo legal de guarda, mas podem ser acessados e exportados.',
        'Pedidos: ' + PRIVACY_CONTACT_EMAIL + '. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).'
      ]
    },
    {
      heading: '9. Armazenamento no navegador',
      paragraphs: [
        'Usamos apenas armazenamento local essencial: sessão de acesso, tema claro ou escuro e última tela aberta. Não usamos cookies de publicidade nem rastreadores de terceiros.'
      ]
    },
    {
      heading: '10. Encarregado e atualizações',
      paragraphs: [
        'Encarregado pelo tratamento de dados (DPO): ' + PRIVACY_CONTACT_EMAIL + '.',
        'Este Aviso pode ser atualizado; mudanças relevantes serão avisadas no painel e exigirão novo aceite.'
      ]
    }
  ]
};
