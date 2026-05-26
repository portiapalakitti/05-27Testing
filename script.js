/* ---- NAVBAR ---- */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("menuToggle");
  const overlay = document.getElementById("navOverlay");
  const isOpen = nav.classList.toggle("active");
  btn.classList.toggle("open", isOpen);
  overlay.classList.toggle("active", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

document.getElementById("navOverlay").addEventListener("click", () => {
  const nav = document.getElementById("navLinks");
  const btn = document.getElementById("menuToggle");
  const overlay = document.getElementById("navOverlay");
  nav.classList.remove("active");
  btn.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

document.querySelectorAll("#navLinks > li > a").forEach((a) => {
  a.addEventListener("click", function (e) {
    const isDropdown = this.parentElement.classList.contains("dropdown");

    if (isDropdown && window.innerWidth <= 992) {
      e.preventDefault();
      const currentDropdown = this.parentElement;
      const isAlreadyOpen = currentDropdown.classList.contains("active");
      document.querySelectorAll("#navLinks > li.dropdown").forEach((d) => {
        d.classList.remove("active");
      });
      if (!isAlreadyOpen) {
        currentDropdown.classList.add("active");
      }
      return;
    }

    if (window.innerWidth <= 992) {
      const nav = document.getElementById("navLinks");
      const btn = document.getElementById("menuToggle");
      const overlay = document.getElementById("navOverlay");
      nav.classList.remove("active");
      btn.classList.remove("open");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

/* ---- DROPDOWN MENU HANDLER ---- */
/* ---- DROPDOWN MENU HANDLER ---- */
document.querySelectorAll("#navLinks .dropdown-menu a").forEach((a) => {
  a.addEventListener("click", function (e) {

    const expandIndex = this.getAttribute("data-expand");

    /* Prevent only for expandable service items */
    if (expandIndex !== null) {
      e.preventDefault();

      if (window.innerWidth <= 992) {
        const nav = document.getElementById("navLinks");
        const btn = document.getElementById("menuToggle");
        const overlay = document.getElementById("navOverlay");

        this.closest(".dropdown").classList.remove("active");
        nav.classList.remove("active");
        btn.classList.remove("open");
        overlay.classList.remove("active");

        document.body.style.overflow = "";
      }

      openExpand(parseInt(expandIndex));
    }
  });
});

/* ---- "WHAT WE DO" PARENT LINK FIX ---- */
document.querySelectorAll("#navLinks > li > a").forEach((a) => {
  if (a.getAttribute("href") === "#services") {
    a.addEventListener("click", function (e) {
      if (window.innerWidth > 992) {
        const expanded = document.getElementById("expanded");
        const services = document.getElementById("services");
        if (expanded && expanded.classList.contains("active")) {
          e.preventDefault();
          expanded.classList.remove("active");
          services.style.visibility = "visible";
          services.style.position = "";
          services.style.pointerEvents = "";
          setTimeout(() => {
            window.scrollTo({ top: services.offsetTop - 80, behavior: "smooth" });
          }, 50);
        }
      }
    });
  }
});

/* ---- RESIZE HANDLER ---- */
window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    document.getElementById("navLinks").classList.remove("active");
    document.getElementById("menuToggle").classList.remove("open");
    document.getElementById("navOverlay").classList.remove("active");
    document.body.style.overflow = "";
  }
});

/* ---- HERO CAROUSEL ---- */
(function () {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0, interval;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    if (dots[i]) dots[i].classList.add("active");
    index = i;
  }

  window.goToSlide = function (i) { showSlide(i); restart(); };

  function next() { index = (index + 1) % slides.length; showSlide(index); }
  function restart() { clearInterval(interval); interval = setInterval(next, 5000); }
  restart();
})();

/* ---- SUCCESS STORIES ---- */
(function () {
  const stories = document.querySelectorAll(".story");
  const count = document.getElementById("storyCount");
  let storyIndex = 0, storyInterval;

  function showStory(i) {
    stories.forEach(s => s.classList.remove("active"));
    storyIndex = (i + stories.length) % stories.length;
    stories[storyIndex].classList.add("active");
    if (count) count.innerText = `${storyIndex + 1} / ${stories.length}`;
  }

  window.nextStory = function () { showStory(storyIndex + 1); restartStory(); };
  window.prevStory = function () { showStory(storyIndex - 1); restartStory(); };

  function restartStory() {
    clearInterval(storyInterval);
    storyInterval = setInterval(() => showStory(storyIndex + 1), 6000);
  }
  restartStory();
})();

/* ---- EXPAND CARDS ---- */
const expandData = [
  {
    title: "How We Drive Real AI Automation",
    card: "service-card-0",
    desc: "\"AkeeTek helped us uncover real opportunities for AI automation and guided us with a systematic approach, from discovery to value realization and scaling across business functions. The automation strengthened customer confidence and gave us a competitive edge.\"",
    steps: [
      "Discovery Workshops to Assess Current Processes",
      "Identify High-Impact Areas for AI Automation",
      "Define Measurable Outcomes & KPIs",
      "Build AI Foundation Fabric and Develop Solutions",
      "Implement, Measure, Monitor, and Guardrails",
      "Scale Automation Across Business Functions"
    ]
  },
  {
    title: "How We Help Customers Unlock ERP & CRM Value",
    card: "service-card-1",
    desc: "\"AkeeTek helped us select the right solution and execute a structured, staged implementation with strong discipline. Their approach ensured seamless system integration and smooth adoption, enabling us to launch on time with minimal disruption.\"",
    steps: [
      "Discovery Workshops to assess current processes and goals",
      "Align ERP and CRM systems with business workflows",
      "Design tailored, scalable solutions using a phased approach",
      "Ensure seamless system integration and interoperability",
      "Deliver improved efficiency with a focus on customer experience and adoption",
      "Ensure the business drives value and supports the value realization framework"
    ]
  },
  {
    title: "How We Help Customers Modernize Transformation",
    card: "service-card-2",
    desc: "\"Much of our success in modernizing our platforms and transitioning to cloud technologies is attributed to AkeeTek's unwavering support and expertise as a trusted and preferred partner.\"",
    steps: [
      "Discovery Workshops to assess business goals and technology landscape",
      "Identify gaps across systems, processes and platforms",
      "Design a tailored technology transformation roadmap",
      "Build and integrate scalable digital solutions",
      "Ensure a seamless connected customer experience driven by data",
      "Demonstrate value, improve operational efficiency, and reduce technical debt"
    ]
  },
  {
    title: "How We Help Organizations Deliver Best Customer Experience",
    card: "service-card-3",
    desc: "\"AkeeTek's global experience and customer obsession helped us design a tailored CX strategy at scale and execute focused journeys. In essence, we gained real value through repeat customers and stronger customer loyalty.\"",
    steps: [
      "Map customer journeys and align with business objectives",
      "Analyze disconnected experiences and friction across customer touchpoints",
      "Design intuitive, human-centered, and data-driven solutions",
      "Integrate platforms to deliver seamless customer journeys",
      "Optimize experiences leveraging insights and analytics",
      "Ensure improved engagement through metrics such as NPS, CSAT and LTV"
    ]
  }
];

function openExpand(index) {
  const data = expandData[index];
  const services = document.getElementById("services");
  const expanded = document.getElementById("expanded");
  const originalCard = document.getElementById(data.card);

  if (!originalCard) return;

  const cardClone = originalCard.cloneNode(true);
  cardClone.removeAttribute("id");
  const expandCard = document.querySelector(".expand-card");
  expandCard.innerHTML = "";
  expandCard.appendChild(cardClone);

  document.getElementById("expandTitle").textContent = data.title;
  document.getElementById("expandDesc").textContent = data.desc;

  const stepsContainer = document.querySelector(".expand-steps");
  stepsContainer.innerHTML = "";
  data.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepsContainer.appendChild(li);
  });

  services.style.visibility = "hidden";
  services.style.position = "absolute";
  services.style.pointerEvents = "none";
  expanded.classList.add("active");

  setTimeout(() => {
    window.scrollTo({ top: expanded.offsetTop - 80, behavior: "smooth" });
  }, 50);
}

function closeExpand() {
  const services = document.getElementById("services");
  const expanded = document.getElementById("expanded");

  expanded.classList.remove("active");
  services.style.visibility = "visible";
  services.style.position = "";
  services.style.pointerEvents = "";

  setTimeout(() => {
    window.scrollTo({ top: services.offsetTop - 80, behavior: "smooth" });
  }, 50);
}

window.openExpand = openExpand;
window.closeExpand = closeExpand;
window.toggleMenu = toggleMenu;

/* ---- AUTO-OPEN FROM URL PARAM (e.g. Blog.html redirect) ---- */
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const expandIndex = params.get("expand");
  if (expandIndex !== null) {
    setTimeout(() => openExpand(parseInt(expandIndex)), 300);
  }
});