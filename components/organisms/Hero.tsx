import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Facebook, Instagram, X, Copy, Check } from 'lucide-react';
import { PROJECTS, CERTIFICATES, SKILLS } from '../../constants';
import { ProjectCard } from '../molecules/ProjectCard';
import { CertificateCard } from '../molecules/CertificateCard';
import { Carousel } from '../molecules/Carousel';

export const Hero: React.FC = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const email = "josephbrachovillanueva2@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();

    // ID del archivo de Google Drive
    const fileId = '1e98L_5HtOsz8hn-ZlwvKxt1UYNDiEBqq';
    // URL de descarga directa
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Crear elemento temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.target = '_blank';
    link.download = 'Joseph_Bracho_CV.pdf'; // Nombre sugerido para el archivo

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Profile */}
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="relative mb-8 group cursor-pointer">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-indigo-500 to-sky-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:rotate-2 bg-white dark:bg-gray-900">
              <img
                src="https://avatars.githubusercontent.com/u/131562475?s=400&u=78f194907bef27497300afa982c0eae148cd92ea&v=4"
                alt="Joseph Bracho"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Particles (Simulated with simple divs) */}
            <div className="absolute top-0 right-0 w-4 h-4 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-indigo-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-300 dark:to-indigo-300 mb-2 tracking-tight drop-shadow-sm">
            Joseph Bracho
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-sky-500 dark:text-sky-400 mb-4">
            Desarrollador Full Stack
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed font-medium">
            Creo experiencias digitales modernas, limpias y con una sensación fresca y abierta.
            Apasionado por construir aplicaciones completas, eficientes y hermosas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Oxidacionz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/josephbrachoxz/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
              <Linkedin size={18} /> LinkedIn
            </a>

            <button
              onClick={() => setShowEmailModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Mail size={18} /> Email
            </button>

            <a href="https://www.facebook.com/oxidacionze" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              <Facebook size={18} /> Facebook
            </a>
            <a href="https://www.instagram.com/josephbrachovillanueva/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-lg hover:shadow-xl">
              <Instagram size={18} /> Instagram
            </a>
            <a href="#" onClick={handleDownloadCV} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer">
              <FileText size={18} /> CV
            </a>
          </div>
        </div>

        {/* Right Column: Content (Carousels) */}
        <div className="lg:col-span-7 flex flex-col gap-8 h-[80vh] overflow-y-auto pr-2 pb-10 scrollbar-hide z-10">
          {/* Increased transparency here (bg-opacity/30 instead of /50) to let pixel art shine through */}
          <div className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 border border-white/30 dark:border-white/10 shadow-2xl">
            <Carousel title="Mis Proyectos">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Carousel>

            <Carousel title="Mis Certificados">
              {CERTIFICATES.map(cert => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </Carousel>

            <div className="mt-8">
              <h3 className="font-bold text-xl text-sky-700 dark:text-sky-400 mb-6">Tecnologías que Domino</h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
                {SKILLS.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300">
                    <div className={`text-2xl mb-2 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative transform transition-all scale-100 animate-in zoom-in-95 duration-200 border border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-red-500" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Contáctame</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                ¡Me encantaría escuchar de ti! Puedes copiar mi correo o enviarme un mensaje directamente.
              </p>

              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700/50 rounded-lg p-3 mb-6 border border-gray-200 dark:border-gray-600">
                <span className="text-sm sm:text-base font-mono text-gray-800 dark:text-gray-200 truncate mr-2 select-all">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-colors relative group"
                  title="Copiar al portapapeles"
                >
                  {copySuccess ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                  {copySuccess && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 animate-fade-in-up">
                      ¡Copiado!
                    </span>
                  )}
                </button>
              </div>

              <div className="flex gap-3">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-xl transition-colors shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  Enviar Correo
                </a>
                <button
                  onClick={() => setShowEmailModal(false)}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-2.5 rounded-xl transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};