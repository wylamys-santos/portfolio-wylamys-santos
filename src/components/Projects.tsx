'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'ViajePE - Experiências Únicas em Pernambuco',
    description: 'O Viaje PE é uma plataforma digital que conecta viajantes a experiências turísticas autênticas no estado de Pernambuco, com foco em gastronomia, cultura, natureza e hospedagem.',
    tags: ['React', 'Next.js', 'TypeScript',],
    link: 'https://hml.viajepe.com.br/',
    github: '#'
  },
  {
    title: 'Dashboard Analítico Neon',
    description: 'Painel administrativo com gráficos e dados em tempo real sob tema Dark/Neon, alta performance.',
    tags: ['TypeScript', 'React', 'CSS'],
    link: '#',
    github: '#'
  },
  {
    title: 'Landing Page Interativa',
    description: 'Página de conversão focada em micro-interações e storytelling visual com CSS e Javascript vanilla.',
    tags: ['HTML5', 'Javascript', 'CSS3'],
    link: '#',
    github: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <h2 className="neon-text" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Projetos em Destaque</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: 'var(--glass-glow)', borderColor: 'var(--neon-green)' }}
              className="glass"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'border-color 0.3s ease'
              }}
            >
              <h3 style={{ fontSize: '1.5rem', color: '#fff' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.8rem', backgroundColor: 'rgba(57, 255, 20, 0.1)', color: 'var(--neon-green)', borderRadius: '20px', border: '1px solid rgba(57, 255, 20, 0.3)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                <motion.a whileHover={{ scale: 1.1, color: 'var(--neon-green)' }} href={project.github} style={{ color: 'var(--text-main)', cursor: 'pointer' }}>
                  <GitBranch size={24} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.1, color: 'var(--neon-green)' }} href={project.link} style={{ color: 'var(--text-main)', cursor: 'pointer' }}>
                  <ExternalLink size={24} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
