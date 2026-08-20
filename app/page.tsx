'use client';

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Cpu,
  Dna,
  Factory,
  GraduationCap,
  HeartPulse,
  Leaf,
  Lightbulb,
  Mail,
  Network,
  Rocket,
  Scale,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const EMAIL = 'nexialbusiness@proton.me';

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || '#contato';

const courses = [
  {
    name: 'NexialBusiness Medicina',
    price: 'R$ 14.900',
    installment: 'até 12×',
    icon: HeartPulse,
    featured: true,
    eyebrow: 'Saúde • HealthTech • Biotecnologia',
    description:
      'Formação interdisciplinar para profissionais que desejam transformar conhecimento em saúde em novos serviços, produtos, tecnologias, modelos assistenciais e negócios.',
    connections: [
      'Medicina + Engenharia',
      'Medicina + Inteligência Artificial',
      'Medicina + Biotecnologia',
      'Medicina + Economia',
      'Medicina + Gestão',
    ],
    outcomes: [
      'Novos serviços em saúde',
      'Produtos médicos e dispositivos',
      'HealthTechs e plataformas digitais',
      'Novos modelos de atendimento',
      'Tecnologias aplicadas à saúde',
      'Novos mercados em saúde',
    ],
  },
  {
    name: 'NexialBusiness Engenharia',
    price: 'R$ 12.900',
    installment: 'até 12×',
    icon: Factory,
    eyebrow: 'Deep Tech • Produto • Indústria',
    description:
      'Transforme capacidade técnica em produtos, sistemas, tecnologias, serviços e empresas capazes de competir em mercados existentes ou criar novas categorias.',
    connections: [
      'Engenharia + IA',
      'Engenharia + Medicina',
      'Engenharia + Biotecnologia',
      'Engenharia + Economia',
      'Engenharia + Design',
    ],
    outcomes: [
      'Novos produtos físicos',
      'Sistemas tecnológicos',
      'Automação e novos processos',
      'Deep Tech',
      'Serviços tecnológicos',
      'Novos modelos industriais',
    ],
  },
  {
    name: 'NexialBusiness IA & Dados',
    price: 'R$ 12.900',
    installment: 'até 12×',
    icon: Cpu,
    eyebrow: 'IA • SaaS • Automação',
    description:
      'Use inteligência artificial, dados e automação como camadas de criação de novos produtos, serviços e modelos de negócio em múltiplos setores.',
    connections: [
      'IA + Saúde',
      'IA + Engenharia',
      'IA + Direito',
      'IA + Agro',
      'IA + Gestão',
    ],
    outcomes: [
      'SaaS especializados',
      'Sistemas de decisão',
      'Automação profissional',
      'Produtos baseados em dados',
      'Novos serviços digitais',
      'Novos mercados digitais',
    ],
  },
  {
    name: 'NexialBusiness Direito',
    price: 'R$ 10.900',
    installment: 'até 12×',
    icon: Scale,
    eyebrow: 'LegalTech • Serviços • Estratégia',
    description:
      'Recombine Direito, tecnologia, gestão, economia e dados para desenvolver novos serviços jurídicos, plataformas e modelos empresariais.',
    connections: [
      'Direito + Tecnologia',
      'Direito + IA',
      'Direito + Economia',
      'Direito + Gestão',
      'Direito + Dados',
    ],
    outcomes: [
      'LegalTechs',
      'Novos serviços jurídicos',
      'Automação de processos',
      'Produtos de informação',
      'Modelos jurídicos escaláveis',
      'Novos mercados de serviços',
    ],
  },
  {
    name: 'NexialBusiness Gestão',
    price: 'R$ 10.900',
    installment: 'até 12×',
    icon: TrendingUp,
    eyebrow: 'Estratégia • Inovação • Negócios',
    description:
      'Formação para criação de novas receitas, ofertas, empresas, unidades de negócio e mercados por meio de combinações interdisciplinares.',
    connections: [
      'Gestão + Tecnologia',
      'Gestão + Economia',
      'Gestão + Engenharia',
      'Gestão + Comportamento',
      'Gestão + IA',
    ],
    outcomes: [
      'Novas unidades de negócio',
      'Novos serviços',
      'Novos produtos',
      'Modelos de receita',
      'Reposicionamento de mercado',
      'Criação de novas categorias',
    ],
  },
  {
    name: 'NexialBusiness Agronomia',
    price: 'R$ 9.900',
    installment: 'até 12×',
    icon: Leaf,
    eyebrow: 'AgTech • BioTech • Agroindústria',
    description:
      'Conecte agronomia, biologia, engenharia, dados, automação e economia para desenvolver soluções de maior valor agregado.',
    connections: [
      'Agro + Engenharia',
      'Agro + Biotecnologia',
      'Agro + IA',
      'Agro + Economia',
      'Agro + Automação',
    ],
    outcomes: [
      'AgTechs',
      'Novos insumos',
      'Automação agrícola',
      'Produtos biológicos',
      'Serviços para o agro',
      'Novas cadeias de valor',
    ],
  },
  {
    name: 'NexialBusiness Biotecnologia',
    price: 'R$ 9.900',
    installment: 'até 12×',
    icon: Dna,
    eyebrow: 'BioTech • P&D • Produto',
    description:
      'Transforme ciência e pesquisa em produtos, processos, aplicações tecnológicas e oportunidades de mercado.',
    connections: [
      'Biotecnologia + Medicina',
      'Biotecnologia + Agro',
      'Biotecnologia + Engenharia',
      'Biotecnologia + IA',
      'Biotecnologia + Negócios',
    ],
    outcomes: [
      'BioTechs',
      'Produtos biológicos',
      'Tecnologias aplicadas',
      'Novos processos',
      'Propriedade intelectual',
      'Novas aplicações comerciais',
    ],
  },
  {
    name: 'NexialBusiness Economia',
    price: 'R$ 8.900',
    installment: 'até 12×',
    icon: BrainCircuit,
    eyebrow: 'Mercados • Estratégia • Decisão',
    description:
      'Utilize economia, comportamento, dados e tecnologia para detectar oportunidades, redesenhar mercados e criar novos modelos econômicos.',
    connections: [
      'Economia + Dados',
      'Economia + Tecnologia',
      'Economia + Saúde',
      'Economia + Comportamento',
      'Economia + Gestão',
    ],
    outcomes: [
      'Novos modelos econômicos',
      'Estratégias de mercado',
      'Produtos de inteligência',
      'Novas estruturas de receita',
      'Mercados emergentes',
      'Novos modelos empresariais',
    ],
  },
];

