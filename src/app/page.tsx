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
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{ marginBottom: '2rem' }}
          >
            <div className="profile-container">
              <Image
                src={fotoPerfil}
                alt="Wylamys Santos"
                className="profile-img"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Olá, eu sou</h2>
            <h1 className="text-gradient" style={{ fontSize: '4.5rem', margin: 0, lineHeight: 1.1 }}>Wylamys Santos</h1>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Desenvolvedor Front-end</h3>
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
