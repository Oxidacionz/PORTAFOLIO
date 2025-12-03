import React from 'react';
import { Project } from '../../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLink = project.link && project.link !== '#';
  const hasRepo = project.repo && project.repo !== '#';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] relative z-10">
      {/* Imagen con Overlay interactivo */}
      <div className="h-32 overflow-hidden relative group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-20">
          {hasLink ? (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-xs font-bold px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer flex items-center gap-2 relative z-30"
              onClick={(e) => e.stopPropagation()} // Previene conflictos con eventos de arrastre del carrusel
            >
              Ver Demo <ExternalLink size={12} />
            </a>
          ) : (
             <span className="text-white text-xs font-bold px-3 py-1 bg-gray-600/80 rounded-full cursor-not-allowed select-none">
               En Desarrollo
             </span>
          )}
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 dark:text-white line-clamp-1" title={project.title}>
            {project.title}
          </h3>
          <div className="flex gap-2">
            {hasRepo && (
              <a 
                href={project.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1 relative z-20"
                title="Ver Código"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {hasLink && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 hover:text-sky-700 transition-colors p-1 relative z-20"
                title="Visitar Sitio"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 text-xs rounded-md font-medium border border-sky-100 dark:border-sky-900/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};