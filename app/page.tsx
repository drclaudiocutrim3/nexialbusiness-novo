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
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const EMAIL = 'nexialbusiness@proton.me';

const WHATSAPP_URL =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || '#contato';

const courses = [
  {
    name: 'Medicina NexialBusiness',
    price: 'R$ 14.900',
    installment: 'até 12×',
    icon: HeartPulse,
    featured: true,
    eyebrow: 'Saúde • HealthTech • Biotecnologia',
    description:
      'Programa de criação de novos produtos, serviços, negócios e mercados a partir da medicina e de suas conexões com tecnologia, engenharia, IA, biotecnologia, economia e gestão.',
    connections: [
      'Medicina + Engenharia',
      'Medicina + Inteligência Artificial',
      'Medicina + Biotecnologia',
      'Medicina + Economia',
      'Medicina + Gestão',
    ],
    outcomes: [
      'Novos serviços em saúde',
      'Dispositivos e produtos médicos',
      'HealthTechs e plataformas',
      'Novos modelos assistenciais',
      'Tecnologias aplicadas à saúde',
      'Novos modelos de hospitais e clínicas',
      'Novos negócios e mercados em saúde',
    ],
  },
  {
    name: 'Engenharia NexialBusiness',
    price: 'R$ 12.900',
    installment: 'até 12×',
    icon: Factory,
    eyebrow: 'Deep Tech • Produto • Indústria',
    description:
      'Programa para transformar conhecimento de engenharia em novos produtos, equipamentos, sistemas, tecnologias, serviços, empresas e mercados.',
    connections: [
      'Engenharia + IA',
      'Engenharia + Medicina',
      'Engenharia + Biotecnologia',
      'Engenharia + Economia',
      'Engenharia + Design',
    ],
    outcomes: [
      'Novos produtos físicos',
      'Dispositivos e equipamentos',
      'Sistemas tecnológicos',
      'Automação e novos processos',
      'Deep Tech',
      'Novos serviços tecnológicos',
      'Novos modelos industriais',
    ],
  },
  {
    name: 'IA & Dados NexialBusiness',
    price: 'R$ 12.900',
    installment: 'até 12×',
    icon: Cpu,
    eyebrow: 'IA • SaaS • Automação',
    description:
      'Programa para utilizar inteligência artificial, dados e automação como mecanismos de criação e transformação de produtos, serviços, empresas e mercados.',
    connections: [
      'IA + Saúde',
      'IA + Engenharia',
      'IA + Direito',
      'IA + Agro',
      'IA + Gestão',
    ],
    outcomes: [
      'SaaS especializados',
      'Sistemas inteligentes',
      'Automação profissional',
      'Produtos baseados em dados',
      'Novos serviços digitais',
      'Novos modelos de software',
      'Novos mercados digitais',
    ],
  },
  {
    name: 'Direito NexialBusiness',
    price: 'R$ 10.900',
    installment: 'até 12×',
    icon: Scale,
    eyebrow: 'LegalTech • Serviços • Estratégia',
    description:
      'Programa para recombinar Direito, tecnologia, IA, economia, gestão e dados na criação de novos serviços, plataformas, negócios e mercados.',
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
      'Novos negócios jurídicos',
      'Novos mercados de serviços',
    ],
  },
  {
    name: 'Gestão NexialBusiness',
    price: 'R$ 10.900',
    installment: 'até 12×',
    icon: TrendingUp,
    eyebrow: 'Estratégia • Inovação • Negócios',
    description:
      'Programa para transformar problemas empresariais e oportunidades de mercado em novos produtos, serviços, receitas, empresas e modelos de negócio.',
    connections: [
      'Gestão + Tecnologia',
      'Gestão + Economia',
      'Gestão + Engenharia',
      'Gestão + Comportamento',
      'Gestão + IA',
    ],
    outcomes: [
      'Novas unidades de negócio',
      'Novos produtos e serviços',
      'Novos modelos de receita',
      'Transformação empresarial',
      'Reposicionamento de mercado',
      'Novas categorias',
      'Novos mercados',
    ],
  },
  {
    name: 'Agronomia NexialBusiness',
    price: 'R$ 9.900',
    installment: 'até 12×',
    icon: Leaf,
    eyebrow: 'AgTech • BioTech • Agroindústria',
    description:
      'Programa para conectar agronomia, biologia, engenharia, automação, dados e economia na criação de produtos, tecnologias, serviços e novos negócios para o agro.',
    connections: [
      'Agronomia + Engenharia',
      'Agronomia + Biotecnologia',
      'Agronomia + IA',
      'Agronomia + Economia',
      'Agronomia + Automação',
    ],
    outcomes: [
      'AgTechs',
      'Novos insumos',
      'Automação agrícola',
      'Produtos biológicos',
      'Novos serviços para o agro',
      'Novas cadeias de valor',
      'Novos mercados agroindustriais',
    ],
  },
  {
    name: 'Biotecnologia NexialBusiness',
    price: 'R$ 9.900',
    installment: 'até 12×',
    icon: Dna,
    eyebrow: 'BioTech • P&D • Produto',
    description:
      'Programa para transformar ciência, pesquisa e biotecnologia em produtos, processos, aplicações, tecnologias, empresas e oportunidades comerciais.',
    connections: [
      'Biotecnologia + Medicina',
      'Biotecnologia + Agronomia',
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
      'Novos mercados',
    ],
  },
  {
    name: 'Economia NexialBusiness',
    price: 'R$ 8.900',
    installment: 'até 12×',
    icon: BrainCircuit,
    eyebrow: 'Mercados • Estratégia • Decisão',
    description:
      'Programa para conectar economia, comportamento, tecnologia, dados e gestão na criação de modelos econômicos, negócios e mercados.',
    connections: [
      'Economia + Dados',
      'Economia + Tecnologia',
      'Economia + Saúde',
      'Economia + Comportamento',
      'Economia + Gestão',
    ],
    outcomes: [
      'Novos modelos econômicos',
      'Novos modelos de monetização',
      'Estratégias de mercado',
      'Produtos de inteligência',
      'Novas estruturas de receita',
      'Novos modelos empresariais',
      'Modelagem de novos mercados',
    ],
  },
  {
    name: 'Sociologia NexialBusiness',
    price: 'R$ 7.900',
    installment: 'até 12×',
    icon: Users,
    eyebrow: 'Sociedade • Inovação • Impacto',
    description:
      'Programa para transformar a compreensão de fenômenos e problemas sociais em novas abordagens, produtos, serviços, tecnologias, organizações e modelos de intervenção.',
    connections: [
      'Sociologia + Tecnologia',
      'Sociologia + Inteligência Artificial',
      'Sociologia + Economia',
      'Sociologia + Direito',
      'Sociologia + Gestão',
    ],
    outcomes: [
      'Produtos de impacto social',
      'Novos serviços sociais',
      'Tecnologias sociais',
      'Plataformas digitais',
      'Novas abordagens de intervenção',
      'Novas organizações',
      'Novos modelos de negócio e impacto',
    ],
  },
];

