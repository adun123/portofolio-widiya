document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
  }

  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.id === 'about' && !entry.target.classList.contains('counted')) {
          animateValue("stat1", 0, 90, 2000, "%");
          animateValue("stat2", 0, 4, 2000, "+");
          entry.target.classList.add('counted');
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal').forEach((elem) => observer.observe(elem));

  function animateValue(id, start, end, duration, suffix) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);
    if (!obj) return;
    const timer = setInterval(() => {
      current += increment;
      obj.innerHTML = current + suffix;
      if (current === end) clearInterval(timer);
    }, stepTime);
  }

  const toggleBtn = document.getElementById('toggleProjectsBtn');
  const hiddenProjects = document.getElementById('hiddenProjects');
  const toggleIcon = document.getElementById('toggleIcon');
  let isExpanded = false;

  if (toggleBtn && hiddenProjects) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        hiddenProjects.classList.add('show');
        toggleBtn.innerHTML = `Show Less <span class="material-symbols-outlined text-body-md" id="toggleIcon">arrow_upward</span>`;
      } else {
        hiddenProjects.classList.remove('show');
        toggleBtn.innerHTML = `See All Projects <span class="material-symbols-outlined text-body-md" id="toggleIcon">arrow_downward</span>`;
      }
    });
  }

  const roles = ["Data Analyst", "Data Scientist", "Data Annotator"];
  let roleIndex = 0;
  const heroRotator = document.getElementById('heroRotator');
  if (heroRotator) {
    setInterval(() => {
      heroRotator.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      heroRotator.style.opacity = '0';
      heroRotator.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        heroRotator.innerText = roles[roleIndex];
        heroRotator.style.transition = 'none';
        heroRotator.style.transform = 'translateY(100%)';
        void heroRotator.offsetWidth;
        heroRotator.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroRotator.style.opacity = '1';
        heroRotator.style.transform = 'translateY(0)';
      }, 500);
    }, 3000);
  }
});
