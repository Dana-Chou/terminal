/** Content for the terminal `changelog` command. Each entry: version label + HTML body (e.g. <span class="hl">…</span>). */
var CHANGELOG_SECTION_TITLE = 'release notes';

var CHANGELOG_ENTRIES = [
  {
    v: 'v0.1',
    body: `Started at BlueHalo / Citadel Defense as the first designer, and quickly noticed something: <span class="hl">66% of support tickets were UX problems</span> dressed up as hardware failures. Fixing the UX dropped tickets by 35% and ended up contributing to the company's M&A.`,
  },
  {
    v: 'v0.5',
    body: `Unified 800+ components, rewrote the settings language, and redesigned the information architecture from the ground up. The work helped land <span class="hl">$75M+ in sales and a DoD Program of Record</span>, with the system eventually deployed to Ukraine. Re-engaged customers reported 100% satisfaction.`,
  },
  {
    v: 'v1.0',
    body: `Joined True Anomaly as the first product design hire. As a solo designer, I ended up <span class="hl">leading engineering teams of up to 30</span>. It took me a while to realize that wasn't typical.`,
  },
  {
    v: 'v1.3',
    body: `Rebuilt Mosaic from Unity to React, owning the 0→1 design system, IA, operator workflows, and visualizations end to end. <span class="hl">The software went on to run two SpaceX missions</span> — still the work I'm most proud of.`,
  },
  {
    v: 'v1.6',
    body: `Joined Gecko Robotics. <span class="hl">Did not know what git was.</span> Asked an engineer what a pull request was, and he was very kind about it.`,
  },
  {
    v: 'v1.8',
    body: `Designed and shipped a net-new LLM agent interface and AI design system at Gecko, rolled out platform-wide. Somewhere along the way <span class="hl">I started opening pull requests</span>, and the engineers — gracious as ever — approved them.`,
  },
  {
    v: 'v2.0',
    body: `Joined Airbase as founding designer and <span class="hl">rebuilt a new brand identity from scratch </span>. before exiting stealth on March 25, 2026. Suddenly had access to a ton of AI tools. Now has a connect context thread starting from user research insights, to product requirements, engineering tickets, and design interfaces.`,
  },
  {
    v: 'v2.4',
    body: `<span class="hl">Almost 300 GitHub contributions over four months.</span> Shipping something to production nearly every day. Who would've thought.`,
  },
  {
    v: 'v2.6',
    body: `Realized design quality erodes at the code level, not the design level — so I shifted from documentation to enforcement. Built <span class="hl">Claude skills for engineering</span> covering UI polish, linting, and design reviews. Engineers use them daily.`,
  },
  {
    v: 'v2.8',
    body: `Built a terminal instead of a portfolio. <span class="hl">Applying to the a16z Design Engineer Fellowship.</span> Feels correct.`,
  },
];
