import { motion } from 'framer-motion';
import { LayoutDashboard, ExternalLink } from 'lucide-react';
import { dashboards } from '../data/portfolio';
import MiniChart from './MiniChart';
import styles from './Dashboards.module.css';

function DashboardPreview({ type, title }) {
  const kpis = [
    { label: 'Total Revenue', val: '$2.4M', delta: '+18%' },
    { label: 'Avg. Order', val: '$142', delta: '+6%' },
    { label: 'Conversion', val: '3.8%', delta: '+0.4%' },
  ];
  return (
    <div className={styles.preview}>
      <div className={styles.previewHeader}>
        <span className={styles.previewTitle}>{title}</span>
        <div className={styles.dots}>
          <span className={styles.dot} style={{ background: '#FF6B6B' }} />
          <span className={styles.dot} style={{ background: '#FFD93D' }} />
          <span className={styles.dot} style={{ background: '#6BCB77' }} />
        </div>
      </div>
      <div className={styles.kpis}>
        {kpis.map(k => (
          <div key={k.label} className={styles.kpi}>
            <span className={styles.kpiVal}>{k.val}</span>
            <span className={styles.kpiDelta}>{k.delta}</span>
            <span className={styles.kpiLabel}>{k.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.chart}>
        <MiniChart type={type} width={280} height={100} />
      </div>
    </div>
  );
}

export default function Dashboards() {
  return (
    <section id="dashboards" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Analytics</span>
          <h2 className="section-title">Dashboard <span className="gradient-text">Gallery</span></h2>
          <p className={styles.sub}>Interactive dashboards built for decision-makers — clear, actionable, and visually intuitive.</p>
        </motion.div>

        <div className={styles.grid}>
          {dashboards.map((d, i) => (
            <motion.div
              key={d.title}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <DashboardPreview type={d.type} title={d.title} />
              <div className={styles.body}>
                <div className={styles.row}>
                  <div>
                    <h3 className={styles.title}>{d.title}</h3>
                    <span className={styles.toolTag}>{d.tools}</span>
                  </div>
                  <button className={styles.extBtn} aria-label="Open dashboard">
                    <ExternalLink size={14} />
                  </button>
                </div>
                <div className={styles.metric}>
                  <LayoutDashboard size={13} />
                  <span>{d.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
