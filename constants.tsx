
import { Project, Certificate, TechSkill } from './types';
import {
  FileCode2,
  Database,
  Server,
  Layout,
  GitBranch,
  Container,
  Code2,
  Cpu
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: 3,
    title: "SmartBytes Control y Finanzas",
    description: "Una aplicación web moderna para la gestión y control financiero de personas y empresas. Administra tus ingresos, gastos y presupuestos.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["Finanzas", "React", "Gestión"],
    link: "https://oxidacionz.github.io/SMARTBYTESPF-CONTROL-Y-FINANZAS/"
  },
  {
    id: 2,
    title: "ToroGroup",
    description: "Sistema de gestión administrativa integral para casa de cambio.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["JavaScript", "HTML/CSS", "Gestión"],
    link: "https://oxidacionz.github.io/TG2/"
  },
  {
    id: 1,
    title: "Cueva del Indio Blanco",
    description: "Sistema administrativo web multi-sucursal para gestión precisa de inventarios y operaciones comerciales.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    tags: ["Inventario", "Sucursales", "Web App"],
    link: "#"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "Python Avanzado",
    issuer: "Platzi",
    year: "2024",
    icon: "code",
    color: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
  },
  {
    id: 2,
    title: "React Profesional",
    issuer: "FreeCodeCamp",
    year: "2024",
    icon: "react",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
  },
  {
    id: 3,
    title: "AWS Fundamentals",
    issuer: "AWS",
    year: "2023",
    icon: "cloud",
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-300"
  }
];

export const SKILLS: TechSkill[] = [
  { name: "Python", icon: <FileCode2 />, color: "text-blue-500" },
  { name: "JavaScript", icon: <Code2 />, color: "text-yellow-400" },
  { name: "React", icon: <Layout />, color: "text-cyan-400" },
  { name: "Node.js", icon: <Server />, color: "text-green-500" },
  { name: "FastAPI", icon: <Cpu />, color: "text-teal-500" },
  { name: "PostgreSQL", icon: <Database />, color: "text-indigo-400" },
  { name: "Docker", icon: <Container />, color: "text-blue-600" },
  { name: "Git", icon: <GitBranch />, color: "text-orange-500" }
];