import { motion } from 'framer-motion';
import { Tag, Users, CheckSquare } from 'lucide-react';
import { annotationWork } from '../data/portfolio';
import styles from './Annotation.module.css';

function AnnotationVisual({ type }) {
  if (type === 'image') {
    return (
      <svg viewBox="0 0 280 160" className={styles.visual} xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#F5F2F0" rx="8"/>
        {/* Simulated X-ray style */}
        <ellipse cx="140" cy="80" rx="80" ry="65" fill="#E8E0DC" stroke="#D4C8C4" strokeWidth="1"/>
        <ellipse cx="110" cy="70" rx="35" ry="45" fill="#DDD4CE"/>
        <ellipse cx="170" cy="70" rx="35" ry="45" fill="#DDD4CE"/>
        {/* Annotation polygons */}
        <polygon points="95,45 130,42 135,95 90,98" fill="none" stroke="#C0152A" strokeWidth="2" strokeDasharray="4,2"/>
        <polygon points="150,43 185,46 180,96 148,95" fill="none" stroke="#C0152A" strokeWidth="2" strokeDasharray="4,2"/>
        {/* Labels */}
        <rect x="94" y="35" width="42" height="12" rx="3" fill="#8B0000"/>
        <text x="115" y="44" textAnchor="middle" fill="white" fontSize="7" fontFamily="DM Sans" fontWeight="600">LUNG_L</text>
        <rect x="148" y="35" width="42" height="12" rx="3" fill="#C0152A"/>
        <text x="169" y="44" textAnchor="middle" fill="white" fontSize="7" fontFamily="DM Sans" fontWeight="600">LUNG_R</text>
        {/* Corner dots */}
        {[[95,45],[130,42],[135,95],[90,98],[150,43],[185,46],[180,96],[148,95]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#E63950"/>
        ))}
      </svg>
    );
  }
  if (type === 'text') {
    return (
      <svg viewBox="0 0 280 160" className={styles.visual} xmlns="http://www.w3.org/2000/svg">
        <rect width="280" height="160" fill="#F5F2F0" rx="8"/>
        {[
          { y: 30, text: 'The product quality is', highlight: false },
          { y: 50, text: 'absolutely amazing! Will', highlight: false },
          { y: 70, text: 'buy again.', highlight: false },
        ].map(({ y, text }) => (
          <text key={y} x="20" y={y} fill="#4A3F3A" fontSize="11" fontFamily="DM Sans">{text}</text>
        ))}
        <rect x="18" y="16" width="244" height="68" rx="4" fill="none" stroke="#C0152A" strokeWidth="1.5" strokeDasharray="5,3"/>
        <rect x="18" y="92" width="90" height="16" rx="3" fill="#8B0000" opacity="0.15"/>
        <text x="22" y="104" fill="#8B0000" fontSize="9" fontFamily="DM Sans" fontWeight="600">POSITIVE 😊</text>
        <rect x="116" y="92" width="80" height="16" rx="3" fill="#C0152A" opacity="0.12"/>
        <text x="120" y="104" fill="#C0152A" fontSize="9" fontFamily="DM Sans" fontWeight="600">Confidence: 94%</text>
        <rect x="205" y="92" width="55" height="16" rx="3" fill="#E63950" opacity="0.1"/>
        <text x="209" y="104" fill="#E63950" fontSize="9" fontFamily="DM Sans" fontWeight="600">✓ Verified</text>
        <line x1="18" y1="120" x2="262" y2="120" stroke="#EDE8E4" strokeWidth="1"/>
        <text x="20" y="140" fill="#9A8F8A" fontSize="8" fontFamily="DM Sans">Annotator: AR · IAA Score: 94.2% · Batch #0412</text>
      </svg>
    );
  }
  // Bounding box
  return (
    <svg viewBox="0 0 280 160" className={styles.visual} xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="160" fill="#2A2020" rx="8"/>
      {/* Road scene */}
      <rect x="0" y="100" width="280" height="60" fill="#3A3030"/>
      <rect x="120" y="105" width="40" height="4" fill="#6A5A5A"/>
      <rect x="120" y="118" width="40" height="4" fill="#6A5A5A"/>
      <rect x="120" y="131" width="40" height="4" fill="#6A5A5A"/>
      {/* Car */}
      <rect x="60" y="75" width="70" height="40" rx="4" fill="#5A4A4A"/>
      <rect x="68" y="68" width="54" height="20" rx="3" fill="#6A5555"/>
      <circle cx="75" cy="118" r="8" fill="#3A2A2A"/>
      <circle cx="120" cy="118" r="8" fill="#3A2A2A"/>
      {/* Bounding boxes */}
      <rect x="58" y="65" width="74" height="58" rx="2" fill="none" stroke="#C0152A" strokeWidth="2"/>
      <rect x="58" y="55" width="40" height="12" rx="2" fill="#8B0000"/>
      <text x="63" y="64" fill="white" fontSize="8" fontFamily="DM Sans" fontWeight="700">CAR 0.97</text>
      {/* Person */}
      <ellipse cx="195" cy="78" rx="10" ry="24" fill="#6A5A5A"/>
      <rect x="183" y="52" width="24" height="50" rx="2" fill="none" stroke="#F4A0B0" strokeWidth="1.5"/>
      <rect x="183" y="42" width="30" height="11" rx="2" fill="#C0152A"/>
      <text x="186" y="51" fill="white" fontSize="7" fontFamily="DM Sans" fontWeight="700">PED 0.91</text>
    </svg>
  );
}

const visuals = ['image', 'text', 'bbox'];

export default function Annotation() {
  return (
    <section id="annotation" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Data Labeling</span>
          <h2 className="section-title">Annotation <span className="gradient-text">Showcase</span></h2>
          <p className={styles.sub}>Precision annotation across domains — from medical imaging to natural language, with rigorous quality control pipelines.</p>
        </motion.div>

        <div className={styles.grid}>
          {annotationWork.map((work, i) => (
            <motion.div
              key={work.title}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <AnnotationVisual type={visuals[i]} />

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.tool}>{work.tool}</span>
                  <span className={styles.type}>{work.type}</span>
                </div>
                <h3 className={styles.title}>{work.title}</h3>
                <p className={styles.desc}>{work.description}</p>

                <div className={styles.stats}>
                  {Object.entries(work.stats).map(([k, v]) => (
                    <div key={k} className={styles.stat}>
                      <span className={styles.statVal}>{v}</span>
                      <span className={styles.statKey}>{k.replace('_', ' ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.process}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className={styles.processTitle}>Annotation Workflow</h3>
          <div className={styles.steps}>
            {[
              { icon: Tag, label: 'Ontology Design', desc: 'Define label taxonomy and guidelines' },
              { icon: Users, label: 'Team Annotation', desc: 'Multi-annotator parallel labeling' },
              { icon: CheckSquare, label: 'QA & IAA', desc: 'Inter-annotator agreement checks' },
              { icon: CheckSquare, label: 'Gold Standard', desc: 'Export clean, verified dataset' },
            ].map((s, i) => (
              <div key={s.label} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepBody}>
                  <span className={styles.stepLabel}>{s.label}</span>
                  <span className={styles.stepDesc}>{s.desc}</span>
                </div>
                {i < 3 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
