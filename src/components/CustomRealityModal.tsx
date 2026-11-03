'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown, Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { 
  CANONICAL_8_BEINGS_ORDER, 
  getUserCustomBeings, 
  saveUserCustomBeings, 
  CustomBeingEntry,
  BEING_CANONICAL_COLORS 
} from '@/lib/archetypes';
import { supabase } from '@/lib/supabase';
import styles from './CustomRealityModal.module.css';

interface CustomRealityModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export default function CustomRealityModal({ isOpen, onClose, userId }: CustomRealityModalProps) {
  const [formData, setFormData] = useState<Record<string, CustomBeingEntry>>({});
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (isOpen && userId) {
      const existing = getUserCustomBeings(userId) || {};
      const initial: Record<string, CustomBeingEntry> = {};
      CANONICAL_8_BEINGS_ORDER.forEach((b) => {
        initial[b.id] = {
          name: existing[b.id]?.name || '',
          image: existing[b.id]?.image || '',
        };
      });
      setFormData(initial);
      setSavedSuccess(false);
    }
  }, [isOpen, userId]);

  if (!isOpen) return null;

  const handleChange = (id: string, field: 'name' | 'image', value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
    setSavedSuccess(false);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // 1. Salvar no localStorage e disparar evento reativo
      saveUserCustomBeings(userId, formData);

      // 2. Tentar persistir no banco de dados (profiles)
      try {
        await supabase
          .from('profiles')
          .update({ custom_archetypes: formData } as any)
          .eq('id', userId);
      } catch (dbErr) {
        // Se a coluna custom_archetypes ainda não existir, o localStorage garante persistência local
        console.warn("Nota: custom_archetypes no Supabase:", dbErr);
      }

      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleRestoreDefaults = async () => {
    if (confirm("Deseja restaurar as imagens e nomes originais dos 8 seres?")) {
      const resetMap: Record<string, CustomBeingEntry> = {};
      CANONICAL_8_BEINGS_ORDER.forEach(b => {
        resetMap[b.id] = { name: '', image: '' };
      });
      setFormData(resetMap);
      saveUserCustomBeings(userId, resetMap);

      try {
        await supabase
          .from('profiles')
          .update({ custom_archetypes: null } as any)
          .eq('id', userId);
      } catch (err) {
        console.warn("Erro ao resetar no banco:", err);
      }
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div 
        className={styles.wrapper}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.titleArea}>
              <span className={styles.badgeLevel100}>
                <Crown size={14} /> Nível 100 Desbloqueado
              </span>
              <h2 className={styles.title}>Criar Sua Própria Realidade</h2>
              <p className={styles.subtitle}>
                Ao atingir o Nível 100, você pode redefinir os 8 seres sagrados com suas próprias imagens e nomes.
                Esta realidade customizada é renderizada exclusivamente para a sua própria consciência.
              </p>
            </div>
            <button className={styles.closeBtn} onClick={onClose} title="Fechar">
              <X size={20} />
            </button>
          </div>

          <div className={styles.beingsGrid}>
            {CANONICAL_8_BEINGS_ORDER.map((being) => {
              const canonColor = BEING_CANONICAL_COLORS[being.id] || '#ffffff';
              const customName = formData[being.id]?.name || '';
              const customImage = formData[being.id]?.image || '';
              const previewImg = customImage.trim() || being.avatar;
              const displayName = customName.trim() || being.canonicalName;

              return (
                <div key={being.id} className={styles.beingCard} style={{ borderLeft: `3px solid ${canonColor}` }}>
                  <div className={styles.cardHeader}>
                    <div className={styles.avatarPreview} style={{ borderColor: canonColor }}>
                      <img src={previewImg} alt={displayName} className={styles.avatarImg} />
                    </div>
                    <div className={styles.beingMeta}>
                      <span className={styles.canonName} style={{ color: canonColor }}>
                        {displayName}
                      </span>
                      <span className={styles.canonSin}>
                        {being.label} (Original: {being.canonicalName})
                      </span>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Nome do Ser na Sua Realidade</label>
                    <input 
                      type="text" 
                      className={styles.textInput}
                      placeholder={`Padrão: ${being.canonicalName}`}
                      value={customName}
                      onChange={(e) => handleChange(being.id, 'name', e.target.value)}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>URL da Imagem / Avatar</label>
                    <input 
                      type="text" 
                      className={styles.textInput}
                      placeholder={`Padrão: ${being.avatar}`}
                      value={customImage}
                      onChange={(e) => handleChange(being.id, 'image', e.target.value)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.actionsBar}>
            <button className={styles.restoreBtn} onClick={handleRestoreDefaults}>
              <RotateCcw size={14} style={{ marginRight: 6 }} /> Restaurar Padrões Originais
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {savedSuccess && (
                <span className={styles.successMsg}>
                  <Check size={16} /> Realidade salva com sucesso!
                </span>
              )}
              <button className={styles.saveBtn} onClick={handleSave} disabled={isSaving}>
                <Save size={16} /> {isSaving ? "Gravando..." : "Salvar Minha Realidade"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
