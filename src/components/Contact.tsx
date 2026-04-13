'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Link, GitBranch, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '').trim();
    const templateId = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '').trim();
    const publicKey = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '').trim();

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage('Configure as variaveis NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID e NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.');
      return;
    }

    try {
      setIsSending(true);
      setStatusMessage('Enviando mensagem...');

      const payload = {
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        time: new Date().toLocaleString('pt-BR'),
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, payload, publicKey);

      setStatusMessage('Mensagem enviada com sucesso. Vou te responder em breve.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: unknown) {
      const sdkError = error as { text?: string; message?: string };
      const errorMessage = sdkError?.text || sdkError?.message || 'Erro inesperado.';
      setStatusMessage(`Nao foi possivel enviar agora. ${errorMessage}`);
    } finally {
      setIsSending(false);
    }
  };

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
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vamos Construir o Futuro?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Estou disponível para novos projetos e oportunidades. Sinta-se à vontade para me mandar uma mensagem.
        </p>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Seu Nome" 
            value={formData.name}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit'
            }} 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Seu E-mail" 
            value={formData.email}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit'
            }} 
          />
          <textarea 
            name="message"
            placeholder="Sua Mensagem" 
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            style={{ 
              width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)',
              background: 'rgba(0,0,0,0.5)', color: '#fff', outline: 'none', fontFamily: 'inherit', resize: 'vertical'
            }} 
          />
          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(20, 200, 255, 0.24)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem', borderRadius: '8px', border: '1px solid var(--neon-green)',
              background: 'transparent', color: 'var(--neon-green)', fontWeight: 'bold', cursor: 'pointer',
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1rem'
            }}
            type="submit"
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar Mensagem'} <Send size={20} />
          </motion.button>

          {statusMessage && (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '-0.5rem' }}>
              {statusMessage}
            </p>
          )}
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
