import { motion } from 'framer-motion';
import { Mail, Link2, GitBranch, Download, Send } from 'lucide-react';
import { personal } from '../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  const links = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}`, color: '#8B0000' },
    { icon: Link2, label: 'LinkedIn', value: 'widiyapramestika', href: personal.linkedin, color: '#0A66C2' },
    
  ];

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Let's Talk</span>
          <h2 className={`section-title ${styles.title}`}>
            Ready to turn data into <span className="gradient-text">decisions?</span>
          </h2>
          <p className={styles.sub}>
            Whether you need a data analyst, annotation specialist, or system architect — I'm open to freelance projects, collaborations, and full-time opportunities.
          </p>

          <div className={styles.links}>
            {links.map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <div className={styles.linkIcon} style={{ '--lc': color }}>
                  <Icon size={18} />
                </div>
                <div className={styles.linkInfo}>
                  <span className={styles.linkLabel}>{label}</span>
                  <span className={styles.linkVal}>{value}</span>
                </div>
              </a>
            ))}
          </div>

          <a href={personal.cvUrl} className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={`card ${styles.form}`}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <div className={styles.fields}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className={styles.field}>
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className={styles.field}>
                <label>Subject</label>
                <input type="text" placeholder="Project inquiry, collaboration..." />
              </div>
              <div className={styles.field}>
                <label>Message</label>
                <textarea rows="5" placeholder="Tell me about your project or opportunity..." />
              </div>
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} />
              Send Message
            </button>
          </div>
        </motion.div>
      </div>

      <div className={styles.footer}>
        <p>© 2025 {personal.name} · Built with React + Framer Motion</p>
      </div>
    </section>
  );
}
