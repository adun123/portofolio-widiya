import { motion } from 'framer-motion';
import { BarChart3, PieChart, Tag, GitBranch, CheckCircle2 } from 'lucide-react';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

const icons = { BarChart3, PieChart, Tag, GitBranch };

const container = {
  animate: { transition: { staggerChildren: 0.1 } },
};
const item = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Toolset</span></h2>
          <p className={styles.sub}>A cross-disciplinary skill set spanning data pipelines, visual storytelling, annotation workflows, and systems thinking.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {skills.map((s) => {
            const Icon = icons[s.icon];
            return (
              <motion.div key={s.category} className={`card ${styles.card}`} variants={item}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap} style={{ '--c': s.color }}>
                    <Icon size={20} />
                  </div>
                  <h3 className={styles.cardTitle}>{s.category}</h3>
                </div>
                <ul className={styles.list}>
                  {s.items.map(skill => (
                    <li key={skill} className={styles.skillItem}>
                      <CheckCircle2 size={13} className={styles.check} />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
