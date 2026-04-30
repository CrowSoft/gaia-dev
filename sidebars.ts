import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  arduinoSidebar: [
    {
      type: 'category',
      label: '🤖 Arduino para Niñas',
      collapsible: false,
      items: [
        'arduino/intro',
        {
          type: 'category',
          label: '🔵 Fase 1 · Fundamentos',
          items: ['arduino/fase1-fundamentos'],
        },
        {
          type: 'category',
          label: '🟡 Fase 2 · Sensores',
          items: [
            // 'arduino/fase2-sensores',  // próximamente
          ],
        },
        {
          type: 'category',
          label: '🟠 Fase 3 · Movimiento',
          items: [
            // 'arduino/fase3-movimiento',  // próximamente
          ],
        },
        {
          type: 'category',
          label: '🔴 Fase 4 · Proyectos',
          items: [
            // 'arduino/fase4-proyectos',  // próximamente
          ],
        },
        {
          type: 'category',
          label: '⚫ Fase 5 · Zumo (opcional)',
          items: [
            // 'arduino/fase5-zumo',  // próximamente
          ],
        },
      ],
    },
  ],
};

export default sidebars;