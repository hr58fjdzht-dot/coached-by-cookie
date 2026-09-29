// All editable site copy lives here. Swap text, images, and links without
// touching any component code.

export const brand = {
  name: "Coached by Cookie",
  shortName: "Cookie",
  city: "Calgary, Alberta",
  tagline: "Evidence-based coaching. Real physiology.",
  email: "coach@coachedbycookie.com", // placeholder — swap for your real inbox
  instagram: "cookie.bodybuilding",
  tiktok: "cookie.bodybuilding",
  whatsapp: "403-901-4467",
  whatsappHref: "https://wa.me/14039014467",
};

export const hero = {
  eyebrow: "Online Coaching · Calgary, AB",
  headline: "Train with science. Build with precision.",
  subhead:
    "Personalized nutrition, training, and physique coaching built on exercise physiology — not guesswork.",
  ctaPrimary: { label: "What Clients Say", href: "#testimonials" },
  ctaSecondary: { label: "DM for Coaching", href: "https://wa.me/14039014467" },
};

export const about = {
  heading: "About Cookie",
  paragraphs: [
    "Calgary-based coach and Exercise and Physiology major, with a hands-on, detail-first approach to training and nutrition.",
    "Every plan is built around your physiology, your schedule, and your goals — not a template. Clients get direct access, twice-weekly check-ins, and adjustments backed by data, not trends.",
  ],
  specialties: [
    {
      title: "Exercise Physiology",
      description: "Programming built around how your body actually adapts to training stress.",
    },
    {
      title: "Nutrition & Macros",
      description: "Precision fueling — cutting, bulking, or recomping — mapped to your metabolism.",
    },
    {
      title: "Pharmacology Awareness",
      description: "Informed guidance on performance-enhancement protocols for clients who use them, prioritizing health markers.",
    },
    {
      title: "Hormonal & Metabolic Health",
      description: "Training and nutrition that respects hormonal balance, recovery capacity, and long-term health.",
    },
    {
      title: "Contest Prep",
      description: "Peak week, posing, and stage-ready conditioning for bodybuilding and bikini competitors.",
    },
    {
      title: "Progress Tracking",
      description: "Weekly data — weight trends, measurements, photos, bloodwork — so decisions are never guesses.",
    },
  ],
};

export type Transformation = {
  id: string;
  alias: string;
  duration: string;
  caption: string;
  beforeLabel: string;
  afterLabel: string;
  // Once you have approved photos, drop files in /public/images/transformations
  // and set these to the file paths, e.g. "/images/transformations/t1-before.jpg".
  beforeSrc?: string;
  afterSrc?: string;
};

// Placeholder cards — swap in real before/after photos via /public/images/transformations
// and update captions once approved images are ready.
export const transformations: Transformation[] = [
  {
    id: "t1",
    alias: "Client A",
    duration: "12 weeks",
    caption: "Body recomposition with a full strength increase across all major lifts.",
    beforeLabel: "Week 0",
    afterLabel: "Week 12",
  },
  {
    id: "t2",
    alias: "Client B",
    duration: "16 weeks",
    caption: "Health-first reset — restored bloodwork markers alongside visible progress.",
    beforeLabel: "Week 0",
    afterLabel: "Week 16",
  },
  {
    id: "t3",
    alias: "Client C",
    duration: "10 weeks",
    caption: "Lean bulk phase focused on controlled size gain ahead of a cut.",
    beforeLabel: "Week 0",
    afterLabel: "Week 10",
  },
  {
    id: "t4",
    alias: "Client D",
    duration: "20 weeks",
    caption: "Contest-prep conditioning building toward a stage debut.",
    beforeLabel: "Week 0",
    afterLabel: "Week 20",
  },
];

type Testimonial = { quote: string; name?: string };

export const testimonials: Testimonial[] = [
  { quote: "Lifts have been feeling insane — I'm actually morphing." },
  {
    quote:
      "My cardio actually leveled up. I started at 60 RPM, level 7 on the bike — now I'm at 75–80 minimum.",
  },
  {
    quote:
      "I finally saw definition in my quads. Had me smiling in the shower this morning.",
  },
  {
    quote:
      "The weight is actually just falling off. I could literally cry — I've never seen this much progress so fast. I can't thank you enough.",
  },
  {
    quote:
      "When I first thought about switching coaches, I was really hesitant — especially with you being a guy when I'd only ever been coached by women before. I'm so glad I switched. My hormones are in check, I feel great all the time, and training has been 10x better than with any coach I've had before. You're up to date with the literature and always looking for new information for your clients. I really appreciate having you as a coach.",
  },
  { quote: "Great coach, better guy. Super knowledgeable, highly recommended." },
];

export const services = [
  {
    title: "Training Programming",
    description:
      "Periodized programs built around your equipment, schedule, and recovery — adjusted weekly based on real performance data.",
  },
  {
    title: "Nutrition & Meal Planning",
    description:
      "Custom macros and meal structures for your goal phase, updated as your body and lifestyle change.",
  },
  {
    title: "Pharmacology Protocols",
    description:
      "Evidence-based guidance for clients running enhancement protocols, with a focus on health markers and risk management.",
  },
  {
    title: "Contest Prep",
    description:
      "Full prep-to-stage coaching: peak week, posing cues, and conditioning timelines for competitors.",
  },
  {
    title: "Supplement Guidance",
    description:
      "No-fluff supplement protocols — what's worth taking, what isn't, and why.",
  },
  {
    title: "Accountability & Check-Ins",
    description:
      "Two check-ins per week, data review, and direct coach access so nothing falls through the cracks.",
  },
];

export const contact = {
  heading: "Ready to train with a plan?",
  subhead: "Serious clients only. DM to apply for coaching.",
  closer: "DM for Coaching",
};
