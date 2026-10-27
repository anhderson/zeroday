"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Sun, Eye, Activity, Plus, Share2, 
  Repeat2, Palette, Compass, Waves, 
  Link as LinkIcon, Wind, Sparkles, HelpCircle 
} from "lucide-react";
import styles from "./ManifestationsGuideModal.module.css";

export interface ManifestationInfo {
  id: string;
  name: string;
  colorName: string;
  colorHex: string;
  icon: any;
  summary: string; // Under 10 words
  description: string;
}

export const MANIFESTATION_GUIDE_ITEMS: ManifestationInfo[] = [
  {
    id: 'perceber',
    name: 'Perceber',
    colorName: 'Branco',
    colorHex: '#ffffff',
    icon: Sun,
    summary: 'Revela o fluxo invisível e desperta intuição no post.', // 9 palavras
    description: 'Desperta a visão profunda além da superfície. Traz clareza espiritual e pureza, iluminando as intenções sutis contidas na manifestação.'
  },
  {
    id: 'observar',
    name: 'Observar',
    colorName: 'Rosa / magenta',
    colorHex: '#ff007f',
    icon: Eye,
    summary: 'Exibe o relatório vibracional detalhado desta manifestação.', // 7 palavras
    description: 'Abre um diagnóstico vibracional com as ressonâncias e frequências que este post despertou na comunidade.'
  },
  {
    id: 'sentir',
    name: 'Sentir',
    colorName: 'Roxo / violeta',
    colorHex: '#8a2be2',
    icon: Activity,
    summary: 'Permite reagir com sentimentos e virtudes nesta mensagem.', // 8 palavras
    description: 'Canaliza respostas emotivas autênticas através das virtudes essenciais, enriquecendo o campo afetivo da consciência.'
  },
  {
    id: 'servir',
    name: 'Agregar (Servir)',
    colorName: 'Vermelho rosado',
    colorHex: '#ff1744',
    icon: Plus,
    summary: 'Agrega e ancora pontos de serviço nesta consciência.', // 8 palavras
    description: 'Oferece suporte altruísta à consciência criadora. Ancorar pontos de serviço acelera a evolução do avatar espiritual.'
  },
  {
    id: 'conectar',
    name: 'Harmonizar (Conectar)',
    colorName: 'Vermelho',
    colorHex: '#ff0000',
    icon: Share2,
    summary: 'Harmoniza frequências e conecta consciências em sintonia mútua.', // 8 palavras
    description: 'Alinha as ondas psíquicas entre dois seres, estabelecendo pontes de empatia e união de propósitos.'
  },
  {
    id: 'expressar',
    name: 'Expressar',
    colorName: 'Laranja avermelhado',
    colorHex: '#ff4500',
    icon: Repeat2,
    summary: 'Replica e compartilha esta manifestação no seu mundo.', // 8 palavras
    description: 'Propaga a centelha desta mensagem como eco no seu próprio mundo digital, expandindo a reflexão para novos círculos.'
  },
  {
    id: 'criar',
    name: 'Criar',
    colorName: 'Laranja',
    colorHex: '#ff8c00',
    icon: Palette,
    summary: 'Materializa novas criações e expressões visuais no fluxo.', // 8 palavras
    description: 'Desperta o potencial demiúrgico. Dá vida a formas, cores e ideias inovadoras trazidas do plano sutil.'
  },
  {
    id: 'buscar',
    name: 'Sincronizar (Buscar)',
    colorName: 'Amarelo dourado',
    colorHex: '#ffd700',
    icon: Compass,
    summary: 'Filtra e sincroniza manifestações por hashtags ou virtudes.', // 8 palavras
    description: 'Bússola transcendental para navegar por correntes específicas de pensamento, temas e polaridades do nexo.'
  },
  {
    id: 'cuidar',
    name: 'Emanar (Cuidar)',
    colorName: 'Verde-limão',
    colorHex: '#76ff03',
    icon: Waves,
    summary: 'Emana apoio e cuidado amoroso para o autor.', // 8 palavras
    description: 'Irradia frequências suaves de acolhimento e cura compassiva para sustentar quem necessita de amparo.'
  },
  {
    id: 'integrar',
    name: 'Entrelaçar (Integrar)',
    colorName: 'Verde',
    colorHex: '#00e676',
    icon: LinkIcon,
    summary: 'Entrelaça mundos e sintoniza a frequência desta consciência.', // 8 palavras
    description: 'Cria laços duradouros de seguimento místico, unindo os mundos de ambas as consciências no fluxo contínuo.'
  },
  {
    id: 'soltar',
    name: 'Purificar (Soltar)',
    colorName: 'Ciano / azul-turquesa',
    colorHex: '#00f3ff',
    icon: Wind,
    summary: 'Purifica e libera energias estagnadas desta manifestação.', // 7 palavras
    description: 'Prática sagrada do desapego. Dissolve nós e bloqueios energéticos, permitindo que a essência retorne à leveza do éter.'
  },
  {
    id: 'transcender',
    name: 'Transcender',
    colorName: 'Azul',
    colorHex: '#0066ff',
    icon: Sparkles,
    summary: 'Ascende a geometria sagrada e ilumina todas as cores.', // 9 palavras
    description: 'Atinge a síncope máxima da consciência. Acende simultaneamente as 12 cores sagradas em todos os botões e desperta a geometria do hexagrama estelar.'
  }
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManifestationsGuideModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modal}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <div className={styles.headerTitleWrap}>
              <div className={styles.sparkleIcon}>
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className={styles.title}>Guia dos 12 Tipos de Manifestação</h2>
                <p className={styles.subtitle}>Os 12 portais de expressão da consciência e suas cores transcendentais</p>
              </div>
            </div>
            <button className={styles.closeBtn} onClick={onClose} title="Fechar Guia">
              <X size={20} />
            </button>
          </div>

          <div className={styles.banner}>
            <p>
              Ao ativar o botão <strong>Transcender</strong>, cada um dos 12 botões <em>ascende</em> com sua respectiva cor prismática, alinhando a geometria sagrada da sua presença.
            </p>
          </div>

          <div className={styles.grid}>
            {MANIFESTATION_GUIDE_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  className={styles.card}
                  style={{ '--item-color': item.colorHex } as any}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.iconCircle}>
                      <Icon size={18} />
                    </div>
                    <div className={styles.cardTitleBox}>
                      <div className={styles.nameRow}>
                        <span className={styles.orderNumber}>#{index + 1}</span>
                        <h3 className={styles.cardName}>{item.name}</h3>
                      </div>
                      <span className={styles.colorPill}>
                        <span className={styles.colorDot} style={{ backgroundColor: item.colorHex }} />
                        {item.colorName}
                      </span>
                    </div>
                  </div>

                  <div className={styles.summaryBadge}>
                    <span>{item.summary}</span>
                  </div>

                  <p className={styles.cardDescription}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className={styles.footer}>
            <button className={styles.understoodBtn} onClick={onClose}>
              Compreendi os 12 Portais
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
