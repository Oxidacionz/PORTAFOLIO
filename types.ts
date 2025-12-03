import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  repo?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  icon: string; // FontAwesome class or generic identifier
  color: string;
}

export interface TechSkill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark'
}