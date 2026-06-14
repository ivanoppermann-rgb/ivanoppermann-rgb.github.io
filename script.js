const projects = {
  portfolio: {
    status: "Live / Static Website",
    title: "Personal Portfolio Website",
    problem:
      "A basic resume-style webpage does not do enough to show technical direction, project thinking, or development workflow.",
    approach:
      "This site uses a static GitHub Pages setup with semantic HTML, responsive CSS, and lightweight JavaScript. The design is structured like a developer console to make the portfolio feel more technical without adding unnecessary backend complexity.",
    current:
      "The site is live and being redesigned into a more project-focused developer portfolio.",
    next:
      "Add a cleaned resume PDF, improve project writeups, and link each project card to stronger repositories as they mature.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub Pages"],
    link: "https://github.com/ivanoppermann-rgb/ivanoppermann-rgb.github.io"
  },

  "image-organizer": {
    status: "In Development / Java Tool",
    title: "Large Image Collection Organizer",
    problem:
      "Large image collections can become hard to manage, especially when files are duplicated, poorly named, or stored inside archive files.",
    approach:
      "The planned tool will focus on safe file traversal, ZIP inspection, clear output rules, and a command-line workflow. The goal is to practice maintainable Java design rather than throw together a fragile script.",
    current:
      "The project is still early-stage. The current value is in defining the problem, designing the workflow, and turning it into a git-worthy Java project.",
    next:
      "Create a command-line prototype that scans a folder, detects image files, reads ZIP contents, and prints an organized report before moving or renaming anything.",
    tags: ["Java", "CLI", "File I/O", "ZIP Handling", "Testing"],
    link: "https://github.com/ivanoppermann-rgb"
  },

  "database-practice": {
    status: "Building / Coursework to Portfolio",
    title: "Database and Software Engineering Practice",
    problem:
      "Coursework proves exposure, but a portfolio needs visible artifacts: small projects, examples, writeups, and code that someone can inspect.",
    approach:
      "This project area will collect small database, SQL, testing, and secure programming examples with clear documentation. The purpose is to translate academic work into public, reviewable developer evidence.",
    current:
      "The idea is defined, but the examples still need to be built, cleaned, and documented.",
    next:
      "Create the first small SQL-backed example with a README explaining schema design, queries, assumptions, and test cases.",
    tags: ["SQL", "Database Design", "Java", "Testing", "Secure Programming"],
    link: "https://github.com/ivanoppermann-rgb"
  }
};

const yearElement = document.querySelector("#year");
const navToggle = document.querySelector("#nav-toggle");
const navLinks = document.querySelector("#nav-links");

const modal = document.querySelector("#project-modal");
const modalClose = document.querySelector("#modal-close");
const modalStatus = document.querySelector("#modal-status");
const modalTitle = document.querySelector("#modal-title");
const modalProblem = document.querySelector("#modal-problem");
const modalApproach = document.querySelector("#modal-approach");
const modalCurrent = document.querySelector("#modal-current");
const modalNext = document.querySelector("#modal-next");
const modalTags = document.querySelector("#modal-tags");
const modalLink = document.querySelector("#modal-link");

const copyEmailButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function openProjectModal(projectId) {
  const project = projects[projectId];

  if (!project || !modal) {
    return;
  }

  modalStatus.textContent = project.status;
  modalTitle.textContent = project.title;
  modalProblem.textContent = project.problem;
  modalApproach.textContent = project.approach;
  modalCurrent.textContent = project.current;
  modalNext.textContent = project.next;
  modalLink.href = project.link;

  modalTags.innerHTML = "";

  project.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    modalTags.appendChild(tagElement);
  });

  modal.showModal();
}

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    openProjectModal(button.dataset.project);
  });
});

if (modalClose && modal) {
  modalClose.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", (event) => {
    const modalBox = modal.querySelector(".modal-shell");

    if (modalBox && !modalBox.contains(event.target)) {
      modal.close();
    }
  });
}

if (copyEmailButton && copyStatus) {
  copyEmailButton.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      copyStatus.textContent = "Email copied: " + emailAddress;
      copyEmailButton.textContent = "Copied";
    } catch (error) {
      copyStatus.textContent = "Copy failed. Email: " + emailAddress;
    }

    window.setTimeout(() => {
      copyStatus.textContent = "";
      copyEmailButton.textContent = "Copy Email";
    }, 3000);
  });
}