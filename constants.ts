import { Heart, Zap, User, Globe, Sparkles } from 'lucide-react';
import { Service, Testimonial, Benefit, FaqItem } from './types';

// Updated Contact Info
export const WHATSAPP_NUMBER = "5554999541257"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar um horário e viver a experiência Beleza Urbana.`;
export const INSTAGRAM_LINK = "https://www.instagram.com/blzaurbana_/";
export const ADDRESS = "Avelino Alves de Moraes, 88 - Centro, Gramado - RS, 95670-000";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Avelino+Alves+de+Moraes,+88+-+Centro,+Gramado+-+RS,+95670-000";

export const NAV_LINKS = [
  { name: 'SERVIÇOS', href: '#servicos' },
  { name: 'PORTFÓLIO', href: '#galeria' },
  { name: 'CONTATO', href: '#contato' },
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
    image: "https://i.postimg.cc/PxqwYSzX/Whats-App-Image-2026-01-17-at-00-58-36-(1).jpg",
    galleryImages: [
      "https://i.postimg.cc/PxqwYSzX/Whats-App-Image-2026-01-17-at-00-58-36-(1).jpg",
      "https://i.postimg.cc/HkxVk6Hs/Whats-App-Image-2026-02-12-at-20-26-59-(17).jpg",
      "https://i.postimg.cc/zvzqPfGf/servicos-capilares-foto-5.jpg"
    ],
    collaborators: [
      {
        id: 1,
        name: "David Andrade",
        role: "Hair Stylist",
        image: "https://i.postimg.cc/d1QHhb24/profissional-capilares-1.avif",
        instagramHandle: "@dwandrade",
        instagramLink: "https://instagram.com/dwandrade/"
      },
      {
        id: 2,
        name: "Mari Melo",
        role: "Hair Stylist",
        image: "https://i.postimg.cc/pds7JVLF/profissional-capilares-2-(1).avif",
        instagramHandle: "@eumarimelo",
        instagramLink: "https://www.instagram.com/eumarimelo/"
      },
      {
        id: 3,
        name: "Natiele",
        role: "Hair Stylist",
        image: "https://i.postimg.cc/63DMM8J2/profissional-capilares-3.avif",
        instagramHandle: "@hairbynatiele",
        instagramLink: "https://www.instagram.com/hairbynatiele/"
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
    image: "https://i.postimg.cc/7hZynQKn/Whats-App-Image-2026-02-12-at-20-26-59-(7).jpg",
    galleryImages: [
      "https://i.postimg.cc/7hZynQKn/Whats-App-Image-2026-02-12-at-20-26-59-(7).jpg",
      "https://i.postimg.cc/RV8zwdKV/Whats-App-Image-2026-01-17-at-00-58-35-(3).jpg",
      "https://i.postimg.cc/vH4J8nkd/Whats-App-Image-2026-01-17-at-00-58-33-(1).jpg",
      "https://i.postimg.cc/FK48xBKq/Whats-App-Image-2026-01-17-at-00-58-38.jpg",
      "https://i.postimg.cc/qqh1rsRX/maquiagem-profissional-foto-2.jpg"
    ],
    collaborators: [
      {
        id: 4,
        name: "Junior Maciel",
        role: "Makeup Artist",
        image: "https://i.postimg.cc/25N8NwQQ/profissional-maquiagem-2.avif",
        instagramHandle: "@jrmacieel",
        instagramLink: "https://www.instagram.com/jrmacieel/"
      },
      {
        id: 5,
        name: "Manuela Duarte",
        role: "Makeup Artist",
        image: "https://i.postimg.cc/bvR8cjY3/profissional-maquiagem-1.avif",
        instagramHandle: "@manueladuartemakeup",
        instagramLink: "https://www.instagram.com/manueladuartemakeup/"
      },
      {
        id: 6,
        name: "David Andrade",
        role: "Makeup Artist",
        image: "https://i.postimg.cc/d1QHhb24/profissional-capilares-1.avif",
        instagramHandle: "@dwandrade",
        instagramLink: "https://instagram.com/dwandrade/"
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
    image: "https://i.postimg.cc/PJ9Fv69n/manicure-foto-1.jpg",
    galleryImages: [
      "https://i.postimg.cc/PJ9Fv69n/manicure-foto-1.jpg",
      "https://i.postimg.cc/X7BP6bB7/manicure-foto-2.jpg",
      "https://i.postimg.cc/VNmZt0GL/manicure-foto-3.jpg"
    ],
    collaborators: [
      {
        id: 7,
        name: "Karen Berti",
        role: "Nail Designer",
        image: "https://i.postimg.cc/W1hJ1Xqg/profissional-nail-karen.avif",
        instagramHandle: "@karenberti_nails",
        instagramLink: "https://www.instagram.com/karenberti_nails/"
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
    image: "https://i.postimg.cc/bNbjHbT5/limpeza-de-pele-foto-1.jpg",
    galleryImages: [
      "https://i.postimg.cc/bNbjHbT5/limpeza-de-pele-foto-1.jpg",
      "https://i.postimg.cc/W4xnnDS7/file.png"
    ],
    collaborators: [
      {
        id: 8,
        name: "Natiele",
        role: "Esteticista",
        image: "https://i.postimg.cc/63DMM8J2/profissional-capilares-3.avif",
        instagramHandle: "@hairbynatiele",
        instagramLink: "https://www.instagram.com/hairbynatiele/"
      }
    ]
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Tayná Azevedo",
    role: "",
    content: "Amei o atendimento, funcionários super simpáticos e qualificados. Minha maquiagem e penteado ficaram perfeitos, fez exatamente do jeito que eu pedi.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana Ribas",
    role: "",
    content: "Melhor salão de Gramado! Profissionais capacitados e rápidos! Todas as vezes muito bem atendida em um ambiente muito descolado e aconchegante! Perfeito para atender eventos e produções diversas, além de conter um café maravilhoso com bebidas, drinks e petiscos! Amooooo",
    rating: 5,
  },
  {
    id: 3,
    name: "Mariana Gomes",
    role: "",
    content: "Salão impecável em todos os sentidos. Lindo, convidativo e repleto de profissionais maravilhosos. Os resultados são sempre impecáveis, sou apaixonada! Recomendo sempre.",
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