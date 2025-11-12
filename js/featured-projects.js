document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(any-hover: hover)').matches) {
    return;
  }

  const featuredProjects = document.querySelector('.featured-projects');
  if (!featuredProjects) {
    return;
  }

  const projects = Array.from(featuredProjects.querySelectorAll('.project'));
  if (!projects.length) {
    return;
  }

  let lastPointerPosition = null;

  function setActiveProjectFromPoint(point) {
    const target = document.elementFromPoint(point.x, point.y);
    const activeProject = projects.find(
      (project) => project === target || project.contains(target)
    );

    projects.forEach((project) => {
      project.classList.toggle('project--active', project === activeProject);
    });

    if (activeProject) {
      featuredProjects.classList.add('featured-projects--hovering');
    } else if (!featuredProjects.matches(':hover')) {
      featuredProjects.classList.remove('featured-projects--hovering');
    }
  }

  function clearActiveProjects() {
    lastPointerPosition = null;
    featuredProjects.classList.remove('featured-projects--hovering');
    projects.forEach((project) => project.classList.remove('project--active'));
  }

  featuredProjects.addEventListener('pointermove', (event) => {
    lastPointerPosition = { x: event.clientX, y: event.clientY };
    setActiveProjectFromPoint(lastPointerPosition);
  });

  featuredProjects.addEventListener('pointerleave', () => {
    clearActiveProjects();
  });

  const updateFromPointerPosition = () => {
    if (!lastPointerPosition) {
      return;
    }

    setActiveProjectFromPoint(lastPointerPosition);
  };

  window.addEventListener('scroll', updateFromPointerPosition, {
    passive: true,
  });
  window.addEventListener('resize', updateFromPointerPosition);
});

