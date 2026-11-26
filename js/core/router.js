const routes = new Map();

export function register(path, title, render) {
  routes.set(path, { title, render });
}

export function start(container, titleEl) {
  async function go() {
    const path = location.hash.replace(/^#/, '') || '/';
    const route = routes.get(path) || routes.get('/');

    titleEl.textContent = route.title;
    container.innerHTML = '';
    await route.render(container);

    const section = path.split('/')[1] || 'home';
    document.querySelectorAll('[data-nav]').forEach((a) => {
      a.classList.toggle('active', a.dataset.nav === section);
    });
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', go);
  go();
}
