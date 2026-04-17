import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Annotation from './components/Annotation';
import Dashboards from './components/Dashboards';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <CaseStudy />
        <Annotation />
        <Dashboards />
        <Contact />
      </main>
    </>
  );
}