const methodology = [
  {
    number: '01',
    title: 'Desconstruir',
    text: 'Analisar como um setor funciona hoje e identificar limitações, gargalos, dependências e premissas que podem ser questionadas.',
  },
  {
    number: '02',
    title: 'Conectar',
    text: 'Buscar conhecimentos, tecnologias e modelos de outras disciplinas capazes de produzir combinações incomuns e economicamente úteis.',
  },
  {
    number: '03',
    title: 'Recombinar',
    text: 'Criar novas arquiteturas de produto, serviço, tecnologia ou modelo de negócio a partir das conexões identificadas.',
  },
  {
    number: '04',
    title: 'Transformar',
    text: 'Converter as combinações em propostas concretas de valor, aplicações, produtos, serviços, negócios ou novos mercados.',
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function WhatsAppButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target={WHATSAPP_URL.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-300 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

export default function NexialBusinessPage() {
  const [openCourse, setOpenCourse] = useState<string | null>(
    'NexialBusiness Medicina'
  );

  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        'Olá. Quero conhecer melhor as formações NexialBusiness.'
      ),
    []
  );

  const floatingWhatsApp =
    WHATSAPP_URL.startsWith('https://wa.me/')
      ? `${WHATSAPP_URL}${
          WHATSAPP_URL.includes('?') ? '&' : '?'
        }text=${whatsappText}`
      : WHATSAPP_URL;

  return (
    <main className="min-h-screen bg-[#05090d] text-white selection:bg-emerald-300 selection:text-black">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#05090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10">
              <Network className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight">
                Nexial<span className="text-emerald-300">Business</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Interdisciplinaridade aplicada
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 lg:flex">
            <a href="#conceito" className="transition hover:text-white">
              Conceito
            </a>
            <a href="#formacoes" className="transition hover:text-white">
              Formações
            </a>
            <a href="#executive" className="transition hover:text-white">
              Executive
            </a>
            <a href="#corporate" className="transition hover:text-white">
              Corporate
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Método
            </a>
          </nav>

          <WhatsAppButton className="hidden !px-4 !py-2.5 text-sm sm:inline-flex">
            Falar com a NexialBusiness
          </WhatsAppButton>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44"
      >
        <div className="absolute left-1/2 top-24 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.065] blur-[120px]" />
        <div className="absolute right-[-100px] top-[400px] h-[360px] w-[360px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <SectionLabel>NexialBusiness</SectionLabel>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[88px]">
              Sua profissão resolve problemas.
              <span className="mt-3 block text-emerald-300">
                As conexões criam mercados.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Uma formação criada para transformar conhecimento técnico em
              <strong className="font-medium text-white">
                {' '}
                novos produtos, novos serviços, novos negócios, novas
                tecnologias e novos mercados
              </strong>
              , por meio da combinação estruturada de conhecimentos de
              diferentes áreas.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#formacoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-slate-200"
              >
                Conhecer as formações
                <ArrowRight className="h-4 w-4" />
              </a>

              <WhatsAppButton>
                Conversar pelo WhatsApp
              </WhatsAppButton>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-300" />
                Interdisciplinaridade aplicada
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-300" />
                Criação orientada a oportunidades
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-300" />
                Produto, tecnologia e mercado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEITO */}
      <section
        id="conceito"
        className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>O princípio Nexial</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Não é estudar várias áreas.
              <span className="mt-2 block text-slate-500">
                É fazer áreas diferentes produzirem algo novo.
              </span>
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-slate-400">
            <p>
              O conhecimento tradicional tende a se organizar em disciplinas,
              profissões, departamentos e setores. Essa especialização é
              necessária, mas também cria fronteiras.
            </p>

            <p>
              O NexialBusiness trabalha justamente nessas fronteiras. A
              pergunta deixa de ser apenas
              <strong className="font-medium text-white">
                {' '}
                “como fazer melhor o que meu setor já faz?”
              </strong>{' '}
              e passa a incluir:
              <strong className="font-medium text-emerald-300">
                {' '}
                “o que pode existir quando conectamos conhecimentos que
                normalmente permanecem separados?”
              </strong>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Criar novos produtos',
                'Criar novos serviços',
                'Criar novos negócios',
                'Criar novas tecnologias',
                'Criar novos modelos empresariais',
                'Criar novos mercados',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-300"
                >
                  <Zap className="h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKET RECONCEPTION */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[28px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-transparent p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <SectionLabel>Além da inovação incremental</SectionLabel>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Da inovação dentro do mercado à{' '}
                  <span className="text-emerald-300">
                    criação de novos mercados.
                  </span>
                </h2>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                  Algumas oportunidades surgem ao melhorar aquilo que já
                  existe. Outras aparecem quando questionamos a própria
                  concepção de um setor e combinamos tecnologias, conhecimentos
                  e modelos provenientes de outros mercados.
                </p>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                  O objetivo do NexialBusiness é desenvolver capacidade para
                  atuar nas duas frentes — inclusive identificar oportunidades
                  capazes de gerar{' '}
                  <strong className="font-medium text-white">
                    novas categorias de produto, novos modelos empresariais e
                    mercados que antes não estavam claramente definidos.
                  </strong>
                </p>
              </div>

              <div className="space-y-3">
                {[
                  ['01', 'Melhorar o que já existe'],
                  ['02', 'Combinar setores'],
                  ['03', 'Criar uma nova solução'],
                  ['04', 'Redesenhar a experiência'],
                  ['05', 'Criar uma nova categoria'],
                  ['06', 'Abrir um novo mercado'],
                ].map(([n, text]) => (
                  <div
                    key={n}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-black/20 px-5 py-4"
                  >
                    <span className="font-mono text-xs text-emerald-300">
                      {n}
                    </span>
                    <span className="text-sm text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="formacoes"
        className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel>Formações especializadas</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Uma profissão como ponto de partida.
              <span className="mt-2 block text-slate-500">
                Outras áreas como multiplicadores de possibilidades.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Cada formação parte de uma área profissional principal e cria
              conexões estratégicas com outras disciplinas para ampliar o
              espaço de criação.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {courses.map((course) => {
              const Icon = course.icon;
              const isOpen = openCourse === course.name;

              return (
                <article
                  key={course.name}
                  className={`overflow-hidden rounded-2xl border transition ${
                    course.featured
                      ? 'border-emerald-400/30 bg-emerald-400/[0.045]'
                      : 'border-white/[0.07] bg-white/[0.02]'
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenCourse(isOpen ? null : course.name)
                    }
                    className="flex w-full items-start justify-between gap-6 p-6 text-left sm:p-7"
                  >
                    <div className="flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          course.featured
                            ? 'bg-emerald-400 text-black'
                            : 'border border-white/10 bg-white/[0.04] text-emerald-300'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                          {course.eyebrow}
                        </div>
                        <h3 className="text-xl font-semibold">
                          {course.name}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                          {course.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={`mt-2 h-5 w-5 shrink-0 text-slate-500 transition ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div className="border-t border-white/[0.06] px-6 py-5 sm:px-7">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          Investimento
                        </div>
                        <div className="mt-1 text-2xl font-semibold">
                          {course.price}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          Parcelamento em {course.installment}, conforme
                          condições comerciais
                        </div>
                      </div>

                      <WhatsAppButton className="!px-4 !py-2.5 text-sm">
                        Quero saber mais
                      </WhatsAppButton>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="grid gap-7 border-t border-white/[0.06] bg-black/20 p-6 sm:grid-cols-2 sm:p-7">
                      <div>
                        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Conexões possíveis
                        </div>
                        <div className="space-y-2.5">
                          {course.connections.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm text-slate-300"
                            >
                              <Network className="h-4 w-4 text-emerald-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Possíveis direções
                        </div>
                        <div className="space-y-2.5">
                          {course.outcomes.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 text-sm text-slate-300"
                            >
                              <Check className="h-4 w-4 text-emerald-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXECUTIVE */}
      <section id="executive" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[30px] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-transparent p-7 sm:p-10 lg:p-14">
            <div className="absolute right-[-80px] top-[-100px] h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[100px]" />

            <div className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  Formação multidisciplinar premium
                </div>

                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  NexialBusiness
                  <span className="block text-violet-300">Executive</span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                  Para empresários, executivos, profissionais experientes e
                  criadores que não querem permanecer limitados a uma única
                  vertical profissional.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  No Executive, o participante trabalha com uma{' '}
                  <strong className="font-medium text-white">
                    amplitude interdisciplinar muito maior
                  </strong>
                  . Medicina, engenharia, IA, economia, gestão, direito,
                  biotecnologia, agronomia e ciências humanas passam a formar
                  um espaço conjunto de criação.
                </p>

                <div className="mt-9 flex flex-wrap items-end gap-x-8 gap-y-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Investimento
                    </div>
                    <div className="mt-1 text-4xl font-semibold">
                      R$ 24.900
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Condições de parcelamento disponíveis
                    </div>
                  </div>

                  <WhatsAppButton>
                    Quero conhecer o Executive
                  </WhatsAppButton>
                </div>
              </div>

              <div>
                <div className="mb-5 text-sm font-semibold text-white">
                  Por que o Executive está acima das formações especializadas?
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Network,
                      title: 'Mais áreas simultaneamente',
                      text: 'O participante não fica restrito às conexões de uma única profissão.',
                    },
                    {
                      icon: Lightbulb,
                      title: 'Mais combinações possíveis',
                      text: 'Quanto maior a diversidade de conhecimentos conectados, maior o espaço para geração de conceitos originais.',
                    },
                    {
                      icon: Rocket,
                      title: 'Criação multi-setorial',
                      text: 'Permite explorar produtos, serviços, tecnologias e modelos empresariais em diferentes indústrias.',
                    },
                    {
                      icon: Target,
                      title: 'Foco em novas oportunidades',
                      text: 'A análise ultrapassa a profissão de origem e busca espaços econômicos ainda pouco explorados.',
                    },
                    {
                      icon: Workflow,
                      title: 'Recombinação de modelos',
                      text: 'Modelos de um setor podem ser reinterpretados e aplicados a mercados completamente diferentes.',
                    },
                  ].map(({ icon: ItemIcon, title, text }) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/[0.07] bg-black/20 p-5"
                    >
                      <div className="flex gap-4">
                        <ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                        <div>
                          <h3 className="font-medium">{title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE */}
      <section
        id="corporate"
        className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                <Building2 className="h-3.5 w-3.5" />
                Transformação empresarial
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                NexialBusiness
                <span className="block text-amber-200">Corporate</span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-400">
                A versão Corporate utiliza a interdisciplinaridade para
                investigar como os ativos, competências e estruturas de uma
                empresa podem originar{' '}
                <strong className="font-medium text-white">
                  novas fontes de receita, novos produtos, novos serviços,
                  tecnologias, unidades de negócio e mercados.
                </strong>
              </p>

              <div className="mt-8 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Projetos Corporate
                </div>
                <div className="mt-2 text-3xl font-semibold">
                  R$ 49.900 a R$ 149.000+
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Estrutura, escopo, número de participantes, profundidade e
                  nível de customização definidos conforme o projeto.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>
                  Solicitar conversa Corporate
                </WhatsAppButton>

                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                    'NexialBusiness Corporate'
                  )}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.07]"
                >
                  <Mail className="h-4 w-4" />
                  Enviar e-mail
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7">
                <div className="text-sm font-semibold">
                  A empresa entra com:
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Conhecimento acumulado',
                    'Equipe e competências',
                    'Tecnologias disponíveis',
                    'Base de clientes',
                    'Dados',
                    'Infraestrutura',
                    'Marca',
                    'Problemas e oportunidades',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-black/20 p-3.5 text-sm text-slate-300"
                    >
                      <Check className="h-4 w-4 text-amber-200" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="my-8 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/20 bg-amber-200/[0.06]">
                    <ChevronDown className="h-5 w-5 text-amber-200" />
                  </div>
                </div>

                <div className="text-sm font-semibold">
                  O método busca transformar isso em:
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Novos produtos',
                    'Novos serviços',
                    'Novas tecnologias',
                    'Novos negócios',
                    'Novos modelos de receita',
                    'Novos mercados',
                    'Novas combinações estratégicas',
                    'Novas categorias de solução',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-lg border border-amber-200/10 bg-amber-200/[0.025] p-3.5 text-sm text-slate-200"
                    >
                      <Sparkles className="h-4 w-4 text-amber-200" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                O Corporate possui maior valor porque sua amplitude e
                profundidade podem equivaler à combinação de múltiplas
                verticais NexialBusiness, aplicadas diretamente ao contexto
                estratégico de uma organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Arquitetura de valor</SectionLabel>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Quanto maior a amplitude interdisciplinar,
            <span className="block text-slate-500">
              maior o espaço de criação.
            </span>
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.07]">
            <div className="grid border-b border-white/[0.07] bg-white/[0.025] md:grid-cols-3">
              {[
                {
                  title: 'Especializadas',
                  price: 'R$ 8.900–14.900',
                  icon: GraduationCap,
                  text: 'Uma profissão principal conectada a outras disciplinas.',
                },
                {
                  title: 'Executive',
                  price: 'R$ 24.900',
                  icon: BriefcaseBusiness,
                  text: 'Múltiplas verticais simultaneamente para criação multi-setorial.',
                },
                {
                  title: 'Corporate',
                  price: 'R$ 49.900–149.000+',
                  icon: Building2,
                  text: 'Interdisciplinaridade aplicada ao contexto e aos ativos de uma organização.',
                },
              ].map(({ title, price, icon: Icon, text }) => (
                <div
                  key={title}
                  className="border-white/[0.07] p-7 md:border-r last:border-r-0"
                >
                  <Icon className="h-6 w-6 text-emerald-300" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <div className="mt-1 text-sm font-medium text-emerald-300">
                    {price}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {[
              [
                'Área central de aplicação',
                '1 vertical principal',
                'Múltiplas',
                'Múltiplas + empresa',
              ],
              [
                'Amplitude interdisciplinar',
                'Alta',
                'Muito alta',
                'Máxima/customizada',
              ],
              [
                'Novos produtos e serviços',
                'Sim',
                'Sim',
                'Sim',
              ],
              [
                'Novos negócios',
                'Sim',
                'Sim',
                'Sim',
              ],
              [
                'Novas tecnologias',
                'Sim',
                'Sim',
                'Sim',
              ],
              [
                'Criação de novos mercados',
                'Explorada',
                'Prioritária',
                'Estratégica',
              ],
              [
                'Aplicação organizacional',
                'Individual',
                'Executiva',
                'Corporativa',
              ],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid border-b border-white/[0.055] last:border-b-0 md:grid-cols-4"
              >
                {row.map((cell, index) => (
                  <div
                    key={`${row[0]}-${index}`}
                    className={`p-4 text-sm md:p-5 ${
                      index === 0
                        ? 'font-medium text-slate-300'
                        : 'text-slate-500'
                    }`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section
        id="metodo"
        className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel>Método</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Transformar conexão em criação.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                A interdisciplinaridade só gera valor quando as conexões
                conseguem produzir novas soluções, aplicações e oportunidades
                concretas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {methodology.map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <div className="font-mono text-xs text-emerald-300">
                    {item.number}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contato" className="px-5 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-400/20 bg-emerald-400/[0.055] p-8 text-center sm:p-14 lg:p-20">
            <div className="absolute left-1/2 top-[-180px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[130px]" />

            <div className="relative mx-auto max-w-4xl">
              <Network className="mx-auto h-10 w-10 text-emerald-300" />

              <h2 className="mt-7 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                O próximo mercado pode estar entre duas áreas que ainda não
                aprenderam a conversar.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Escolha uma formação especializada ou amplie o espaço de
                possibilidades com NexialBusiness Executive e Corporate.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton>
                  Falar com a NexialBusiness
                </WhatsAppButton>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-6 py-3.5 font-semibold transition hover:bg-black/40"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 py-9 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-semibold text-slate-400">
              NexialBusiness
            </span>{' '}
            — Interdisciplinaridade aplicada à criação.
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="transition hover:text-slate-300"
          >
            {EMAIL}
          </a>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={floatingWhatsApp}
        target={floatingWhatsApp.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-emerald-400 p-4 text-slate-950 shadow-2xl shadow-emerald-500/20 transition hover:scale-105 hover:bg-emerald-300 sm:px-5"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.58-.487-.501-.67-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.89-9.884a9.82 9.82 0 017.021 2.91 9.825 9.825 0 012.897 7.017c-.003 5.45-4.437 9.884-9.924 9.884M20.52 3.449A11.815 11.815 0 0012.056 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.86 11.86 0 005.69 1.449h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.433-8.453" />
        </svg>

        <span className="hidden text-sm font-bold sm:block">
          Falar pelo WhatsApp
        </span>
      </a>
    </main>
  );
}
