export const NAV_LINKS = ["Home", "About", "The Ecosystem", "Our Story", "Career", "Contact"];

export const FEATURES = [
  { icon: "🧠", title: "Neuro-Adaptive", desc: "Responds intelligently to nerve signals, adapting grip strength in real time for each patient." },
  { icon: "🪶", title: "Ultra Lightweight", desc: "Engineered with advanced soft-robotics materials — barely felt on the hand, yet incredibly functional." },
  { icon: "🔄", title: "Closed Loop", desc: "Continuous feedback control with adjustable tension and resistance tailored to each recovery stage." },
  { icon: "📊", title: "Data Driven", desc: "Session logs and progress tracking — shareable with your care team and neurologist." },
];

export const HOW_IT_HELPS = [
  { phase: "Assessment", label: "Initial Evaluation", desc: "Baseline muscle signal reading to understand your current level of hand function.", color: "#FFE4E4", accent: "#D85A30" },
  { phase: "Therapy", label: "Daily Sessions", desc: "Guided rehab exercises with the glove, adapted to your progress in real time.", color: "#E8F4FF", accent: "#185FA5" },
  { phase: "Recovery", label: "Functional Gains", desc: "Measurable improvement in grip strength and coordination, tracked session by session.", color: "#E4F9F0", accent: "#0F6E56" },
];

export const TEAM = [
  {
    name: "Mohitha",
    role: "Founder & Electronics Engineer",
    quote: "Built to bridge the gap between hospital technology and accessible home care.",
    initials: "M",
    color: "#185FA5",
  },
];

export const HOW_IT_WORKS = [
  { title: "Sense", desc: "sEMG sensors read muscle signals from the patient's hand." },
  { title: "Process", desc: "ESP32 microcontroller computes real-time feedback response." },
  { title: "Actuate", desc: "Pneumatic soft glove assists finger and wrist movement." },
  { title: "Track", desc: "IMU logs joint angles and session data for progress review." },
];

export const HOW_IT_WORKS_PLAIN = [
  {
    step: 1,
    title: "Detect",
    desc: "The glove picks up faint electrical signals from your hand's muscles — even when no movement is visible to the eye.",
  },
  {
    step: 2,
    title: "Assess",
    desc: "In real time, it evaluates how much hand function remains and measures the strength of the signal.",
  },
  {
    step: 3,
    title: "Personalise",
    desc: "Automatically adjusts the level of support to match your current ability. No manual calibration needed.",
  },
  {
    step: 4,
    title: "Assist",
    desc: "The soft, air-powered glove gently amplifies your intent — completing the movement your brain is trying to make.",
  },
  {
    step: 5,
    title: "Track",
    desc: "Every session is logged automatically. You and your care team can see exactly how recovery is progressing over time.",
  },
];

export const TRUST_ITEMS = [
  { icon: "🏥", title: "Medical Grade", desc: "Clinically validated approach with strict biocompatibility standards." },
  { icon: "🎓", title: "AICTE Licensed", desc: "Officially recognized and licensed by the All India Council for Technical Education." },
  { icon: "🔬", title: "Research Backed", desc: "Every design decision is backed by peer-reviewed medical research." },
  { icon: "🇮🇳", title: "Made in India", desc: "Designed and built in Tirupati, Andhra Pradesh." },
];

export const TRUST_BADGES = [
  "🇮🇳  Startup India Recognized",
  "📋  Registered MSME",
  "🎓  AICTE Licensed",
  "🏭  Made in India",
  "🔬  Research Backed",
  "🏥  Medical Grade",
];

export const ECOSYSTEM_CARDS = [
  {
    icon: "🧤",
    title: "Under 500g. Wears like a glove.",
    desc: "Soft pneumatic design. Single-handed donning. Wrist-stabilising.",
    cta: "See hardware specs →",
    badge: null,
  },
  {
    icon: "📱",
    title: "Therapy that feels like a game.",
    desc: "Gamified daily sessions. Streak system. Recovery tracking.",
    cta: "Learn more →",
    badge: "In Development",
  },
  {
    icon: "📊",
    title: "Proof your brain is healing.",
    desc: "Joint angles, grip strength, session logs. Shareable with neurologist.",
    cta: "See the data →",
    badge: null,
  },
];

export const FAQ_ITEMS = [
  {
    q: "Is it safe to use at home without a doctor?",
    a: "Yes. NeuroGrip is designed for home use. A complete setup guide is provided, plus WhatsApp support for your first session at no extra cost.",
  },
  {
    q: "What if my stroke happened over 6 months ago?",
    a: "NeuroGrip can still help. Neuroplasticity — the brain's ability to rewire — continues long after stroke. Many patients see gains even years later with consistent, assisted exercise.",
  },
  {
    q: "Does it work for complete paralysis?",
    a: "NeuroGrip works best when there is at least some residual muscle signal. During your Early Access onboarding, our team will assess your current function and let you know if it's the right fit.",
  },
  {
    q: "How is it different from physiotherapy at a clinic?",
    a: "Clinic visits typically happen 2–3 times a week. NeuroGrip allows daily therapy at home, which research shows leads to faster recovery. It also costs a fraction of ongoing clinic fees.",
  },
  {
    q: "What does 'Early Access' mean?",
    a: "Early Access users get the device before public launch at a preferential price, direct access to our team, and a say in shaping the final product features.",
  },
  {
    q: "How do I put it on without help?",
    a: "The glove is designed for single-handed donning — you can slip it on using only your unaffected hand. A step-by-step video guide is included.",
  },
  {
    q: "Will my neurologist be able to see the data?",
    a: "Yes. Session reports can be exported as a PDF or shared directly via link with your neurologist or physiotherapist.",
  },
];

export const JOBS = [];