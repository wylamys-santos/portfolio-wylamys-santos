'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Palette, Terminal, Server, Braces, Code2 } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: <FileCode size={32} color="var(--neon-green)" /> },
  { name: 'CSS3 / Glassmorphism', icon: <Palette size={32} color="var(--neon-green)" /> },
  { name: 'JavaScript', icon: <Terminal size={32} color="var(--neon-green)" /> },
  { name: 'TypeScript', icon: <Braces size={32} color="var(--neon-green)" /> },
  { name: 'React', icon: <Code2 size={32} color="var(--neon-green)" /> },
  { name: 'Node.js', icon: <Server size={32} color="var(--neon-green)" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function AboutSkills() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', zIndex: 10, position: 'relative' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Sobre Mim & Habilidades</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Texto Sobre */}
          <motion.div variants={itemVariants} className="glass" style={{ padding: '2rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Sou um desenvolvedor apaixonado por criar experiências interativas, rápidas e imersivas. 
              Acredito que o código transcende a tela quando combinado com design excepcional e performance afiada.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
              Foco no desenvolvimento Front-end avançado manipulando tecnologias como React, manipulações 3D no navegador e arquitetura performática com Node.js no backend.
            </p>
          </motion.div>

          {/* Grid de Skills */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5, boxShadow: 'var(--glass-glow)' }}
                className="glass"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {skill.icon}
                <span style={{ fontWeight: 600, fontSize: '0.9rem', textAlign: 'center' }}>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
