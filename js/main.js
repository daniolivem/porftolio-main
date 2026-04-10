const routes = {
  home: `
    <section class="hero">
      <div class="hero__card">
        <h1 class="hero__title">DANIELY OLIVEIRA</h1>
        <p class="hero__subtitle">Dev Full Stack em formação</p>
        <p>
          Estudante do Tecnólogo em Sistemas para Internet na UESPI, em transição
          de carreira para desenvolvimento e focada em construir soluções web
          com HTML, CSS, JavaScript e Java.
        </p>
        <div class="socials">
          <a href="https://www.instagram.com/daniolivem/" target="_blank" rel="noreferrer">
            <img src="assets/img/intagram.png" alt="Instagram" width="32" height="32">
          </a>
          <a href="https://discordapp.com/users/688916004377460799" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/doodle/48/discord-logo.png" alt="Discord" width="32" height="32">
          </a>
          <a href="https://br.linkedin.com/in/daniely-m%C3%A9lo-6a1a2b352" target="_blank" rel="noreferrer">
            <img src="assets/img/linkedin.png" alt="LinkedIn" width="32" height="32">
          </a>
          <a href="https://github.com/daniolivem" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" width="32" height="32">
          </a>
        </div>
      </div>
      <div>
        <img class="hero__image" src="assets/img/fperfil.png" alt="Foto de perfil de Daniely Oliveira">
      </div>
    </section>
  `,
  about: `
    <h1 class="page-title">Sobre mim</h1>
    <div class="grid-2">
      <section class="card">
        <h2>DANIELY OLIVEIRA</h2>
        <p>
          Oi, eu sou a Dani! Sou farmacêutica há 10 anos e sempre tive um lado
          curioso que me puxa para a tecnologia. Em um momento bem pessoal, senti
          que era hora de me reinventar e comecei minha transição para o
          desenvolvimento.
        </p>
        <p>
          Tenho estudado HTML, CSS e JavaScript todos os dias, tentando transformar
          teoria em prática e criando projetos que mostrem evolução real. Gosto de
          código organizado, mas também me importo muito com a sensação de quem
          usa o produto: para mim, experiência e cuidado fazem diferença.
        </p>
        <p>
          Hoje, faço parte do Capacita iRede em parceria com a UECE, onde estudo
          Java, e sigo buscando oportunidades para aplicar o que aprendo em
          projetos reais. Também participei do Geração Tech 2.0 e da Residência em
          TIC 20 (Avanti e UECE), experiências que me ensinaram muito sobre
          colaboração e entrega em grupo.
        </p>
        <p>
          Se quiser conhecer melhor essa caminhada, os projetos estão na guia
          Projetos.
        </p>
      </section>
      <section class="card">
        <h2>Curiosidades</h2>
        <p>
          Sou uma grande entusiasta de DIY, adoro criar e personalizar projetos
          com minhas próprias mãos, sempre buscando soluções criativas. Também
          sou apaixonada por leitura e estou atualmente colecionando e lendo o
          clássico mangá Bleach, sendo uma grande fã do autor Tite Kubo.
        </p>
        <p>
          Meus hobbies incluem jogos, sou fã das franquias Diablo e Borderlands,
          além de viciada em animes e séries, que são uma das minhas fontes
          constantes de entretenimento.
        </p>
        <p>
          Estudo alemão há dois anos e gosto de aprender novas formas de me
          comunicar e enxergar o mundo.
        </p>
        <p>
          Também escuto muita música no dia a dia, o que sempre me ajuda a
          manter o foco e a criatividade.
        </p>
        <p>
          Meu perfil no Spotify:
          <a href="https://open.spotify.com/user/zfvsz8sfr7gwsrp14ilzrfuxr?si=9aad15cfdc484ee7" target="_blank" rel="noreferrer">Spotify</a>.
        </p>
        <p>
          Você consegue ver uma das minhas coleções de jogos aqui:
          <a href="https://steamcommunity.com/id/daniziinha/" target="_blank" rel="noreferrer">Shizuun</a>.
        </p>
      </section>
    </div>
  `,
  skills: `
    <h1 class="page-title">Habilidades</h1>
    <section class="card">
      <p>Estou em processo de aprendizado e desenvolvimento das seguintes habilidades:</p>
      <div class="badges" id="skills-list"></div>
    </section>
  `,
  projects: `
    <h1 class="page-title">Projetos</h1>
    <p class="projects-note">Observação: projetos em grupo podem sofrer alterações ao longo do tempo.</p>
    <div class="projects" id="projects-list"></div>
  `,
};

const app = document.getElementById("app");
const navLinks = document.querySelectorAll(".nav__link");

const setActiveLink = (route) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route);
  });
};

const renderProjects = () => {
  const container = document.getElementById("projects-list");
  if (!container) return;

  container.innerHTML = projectsData
    .filter((group) => group.items.length > 0)
    .map((group) => {
      const rows = group.items
        .map((item) => {
          const nameCell = item.link
            ? `<a href="${item.link}" target="_blank" rel="noreferrer">${item.name}</a>`
            : item.name;
          return `
            <tr>
              <td data-label="Projeto">${nameCell}</td>
              <td data-label="Tecnologia">${item.tech}</td>
            </tr>
          `;
        })
        .join("");

      const hasFutureNote =
        group.title.includes("UESPI") || group.title.includes("iRede");
      const futureNoteRow = hasFutureNote
        ? `
        <tr>
          <td colspan="2">Mais projetos serão adicionados em breve.</td>
        </tr>
      `
        : "";

      return `
        <section class="card">
          <table class="projects-table">
            <caption class="projects-caption">${group.title}</caption>
            <colgroup>
              <col style="width: 40%">
              <col style="width: 60%">
            </colgroup>
            <thead>
              <tr>
                <th>Projeto</th>
                <th>Tecnologia</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
              ${futureNoteRow}
            </tbody>
          </table>
        </section>
      `;
    })
    .join("");
};

const renderSkills = () => {
  const container = document.getElementById("skills-list");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (skill) =>
        `<img src="${skill.image}" alt="${skill.name}">`
    )
    .join("");
};

const renderRoute = () => {
  const hash = window.location.hash.replace("#", "");
  const route = routes[hash] ? hash : "home";
  app.innerHTML = routes[route];
  setActiveLink(route);
  if (route === "projects") {
    renderProjects();
  }
  if (route === "skills") {
    renderSkills();
  }
};

window.addEventListener("hashchange", renderRoute);
renderRoute();

const yearTarget = document.getElementById("year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
