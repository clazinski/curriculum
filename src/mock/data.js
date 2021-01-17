import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Currículo', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Bem Vindo!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá, meu nome é',
  name: 'Camila Lazinski',
  subtitle: 'Eu sou uma desenvolvedora desconhecida.',
  cta: 'CLIQUE AQUI PARA SABER MAIS',
};

// ABOUT DATA
export const aboutData = {
  title: 'Sobre Mim',
  img: 'camilap.jpg',
  paragraphOne: 'Desde sempre gostei de tecnologia - pode-se dizer que desde criança - portanto não poderia seguir outra carreira. Sou muito curiosa, então estou sempre buscando crescer e aprender mais, tanto profissionalmente quanto pessoalmente.',
  paragraphTwo: 'Atualmente curso Tecnologia da Informação e Comunicação na Universidade Federal de Santa Catarina.',
  paragraphThree: 'Tenho a intenção de integrar em uma equipe para colaborar na formação de um time fundamentado, que resulte em conclusões importantes e significativas para a empresa.',
  resume: 'https://drive.google.com/file/d/1ZKem-UhMylsN1n3EXbaf5eidbHtx929F/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Programação',
    info: '• Conhecimento em Python, Java e Desenvolvimento Web - HTML, CSS e React.js;',
    info2: '• Conhecimento básico em Data Science.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Área de Informática',
    info: '• Conhecimento nos programas do pacote Office, redes de computadores e administração de mídias sociais;',
    info2: '• Conhecimento avançado em Photoshop.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Idiomas',
    info: '• INGLÊS:',
    info2: ' - Nível avançado.',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Experiências',
    info: '• Estágio no Departamento de Turismo, Prefeitura do Município de Araranguá, SC (Dez/2019 - Jun/2020).',
    info2: '- Funções: confeccção de folders para divulgação de eventos do município, além de auxiliar nas atividades do departamento.'
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'Ficou interessado? Clique no botão abaixo para me chamar no WhatsApp! Ou encontre minhas outras redes sociais logo em seguida.',
  btn: 'WhatsApp',
  email: 'https://wa.me/41996887860',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/cahlazinski/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/camilalazinski/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/camila-lazinski-6b4a1018a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/clazinski',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
