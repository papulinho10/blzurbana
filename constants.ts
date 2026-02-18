import { Heart, Zap, User, Globe, Sparkles } from 'lucide-react';
import { Service, Testimonial, Benefit, FaqItem } from './types';

// Updated Contact Info
export const WHATSAPP_NUMBER = "5554996624162"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar um horário e viver a experiência Beleza Urbana.`;
export const INSTAGRAM_LINK = "https://www.instagram.com/blzaurbana_/";
export const ADDRESS = "Avelino Alves de Moraes, 88 - Centro, Gramado - RS, 95670-000";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Avelino+Alves+de+Moraes,+88+-+Centro,+Gramado+-+RS,+95670-000";

export const NAV_LINKS = [
  { name: 'Conceito', href: '#conceito' },
  { name: 'Menu', href: '#servicos' },
  { name: 'Vibe', href: '#vibe' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Manifesto', href: '#manifesto' },
];

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Quebra de Padrões",
    description: "Acreditamos na beleza sem regras. O seu estilo é a nossa inspiração.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Alta Estima",
    description: "Mais que estética, um movimento para você se amar do jeito que é.",
    icon: Heart,
  },
  {
    id: 3,
    title: "Interior e Exterior",
    description: "Conexão total entre como você se sente e como você se expressa.",
    icon: User,
  },
  {
    id: 4,
    title: "Dinamismo & União",
    description: "Um espaço plural, diverso e sempre em movimento. Como a cidade.",
    icon: Globe,
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Cuidados Capilares",
    description: "Cortes, coloração, tratamentos capilares e cuidados completos para realçar sua beleza natural.",
    fullDescription: "Não é apenas tratar o cabelo, é revitalizar sua identidade. Nossos especialistas em tricologia e visagismo oferecem desde cortes modernos até cronogramas capilares completos. Utilizamos produtos de alta performance que garantem saúde, brilho e movimento para todos os tipos de fios.",
    features: [
      "Cortes com Visagismo",
      "Coloração e Mechas Criativas",
      "Terapia Capilar e Hidratação",
      "Finalização Premium"
    ],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    ],
    collaborators: [
      {
        id: 1,
        name: "Ana Silva",
        role: "Hair Stylist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
        instagramHandle: "@anasilva.hair",
        instagramLink: "https://instagram.com"
      },
      {
        id: 2,
        name: "Carlos M.",
        role: "Colorista",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop",
        instagramHandle: "@carlos.color",
        instagramLink: "https://instagram.com"
      }
    ]
  },
  {
    id: 2,
    title: "Maquiagem Profissional",
    description: "Maquiagem para eventos especiais, noivas, festas e produção completa com produtos premium.",
    fullDescription: "Realce seus traços com técnicas de maquiagem que variam do natural glow ao artístico impactante. Trabalhamos com marcas internacionais para garantir durabilidade e acabamento perfeito, seja para o seu casamento, formatura ou um evento exclusivo em Gramado.",
    features: [
      "Maquiagem Social e Artística",
      "Pacotes para Noivas",
      "Pele Blindada",
      "Aplicação de Cílios"
    ],
    image: "https://images.unsplash.com/photo-1487412947132-28a5b7596640?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503236823255-943675dbee22?q=80&w=1000&auto=format&fit=crop",
    ],
    collaborators: [
      {
        id: 4,
        name: "Bia Souza",
        role: "Makeup Artist",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
        instagramHandle: "@bia.makeup",
        instagramLink: "https://instagram.com"
      }
    ]
  },
  {
    id: 3,
    title: "Nail Design",
    description: "Cuidados completos para mãos e pés, nail art personalizada e esmaltação profissional.",
    fullDescription: "Suas unhas são telas em branco e nós somos os artistas. Oferecemos desde a manicure clássica impecável até alongamentos em fibra e gel com nail arts exclusivas. Utilizamos materiais esterilizados e esmaltes hipoalergênicos de longa duração.",
    features: [
      "Manicure e Pedicure",
      "Alongamento em Fibra e Gel",
      "Nail Art Personalizada",
      "Spa dos Pés"
    ],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1632515904838-8e6d2a71d798?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop",
    ],
    collaborators: [
      {
        id: 5,
        name: "Jéssica L.",
        role: "Nail Designer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop",
        instagramHandle: "@jess.nails",
        instagramLink: "https://instagram.com"
      }
    ]
  },
  {
    id: 4,
    title: "Limpeza de Pele",
    description: "Limpeza de pele profunda, tratamentos de limpeza facial e cuidados especializados para seu rosto.",
    fullDescription: "Renove o viço e a saúde da sua pele. Nossa limpeza de pele profunda remove impurezas, células mortas e cravos, promovendo a renovação celular. Protocolos personalizados para cada tipo de pele, garantindo hidratação e luminosidade.",
    features: [
      "Limpeza Profunda com Extração",
      "Peeling de Diamante",
      "Hidratação Profunda",
      "Massagem Facial Relaxante"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1000&auto=format&fit=crop",
    ],
    collaborators: [
      {
        id: 6,
        name: "Patricia R.",
        role: "Esteticista",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=500&auto=format&fit=crop",
        instagramHandle: "@pati.skin",
        instagramLink: "https://instagram.com"
      }
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Júlia M.",
    role: "Designer",
    content: "Finalmente um lugar em Gramado que entende meu estilo. Não tentaram me padronizar, apenas realçaram quem eu sou.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lucas B.",
    role: "Artista",
    content: "A vibe desse lugar é surreal. É moderno, é urbano, é arte pura. O corte ficou exatamente como eu imaginava.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carla T.",
    role: "Turista",
    content: "Entrei pela curiosidade do visual do salão e saí apaixonada. Atendimento descontraído e profissionalismo ímpar.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "É necessário agendar horário com antecedência?",
    answer: "Para garantir que você viva a experiência Beleza Urbana completa, trabalhamos preferencialmente com horários agendados. Isso nos permite preparar o ambiente, personalizar seu atendimento e dedicar 100% da nossa atenção à sua transformação, sem pressa e com a exclusividade que você merece.",
  },
  {
    id: 2,
    question: "Vocês têm especialistas em cabelos cacheados e crespos?",
    answer: "Absolutamente! Somos referência em valorização da beleza natural em Gramado. Nossa equipe domina técnicas avançadas de corte a seco, fitagem e tratamentos específicos para todas as curvaturas. Aqui, não alisamos sua identidade; nós a empoderamos com cortes que dão vida e movimento aos seus fios.",
  },
  {
    id: 3,
    question: "O que torna o Beleza Urbana diferente de um salão tradicional?",
    answer: "Não somos apenas um salão, somos um movimento. Enquanto o tradicional foca em padrões, nós focamos na sua essência. Unimos técnica de alto padrão, visagismo e um ambiente cosmopolita com bar e arte. É o lugar para quem busca estilo, modernidade e se sentir bem na própria pele, longe dos julgamentos.",
  },
  {
    id: 4,
    question: "Quais marcas e produtos vocês utilizam?",
    answer: "A excelência é inegociável. Trabalhamos exclusivamente com linhas premium mundialmente reconhecidas e produtos de alta performance que aliam tecnologia e sustentabilidade. Garantimos durabilidade no resultado e, acima de tudo, a saúde integral do seu cabelo e da sua pele.",
  },
   {
    id: 5,
    question: "Onde vocês estão localizados em Gramado?",
    answer: "Estamos no coração da cidade, na Rua Avelino Alves de Moraes, 88 - Centro. Uma localização privilegiada e de fácil acesso, mas projetada para ser seu refúgio urbano. Além do visual incrível do espaço, contamos com uma vista privilegiada do pôr do sol para tornar sua visita ainda mais especial.",
  },
];