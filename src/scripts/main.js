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

  // Project Modal
  const projectModal = document.getElementById('projectModal');
  const modalImage = document.getElementById('modalImage');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTools = document.getElementById('modalTools');
  const modalDate = document.getElementById('modalDate');
  const modalClose = document.querySelector('.project-modal-close');
  const modalOverlay = document.querySelector('.project-modal-overlay');

  // Project data for modal (description extended)
  const projectData = {
    1: {
      desc: "Automated text cleaning and normalization using Python, Pandas, and NumPy. Applied fuzzy matching algorithms (RapidFuzz, FuzzyWuzzy) to detect and reconcile inconsistent or duplicate records. This project significantly improved data quality and reduced manual cleaning time by automating the entire pipeline.",
      tools: ["Python", "Pandas", "NumPy", "RapidFuzz", "FuzzyWuzzy"]
    },
    2: {
      desc: "Machine learning classification to predict music genre characteristics. Analyzed key features like tempo, energy, and mode to build a reliable predictive model with accuracy evaluation. The model achieved high accuracy in distinguishing between major and minor tonalities.",
      tools: ["Scikit-learn", "Python", "Classification", "Data Analysis"]
    },
    3: {
      desc: "Led end-to-end development of a digital reading application as Project Manager. Coordinated developers and UI/UX designers, defined timelines, and oversaw feature planning. Successfully delivered a user-friendly application that promotes digital literacy.",
      tools: ["Flutter", "Project Management", "Team Lead", "UI/UX Coordination"]
    },
    4: {
      desc: "Smart City transportation system for Bandung. Mobile-based app developed for PKM competition — successfully received funding. Handled version control, unit testing, and UI testing. The application helps citizens navigate public transportation more efficiently.",
      tools: ["Mobile App", "Git", "Testing", "Smart City"]
    },
    5: {
      desc: "Simple Point of Sale application for small stores. Built with modular programming practices, implemented CRUD features for product data and transaction processing. The application provides an intuitive interface for managing sales and inventory.",
      tools: ["Python", "CRUD", "Desktop App", "Modular Programming"]
    }
  };

  // Open modal when project is clicked
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
      const projectId = item.getAttribute('data-project');
      const project = projectData[projectId];
      
      if (project) {
        // Get data directly from the clicked project item
        const thumbnail = item.querySelector('.project-thumbnail img');
        const title = item.querySelector('.project-title');
        const tag = item.querySelector('.project-tag');
        const date = item.querySelector('.project-date');
        
        // Set modal image from the project list thumbnail
        if (thumbnail) {
          modalImage.src = thumbnail.src;
          modalImage.alt = thumbnail.alt;
        }
        
        // Set text content from the project list
        if (tag) modalTag.textContent = tag.textContent;
        if (title) modalTitle.textContent = title.textContent;
        modalDesc.textContent = project.desc;
        if (date) modalDate.textContent = date.textContent;
        
        // Clear and populate tools
        modalTools.innerHTML = '';
        project.tools.forEach(tool => {
          const span = document.createElement('span');
          span.textContent = tool;
          modalTools.appendChild(span);
        });
        
        // Show modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close modal
  function closeModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

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
