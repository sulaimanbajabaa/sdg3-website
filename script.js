
const issueData = {
  stress: {
    bg: "green",
    title: "STRESS & ANXIETY",
    img: "Img/Anxiety_1.png",
    signs: [
      "CONSTANT WORRY / RACING THOUGHTS",
      "TIGHT CHEST / FAST HEARTBEAT / HEADACHES",
      "IRRITABLE, HARD TO FOCUS",
      "SLEEP CHANGES"
    ],
    now: [
      "BREATHE 4–4–6 × 6",
      "GROUNDING 5–4–3–2–1",
      "TEXT A FRIEND / TAKE A SHORT WALK"
    ],
    help: [
      "GET HELP NOW: CALL 03-7627 2929 (BEFRIENDERS, 24/7)",
      "CAMPUS COUNSELLING (HOURS & BOOKING)"
    ],
    urgent: "IF YOU FEEL UNSAFE OR HAVE THOUGHTS OF HARM → CALL 999 / GO TO EMERGENCY."
  },

  sleep: {
    bg: "teal",
    title: "SLEEP PROBLEMS",
    img: "Img/Sleep Problems.png",
    signs: [
      "TROUBLE FALLING ASLEEP",
      "WAKING UP OFTEN / NOT RESTED",
      "LOW ENERGY AFFECTS STUDY"
    ],
    now: [
      "SCREEN-OFF 30–60 MIN BEFORE BED",
      "KEEP A FIXED SLEEP/WAKETIME",
      "AVOID CAFFEINE LATE"
    ],
    help: [
      "IF IT LASTS WEEKS → TALK TO COUNSELLOR",
      "GET HELP NOW: 03-7627 2929 (BEFRIENDERS)"
    ],
    urgent: "IF YOU FEEL UNSAFE OR PANICKING → CALL 999 / GO TO EMERGENCY."
  },

  lonely: {
    bg: "blue",
    title: "LONELINESS / HOMESICKNESS",
    img: "Img/Loneliness.png",
    signs: [
      "FEELING ISOLATED OR LEFT OUT",
      "LOW MOOD / NO MOTIVATION",
      "AVOIDING SOCIAL SITUATIONS"
    ],
    now: [
      "MESSAGE ONE PERSON YOU TRUST",
      "JOIN ONE LOW-PRESSURE CAMPUS EVENT",
      "MAKE A SIMPLE DAILY ROUTINE"
    ],
    help: [
      "CAMPUS CLUBS / STUDENT SUPPORT",
      "GET HELP NOW: 03-7627 2929 (BEFRIENDERS)"
    ],
    urgent: "IF YOU FEEL UNSAFE OR HAVE THOUGHTS OF HARM → CALL 999 / GO TO EMERGENCY."
  }
};


const tabs = document.querySelectorAll(".tab");
const issueCard = document.getElementById("issueCard");
const issueTitle = document.getElementById("issueTitle");
const issueImg = document.getElementById("issueImg");
const issueSigns = document.getElementById("issueSigns");
const issueNow = document.getElementById("issueNow");
const issueHelp = document.getElementById("issueHelp");
const issueUrgent = document.getElementById("issueUrgent");
const issueBg = issueCard.querySelector(".issue-bg");

function renderList(ul, items){
  ul.innerHTML = "";
  items.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}

function setIssueBackground(bgKey){
  const map = {
    green: "Img/Anxiety BG.png",
    teal:  "Img/Sleep Problems BG.png",
    blue:  "Img/Loneliness BG.png"
  };
  issueBg.style.backgroundImage = `url("${map[bgKey]}")`;
  issueCard.setAttribute("data-bg", bgKey);
}

function setIssue(key){
  const data = issueData[key];
  if(!data) return;

  issueCard.classList.add("swapping");

  window.setTimeout(() => {
    setIssueBackground(data.bg);

    issueTitle.textContent = data.title;
    issueImg.src = data.img;

    renderList(issueSigns, data.signs);
    renderList(issueNow, data.now);
    renderList(issueHelp, data.help);

    issueUrgent.innerHTML = `<span class="urgent-label">URGENT</span><span>${data.urgent}</span>`;

    issueCard.classList.remove("swapping");
  }, 180);
}

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    setIssue(btn.dataset.issue);
  });
});

setIssueBackground("green");
setIssue("stress");

