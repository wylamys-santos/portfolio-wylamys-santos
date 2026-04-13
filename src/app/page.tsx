'use client';

import { motion } from 'framer-motion';
import HeroScene from '../components/HeroScene';
import AboutSkills from '../components/AboutSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import fotoPerfil from '../assets/foto-perfil.jpeg';
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)' }}>
      {/* 3D Background / Hero */}
      <section style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <HeroScene />
        <div className="hero-shell">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hero-copy"
          >
            <span className="hero-kicker">Olá, eu sou</span>
            <h1 className="text-gradient hero-title">Wylamys Santos</h1>
            <h3 className="hero-subtitle">Desenvolvedor Front-end</h3>
            <p className="hero-description">
              Construo interfaces modernas com foco em experiência, performance e presença visual.
              Este portfolio reúne projetos interativos, animações e aplicações com identidade própria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.82, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="hero-visual"
          >
            <div className="profile-container profile-container-lg">
              <Image
                src={fotoPerfil}
                alt="Wylamys Santos"
                className="profile-img"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills */}
      <section style={{ padding: '100px 10%' }}>
        <AboutSkills />
      </section>

      {/* Projects */}
      <section style={{ padding: '100px 10%' }}>
        <Projects />
      </section>

      {/* Contact */}
      <section style={{ padding: '100px 10%', paddingBottom: '50px' }}>
        <Contact />
      </section>
    </div>
  );
}
