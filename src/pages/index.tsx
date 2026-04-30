import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

type Phase = {
  emoji: string;
  label: string;
  description: string;
  sessions: string;
  to: string;
  available: boolean;
};

const phases: Phase[] = [
  {
    emoji: '🔵',
    label: 'Fase 1 · Fundamentos',
    description: 'LED, variables, loops, funciones y PWM. Proyecto final: semáforo con botón peatonal.',
    sessions: 'Sesiones 1–8',
    to: '/arduino/fase1-fundamentos',
    available: true,
  },
  {
    emoji: '🟡',
    label: 'Fase 2 · Sensores',
    description: 'Luz, temperatura, distancia y pilas. Proyecto final: estación meteorológica con LCD.',
    sessions: 'Sesiones 9–18',
    to: '#',
    available: false,
  },
  {
    emoji: '🟠',
    label: 'Fase 3 · Movimiento',
    description: 'Servos, motores DC y el puente H. Proyecto final: robot insecto que evita obstáculos.',
    sessions: 'Sesiones 19–24',
    to: '#',
    available: false,
  },
  {
    emoji: '🔴',
    label: 'Fase 4 · Proyectos',
    description: 'Sensores IR y integración total. Proyecto final: seguidor de línea en pista.',
    sessions: 'Sesiones 25–32',
    to: '#',
    available: false,
  },
  {
    emoji: '⚫',
    label: 'Fase 5 · Zumo',
    description: 'Robot de combate. Sensores de borde, estrategia y velocidad. Meta opcional.',
    sessions: 'Sesiones 33+',
    to: '#',
    available: false,
  },
];

function PhaseCard({emoji, label, description, sessions, to, available}: Phase) {
  return (
    <div className={clsx(styles.phaseCard, !available && styles.phaseCardDisabled)}>
      <div className={styles.phaseEmoji}>{emoji}</div>
      <div className={styles.phaseContent}>
        <h3>{label}</h3>
        <p className={styles.phaseSessions}>{sessions}</p>
        <p>{description}</p>
        {available ? (
          <Link className="button button--primary button--sm" to={to}>
            Ver sesiones →
          </Link>
        ) : (
          <span className={styles.comingSoon}>Próximamente</span>
        )}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Plan de estudios Arduino para Gaia — del primer LED al primer robot.">
      <header className={styles.heroBanner}>
        <div className="container">
          <p className={styles.heroEmoji}>🤖</p>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>32</span>
              <span className={styles.statLabel}>sesiones</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>meses</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>robots</span>
            </div>
          </div>
          <Link className="button button--primary button--lg" to="/arduino/intro">
            Ver el plan completo →
          </Link>
        </div>
      </header>

      <main>
        <section className={styles.phasesSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Las 5 fases</h2>
            <div className={styles.phasesGrid}>
              {phases.map((phase) => (
                <PhaseCard key={phase.label} {...phase} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}