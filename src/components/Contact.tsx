'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Link, GitBranch, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: '3rem', textAlign: 'center' }}
      >
        <h2 className="neon-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vamos Construir o Futuro?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Estou disponível para novos projetos e oportunidades. Sinta-se à vontade para me mandar uma mensagem.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Seu Nome" 
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit'
            }} 
          />
          <input 
            type="email" 
            placeholder="Seu E-mail" 
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit'
            }} 
          />
          <textarea 
            placeholder="Sua Mensagem" 
            rows={4}
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit', resize: 'vertical'
            }} 
          />
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(57, 255, 20, 0.2)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem', borderRadius: '8px', border: '1px solid var(--neon-green)',
              background: 'transparent', color: 'var(--neon-green)', fontWeight: 'bold', cursor: 'pointer',
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem'
            }}
          >
            Enviar Mensagem <Send size={20} />
          </motion.button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <motion.a whileHover={{ y: -5, color: 'var(--neon-green)' }} href="#" style={{ color: 'var(--text-main)' }}>
            <GitBranch size={32} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: 'var(--neon-green)' }} href="#" style={{ color: 'var(--text-main)' }}>
            <Link size={32} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: 'var(--neon-green)' }} href="#" style={{ color: 'var(--text-main)' }}>
            <Mail size={32} />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