const methodology = [
  {
    number: '01',
    title: 'Observar',
    text: 'Partir de problemas, necessidades, tendências, mudanças tecnológicas, empresas existentes ou oportunidades ainda pouco exploradas.',
  },
  {
    number: '02',
    title: 'Desconstruir',
    text: 'Questionar como um produto, serviço, empresa ou mercado funciona hoje e quais premissas parecem imutáveis, mas talvez não sejam.',
  },
  {
    number: '03',
    title: 'Conectar',
    text: 'Buscar conhecimentos, tecnologias, modelos econômicos e soluções de outras disciplinas e setores que normalmente permanecem separados.',
  },
  {
    number: '04',
    title: 'Recombinar',
    text: 'Produzir novas combinações entre problemas, conhecimentos, tecnologias, experiências, modelos de negócio e formas de entrega.',
  },
  {
    number: '05',
    title: 'Conceber',
    text: 'Transformar insights em conceitos de produtos, serviços, tecnologias, empresas, modelos econômicos ou novas categorias de mercado.',
  },
  {
    number: '06',
    title: 'Estruturar',
    text: 'Organizar a oportunidade em uma proposta mais clara: problema, solução, público, diferenciação, modelo de valor e caminhos possíveis de validação.',
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
    'Medicina NexialBusiness'
  );

  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        'Olá. Quero conhecer melhor o NexialBusiness e entender qual programa faz mais sentido para mim.'
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
                Criação de produtos, negócios e mercados
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
            <a href="#conceito" className="transition hover:text-white">
              Conceito
            </a>
            <a href="#transformacao" className="transition hover:text-white">
              Transformação
            </a>
            <a href="#formacoes" className="transition hover:text-white">
              Programas
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

            <div className="mb-6 max-w-4xl text-lg font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-xl">
              Programa de criação de novos produtos, serviços, negócios e mercados.
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[88px]">
              Crie o que ainda
              <span className="block text-emerald-300">
                não existe.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">
              Um programa criativo e interdisciplinar para transformar
              conhecimento, experiência, problemas reais e oportunidades em
              possibilidades de
              <strong className="font-medium text-white">
                {' '}novos produtos, serviços, tecnologias, empresas,
                modelos de negócio e novos mercados.
              </strong>
            </p>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
              Você pode chegar com uma ideia, com uma empresa que precisa ser
              transformada, com um problema que ainda não encontrou solução —
              ou simplesmente com a disposição de descobrir oportunidades que
              talvez ainda não tenha percebido.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#formacoes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition hover:bg-slate-200"
              >
                Conhecer os programas
                <ArrowRight className="h-4 w-4" />
              </a>

              <WhatsAppButton>
                Conversar sobre minha oportunidade
              </WhatsAppButton>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-500">
              {[
                'Novos produtos',
                'Novos serviços',
                'Novos negócios',
                'Novas tecnologias',
                'Novos mercados',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONCEPT */}
      <section
        id="conceito"
        className="border-y border-white/[0.06] bg-white/[0.015] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>O que é o NexialBusiness?</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Interdisciplinaridade é o método.
              <span className="mt-2 block text-emerald-300">
                Criação é o objetivo.
              </span>
            </h2>
          </div>

          <div className="space-y-7 text-lg leading-8 text-slate-400">
            <p>
              Profissões e mercados normalmente evoluem dentro de suas próprias
              fronteiras. Médicos estudam saúde. Engenheiros desenvolvem
              sistemas. Economistas analisam mercados. Empresas observam seus
              concorrentes.
            </p>

            <p>
              O NexialBusiness trabalha justamente na conexão entre essas
              fronteiras. Conhecimentos, tecnologias e modelos de setores
              diferentes são aproximados para produzir
              <strong className="font-medium text-white">
                {' '}novas combinações e novas possibilidades.
              </strong>
            </p>

            <p>
              A interdisciplinaridade, portanto, não é o produto final. É uma
              ferramenta para gerar insights e ampliar o espaço de criação.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Criar um produto',
                'Criar um serviço',
                'Criar uma tecnologia',
                'Criar uma empresa',
                'Transformar uma empresa existente',
                'Modelar um novo mercado',
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

      {/* NOT ONLY BETTER */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[28px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/[0.08] via-white/[0.025] to-transparent p-7 sm:p-10 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <SectionLabel>Além da inovação incremental</SectionLabel>

                <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                  Às vezes, a oportunidade não é criar um produto melhor.
                  <span className="mt-2 block text-emerald-300">
                    É criar um negócio diferente.
                  </span>
                </h2>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
                  Empresas normalmente respondem à concorrência tentando ser
                  mais baratas, mais rápidas, maiores ou melhores.
                </p>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                  O NexialBusiness acrescenta uma pergunta diferente:
                  <strong className="font-medium text-white">
                    {' '}e se, em vez de competir melhor dentro do modelo
                    atual, pudéssemos conceber algo diferente?
                  </strong>
                </p>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
                  Isso pode significar modificar um produto. Mas também pode
                  significar redesenhar um serviço, transformar uma empresa,
                  criar uma nova categoria ou explorar um espaço de mercado
                  ainda pouco definido.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  ['01', 'Produto atual', 'Novo produto'],
                  ['02', 'Serviço atual', 'Nova experiência'],
                  ['03', 'Empresa atual', 'Novo modelo de negócio'],
                  ['04', 'Setor tradicional', 'Nova categoria'],
                  ['05', 'Mercado saturado', 'Novo espaço competitivo'],
                  ['06', 'Conhecimentos separados', 'Nova combinação'],
                ].map(([n, current, future]) => (
                  <div
                    key={n}
                    className="rounded-xl border border-white/[0.07] bg-black/20 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-emerald-300">
                        {n}
                      </span>
                      <span className="text-sm text-slate-500">
                        {current}
                      </span>
                    </div>

                    <div className="mt-1 pl-7 text-sm font-medium text-white">
                      → {future}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION EXAMPLES */}
      <section
        id="transformacao"
        className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel>Modelagem e transformação</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              E se o modelo atual
              <span className="block text-slate-500">
                não for o modelo do futuro?
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              O processo pode começar em qualquer setor. O objetivo não é
              prever o futuro, mas desenvolver capacidade para questionar o
              presente e conceber alternativas.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                icon: HeartPulse,
                title: 'Um novo hospital',
                text: 'Como saúde, diagnóstico, acompanhamento remoto, dados, IA, logística e novos modelos econômicos poderiam produzir uma instituição diferente do hospital tradicional?',
              },
              {
                icon: Building2,
                title: 'Um novo varejo',
                text: 'Como tecnologia, experiência, serviços, recorrência, dados e novas formas de distribuição poderiam transformar uma empresa que compete apenas por preço e localização?',
              },
              {
                icon: Building2,
                title: 'Um novo supermercado',
                text: 'E se o supermercado deixasse de ser apenas um local de compra e passasse a integrar novos serviços, tecnologia, saúde, logística, personalização e outras fontes de receita?',
              },
              {
                icon: HeartPulse,
                title: 'Um novo sistema de farmácias',
                text: 'Como farmácia, prevenção, diagnóstico, acompanhamento, logística, dados e serviços poderiam formar um novo ecossistema de saúde e consumo?',
              },
              {
                icon: Cpu,
                title: 'Um novo mercado de software',
                text: 'Como IA, automação, conhecimento especializado e novos modelos de monetização podem transformar um software comum em uma nova categoria de solução?',
              },
              {
                icon: Leaf,
                title: 'Um novo agro',
                text: 'Como agronomia, biotecnologia, engenharia, robótica, dados e economia podem gerar novos produtos, serviços, cadeias de valor e mercados?',
              },
              {
                icon: Factory,
                title: 'Novos dispositivos',
                text: 'Como problemas da medicina, indústria, agricultura ou meio ambiente podem originar novos dispositivos, equipamentos, sensores e sistemas de engenharia?',
              },
              {
                icon: BrainCircuit,
                title: 'Novos modelos econômicos',
                text: 'Como incentivos, precificação, plataformas, propriedade, recorrência e novas formas de captura de valor podem transformar a lógica econômica de um negócio?',
              },
              {
                icon: TrendingUp,
                title: 'Uma empresa em transformação',
                text: 'Quando produtos e serviços enfrentam concorrência intensa, quais ativos, competências e conhecimentos da empresa poderiam originar novas ofertas ou até outro modelo empresarial?',
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06]">
                  <Icon className="h-5 w-5 text-emerald-300" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN BRING */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionLabel>Seu ponto de partida</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Você não precisa chegar
                <span className="block text-emerald-300">
                  com a ideia pronta.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Parte do valor do programa está justamente no processo de
                descobrir oportunidades, produzir conexões e transformar
                observações em hipóteses de criação.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                ['Uma ideia', 'Algo que você já gostaria de desenvolver.'],
                ['Um problema', 'Uma dificuldade profissional, empresarial ou social que merece outra solução.'],
                ['Uma empresa', 'Um negócio que precisa encontrar novas fontes de valor e diferenciação.'],
                ['Uma tecnologia', 'Uma capacidade técnica procurando aplicações e mercados.'],
                ['Uma profissão', 'Conhecimento acumulado que pode ser recombinado com outras áreas.'],
                ['Nada definido ainda', 'Você pode começar explorando problemas, tendências e conexões até encontrar uma direção promissora.'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <div className="flex gap-4">
                    <Search className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <div>
                      <h3 className="font-medium text-white">{title}</h3>
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
      </section>

      {/* WHAT YOU DEVELOP */}
      <section className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel>Criação aplicada</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Você não entra apenas para aprender.
              <span className="block text-slate-500">
                Entra para pensar, conectar e criar.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Dependendo do programa, da oportunidade identificada e da
              evolução do trabalho, o processo pode ajudar o participante a
              estruturar diferentes componentes de um projeto.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Mapa de problemas e oportunidades',
              'Conexões interdisciplinares',
              'Hipóteses de novos produtos',
              'Conceitos de novos serviços',
              'Possibilidades tecnológicas',
              'Conceitos de modelos de negócio',
              'Novas formas de monetização',
              'Hipóteses de diferenciação',
              'Arquitetura inicial da solução',
              'Possíveis públicos e mercados',
              'Caminhos de validação',
              'Projeto conceitual de uma nova oportunidade',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-sm text-slate-300"
              >
                <Check className="h-4 w-4 shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 sm:p-8">
            <p className="text-lg leading-8 text-slate-300">
              <strong className="text-white">
                Um participante pode começar querendo criar um produto e
                descobrir uma empresa.
              </strong>{' '}
              Pode começar analisando uma empresa e encontrar uma nova linha de
              negócio. Pode começar estudando um problema e perceber a
              possibilidade de uma tecnologia ou de um novo mercado.
            </p>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="formacoes"
        className="px-5 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <SectionLabel>Programas especializados</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Sua área é o ponto de partida.
              <span className="mt-2 block text-slate-500">
                Não precisa ser o limite.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Cada programa parte de uma área principal e a conecta a outras
              disciplinas para ampliar as possibilidades de criação de
              produtos, serviços, tecnologias, negócios e mercados.
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
                        Conversar sobre este programa
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

      {/* COLLABORATION */}
      <section className="border-y border-white/[0.06] bg-white/[0.012] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Conexões entre pessoas</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Uma ideia pode encontrar outra ideia.
                <span className="mt-2 block text-emerald-300">
                  Uma competência pode encontrar outra competência.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">
              <p>
                A interdisciplinaridade também pode acontecer entre
                participantes. Um médico pode identificar um problema que
                exige engenharia. Um engenheiro pode desenvolver uma tecnologia
                que precisa encontrar uma aplicação. Um profissional de
                software pode transformar um processo tradicional em uma
                plataforma.
              </p>

              <p>
                Projetos podem encontrar competências complementares e,
                havendo interesse mútuo, participantes podem decidir colaborar,
                formar equipes ou estruturar sociedades.
              </p>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-5 text-sm leading-6 text-slate-500">
                Eventuais sociedades, investimentos, participações ou relações
                empresariais entre participantes dependem de decisão,
                negociação e instrumentos próprios entre as partes. A
                participação no programa não implica sociedade, investimento
                ou garantia de formação de empresa.
              </div>
            </div>
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
                  Programa multidisciplinar premium
                </div>

                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  NexialBusiness
                  <span className="block text-violet-300">
                    Executive
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                  Para empresários, executivos, profissionais experientes e
                  criadores que querem explorar oportunidades sem permanecer
                  limitados a uma única vertical profissional.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Em vez de partir obrigatoriamente de uma profissão, o
                  Executive pode partir de
                  <strong className="font-medium text-white">
                    {' '}um problema, uma empresa, uma oportunidade, uma
                    tecnologia ou um mercado.
                  </strong>
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Medicina, engenharia, inteligência artificial, economia,
                  gestão, direito, biotecnologia, agronomia, sociologia e outras
                  áreas passam a funcionar como um repertório conjunto para
                  conceber novas soluções.
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
                    Conversar sobre o Executive
                  </WhatsAppButton>
                </div>
              </div>

              <div>
                <div className="mb-5 text-sm font-semibold text-white">
                  Por que o Executive possui maior valor?
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Network,
                      title: 'Mais áreas simultaneamente',
                      text: 'O processo não fica restrito às conexões de uma única profissão.',
                    },
                    {
                      icon: Lightbulb,
                      title: 'Maior espaço de criação',
                      text: 'Mais repertórios podem ser combinados para produzir hipóteses e conceitos diferentes.',
                    },
                    {
                      icon: Rocket,
                      title: 'Criação multissetorial',
                      text: 'Produtos, serviços, tecnologias e negócios podem ser explorados em diferentes indústrias.',
                    },
                    {
                      icon: Target,
                      title: 'Problema antes da disciplina',
                      text: 'A pergunta é o que precisa ser criado — e depois quais conhecimentos podem ajudar.',
                    },
                    {
                      icon: Workflow,
                      title: 'Modelagem de novos mercados',
                      text: 'O participante pode explorar mudanças mais amplas em modelos empresariais, categorias e mercados.',
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
                Criação e transformação empresarial
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                NexialBusiness
                <span className="block text-amber-200">
                  Corporate
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-400">
                Para organizações que precisam ir além da melhoria incremental
                e explorar
                <strong className="font-medium text-white">
                  {' '}novos produtos, serviços, tecnologias, fontes de receita,
                  unidades de negócio e mercados.
                </strong>
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Uma empresa que enfrenta concorrência intensa já possui ativos:
                conhecimento, clientes, dados, infraestrutura, marca, equipe e
                experiência. A pergunta é:
              </p>

              <p className="mt-5 text-2xl font-medium leading-9 text-amber-100">
                O que essa empresa poderia se tornar que ainda não é?
              </p>

              <div className="mt-8 rounded-2xl border border-amber-300/15 bg-amber-300/[0.035] p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Projetos Corporate
                </div>

                <div className="mt-2 text-3xl font-semibold">
                  R$ 49.900 a R$ 149.000+
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Escopo, número de participantes, profundidade, duração e nível
                  de customização definidos conforme o projeto.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>
                  Conversar sobre minha empresa
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
                  A organização pode partir de:
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Produtos sob forte concorrência',
                    'Serviços comoditizados',
                    'Conhecimento acumulado',
                    'Tecnologias disponíveis',
                    'Dados e base de clientes',
                    'Infraestrutura',
                    'Competências da equipe',
                    'Problemas ainda não resolvidos',
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
                  E explorar possibilidades de:
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    'Novos produtos',
                    'Novos serviços',
                    'Novas tecnologias',
                    'Novos negócios',
                    'Novos modelos de receita',
                    'Novas unidades de negócio',
                    'Novas categorias',
                    'Novos mercados',
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
                O Corporate possui maior valor porque combina múltiplas
                verticais e aplica o processo diretamente aos problemas,
                competências, ativos e oportunidades de uma organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE ARCHITECTURE */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Arquitetura de valor</SectionLabel>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Quanto maior a amplitude interdisciplinar,
            <span className="block text-slate-500">
              maior o espaço possível de criação.
            </span>
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.07]">
            <div className="grid border-b border-white/[0.07] bg-white/[0.025] md:grid-cols-3">
              {[
                {
                  title: 'Especializados',
                  price: 'R$ 7.900–14.900',
                  icon: GraduationCap,
                  text: 'Uma área principal como ponto de partida, conectada a outras disciplinas.',
                },
                {
                  title: 'Executive',
                  price: 'R$ 24.900',
                  icon: BriefcaseBusiness,
                  text: 'Múltiplas áreas simultaneamente para criação e modelagem multissetorial.',
                },
                {
                  title: 'Corporate',
                  price: 'R$ 49.900–149.000+',
                  icon: Building2,
                  text: 'Processo aplicado diretamente aos ativos, problemas e oportunidades de uma organização.',
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
                'Ponto de partida',
                'Profissão/área',
                'Problema/oportunidade',
                'Empresa/mercado',
              ],
              [
                'Amplitude interdisciplinar',
                'Alta',
                'Muito alta',
                'Máxima/customizada',
              ],
              [
                'Criação de produtos e serviços',
                'Sim',
                'Sim',
                'Sim',
              ],
              [
                'Novos modelos de negócio',
                'Explorados',
                'Prioritários',
                'Estratégicos',
              ],
              [
                'Novas tecnologias',
                'Sim',
                'Sim',
                'Sim',
              ],
              [
                'Modelagem de novos mercados',
                'Possível',
                'Ampliada',
                'Estratégica',
              ],
              [
                'Aplicação',
                'Individual/profissional',
                'Executiva',
                'Organizacional',
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
          <div className="max-w-4xl">
            <SectionLabel>Metodologia NexialBusiness</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Do problema ao insight.
              <span className="block text-slate-500">
                Do insight a uma nova possibilidade.
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              O processo não depende apenas de inspiração. Ele organiza a
              exploração criativa em etapas para ampliar o repertório,
              questionar modelos existentes e estruturar oportunidades.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {methodology.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
              >
                <div className="font-mono text-xs text-emerald-300">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT POSITIONING */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 rounded-[28px] border border-white/[0.07] bg-white/[0.02] p-7 sm:p-10 lg:grid-cols-2 lg:p-14">
            <div>
              <SectionLabel>Ambição com responsabilidade</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                Grandes ideias começam como possibilidades.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-7 text-slate-400">
              <p>
                O NexialBusiness não promete sucesso empresarial, criação
                efetiva de uma empresa, retorno financeiro, patente,
                investimento ou criação de um novo mercado.
              </p>

              <p>
                O programa trabalha na etapa anterior e fundamental:
                <strong className="font-medium text-white">
                  {' '}ampliar a capacidade de observar, conectar, conceber e
                  estruturar oportunidades.
                </strong>
              </p>

              <p>
                Algumas ideias podem resultar apenas em aprendizado. Outras
                podem evoluir para projetos, produtos, serviços ou empresas.
                E algumas podem revelar possibilidades com potencial de
                transformação muito maior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        id="contato"
        className="px-5 pb-28 pt-10 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[32px] border border-emerald-400/20 bg-emerald-400/[0.055] p-8 text-center sm:p-14 lg:p-20">
            <div className="absolute left-1/2 top-[-180px] h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[130px]" />

            <div className="relative mx-auto max-w-4xl">
              <Network className="mx-auto h-10 w-10 text-emerald-300" />

              <div className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                NexialBusiness
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                O próximo produto, negócio ou mercado pode começar com uma
                conexão que você ainda não fez.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Converse conosco pelo WhatsApp. Conte sua profissão, sua ideia,
                seu problema, sua empresa ou o mercado que gostaria de
                transformar. A conversa ajuda a identificar qual programa
                NexialBusiness faz mais sentido para o seu ponto de partida.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <WhatsAppButton>
                  Iniciar conversa pelo WhatsApp
                </WhatsAppButton>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-6 py-3.5 font-semibold transition hover:bg-black/40"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </div>

              <p className="mx-auto mt-6 max-w-xl text-xs leading-5 text-slate-600">
                Atendimento comercial e informações sobre programas,
                disponibilidade, formato e condições de participação.
              </p>
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
            — Programa de criação de novos produtos, serviços, negócios e
            mercados.
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
