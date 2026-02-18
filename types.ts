import { LucideIcon } from 'lucide-react';

export interface Collaborator {
  id: number;
  name: string;
  role: string;
  image: string;
  instagramHandle: string;
  instagramLink: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string; // Descrição longa para a página interna
  features: string[]; // Lista de diferenciais
  image: string; // Imagem principal (capa)
  galleryImages: string[]; // Galeria de rolagem
  collaborators: Collaborator[]; // Quem faz o serviço
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}