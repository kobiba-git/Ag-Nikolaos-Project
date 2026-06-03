// ═══════════════════════════════════════════════════════════════════
//  PROJECT_DATA.js  —  Ag. Nikolaos Renovation, Evia, Greece
//
//  Single source of truth for BOTH dashboards.
//  Edit this file → both dashboard.html and dashboard_vicky.html
//  update automatically when opened in a browser.
//
//  HOW TO UPDATE:
//    Ask Claude: "Update the project data with this week's report."
//    Claude edits this file → both dashboards refresh on next open.
// ═══════════════════════════════════════════════════════════════════

const PROJECT_DATA = {

  // ── Meta ──────────────────────────────────────────────────────────
  meta: {
    lastUpdated:   "3 June 2026",
    weekOf:        "26 May – 1 June 2026",
    projectStart:  "Feb 2026",
    estCompletion: "Late 2026",
  },

  // ── This week's task grid (Vicky Status tab) ──────────────────────
  // urgent: true = red top border, false = blue top border
  weekTasks: [
    { icon: "🏠", label: "House Insulation — URGENT",      sub: "Summer dry season window — don't delay", urgent: true  },
    { icon: "⚡",  label: "Electricity counters — URGENT",  sub: "Electrician needs electricity company counters to continue to next stage", urgent: true  },
    { icon: "🔧", label: "Kairis balance ~€3,145",         sub: "Kobi to settle personally on next Greece visit (€2,635 + €510 small storage roof this week)", urgent: false },
    { icon: "🔨", label: "Metalworker — small storage",    sub: "Pay €550 on completion of door + window install", urgent: false },
    { icon: "⚡",  label: "Electrician advance €1,000",    sub: "Reimbursement for 130m piping pre-purchased. Approved.", urgent: false },
    { icon: "🚿", label: "Septic tank — Yael's unit",      sub: "Completion scheduled this week", urgent: false },
    { icon: "🏗️", label: "3rd floor upper roof",           sub: "Completion scheduled this week", urgent: false },
    { icon: "📋", label: "Land registry",                  sub: "Push Vasiliki — unblocks Antonis permit", urgent: false },
  ],

  // ── KPI row (owner dashboard top) ────────────────────────────────
  kpis: {
    totalBudget:    "€275K",
    totalBudgetSub: "Vicky: ~1,000–1,050 €/m²",
    paidToDate:     "~€55,586",
    paidSub:        "~20% of total estimate",
    duePending:     "~€12,695",
    dueSub:         "Kairis ~€3,145 + metalworker €550 + electrician ~€8,500 (incl. new €1,000)",
    bigItems:       "€147K+",
    bigItemsSub:    "Antonis, tiles, windows, electrical",
  },

  // ── Budget bars ───────────────────────────────────────────────────
  // spent/budget are numbers; use spentLabel/budgetLabel to override display text
  budgetBars: [
    { label: "A. Site Works (excavation, 160m road, trenching, municipality fee)",  spent: 5300,  budget: 6000,  pct: 88, cls: "bar-green"  },
    { label: "B. Storage Buildings",                             spent: 8111,  budget: 13200, pct: 61, cls: "bar-blue"   },
    { label: "C. Ground Floor + Materials",                      spent: 8420,  budget: 11000, pct: 77, cls: "bar-blue"   },
    { label: "D. Plumbing (all floors)",                         spent: 3960,  budget: 9000,  pct: 44, cls: "bar-orange" },
    { label: "E. Electrical (all floors)",                       spent: 2000,  budgetLabel: "€11,250 approved (GF+storage) + upper TBD", pct: 18, cls: "bar-orange" },
    { label: "F. Tiles & Flooring",                              spent: 0,     budget: 25500, pct: 0,  cls: "bar-red"    },
    { label: "G. Windows & Doors (aluminum)",                    spent: 1150,  budget: 18700, pct: 6,  cls: "bar-red"    },
    { label: "H. Roof Garden / 3rd Floor",                       spent: 1450,  budget: 9500,  pct: 15, cls: "bar-orange" },
    { label: "I. Antonis — Phase 1 (Foundations & Beams)",       spent: 0,     budgetLabel: "€25,000–€30,000", pct: 0, cls: "bar-red" },
    { label: "I2. House Insulation (Summer — urgent)",           spent: 0,     budgetLabel: "TBD",             pct: 0, cls: "bar-red" },
    { label: "J. Landscaping",                                   spent: 375,   budget: 7000,  pct: 5,  cls: "bar-green"  },
    { label: "K. Workers & Labour",                              spentLabel: "~€15,630", budget: 25000, pct: 63, cls: "bar-blue" },
    { label: "L. Legal, Admin & Tax",                            spent: 3461,  budget: 11350, pct: 31, cls: "bar-blue"   },
    { label: "Contingency (10%)",                                spent: 0,     budget: 25000, pct: 0,  cls: "bar-green"  },
  ],

  // ── Project phases ────────────────────────────────────────────────
  // status: "done" | "ongoing" | "upcoming" | "blocked"
  phases: [
    { icon: "✅", status: "done",     name: "Phase 1 — Site Preparation",
      detail: "Road (160m), excavation, asbestos removal — COMPLETE" },
    { icon: "🔨", status: "ongoing",  name: "Phase 2 — Storage Buildings",
      detail: "Large storage = Yael's unit. WATER ✅ + ELECTRICITY ✅ — fully operational as of June 1! 2-LAYER DOOR/WINDOW SYSTEM: iron/steel outer layer ✅ + aluminum inner layer ✅ (with screen, paid €1,150). 3-component epoxy coating on floor ✅ (permanent moisture barrier). Septic tank under construction. Small storage: steel door + window ONLY (no aluminum) — installation by metalworker (€550) approved." },
    { icon: "🔨", status: "ongoing",  name: "Phase 3 — Ground Floor Renovation",
      detail: "Brickwork complete ✅. Apt A installation DONE ✅. Plastering started (rain). WATER CONNECTED ✅ — plumber brought water to lower apartments and every corner of the building (June 1). Electrical approved (€11,250) — GF + storage scope." },
    { icon: "🔴", status: "blocked",  name: "Phase 4 — Antonis Main Contract",
      detail: "BLOCKED: Land registry certificate needed. Permit in progress. Notary engaged. Temp. cert received; formal cert imminent." },
    { icon: "🔨", status: "ongoing",  name: "Phase 5 — Upper Floors & Roof",
      detail: "Upper floor materials on roof beams. 3rd floor roof panels ARRIVED ✅ May 26 (RAL 9006 silver). Steel frame for 3rd floor ordered. 3rd floor upper roof completion scheduled this week. ROOF SLAB CUT — 100% CONFIRMED: crack discovered under old covering (couch/living area). Slab will be cut and steel beams added. Damage extent to be assessed once cutting begins. Concrete demolition blocks kept for yard benches (Vicky's request)." },
    { icon: "⏳", status: "upcoming", name: "Phase 6 — Finishing (Tiles, Insulation, Doors, Kitchen)",
      detail: "First tile order placed May 8 (330 sqm CANDIA SLAB IVORY). Insulation method/pricing needed urgently this summer. Windows/doors TBD (color). Kitchen selection pending." },
    { icon: "🔴", status: "blocked",  name: "Phase 7 — Legal & Funding",
      detail: "Property division with notary blocked (land registry + Antonis). Funding application (Exoikonomw) blocked until Phase 7 complete." },
  ],

  // ── Action items (owner dashboard) ───────────────────────────────
  // priority: "critical" | "high" | "info"
  actionItems: [
    { priority: "critical", label: "🔴 Critical — Action Needed",    title: "Electricity Counters — Provide to Electrician",
      desc: "Electrician is ready to proceed and is giving power to Yael's unit (large storage) now. He needs the electricity company counters to continue to the next stage. Provide ASAP." },
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Land Registry Certificate",
      desc: "Vasiliki has temporary cert; formal cert with Notary must be issued ASAP. This unblocks Antonis permit AND property funding application." },
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Antonis Work Start",
      desc: "Once permit is issued + 10 dry days, Antonis starts structural work. Vicky mediating relationship. Ask Antonis to review roof design change (less insulation area = saving)." },
    { priority: "critical", label: "🔴 Critical — Money",           title: "Water Network Connection",
      desc: "Plumber cannot pressure-test pipes or close trenches until community connects water supply. Application submitted; no response yet. Follow up urgently." },
    { priority: "high",     label: "🟠 High Priority",              title: "Kairis Balance ~€3,145 — Kobi to settle personally",
      desc: "Running total owed to Kairis: €3,145 (€2,635 existing + €510 small storage roof arriving this week). Vicky will personally go to Kairis to settle the debt. After this delivery, roof panel chapter with Kairis closes." },
    { priority: "high",     label: "🟠 High Priority",              title: "Electrician Outstanding ~€7,500",
      desc: "GF + storages electrical approved (€9,500 scope). Paid to date: €400 (May 16) + €1,000 (May 28) = €1,400. Outstanding: ~€7,500 + €1,000 plans + €750 3-phase meter. Electrician currently active — giving power to Yael's unit (large storage)." },
    { priority: "high",     label: "🟠 High Priority",              title: "Tile Delivery Confirmation",
      desc: "First order placed May 8: 240 sqm CANDIA SLAB 120×120 IVORY (Floor B + Floor A balconies) + 90 sqm 60×60 IVORY (Floor A internal) = 330 sqm total. Confirm delivery date with supplier. Next: rooftop room tiles, veranda, bathroom tiles (after micro-cement decision)." },
    { priority: "critical", label: "🔴 Critical — Summer Deadline", title: "House Insulation — Must Complete This Dry Season",
      desc: "Insulation work must be done before autumn rains. Vicky to research method options (spray foam, rock wool, PIR boards, etc.), get pricing, and submit for Kobi's approval before scheduling. Do not delay — dry season window is limited." },
    { priority: "high",     label: "🟠 High Priority",              title: "WiFi Site Cameras",
      desc: "Install cameras for remote monitoring (Kobi & Yael watching from Israel). Vicky to source options, get quote (~€500–1,500 estimated), present to workers as owner request. 2–3 cameras: entrance, main work area, storage. Await Kobi approval on quote." },
    { priority: "high",     label: "🟠 High Priority",              title: "Transfer Funds for Upcoming Expenses",
      desc: "Large spend coming (Antonis deposit, tiles, windows, plumbing balance ~€7k, electricals). Requires 3–4 day processing from pension savings." },
    { priority: "high",     label: "🟠 High Priority",              title: "Property Division / Building Split (Notary)",
      desc: "Required before funding application. Notary asked for more plans + Antonis must sign. Coordinate with Vasiliki and Notary." },
    { priority: "info",     label: "🔵 Info / Ongoing",             title: "Aluminum Windows & Doors",
      desc: "LARGE STORAGE: 2-layer system — iron/steel outer + aluminum inner ✅ (with screen, paid €1,150 May 23). SMALL STORAGE: steel door + window ONLY — no aluminum layer. Remaining ~25 openings across the house: color decision pending (black = 2-month lead time + higher cost)." },
    { priority: "info",     label: "🔵 Info / Decision Needed",     title: "Entrance Gate (Sliding)",
      desc: "Blacksmith measured; price coming. Sliding gate (5m, 3 columns), motorizable. Confirm design + approve quote." },
    { priority: "info",     label: "🔵 When You Visit Greece",      title: "Greek Tax Registration",
      desc: "Accountant ready (€711 fee). Requires physical presence of Kobi + Yael. Also: Zoe visit with Notary script (POA)." },
    { priority: "info",     label: "🔵 Info / Ongoing",             title: "Greek SIM Top-Up",
      desc: "Add €20 to Kobi's Greek SIM every 2–3 months to keep line active. Yael's SIM still TBD." },
  ],

  // ── Payment schedule ──────────────────────────────────────────────
  // status: "paid" | "due" | "upcoming" | "blocked"
  payments: [
    { date: "Jun 1",      category: "Workers",    desc: "Workers wages — 4 workers/day Mon–Sat (week May 26–31). Daily €250 (3 workers @€50 + manager @€100). On site 07:00–14:00.", vendor: "Workers + Manager", amount: "€1,500", status: "paid" },
    { date: "Jun 1",      category: "Materials - Other", desc: "3-component epoxy coating — YAEL unit floor (entire area). Permanent moisture barrier incl. installation. Eliminates additional insulation layer.", vendor: "Supplier", amount: "€400", status: "paid" },
    { date: "Upcoming",   category: "Subcontractor - Other", desc: "Metalworker — small storage door + window installation. Agreed amount.", vendor: "Metalworker", amount: "€550", status: "due" },
    { date: "Upcoming",   category: "Subcontractor - Electrician", desc: "Electrician advance — reimbursement for 130m electrical supply piping pre-purchased by electrician.", vendor: "Electricians", amount: "€1,000", status: "due" },
    { date: "May 28",     category: "Plumbing",   desc: "Plumber — materials and pipes for infrastructure work",                                                                                         vendor: "Plumber",              amount: "€300",   status: "paid" },
    { date: "May 28",     category: "Site Works", desc: "Excavator — opening channels (plumbing on lower side of plot, electrical on upper side). Closing channels included (~2 days, same price).",                    vendor: "Excavator contractor", amount: "€600",   status: "paid" },
    { date: "May 28",     category: "Plumbing",   desc: "Plumber — 3 days labor, corner to corner sealing all pipes with no leaks. Paid from deal money.",                                                               vendor: "Plumber",              amount: "€1,000", status: "paid" },
    { date: "May 28",     category: "Electrical", desc: "Electrician advance — proceeding to give electricity to Yael's unit (large storage). Electrician needs electricity company counters to continue.",              vendor: "Electricians",         amount: "€1,000", status: "paid" },
    { date: "May 26",     category: "Materials",  desc: "Kairis — partial payment on account (total debt was €3,335: panels €2,875 + containers €360 + materials €100). Remaining balance ~€1,005 outstanding.", vendor: "Kairis", amount: "€2,330", status: "paid" },
    { date: "May 25",     category: "Workers",    desc: "Workers wages (week May 19–25) — €1,620 all-in. Vicky held €2,000 in cash; paid workers €1,620; retained €330 used toward Kairis payment.", vendor: "Workers + Manager", amount: "€1,620", status: "paid" },
    { date: "May 26",     category: "Legal/Admin",desc: "Owner certificates (2×) — 1 for Yael, 1 for Kobi. Paid by Yael via bank transfer to Vasiliki. Legal insurance/protection for project.", vendor: "Vasiliki Kiapekaki", amount: "€200", status: "paid" },
    { date: "May 25",     category: "Workers",    desc: "Meli Ice Cream — treat for workers team. Paid by Vicky from Kobi's funds.", vendor: "Meli Ice Cream", amount: "€50",   status: "paid" },
    { date: "May 23",     category: "Windows",    desc: "Aluminum inner door + window — LARGE STORAGE ONLY (inner layer of 2-layer system: iron/steel outer + aluminum inner with screen). White aluminum. Small storage has steel only — no aluminum.", vendor: "Aluminum supplier", amount: "€1,150", status: "paid" },
    { date: "May 19–23",  category: "Workers",    desc: "Workers wages (week May 19–23) — Mon €230 (3w+Meli), Tue €230 (3w+Meli), Wed €330 (3w+Meli+Contractor overlap), Thu €330 (3w+Meli+Contractor overlap), Fri €250 (3w+Contractor), Sat €250 (3w+Contractor)", vendor: "Workers + Managers", amount: "€1,620", status: "paid" },
    { date: "Due now",    category: "Materials",  desc: "Kairis — running balance: €2,635 existing + €510 small storage roof (arriving this week) = €3,145 total. Kobi to settle personally on next Greece visit.", vendor: "Kairis", amount: "~€3,145", status: "due" },
    { date: "Approved",   category: "Electrical", desc: "Electrical work + materials — 2 apts + 2 storages + outdoor provisions", vendor: "Electricians", amount: "€9,500", status: "due" },
    { date: "Approved",   category: "Electrical", desc: "Electrical plans — submitted to electricity authority", vendor: "Electricians",       amount: "€1,000",      status: "upcoming" },
    { date: "Approved",   category: "Electrical", desc: "Three-phase meter (under Kobi's name)",                 vendor: "Electricians",       amount: "€750",        status: "upcoming" },
    { date: "May 16",     category: "Workers",    desc: "Workers wages (week May 12–16)",                        vendor: "Workers",            amount: "€1,280",      status: "paid"     },
    { date: "May 16",     category: "Blacksmith", desc: "Large storage door + window (full payment)",            vendor: "Blacksmith",         amount: "€400",        status: "paid"     },
    { date: "May 16",     category: "Plumbing",   desc: "Plumber payment #3",                                    vendor: "Plumber",            amount: "€500",        status: "paid"     },
    { date: "May 16",     category: "Electrical", desc: "Advance — Apartment B conduits",                        vendor: "Electricians",       amount: "€400",        status: "paid"     },
    { date: "May 13",     category: "Workers",    desc: "Workers wages balance (prev. week)",                    vendor: "Workers",            amount: "€1,770",      status: "paid"     },
    { date: "May 9",      category: "Materials",  desc: "Kairis — cement forms, iron, insulation coat",          vendor: "Kairis",             amount: "€1,750",      status: "paid"     },
    { date: "May 9",      category: "Workers",    desc: "Workers wages Apr 29–May 9",                            vendor: "Workers",            amount: "€1,440",      status: "paid"     },
    { date: "Upcoming",   category: "Materials",  desc: "Kairis — steel frame for 3rd floor (ordered May 26)",   vendor: "Kairis",             amount: "~€800–900",   status: "upcoming" },
    { date: "Upcoming",   category: "Blacksmith", desc: "Small storage door + window",                           vendor: "Blacksmith",         amount: "€550",        status: "upcoming" },
    { date: "Upcoming",   category: "Plumbing",   desc: "Plumbing balance (pressure test after water connect)",  vendor: "Plumber",            amount: "~€7,200",     status: "upcoming" },
    { date: "Upcoming",   category: "Electrical", desc: "Full house electrical wiring",                          vendor: "Electricians",       amount: "~€20,000",    status: "upcoming" },
    { date: "Upcoming",   category: "Tiles",      desc: "Tiles (280–290sqm) + installation",                    vendor: "Tile supplier + tilers", amount: "~€25,000", status: "upcoming" },
    { date: "Upcoming",   category: "Antonis",    desc: "Phase 1: Foundations & beams (full contract TBD after permit)", vendor: "Antonis", amount: "€25K–€30K",   status: "blocked"  },
    { date: "Summer 2026",category: "Insulation", desc: "House insulation — method + price TBD (Vicky to source)", vendor: "TBD",             amount: "TBD",         status: "upcoming" },
    { date: "Upcoming",   category: "Cameras",    desc: "WiFi site cameras — remote monitoring (Israel)",        vendor: "TBD",                amount: "~€500–1,500", status: "upcoming" },
    { date: "Next visit", category: "Legal/Admin",desc: "Accountant tax registration (requires physical presence)", vendor: "Accountant",      amount: "€711",        status: "upcoming" },
  ],

  // ── Key contacts ──────────────────────────────────────────────────
  contacts: [
    { name: "Vicky",                  role: "Architect & Project Manager",      detail: "tsalkitv@yahoo.gr · On-site coordinator, Evia. Vodafone SIM active." },
    { name: "Antonis Dimas",          role: "Main Contractor (Civil Engineer)",  detail: "info.adimas@yahoo.com · Contract signed Feb 15. Waiting for permit. Via Vicky." },
    { name: "Plumber",                role: "Full plumbing — all floors",        detail: "Led Thermae Sylla resort plumbing. SP pipes." },
    { name: "Blacksmith",             role: "Iron doors, gate, fences",          detail: "Making storage doors + sliding entrance gate." },
    { name: "Kairis",                 role: "Main Materials Supplier",           detail: "Ytong, bricks, insulation, cement, roof panels." },
    { name: "Vasiliki Kiapekaki",     role: "Lawyer / Land Registry",            detail: "vkiapekaki@gmail.com · +30 6977685028 · Chalkis Bar Association. Temp cert obtained; formal cert in progress." },
    { name: "Notary — Kyriaki Mavri", role: "Property Division",                 detail: "kuriakimauri@yahoo.gr · Engaged for building split. Needs plans + Antonis sign-off." },
    { name: "Zoe",                    role: "Local Representative",              detail: "Kobi GR SIM: +30 6948471034. POA holder." },
    { name: "ABM Hellas SA (Candia)", role: "Tile Supplier",                     detail: "Ioannis Tsanais · i.tsanais@abmcosmos.com · +30 210 5596230 ext.201. Candia Italy tiles + BAUER adhesives." },
    { name: "LINEA ARMADI",           role: "Italian Kitchen (Offer Received)",  detail: "sales@linea-armadi.gr · +30 210 2400 475. Cash/no VAT option. Meeting to decide still pending." },
  ],

  // ── Design decisions ──────────────────────────────────────────────
  // color: CSS variable name (lgreen | yellow | lblue)
  // bodyHtml: HTML string rendered directly — can use <strong>, <em>, <br>
  designDecisions: [
    { color: "lgreen", title: "✅ Tiles — First Order Confirmed (May 8)",
      bodyHtml: "CANDIA SLAB LALPE DI SIUSI IVORY NATURAL STRUCTURE 9MM 4D<br>• Floor B internal+balconies + Floor A balconies: <strong>240 sqm @ 120×120</strong><br>• Floor A internal: <strong>90 sqm @ 60×60</strong> (brighter, smaller space)<br><em>Next: Rooftop room (wood-like), veranda (chosen, order TBD), bathrooms (after micro-cement test)</em>" },
    { color: "lgreen", title: "✅ Storage Roof",
      bodyHtml: "RAL 9006 (silver/grey) insulated panels, 12cm thick.<br>Black or dark grey frame details agreed.<br><strong>YAEL unit floor: 3-component epoxy coating ✅</strong> — permanent moisture barrier, eliminates separate floor insulation." },
    { color: "lgreen", title: "✅ Iron Doors & Gate",
      bodyHtml: "Black/dark with clear 2-component varnish (3 coats).<br>Sliding entrance gate — 5m, motorizable later." },
    { color: "yellow", title: "⏳ Aluminum Windows & Doors — House (excl. large storage)",
      bodyHtml: "<strong>Large storage (Yael's unit):</strong> ✅ DONE — 2-layer system: iron/steel outer + aluminum inner with screen (paid €1,150).<br><strong>Small storage:</strong> steel door + window ONLY — no aluminum.<br><strong>House (~25 openings):</strong> Color decision pending — black preferred (2-month lead time, higher cost). Quote TBD once color decided." },
    { color: "yellow", title: "⏳ Kitchen",
      bodyHtml: "LINEA ARMADI Italian kitchen offer received Feb 2026 (via Vicky). Cash/no VAT option available. Vicky can customize oven model. Meeting to review offer still pending — schedule when ready.<br>Also: CANDIA MEGA SLABS (1.60×3.20) available as kitchen countertop — 6.4 linear meters per slab, with invisible induction cooktop integration." },
    { color: "lblue",  title: "💡 Central Staircase — Design Idea (Under Discussion)",
      bodyHtml: "Cover all staircase walls with a <strong>natural stone / raw texture</strong> treatment.<br>Contrast with: <strong>wood and/or steel</strong> for the staircase fence/railing.<br>Accent: <strong>black long window</strong>.<br><em>No final decision yet.</em>" },
    { color: "lgreen", title: "✅ Roof Slab Cut — 100% Confirmed (June 1)",
      bodyHtml: "Pre-existing crack discovered in couch/living area under white covering material (hidden ~10 years). Slab <strong>will be cut</strong> in that section and steel beams added. This is the same section previously discussed for the high-ceiling kitchen/living area design. Full extent of damage TBD once cutting begins." },
    { color: "lblue",  title: "📐 Floor Plans & Roof Note",
      bodyHtml: "Ground floor layout adjusted (bathrooms moved, staircase correction).<br><strong>Roof slab (June 1 update):</strong> CUT IS CONFIRMED — crack found in couch area. Slab will be cut; steel beams to be added. This was Sula's side / the area discussed for high ceiling kitchen+living. Damage scope TBD.<br>Concrete demolition blocks kept for built-in yard seating benches (Vicky's request).<br>Vicky to provide updated DWG plans." },
  ],

  // ── Financial summary (owner dashboard cards) ─────────────────────
  financialSummary: {
    paid: [
      { label: "Site Works (excavation, 160m road, trenching, municipality fee)",  amount: "€5,300"   },
      { label: "Storage Buildings",        amount: "€8,111"   },
      { label: "Ground Floor Materials",   amount: "€8,420"   },
      { label: "Plumbing",                 amount: "€3,960"   },
      { label: "Electrical",               amount: "€2,000"   },
      { label: "Workers & Labour",         amount: "~€15,630" },
      { label: "Legal / Admin",            amount: "€3,000"   },
      { label: "Landscaping",              amount: "€375"     },
      { label: "Roof Garden (materials)",  amount: "€1,450"   },
      { label: "Windows & Doors",          amount: "€1,150"   },
    ],
    totalPaid:      "~€55,586",
    totalCommitted: "~€59,686",

    ahead: [
      { label: "Antonis — Phase 1 (foundations & beams)", amount: "€25K–€30K" },
      { label: "Antonis — Remaining phases (TBD)",        amount: "TBD"        },
      { label: "House Insulation (summer — urgent)",      amount: "TBD"        },
      { label: "Tiles + installation",                    amount: "€25,000"    },
      { label: "Electrical (GF+storage — approved)",      amount: "€11,250"    },
      { label: "Electrical (upper floor + roof garden)",  amount: "TBD"        },
      { label: "Windows & Doors",                        amount: "€18,700"    },
      { label: "Plumbing balance",                       amount: "€7,200"     },
      { label: "Roof Garden",                            amount: "€8,000"     },
      { label: "Legal / Notary",                         amount: "€5,550"     },
      { label: "Landscaping (full)",                     amount: "€5,000"     },
    ],
    remaining:   "~€149,450",
    contingency: "~€14,900",

    // SVG donut chart values
    progressPct: 20, pctLabel: "20%",
    paidSegment: 80,  paidOffset: 0,
    dueSegment:  10,  dueOffset:  -80,
    remSegment:  333, remOffset:  -90,
    totalRange:  "~€192K – €275K",
  },

  // ── Vicky's approvals tab ────────────────────────────────────────
  vickyApprovals: {
    approved: [
      { icon: "⚡", title: "Electrical — Ground floor + storages scope",
        sub:    "€9,500 work + €1,000 plans + €750 three-phase meter = €11,250 total",
        auth:   "✅ KOBI APPROVED (May 23) — Proceed with full scope",
        detail: "Includes: sockets, spotlights, panels, all wiring from main panel to storages + entrances. Plans submitted to electricity authority. Meter: 1× three-phase (main apt+storage+roof garden) + 2× single-phase (downstairs apts). Upper floor deferred — no walls yet." },
      { icon: "💳", title: "Kairis — running balance €3,145 (Kobi to settle personally)",
        sub:    "€2,635 existing + €510 small storage roof (arriving this week) = €3,145 total",
        auth:   "✅ KOBI APPROVED — Kobi to pay Kairis personally on next Greece visit. Vicky to confirm amount with Kairis.",
        detail: "After this delivery (small storage roof panels), Vicky: 'After this we stop talking about roof panels!' Kobi will settle the full €3,145 balance in person. Do not pay through Vicky's running cash." },
      { icon: "🔨", title: "Electricians — Continue Apartment B",
        sub:    "Advance of €400 already paid. Continue full scope.",
        auth:   "✅ KOBI APPROVED — Proceed per agreed electrical scope",
        detail: "All floors. Use the budget screenshot Kobi sent May 18 as the reference." },
      { icon: "🪟", title: "Large storage — 2-layer door/window system ✅ COMPLETE",
        sub:    "Steel outer + aluminum inner (with screen). Paid €1,150 May 23.",
        auth:   "✅ DONE — Both layers installed. Small storage has steel only (no aluminum).",
        detail: "Large storage (Yael's unit): iron/steel outer door + window, aluminum inner door + window with screen (white aluminum). SMALL STORAGE: steel door + window ONLY — no aluminum layer." },
      { icon: "🌊", title: "Water Network Connection — Community",
        sub:    "Application already submitted. Follow up urgently.",
        auth:   "✅ Please chase the community office for a connection date",
        detail: "The plumber cannot pressure-test the pipes or close the trenches until water is connected. This is blocking progress." },
    ],
    waiting: [
      { icon: "🏠", title: "House Insulation — Method & Price",
        sub:    "URGENT — must complete this dry season (summer 2026)",
        auth:   "⏳ Vicky: research options, get quotes → send to Kobi for approval",
        detail: "Kobi & Yael want this scheduled for this summer before rains begin. Please look into method options (spray foam, rock wool, PIR boards, etc.), get pricing, and send a recommendation. Don't wait — the dry season window is short." },
      { icon: "📷", title: "WiFi Site Cameras",
        sub:    "For Kobi & Yael to follow progress from Israel",
        auth:   "⏳ Vicky: source options + quote → send to Kobi",
        detail: "Kobi & Yael want cameras on site so they can check progress remotely from Israel. 2–3 cameras: entrance, main work area, storage area. Please source options with prices. You can explain to the workers that the owners want to see the work — it's a request from Kobi and Yael, not any concern about anyone." },
      { icon: "🪟", title: "Aluminum windows & doors — full house",
        sub:    "~25 openings. Color decision needed before ordering.",
        auth:   "⏳ Waiting: Kobi deciding black vs. other color",
        detail: "Black = 2-month lead time + more expensive. Other colors available sooner. Kobi + Yael leaning toward black. Once decided, get full quote." },
      { icon: "🚪", title: "Entrance sliding gate — Blacksmith quote",
        sub:    "5m opening, 3 columns (poured). Quote expected soon.",
        auth:   "⏳ Waiting: Get quote from blacksmith → send to Kobi for approval",
        detail: "Black/nickel paint. Sliding. Motorizable later. Blacksmith measured already. Send quote to Kobi as soon as you receive it." },
    ],
  },

  // ── Vicky's payments tab ─────────────────────────────────────────
  vickyPayments: {
    dueNow: [
      { icon: "🧱", title: "Kairis",                   sub: "Running balance — Kobi to settle personally on next visit",
        who: "Kairis Materials", desc: "€2,635 existing balance + €510 small storage roof (this week) = €3,145 total. Vicky to visit Kairis to register the amount; Kobi pays on next Greece visit.",
        amount: "€3,145", payType: "💵 CASH (Kobi personally)", auth: "✅ Kobi approved — Kobi to settle personally on Greece visit" },
      { icon: "🔩", title: "Blacksmith — Small Storage", sub: "Door + window + varnish installation",
        who: "Blacksmith", desc: "Small storage door + window (€500) + paint (€50)",
        amount: "€550",   payType: "💵 CASH", auth: "✅ Kobi approved — Pay on completion" },
    ],
    summary: {
      dueNow:     "~€13,920",  dueSub:     "Kairis €3,145 + Electrician ~€8,500 + Blacksmith €550 + plans/meter €1,750",
      workers:    "€1,500",    workersSub: "3 workers @€50 + manager @€100/day (Mon–Sat)",
      paidToDate: "~€46K",
      atmLimit:   "€2K",
    },
  },

  // ── Bank transfers from Israel → Greek account ───────────────────
  // OWNER ONLY — not shown on Vicky's dashboard
  bankTransfers: {
    transfers: [
      { date: "Jan 10, 2026",  amount: 10000 },
      { date: "Feb 8, 2026",   amount: 20000 },
      { date: "Apr 26, 2026",  amount: 70000 },
    ],
    totalTransferred:    100000,
    greekAccountBalance: 49500,   // actual balance as of Jun 2, 2026
    balanceAsOf:         "June 2, 2026",
    totalKnownExpenses:  55586,   // from expense tracking (project records)
    // implied balance = totalTransferred - totalKnownExpenses = 44,414
    // actual balance 49,500 → ~€5,086 unaccounted (may be expenses not yet logged)
    note: "Greek bank: NBG — GR18 0110 3180 0000 3180 0400 611",
  },

  // ── Vicky's decisions tab ────────────────────────────────────────
  // statusClass: "ds-waiting" | "ds-answered" | "ds-urgent"
  vickyDecisions: [
    { q: "1. Aluminum windows & doors — what color?",
      body: "Black is preferred by Kobi & Yael but means a 2-month wait and higher cost. Other colors are available sooner and cheaper. This decision affects the entire design language of the house.",
      statusClass: "ds-waiting", status: "⏳ Kobi deciding — waiting" },
    { q: "2. Antonis — roof design change",
      body: "Vicky proposed reducing the insulated roof area, which would reduce cost and material weight. Antonis needs a full day to review and calculate implications. Kobi supports exploring this. Also: Antonis considering wooden roof over kitchen and living room area (removing slab).",
      statusClass: "ds-waiting", status: "⏳ Antonis reviewing — Vicky to follow up" },
    { q: "3. House Insulation — method and schedule",
      body: "Insulation work must be done this summer (dry season). Kobi & Yael need Vicky to research method options, compare prices, and send a recommendation. Options to consider: spray foam, rock wool, PIR rigid boards, or other. This affects budget and timeline significantly.",
      statusClass: "ds-urgent",  status: "🔴 URGENT — Summer window. Vicky to submit options + prices ASAP" },
    { q: "4. WiFi cameras — which system?",
      body: "Kobi & Yael want 2–3 cameras installed on site so they can follow progress from Israel. You can tell the workers that the owners asked for cameras to watch the build — which is completely true. Please suggest a simple WiFi system and get a price.",
      statusClass: "ds-waiting", status: "⏳ Vicky to source options → Kobi approves" },
    { q: "5. Electrical — meter separation and future bills",
      body: "Electrical plan approved May 23. Setup: 1× three-phase meter (main apt + storage + roof garden incl. pool provisions) + 2× single-phase meters (2 downstairs apartments, enabling separate rental billing). Upper floor deferred until walls exist. Separate plans also enable future legal building division.",
      statusClass: "ds-answered", status: "✅ ANSWERED — Kobi approved May 23. Scope: €9,500 + €1,000 plans + €750 meter = €11,250 total." },
    { q: "6. Kitchen — final design selection",
      body: "Several inspiration options shared (natural materials, modern Greek aesthetic). No final decision made. Kobi & Yael need to confirm style, layout, and brand before ordering.",
      statusClass: "ds-waiting", status: "⏳ Kobi & Yael deciding — when ready, coordinate with Vicky" },
    { q: "7. Bathroom tiles & sanitary ware",
      body: "Tile selection and sanitary fixtures (toilets, sinks, taps) not yet chosen. Vicky needs this to plan the finishing timeline. Micro-cement vs. tiles also not fully decided for bathrooms.",
      statusClass: "ds-waiting", status: "⏳ To be decided — needed before tile installation can begin" },
    { q: "8. Property / building division structure",
      body: "Which floor/unit does each owner take? Does the land also need to be split? Notary needs this information to proceed with the property division act. Kobi & Yael must provide clear instructions.",
      statusClass: "ds-urgent",  status: "🔴 URGENT — Notary is waiting. Unblocks the funding application (Exoikonomw)." },
    { q: "9. Entrance gate — approve blacksmith quote",
      body: "Once the blacksmith provides his price for the 5m sliding gate, Vicky needs Kobi's go-ahead before work starts. Expected within the week.",
      statusClass: "ds-waiting", status: "⏳ Quote incoming — send to Kobi immediately on receipt" },
    { q: "10. Yael's Greek SIM card",
      body: "Kobi has a Greek number (+30 6948471034 via Zoe). Yael does not have one yet. A Greek number helps with online approvals and government portals.",
      statusClass: "ds-waiting", status: "⏳ Kobi to decide if needed before next visit" },
  ],

};
