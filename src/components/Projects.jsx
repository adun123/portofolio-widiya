import { motion } from 'framer-motion';
import { Wrench, Lightbulb, TrendingUp } from 'lucide-react';
import { projects } from '../data/portfolio';
import MiniChart from './MiniChart';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <div className={styles.chartWrap}>
                <MiniChart type={p.visual} width={320} height={130} />
                <div className={styles.overlay} />
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{p.title}</h3>

                <div className={styles.row}>
                  <span className={styles.rowLabel}><Wrench size={12} /> Problem</span>
                  <p className={styles.rowText}>{p.problem}</p>
                </div>

                <div className={styles.tools}>
                  {p.tools.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>

                <div className={styles.row}>
                  <span className={styles.rowLabel}><TrendingUp size={12} /> Process</span>
                  <p className={styles.rowText}>{p.process}</p>
                </div>

                <div className={styles.insight}>
                  <Lightbulb size={14} />
                  <span>{p.insight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
