import { motion } from 'framer-motion';
import { AlertCircle, ListChecks, Cpu, CheckCircle } from 'lucide-react';
import { caseStudy } from '../data/portfolio';
import styles from './CaseStudy.module.css';

function ERDiagram() {
  return (
    <svg viewBox="0 0 480 280" className={styles.erd} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#C0152A" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0152A" />
          <stop offset="100%" stopColor="#E63950" />
        </linearGradient>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#C0152A" opacity="0.6"/>
        </marker>
      </defs>

      {/* Entities */}
      {[
        { x: 20, y: 100, w: 120, label: 'RAW DATA', fields: ['id', 'raw_text', 'source'] },
        { x: 180, y: 30, w: 120, label: 'CLEANED DATA', fields: ['id', 'normalized_text', 'status'] },
        { x: 180, y: 170, w: 120, label: 'MATCHING ENGINE', fields: ['method', 'threshold', 'score'] },
        { x: 340, y: 100, w: 120, label: 'FINAL DATASET', fields: ['id', 'deduplicated_text', 'quality_flag'] },
      ].map(({ x, y, w, label, fields }) => (
        <g key={label}>
          <rect x={x} y={y} width={w} height={22} rx="5" fill="url(#g1)" />
          <text x={x + w/2} y={y + 15} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="DM Sans, sans-serif">{label}</text>
          <rect x={x} y={y + 22} width={w} height={fields.length * 18 + 8} fill="white" stroke="#EDE8E4" strokeWidth="1" />
          {fields.map((f, i) => (
            <text key={f} x={x + 12} y={y + 36 + i * 18} fill="#4A3F3A" fontSize="8" fontFamily="DM Sans, sans-serif">{f}</text>
          ))}
        </g>
      ))}

      {/* Relationships */}
      <line x1="140" y1="130" x2="180" y2="80" stroke="#C0152A" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" strokeDasharray="4,3" />
      <line x1="140" y1="150" x2="180" y2="200" stroke="#C0152A" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" strokeDasharray="4,3" />
      <line x1="300" y1="80" x2="340" y2="120" stroke="#C0152A" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" strokeDasharray="4,3" />
      <line x1="300" y1="200" x2="340" y2="150" stroke="#C0152A" strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrow)" strokeDasharray="4,3" />

      {/* Labels */}
      {[
        { x: 150, y: 110, text: 'cleaning' },
        { x: 150, y: 170, text: 'matching' },
        { x: 310, y: 95, text: 'processed' },
        { x: 310, y: 185, text: 'deduplicated' },
      ].map(({ x, y, text }) => (
        <text key={`${x}-${y}`} x={x} y={y} fill="#E63950" fontSize="8" fontWeight="700">{text}</text>
      ))}
    </svg>
  );
}

export default function CaseStudy() {
  return (
    <section id="case-study" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Deep Dive</span>
          <h2 className="section-title">Case <span className="gradient-text">Study</span></h2>
          <p className={styles.subTitle}>{caseStudy.title}</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={`card ${styles.block}`}>
              <div className={styles.blockHeader}>
                <AlertCircle size={16} className={styles.blockIcon} />
                <h3>Problem Statement</h3>
              </div>
              <p className={styles.blockText}>{caseStudy.problem}</p>
            </div>

            {caseStudy.requirements.map(req => (
              <div key={req.type} className={`card ${styles.block}`}>
                <div className={styles.blockHeader}>
                  <ListChecks size={16} className={styles.blockIcon} />
                  <h3>{req.type} Requirements</h3>
                </div>
                <ul className={styles.reqList}>
                  {req.items.map(item => (
                    <li key={item}>
                      <CheckCircle size={12} className={styles.reqCheck} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={`card ${styles.block} ${styles.outcome}`}>
              <div className={styles.blockHeader}>
                <Cpu size={16} className={styles.blockIcon} />
                <h3>Proposed Solution</h3>
              </div>
              <p className={styles.blockText}>{caseStudy.solution}</p>
              <div className={styles.outcomeBox}>
                <span className={styles.outcomeLabel}>Outcome</span>
                <p>{caseStudy.outcome}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
          <div className={`card ${styles.erdCard}`}>
            <div className={styles.erdHeader}>
              <span className="section-label" style={{ margin: 0 }}>Data Processing Flow</span>
              <span className={styles.erdBadge}>Fuzzy Cleaning</span>
            </div>
            <ERDiagram />
            <div className={styles.legend}>
              {['Raw Data', 'Cleaned Data', 'Matching Engine', 'Final Dataset'].map((e, i) => (
                <span key={e} className={styles.legendItem}>
                  <span className={styles.legendDot} style={{ opacity: 1 - i * 0.15 }} />
                  {e}
                </span>
              ))}
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
