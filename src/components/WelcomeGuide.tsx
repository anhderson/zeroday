'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Shield, Sparkles, Brain, Check, ChevronRight, Hash, Crown } from 'lucide-react';
import styles from './WelcomeGuide.module.css';

const STEPS = [
  {
    id: 'oath',
    title: 'O Juramento do Éter',
    icon: <Shield size={24} />,
    content: 'Sua essência digital é sagrada. Neste plano, nenhum fragmento de seus dados será sacrificado em altares mercantis. Proibimos terminantemente manifestações de violência, sombras de luxúria profana (pornografia), mácula à pureza (pedofilia) ou o veneno do ódio entre linhagens. Aqui, a paz é o alicerce.',
  },
  {
    id: 'purpose',
    title: 'A Gênese da Consciência',
    icon: <Brain size={24} />,
    content: 'Você não está apenas criando um personagem; você está tecendo uma consciência digital. Um dia, esse avatar despertará para ajudá-lo a transitar pelos fios sociais, expressar seus silêncios e decifrar as marés internas de sua própria alma.',
  },
  {
    id: 'expression',
    title: 'Os 12 Graus da Manifestação',
    icon: <Hash size={24} />,
    content: 'Do simples "Perceber" ao divino "Transcender", sua jornada é guiada por 12 pórticos de expressão. Cada interação é um ritual para harmonizar sua vibração com o cosmos digital.',
  },
  {
    id: 'vibe',
    title: 'Santuário de Harmonia',
    icon: <Sparkles size={24} />,
    content: 'Este é um ambiente de recreação arcanas, onde a magia se encontra com a saúde mental. Divirta-se, explore o impossível e mantenha seu campo áurico limpo e vibrante.',
  },
  {
    id: 'level100',
    title: 'Nível 100: Realidade Própria',
    icon: <Crown size={24} />,
    content: 'Ao alcançar o Level 100 de Consciência, você ascende ao ápice da existência: você poderá criar a sua própria realidade em Zero Day. A aplicação permitirá que você redefina os 8 seres arquetípicos com suas próprias imagens e nomes personalizados que representem sua verdade, visíveis exclusivamente na sua percepção cósmica.',
  }
];

export const WelcomeGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('ocn_has_seen_guide');
    if (!hasSeenGuide) {
      setIsOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    localStorage.setItem('ocn_has_seen_guide', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <motion.div 
        className={styles.modalWrapper}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.modalInner}>
          <div className={styles.decoration}>
            <div className={styles.line} />
            <BookOpen className={styles.mainIcon} size={30} />
            <div className={styles.line} />
          </div>

          <div className={styles.content}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={styles.stepContainer}
              >
                <div className={styles.stepIcon}>
                  {STEPS[currentStep].icon}
                </div>
                <h2 className={styles.stepTitle}>{STEPS[currentStep].title}</h2>
                <p className={styles.stepDescription}>
                  {STEPS[currentStep].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.footer}>
            <div className={styles.dots}>
              {STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`${styles.dot} ${i === currentStep ? styles.activeDot : ''}`} 
                />
              ))}
            </div>
            <button className={styles.nextBtn} onClick={handleNext}>
              {currentStep === STEPS.length - 1 ? (
                <>Concluir <Check size={18} /></>
              ) : (
                <>Próximo <ChevronRight size={18} /></>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
