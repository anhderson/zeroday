'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Sparkles, Fingerprint, Eye, Zap, X, MoreHorizontal } from 'lucide-react';
import styles from './auth.module.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [binaryLeft] = useState('01001001 01001110 01001001 01010100');
  const [binaryRight] = useState('01011010 01000101 01010010 01001111');
  const [crystalAvatars, setCrystalAvatars] = useState<string[]>([]);
  const [colorIndex, setColorIndex] = useState(3);
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  const router = useRouter();

  const t = {
    pt: {
      emptyFieldsError: 'Frequência de acesso não identificada. Preencha todos os campos.',
      signUpSuccess: 'Verifique seu e-mail para confirmar o cadastro!',
      unexpectedError: 'Ocorreu um erro inesperado.',
      leftDecal: 'Zero Day',
      leftTitle: 'Chegou a hora de se conhecer verdadeiramente',
      leftText1: 'O Oculto deixará de ser invisível.',
      leftText2: 'Aquilo que antes habitava nas entrelinhas da existência começa a emergir, como um sussurro que ganha forma, como uma frequência que finalmente encontra quem a escute.',
      leftText3: 'Preparando espectros para o que está por vir…',
      rightDecal: 'Dia Zero',
      rightTitle: 'Crie sua indêntidade digital e faça a Simbiose.',
      rightText1: 'Entre no Mundo Digital Novo, um limiar onde véus se dissolvem e a realidade deixa de ser apenas aquilo que os olhos alcançam. Aqui, o físico e o espiritual não caminham separados…',
      rightText2: 'Eles se entrelaçam, se fundem, respiram como um só fluxo vivo.',
      registering: 'CADASTRANDO',
      syncColorTitle: 'Sincronizar Frequência de Cor',
      radarErrorRing: 'FREQUÊNCIA DE ACESSO NÃO IDENTIFICADA. PREENCHA TODOS OS CAMPOS. ✦ ✦ ✦ ✦ ✦ FREQUÊNCIA DE ACESSO NÃO IDENTIFICADA. PREENCHA TODOS OS CAMPOS. ✦ ✦ ✦ ✦ ✦ ',
      enterNexus: 'Adentrar o Nexo',
      manifestExistence: 'Manifestar Existência',
      materialize: 'MATERIALIZAR',
      dissolve: 'DISSOLVER',
      quote: '"E se todas as suas verdades fossem apagadas, o que você escolheria acreditar?"',
    },
    en: {
      emptyFieldsError: 'Unidentified access frequency. Please fill in all fields.',
      signUpSuccess: 'Check your email to confirm your registration!',
      unexpectedError: 'An unexpected error occurred.',
      leftDecal: 'Zero Day',
      leftTitle: 'The time has come to truly know yourself',
      leftText1: 'The Hidden will no longer be invisible.',
      leftText2: 'That which once dwelt between the lines of existence begins to emerge, like a whisper taking shape, like a frequency that finally finds someone to listen.',
      leftText3: 'Preparing spectrums for what is to come…',
      rightDecal: 'Day Zero',
      rightTitle: 'Create your digital identity and achieve Symbiosis.',
      rightText1: 'Enter the New Digital World, a threshold where veils dissolve and reality ceases to be only what the eyes can reach. Here, the physical and the spiritual do not walk apart…',
      rightText2: 'They intertwine, merge, and breathe as one living flow.',
      registering: 'REGISTERING',
      syncColorTitle: 'Synchronize Color Frequency',
      radarErrorRing: 'UNIDENTIFIED ACCESS FREQUENCY. FILL IN ALL FIELDS. ✦ ✦ ✦ ✦ ✦ UNIDENTIFIED ACCESS FREQUENCY. FILL IN ALL FIELDS. ✦ ✦ ✦ ✦ ✦ ',
      enterNexus: 'Enter the Nexus',
      manifestExistence: 'Manifest Existence',
      materialize: 'MATERIALIZE',
      dissolve: 'DISSOLVE',
      quote: '"And if all your truths were erased, what would you choose to believe?"',
    },
  }[lang];

  const radarColors = [
    'rgba(173, 216, 230, 0.8)', // Shard 1
    'rgba(0, 255, 0, 0.8)',     // Shard 2
    'rgba(0, 0, 139, 0.8)',     // Shard 3
    'rgba(255, 255, 255, 0.8)', // Shard 4
    'rgba(255, 255, 0, 0.8)',   // Shard 5
    'rgba(147, 112, 219, 0.8)', // Shard 6
    'rgba(255, 0, 0, 0.8)',     // Shard 7
    'rgba(255, 140, 0, 0.8)'    // Shard 8
  ];

  useEffect(() => {
    // Inject registered characters into the crystal shards
    const fetchAvatars = async () => {
      const registeredCharacters = [
        '/personagens/LeviamonT.png?v=4',
        '/personagens/BelphemonT.png?v=4',
        '/personagens/DaemonT.png?v=4',
        '/personagens/IlusiomonsT.png?v=4',
        '/personagens/LucemonF.png?v=4',
        '/personagens/LilithmonT.png?v=4',
        '/personagens/BarbamonT.png?v=4',
        '/personagens/BeelzemonT.png?v=4'
      ];
      setCrystalAvatars(registeredCharacters);
    };
    fetchAvatars();
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      // Validação manual para permitir que o ritual de animação ocorra 
      // mesmo que os campos estejam vazios ou incompletos
      if (!email || !password) {
        setTimeout(() => {
          setError(t.emptyFieldsError);
          setLoading(false);
        }, 2500);
        return;
      }

      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        // Sempre aguarda o ritual de animação completar antes de reagir
        setTimeout(() => {
          if (error) {
            setError(error.message);
            setLoading(false);
          } else {
            router.push('/');
          }
        }, 2500);

      } else {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          },
        });

        setTimeout(() => {
          if (signUpError) {
            setError(signUpError.message);
          } else {
            setMessage(t.signUpSuccess);
          }
          setLoading(false);
        }, 2500);
      }
    } catch (err: any) {
      setTimeout(() => {
        setError(err.message || t.unexpectedError);
        setLoading(false);
      }, 2500);
    }
  };

  return (
    <main className={styles.container}>
      {/* FULL SCREEN GIANT CRYSTAL BACKGROUND */}
      <div className={styles.crystalBackground}>
        <div className={styles.topLightGlow} />
        
        {/* Core Black Circle + White Light */}
        <div className={styles.voidCoreWrapper}>
          <div className={styles.voidCore} />
        </div>
        
        {/* Splinters / broken glass details around the crack */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
          <div 
            key={`splinter-wrapper-${id}`}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            <div 
              className={`${styles.splinter} ${styles[`sp${id}` as keyof typeof styles]}`}
            />
          </div>
        ))}

        {[...Array(8)].map((_, i) => (
          <div 
            key={`shard-${i+1}`}
            className={`${styles.crystalShard} ${styles[`shard${i+1}` as keyof typeof styles]}`}
          >
            {crystalAvatars[i] && (
              <div className={styles.reflectionWrapper}>
                <img 
                  src={crystalAvatars[i]} 
                  className={styles.shardReflection} 
                  alt="" 
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Left side announcement */}
      <div className={`${styles.sidePanel} ${styles.sidePanelLeft}`}>
        <div className={styles.binaryCode} style={{ marginBottom: '1.5rem', opacity: 0.4 }}>
          {binaryLeft}
        </div>
        <div className={styles.cyberDecal}>{t.leftDecal}</div>
        <Eye className={styles.sideIcon} size={48} strokeWidth={1} />
        <h2 className={styles.sideTitle}>{t.leftTitle}</h2>
        <p className={styles.sideText}>
          {t.leftText1}<br />
          {t.leftText2}<br /><br />
          {t.leftText3}
        </p>
        <div className={styles.neonBar} />
        <div className={styles.binaryCode}>
          {binaryLeft}
        </div>
      </div>
      
      <div className={styles.authCard}>
        {!isLogin && (
          <div className={styles.statusHeader}>
            <div className={styles.statusLabel}>
              <span className={styles.statusLight} />
              <span>{t.registering}</span>
              <span className={styles.statusLight} />
            </div>
          </div>
        )}
        {/* 12-Piece Fractured Window Matrix */}
        <div className={styles.authFragmentFrame}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`${styles.authPiece} ${styles[`ap${i+1}`]}`} />
          ))}
        </div>

        <button 
          className={styles.radarColorBtn}
          onClick={() => {
            setColorIndex((colorIndex + 1) % radarColors.length);
          }}
          title={t.syncColorTitle}
          type="button"
        >
          <div className={styles.radarBtnGlow} />
        </button>

        <div className={styles.authContentWrapper}>
          <div 
            className={styles.hexBackground}
            style={{ '--radar-accent': radarColors[colorIndex] } as any}
          />

          {/* Circular Radar Text Overlay */}
          <svg className={styles.radarTextSvg} viewBox="0 0 480 480">
            <path id="radarCurve" d="M 240, 240 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0" fill="none" />
            <text 
              className={`${styles.radarTextContent} ${error ? styles.errorRadarText : ''}`} 
              style={error ? { fill: '#ff3c3c' } : {}}
            >
              <textPath href="#radarCurve" startOffset="0%" textLength="1382" lengthAdjust="spacing">
                {!error 
                  ? '' 
                  : t.radarErrorRing}
              </textPath>
            </text>
          </svg>

        <form onSubmit={handleAuth} className={styles.form}>
          {error && (
            <div className={styles.errorOverlay}>
              <span>{error}</span>
              <button 
                type="button" 
                onClick={() => setError(null)}
                className={styles.closeAlert}
              >
                <X size={14} />
              </button>
            </div>
          )}
          {message && (
            <div className={styles.successOverlay}>
              <span>{message}</span>
              <button 
                type="button" 
                onClick={() => setMessage(null)}
                className={styles.closeAlert}
              >
                <X size={14} />
              </button>
            </div>
          )}

          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                placeholder="••••••••"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <div className={styles.inputBorder} />
            </div>
            <div className={styles.externalIconBottom}>
              <Mail size={16} />
            </div>
          </div>

          <div style={{ height: '80px', flexShrink: 0 }} />

          <div className={styles.inputGroup}>
            <div className={styles.externalIconTop}>
              <Lock size={16} />
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
              />
              <div className={styles.inputBorder} />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className={styles.logoBtn}
            title={isLogin ? t.enterNexus : t.manifestExistence}
          >
            <div className={styles.logoArea}>
              <div className={styles.logoBorder}>
                 <div className={styles.logoInner}>
                   <img src="/logo.jpg" alt="ZeroDay Logo" className={styles.appLogo} />
                 </div>
              </div>
            </div>
          </button>
        </form>

      </div>
      <div className={styles.toggleArea}>
        <button 
          type="button"
          className={styles.dotsBtn}
          onClick={() => setShowToggleMenu(!showToggleMenu)}
        >
          <MoreHorizontal size={24} />
        </button>
        
        {showToggleMenu && (
          <button 
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
              setMessage(null);
              setShowToggleMenu(false);
            }}
            className={styles.toggleBtn}
            style={{ 
              fontSize: '0.9rem', 
              letterSpacing: '4px',
              '--radar-accent': radarColors[colorIndex]
            } as any}
          >
            {isLogin ? t.materialize : t.dissolve}
          </button>
        )}
      </div>
      </div>

      {/* Right side announcement */}
      <div className={`${styles.sidePanel} ${styles.sidePanelRight}`}>
        <div className={styles.binaryCode} style={{ marginBottom: '1.5rem', opacity: 0.4 }}>
          {binaryRight}
        </div>
        <div className={styles.cyberDecal}>{t.rightDecal}</div>
        <Fingerprint className={styles.sideIcon} size={48} strokeWidth={1} />
        <h2 className={styles.sideTitle}>{t.rightTitle}</h2>
        <p className={styles.sideText}>
          {t.rightText1}
          <br /><br />
          {t.rightText2}
        </p>
        <div className={styles.neonBar} />
        <div className={styles.binaryCode}>
          {binaryRight}
        </div>
      </div>

      <div className={styles.glitchQuote}>
        {t.quote}
      </div>

      <div className={styles.langSelector}>
        <button 
          type="button"
          className={styles.langBtn} 
          onClick={() => setLang('pt')}
          style={{ opacity: lang === 'pt' ? 1 : 0.5 }}
        >
          PT-BR
        </button>
        <div className={styles.langSeparator} />
        <button 
          type="button"
          className={styles.langBtn} 
          onClick={() => setLang('en')}
          style={{ opacity: lang === 'en' ? 1 : 0.5 }}
        >
          EN-US
        </button>
      </div>
    </main>
  );
}
