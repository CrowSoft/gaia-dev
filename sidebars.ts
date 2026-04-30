import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  arduinoSidebar: [
    {
      type: 'category',
      label: '🤖 Arduino para Gaia',
      collapsible: false,
      items: [
        'arduino/intro',
        {
          type: 'category',
          label: '🔵 Fase 1 · Fundamentos',
          items: ['arduino/fase1-fundamentos'],
        },
        // 🟡 Fase 2 · Sensores        → próximamente
        // 🟠 Fase 3 · Movimiento      → próximamente
        // 🔴 Fase 4 · Proyectos       → próximamente
        // ⚫ Fase 5 · Zumo (opcional) → próximamente
      ],
    },
  ],
};

export default sidebars;