const selfResult = document.getElementById("selfResult");
document.querySelectorAll('input[name="q1"]').forEach(r => {
  r.addEventListener("change", () => {
    const v = Number(r.value);

    let msg = "";
    if (v === 1) msg = "Tip: Pause + breathe 4–4–6 (x6). If it feels urgent, go to Get Help.";
    if (v === 2) msg = "Tip: Try grounding 5–4–3–2–1 and take a short walk.";
    if (v === 3) msg = "Tip: You’re in the middle. Do one small action (water + stretch + 10 mins break).";
    if (v === 4) msg = "Tip: Keep your routine. Sleep + short daily movement helps.";
    if (v === 5) msg = "Tip: Great. Keep healthy habits and support a friend if you can.";

    selfResult.textContent = msg;
  });
});

const stories = [
  `Aina, 20: “I used the breathing tip<br>before a test and my hands stopped<br>shaking.”`,
  `Hakim, 22: “Fixing my sleep routine<br>helped my focus and mood improve.”`,
  `Sara, 19: “Joining a campus event<br>made me feel less alone.”`
];

let storyIndex = 0;
const storyText = document.getElementById("storyText");
const prevStory = document.getElementById("prevStory");
const nextStory = document.getElementById("nextStory");

function renderStory(dir = 1) {
  // dir: 1 = next, -1 = previous
  storyText.animate(
    [
      { opacity: 0, transform: `translateX(${12 * dir}px)` },
      { opacity: 1, transform: "translateX(0px)" }
    ],
    { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
  );

  storyText.innerHTML = stories[storyIndex];
}
prevStory.addEventListener("click", () => {
  storyIndex = (storyIndex - 1 + stories.length) % stories.length;
  renderStory();
});
nextStory.addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % stories.length;
  renderStory();
});
renderStory();

const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
},{threshold:0.14});
revealEls.forEach(el => io.observe(el));

const floatLayer = document.querySelector(".hero-float-layer");
const heroBgImg = document.querySelector(".hero-bg img");

function createNotes(){
  if(!floatLayer) return [];
  const notes = [];
  const count = 7;

  for(let i=0;i<count;i++){
    const n = document.createElement("div");
    n.className = "note";
    floatLayer.appendChild(n);

    notes.push({
      el: n,
      x: Math.random()*80 + 10,
      y: Math.random()*70 + 10,
      r: (Math.random()*14 - 7),
      s: Math.random()*0.6 + 0.35,
      sp: Math.random()*0.8 + 0.35,
      phase: Math.random()*Math.PI*2
    });
  }
  return notes;
}

const notes = createNotes();
let mouseX = 0, mouseY = 0;

window.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  if(!hero) return;
  const rect = hero.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  mouseX = (e.clientX - cx) / rect.width;
  mouseY = (e.clientY - cy) / rect.height;
});

function tick(t){
  if(heroBgImg){
    const dx = mouseX * 10;
    const dy = mouseY * 10;
    heroBgImg.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  notes.forEach((n) => {
    const yy = Math.sin(t/900 * n.sp + n.phase) * 8;
    const xx = Math.cos(t/1100 * n.sp + n.phase) * 10;
    n.el.style.left = `${n.x}%`;
    n.el.style.top  = `${n.y}%`;
    n.el.style.transform = `translate(${xx}px, ${yy}px) rotate(${n.r}deg) scale(${n.s})`;
  });

  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const menuCloseBtn = document.getElementById("menuCloseBtn");

function openMenu(){
  mobileMenu.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  burgerBtn.setAttribute("aria-expanded", "true");

  menuOverlay.hidden = false;

  document.body.style.overflow = "hidden";
}

function closeMenu(){
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  burgerBtn.setAttribute("aria-expanded", "false");

  menuOverlay.hidden = true;

  document.body.style.overflow = "";
}

if (burgerBtn){
  burgerBtn.addEventListener("click", openMenu);
}
if (menuCloseBtn){
  menuCloseBtn.addEventListener("click", closeMenu);
}
if (menuOverlay){
  menuOverlay.addEventListener("click", closeMenu);
}

document.querySelectorAll(".mobile-menu-links a").forEach(a => {
  a.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

if (window.jQuery) {
  $(".nav-link, .mobile-menu-links a").on("click", function (e) {
    const href = $(this).attr("href");
    if (!href || !href.startsWith("#")) return;

    const $target = $(href);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $target.offset().top }, 600);
    }
  });
}

if (window.jQuery) {
  $(".event-link").hover(
    function () { // mouse enter
      $(this).find(".event").stop(true).animate({ marginTop: "-6px" }, 160);
    },
    function () { // mouse leave
      $(this).find(".event").stop(true).animate({ marginTop: "0px" }, 160);
    }
  );
}

prevStory.addEventListener("click", () => {
  storyIndex = (storyIndex - 1 + stories.length) % stories.length;
  renderStory(-1);
});

nextStory.addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % stories.length;
  renderStory(1);
});

renderStory(1);