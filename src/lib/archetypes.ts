export interface ArchetypeProfile {
  id: string;
  name: string;
  avatar: string;
  title: string;
  sin: string;
  phrase: string;
}

export const ARCHETYPE_PROFILES: Record<string, ArchetypeProfile> = {
  '00000000-0000-0000-0000-000000000001': {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Luxyus',
    avatar: '/personagens/Luxyus.png',
    title: 'União dos Sete Pecados',
    sin: 'União',
    phrase: "Eu não minto… eu só mostro o que você quer acreditar."
  },
  '00000000-0000-0000-0000-000000000002': {
    id: '00000000-0000-0000-0000-000000000002',
    name: 'Sobturno',
    avatar: '/personagens/Sobturno.png',
    title: 'Soberba — Superioridade e Domínio',
    sin: 'Soberba',
    phrase: "Eu te faço acreditar que você já chegou no topo… cuidado comigo."
  },
  '00000000-0000-0000-0000-000000000003': {
    id: '00000000-0000-0000-0000-000000000003',
    name: 'Iramar',
    avatar: '/personagens/Iramar.png',
    title: 'Avareza — Posse e Ambição Insaciável',
    sin: 'Avareza',
    phrase: "Eu te prometo segurança… mas te prendo na escassez."
  },
  '00000000-0000-0000-0000-000000000004': {
    id: '00000000-0000-0000-0000-000000000004',
    name: 'Luxênus',
    avatar: '/personagens/Luxenus.png',
    title: 'Inveja — Cobiça pela Existência Alheia',
    sin: 'Inveja',
    phrase: "Eu te faço olhar para o outro… e esquecer de si."
  },
  '00000000-0000-0000-0000-000000000005': {
    id: '00000000-0000-0000-0000-000000000005',
    name: 'Avarcúrio',
    avatar: '/personagens/Avarcurio.png',
    title: 'Gula — Fome que Nada Consegue Saciar',
    sin: 'Gula',
    phrase: "Eu nunca estou satisfeito… e ensino você a nunca estar também."
  },
  '00000000-0000-0000-0000-000000000006': {
    id: '00000000-0000-0000-0000-000000000006',
    name: 'Inveranus',
    avatar: '/personagens/Inveranus.png',
    title: 'Preguiça — Inércia e Sono Profundo',
    sin: 'Preguiça',
    phrase: "Eu te faço confortável… enquanto sua vida para."
  },
  '00000000-0000-0000-0000-000000000007': {
    id: '00000000-0000-0000-0000-000000000007',
    name: 'Gúpiter',
    avatar: '/personagens/Gupiter.png',
    title: 'Luxúria — Desejo e Sedução',
    sin: 'Luxúria',
    phrase: "Eu te confundo com prazer… mas te esvazio por dentro."
  },
  '00000000-0000-0000-0000-000000000008': {
    id: '00000000-0000-0000-0000-000000000008',
    name: 'Pretuno',
    avatar: '/personagens/Pretuno.png',
    title: 'Ira — Fúria e Destruição',
    sin: 'Ira',
    phrase: "Eu te dou força… mas tiro seu controle."
  },
};

// Aliases mapeando nomes atuais e antigos para o identificador canônico
export const OLD_NAME_TO_ARCHETYPE: Record<string, string> = {
  // 1: Luxyus (ex-Lumiar)
  luxyus: '00000000-0000-0000-0000-000000000001',
  lumiar: '00000000-0000-0000-0000-000000000001',
  lumíar: '00000000-0000-0000-0000-000000000001',
  ilusionmon: '00000000-0000-0000-0000-000000000001',

  // 2: Sobturno (ex-Soberath)
  sobturno: '00000000-0000-0000-0000-000000000002',
  soberath: '00000000-0000-0000-0000-000000000002',
  lucemon: '00000000-0000-0000-0000-000000000002',

  // 3: Iramar (ex-Avarok)
  iramar: '00000000-0000-0000-0000-000000000003',
  avarok: '00000000-0000-0000-0000-000000000003',
  barbamon: '00000000-0000-0000-0000-000000000003',

  // 4: Luxênus (ex-Invidrax)
  luxênus: '00000000-0000-0000-0000-000000000004',
  luxenus: '00000000-0000-0000-0000-000000000004',
  invidrax: '00000000-0000-0000-0000-000000000004',
  leviamon: '00000000-0000-0000-0000-000000000004',

  // 5: Avarcúrio (ex-Vorath)
  avarcúrio: '00000000-0000-0000-0000-000000000005',
  avarcurio: '00000000-0000-0000-0000-000000000005',
  vorath: '00000000-0000-0000-0000-000000000005',
  beelzemon: '00000000-0000-0000-0000-000000000005',

  // 6: Inveranus (ex-Acedrion)
  inveranus: '00000000-0000-0000-0000-000000000006',
  acedrion: '00000000-0000-0000-0000-000000000006',
  belphemon: '00000000-0000-0000-0000-000000000006',

  // 7: Gúpiter (ex-Luxarys)
  gúpiter: '00000000-0000-0000-0000-000000000007',
  gupiter: '00000000-0000-0000-0000-000000000007',
  luxarys: '00000000-0000-0000-0000-000000000007',
  lilithmon: '00000000-0000-0000-0000-000000000007',

  // 8: Pretuno (ex-Irázor)
  pretuno: '00000000-0000-0000-0000-000000000008',
  irázor: '00000000-0000-0000-0000-000000000008',
  irazor: '00000000-0000-0000-0000-000000000008',
  daemon: '00000000-0000-0000-0000-000000000008',
};

export function resolveArchetype(userId?: string | null, rawUsername?: string | null): ArchetypeProfile | null {
  if (userId && ARCHETYPE_PROFILES[userId]) {
    return ARCHETYPE_PROFILES[userId];
  }
  if (rawUsername) {
    const key = rawUsername.toLowerCase().trim();
    const id = OLD_NAME_TO_ARCHETYPE[key];
    if (id && ARCHETYPE_PROFILES[id]) {
      return ARCHETYPE_PROFILES[id];
    }
  }
  return null;
}

export function getCleanUsername(userId?: string | null, rawUsername?: string | null, fallback?: string): string {
  const arc = resolveArchetype(userId, rawUsername);
  if (arc) return arc.name;
  return rawUsername || fallback || 'Consciência';
}

export function getCleanAvatar(userId?: string | null, rawUsername?: string | null, defaultAvatar?: string | null): string | null {
  const arc = resolveArchetype(userId, rawUsername);
  if (arc) return arc.avatar;
  return defaultAvatar || null;
}

export function normalizeNodeProfiles<T extends { user_id?: string | null; profiles?: { username?: string | null; avatar_url?: string | null } | null }>(node: T): T {
  const arc = resolveArchetype(node.user_id, node.profiles?.username);
  if (arc) {
    return {
      ...node,
      profiles: {
        ...(node.profiles || {}),
        username: arc.name,
        avatar_url: arc.avatar,
      }
    };
  }
  return node;
}
