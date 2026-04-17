import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { personal } from '../data/portfolio';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div className={styles.badge} {...fadeUp(0.1)}>
          <Sparkles size={12} />
          <span>Available for opportunities</span>
        </motion.div>

        <motion.h1 className={styles.name} {...fadeUp(0.2)}>
          {personal.name}
        </motion.h1>

        <motion.div className={styles.roles} {...fadeUp(0.35)}>
          {personal.roles.map((r, i) => (
            <span key={r} className={styles.role}>
              {r}
              {i < personal.roles.length - 1 && <span className={styles.divider}>·</span>}
            </span>
          ))}
        </motion.div>

        <motion.p className={styles.summary} {...fadeUp(0.5)}>
          {personal.summary}
        </motion.p>

        <motion.div className={styles.cta} {...fadeUp(0.65)}>
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[['3+', 'Years Experience'], ['50+', 'Projects Delivered'], ['12K+', 'Images Annotated']].map(([n, l]) => (
            <div key={l} className={styles.stat}>
              <span className={styles.statNum}>{n}</span>
              <span className={styles.statLabel}>{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
