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
    lastUpdated:   "25 June 2026",
    weekOf:        "19–25 June 2026",
    projectStart:  "Feb 2026",
    estCompletion: "Late 2026",
  },

  // ── This week's task grid (Vicky Status tab) ──────────────────────
  // urgent: true = red top border, false = blue top border
  weekTasks: [
    { icon: "🏗️", label: "Structural Reinforcement — RC jackets ongoing + Foundation Deeper Than Expected!", sub: "Week Jun 19–24: Work on first of two large columns — foundation was expected at 0.5m but is NOT there. Depth may exceed 2.5m — if so, Vicky proposed designing a basement! Team monitoring. Slab cut DEFERRED. Carpenter (35yo from Karpathos) on site for furniture/woodwork. Sika used to seal damaged beam (no further treatment needed).", urgent: true  },
    { icon: "🏠", label: "House Insulation — URGENT",          sub: "Summer dry season window — don't delay. Vicky to research options + prices.", urgent: true  },
    { icon: "⚡",  label: "Electricity counters — URGENT",      sub: "Electrician needs electricity company counters to continue to next stage.", urgent: true  },
    { icon: "🛏️", label: "Yael's Unit — Room Ready for Jun 27 Arrival ✅", sub: "Bed frame (Meli built, pine+steel) ready Jun 25. Mattress pickup Wed Jun 25 (€400, local manufacturer). Bedding ordered (arriving before Jun 27). Spanish tiles samples arriving before Jun 27. Window + aluminum door installed. Polished cement finish DONE ✅.", urgent: true  },
    { icon: "🪨", label: "Spanish Tiles PAID ✅ Jun 19 — 'Crosscut Marfil' 60×60, 25.88 m², €286", sub: "Paid via Wise Jun 19 (NBG blocked the transfer — gov.gr login issue). Tiles shipped from Patras Jun 19, arriving before Jun 27. Samples included. Tsintonis Leonidas Nikolaos, IBAN GR0501102910000029100837714.", urgent: false },
    { icon: "🏦", label: "NBG Blocked — Using Wise Until Resolved", sub: "NBG blocked transfers: need gov.gr login update (password changed by accountant?). Vicky visiting accountant Jun 24. Yael to help at Istiaia branch Jun 27. Kobi using Wise in the meantime.", urgent: true  },
    { icon: "🔲", label: "Tiles — Italian MEGA SLABS: 4 Questions Sent to Vicky (Jun 16) — Waiting Response", sub: "ABM Hellas confirmed factory order Jun 16. Kobi sent 4 questions (Jun 16 eve): (1) tile size 60×60 vs 60×120 for Floor A; (2) 'Ivory' variant confirmation; (3) pallet charges €278; (4) price too high (~€28–30/sqm vs expected €20). NO DEPOSIT UNTIL RESOLVED.", urgent: true  },
    { icon: "💧", label: "Wall Rebuilding in Progress — Old Pipes + Rotten Iron Removed", sub: "Walls opened Jun 19: severely rusted pipes + mice nests found + rotten iron removed. Wall reshaping and rebuilding ongoing. One column inspected and found structurally sound ('miracle').", urgent: false },
    { icon: "💰", label: "Week Jun 16–21 Expenses: €5,372.55 total", sub: "Workers €2,280 (incl. polished cement Yael unit) + Kairis materials €1,175 + Bed frame €350 + Bedding €155 + Mattress €400 + Fuel €40 + Praktiker €972 (Vicky card, reimbursed via Wise). Cash withdrawal Jun 22: €3,000. Jun 24: additional €2,000 (Kairis balance €1,800 + beam €125 + tools).", urgent: false },
    { icon: "🚜", label: "Excavator due Mon/Tue Jun 15–16 — €600", sub: "60-ton road roller to compact all roads. €600 owed to excavator contractor.", urgent: false },
    { icon: "🔧", label: "Kairis balance ~€195 (mostly settled)", sub: "Kairis materials Jun 15–21: €1,175. New beam + rendering: €420. Jun 24 payment: €1,800 toward Kairis debt. Remaining: ~€195. Old Kairis balance of ~€400 was also included in Jun 24 payment.", urgent: false },
    { icon: "🔨", label: "Metalworker €550 + Electrician advance €1,000", sub: "Both approved by Kobi. Pay on completion / per schedule.", urgent: false },
    { icon: "🌞", label: "Solar panels — Infrastructure ready (no action now)", sub: "Electrical installation already designed for future solar/heat pump. No immediate action.", urgent: false },
  ],

  // ── KPI row (owner dashboard top) ────────────────────────────────
  kpis: {
    totalBudget:    "€275K",
    totalBudgetSub: "Vicky: ~1,000–1,050 €/m²",
    paidToDate:     "~€72,000",
    paidSub:        "~26% of total estimate (incl. week Jun 16–21 workers + Kairis materials + Jun 24 withdrawal)",
    duePending:     "~€10,600",
    dueSub:         "Kairis ~€195 + metalworker €550 + electrician ~€8,500 + excavator €600 + mattress €400 + Vicky card reimbursement €155 + Vicky Wise reimbursement €972 pending",
    bigItems:       "€147K+",
    bigItemsSub:    "Antonis, tiles, windows, electrical",
  },

  // ── Budget bars ───────────────────────────────────────────────────
  // spent/budget are numbers; use spentLabel/budgetLabel to override display text
  budgetBars: [
    { label: "A. Site Works (excavation, 160m road, trenching, municipality fee)",  spent: 5300,  budget: 6000,  pct: 88, cls: "bar-green"  },
    { label: "B. Storage Buildings",                             spent: 8761,  budget: 13200, pct: 66, cls: "bar-blue"   },
    { label: "C. Ground Floor + Materials",                      spent: 10015, budget: 11000, pct: 91, cls: "bar-blue"   },
    { label: "D. Plumbing (all floors) — GF COMPLETE ✅",        spent: 3960,  budget: 9000,  pct: 70, cls: "bar-orange" },
    { label: "E. Electrical (all floors) — GF conduits+boxes ✅", spent: 2000,  budgetLabel: "€11,250 approved (GF+storage) + upper TBD", pct: 25, cls: "bar-orange" },
    { label: "F. Tiles & Flooring",                              spent: 286,   budget: 25500, pct: 1,  cls: "bar-red"    },
    { label: "G. Windows & Doors (aluminum)",                    spent: 1150,  budget: 18700, pct: 6,  cls: "bar-red"    },
    { label: "H. Roof Garden / 3rd Floor",                       spent: 1450,  budget: 9500,  pct: 15, cls: "bar-orange" },
    { label: "I. Antonis — Phase 1 (Foundations & Beams)",       spent: 0,     budgetLabel: "€25,000–€30,000", pct: 0, cls: "bar-red" },
    { label: "I2. House Insulation (Summer — urgent)",           spent: 0,     budgetLabel: "TBD",             pct: 0, cls: "bar-red" },
    { label: "J. Landscaping",                                   spent: 375,   budget: 7000,  pct: 5,  cls: "bar-green"  },
    { label: "K. Workers & Labour",                              spentLabel: "~€22,400", budget: 25000, pct: 90, cls: "bar-blue" },
    { label: "L. Legal, Admin & Tax",                            spent: 3461,  budget: 11350, pct: 31, cls: "bar-blue"   },
    { label: "Contingency (10%)",                                spent: 0,     budget: 25000, pct: 0,  cls: "bar-green"  },
  ],

  // ── Project phases ────────────────────────────────────────────────
  // status: "done" | "ongoing" | "upcoming" | "blocked"
  phases: [
    { icon: "✅", status: "done",     name: "Phase 1 — Site Preparation",
      detail: "Road (160m), excavation, asbestos removal — COMPLETE" },
    { icon: "🔨", status: "ongoing",  name: "Phase 2 — Storage Buildings",
      detail: "Large storage = Yael's unit. WATER ✅ + ELECTRICITY ✅ — fully operational as of June 1! 2-LAYER DOOR/WINDOW SYSTEM: iron/steel outer layer ✅ + aluminum inner layer ✅ (with screen, paid €1,150). 3-component epoxy coating on floor ✅ (permanent moisture barrier). Septic tank COMPLETE ✅ (Jun 13). Bathroom fixtures delivered ✅. Meli to BUILD wood+steel bed (1.6×2m, approved Jun 13) — room target ready Jun 28 for Yael's visit. Small storage: steel door + window ONLY (no aluminum) — installation by metalworker (€550) approved." },
    { icon: "🔨", status: "ongoing",  name: "Phase 3 — Ground Floor Renovation",
      detail: "Brickwork complete ✅. Apt A installation DONE ✅. Plastering started (rain). PLUMBING COMPLETE ✅ (Jun 13) — entire water supply system for house + garden done. Only upper floor connections remaining (future). ELECTRICAL: conduits installed, boxes/outlets/switches installed in both apts, distribution panels provisioned — ready for cable pulling. Electrical approved (€11,250 GF+storage scope)." },
    { icon: "🔨", status: "ongoing",  name: "Phase 4 — Antonis Main Contract",
      detail: "🚀 ACTIVE: Structural reinforcement campaign started June 17. 3 Athens workers on site Mon–Fri. Methodology: shore → excavate column to footing → RC jacket (rebar+stirrups+special grout cement) → repeat for all columns+beams. Materials bulk-ordered by Vicky, deducted from Antonis contract. Slab cut DEFERRED until main column exposed+assessed." },
    { icon: "🔨", status: "ongoing",  name: "Phase 5 — Upper Floors & Roof",
      detail: "3RD FLOOR STRUCTURAL WORK COMPLETE ✅ (June 6). ROOF LAYERS: focus week Jun 15–17 (Ilir welding). ROOF SLAB CUT — DEFERRED ⚠️: Vicky recommended waiting until the main column (supports 2nd+3rd floors) is exposed during RC jacket work to assess its actual condition before committing to a slab cut. Kobi agreed Jun 17. Previous crack (couch/living area) still noted. Steel frame for 3rd floor ordered May 26." },
    { icon: "⏳", status: "upcoming", name: "Phase 6 — Finishing (Tiles, Insulation, Doors, Kitchen)",
      detail: "First tile order placed May 8 (330 sqm CANDIA SLAB IVORY). Insulation method/pricing needed urgently this summer. Windows/doors TBD (color). Kitchen selection pending." },
    { icon: "🔴", status: "blocked",  name: "Phase 7 — Legal & Funding",
      detail: "Property division with notary blocked (land registry + Antonis). Funding application (Exoikonomw) blocked until Phase 7 complete." },
  ],

  // ── Action items (owner dashboard) ───────────────────────────────
  // priority: "critical" | "high" | "info"
  actionItems: [
    { priority: "critical", label: "✈️ Confirmed — June 27–Jul 1",   title: "Yael's Site Visit — Arriving June 27",
      desc: "Yael flying Blue Bird Airways (BZ702) TLV→ATH Jun 27, 09:15–11:25. Returns Jul 1 (BZ703) 20:30. Entering North Evia via Arkitsa–Loutra Edipsou ferry. Trip objectives: (1) full house inspection with Vicky; (2) NBG bank Istiaia — activate IRIS payments; (3) Notary Aidipsos — cancel Zoe's POA; (4) Visit Zoe + possibly Vasiliki. Action needed: book car rental ~€150/5 days. Accommodation: Yael's unit if ready, else Moshe's hotel." },
    { priority: "info",     label: "🚗 Booked ✅",                  title: "Car Rental for Yael — CONFIRMED",
      desc: "Avance (Athens Airport). Mazda 2 or similar, Automatic. Confirmation: 631776593 (Booking.com). Pick-up: Jun 27 · 11:30 · Arrivals Hall ATH · +30 6943550004. Drop-off: Jul 1 · 18:30 · ATH. Cost: €145.59 (paid). ⚠️ Note: drop-off 18:30 vs flight 20:30 — only 2 hrs. Return car immediately on arrival at airport." },
    { priority: "high",     label: "📋 Legal — Decide Before Jun 27",      title: "POA Revocation — Timing Decision Needed",
      desc: "Vicky advises Kobi + Yael go TOGETHER to the notary in Aidipsos — saves ~€250 (est. €250/visit). Options: (A) Yael signs her part alone Jun 27–Jul 1; Kobi signs later separately → costs ~€500 total. (B) Wait until both can come → costs ~€250 but delays revocation. Call notary to understand procedure. Original notary: Natasha Sidiropoulou, Aidipsos." },
    { priority: "info",     label: "✅ PAID Jun 19 via Wise",          title: "Spanish Tiles €286 — Crosscut Marfil PAID ✅",
      desc: "Paid Jun 19 via Wise (NBG blocked transfer). Tiles shipped from Patras Jun 19, arriving before Jun 27. Samples included." },
    { priority: "high",     label: "🟠 Wise Transfer Sent — Confirm",  title: "Vicky Reimbursement €972.55 — Wise to LT853250002013391261",
      desc: "Kobi sent Wise transfer to Vicky's Revolut IBAN (LT853250002013391261) for Praktiker/Athens card spend €972.55. Confirm Vicky received it. Also: bedding €155 (Vicky card) — to be deducted from window amount." },
    { priority: "high",     label: "🟠 Pickup Wed Jun 25",             title: "Mattress Pickup — €400 — Vicky collecting Wednesday",
      desc: "Mattress for Yael's unit (195×170 cm, 30cm thick, €400 cash price). Vicky picking up Wednesday Jun 25. Room must be ready by Jun 27 for Yael's arrival." },
    { priority: "critical", label: "🔴 Critical — Action Needed",    title: "Electricity Counters — Provide to Electrician",
      desc: "Electrician is ready to proceed and is giving power to Yael's unit (large storage) now. He needs the electricity company counters to continue to the next stage. Provide ASAP." },
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Land Registry Certificate",
      desc: "Vasiliki has temporary cert; formal cert with Notary must be issued ASAP. This unblocks Antonis permit AND property funding application." },
    { priority: "critical", label: "🚀 Phase 4 Active — Reinforcement Underway",       title: "Structural Reinforcement STARTED ✅ — 3 Athens Workers Mon–Fri",
      desc: "Reinforcement campaign started Jun 17. Process: (1) shore/support beams+slabs → (2) excavate column to foundation footing → (3) drill at upper slab level → (4) install rebar+stirrups (RC jacket) → (5) pour special grout cement (bulk factory order, Vicky ordering) → repeat for all columns+beams. ALL materials + labor deducted from Antonis contract price. Slab cut DEFERRED until main column (2nd+3rd floor support) is exposed and assessed. Kobi approved this approach Jun 17." },
    { priority: "critical", label: "🔴 Critical — Money",           title: "Water Network Connection",
      desc: "Plumber cannot pressure-test pipes or close trenches until community connects water supply. Application submitted; no response yet. Follow up urgently." },
    { priority: "critical", label: "🔴 Jun 27 — Yael + Vicky",        title: "NBG Istiaia Branch Visit — Fix Account + IRIS Setup",
      desc: "NBG blocked transfers — gov.gr login broken (password/username changed by accountant, resolved Jun 24). Yael to visit NBG Istiaia branch Jun 27–Jul 1 with Vicky to: (1) fix personal details / account issue; (2) activate IRIS payments for faster transfers." },
    { priority: "info",     label: "✅ Jun 24 — Mostly Settled",      title: "Kairis Balance — ~€195 remaining",
      desc: "Jun 24: Vicky withdrew €2,000 cash (Kobi approved). Paid Kairis €1,800 + beam €125 + tools. Covers old balance (~€400) + week materials (€1,175) + new beam/rendering (€420). ~€195 still outstanding. Vicky to settle." },
    { priority: "high",     label: "🟠 Due Mon/Tue Jun 15–16",      title: "Excavator — €600 + Road Compaction",
      desc: "Excavator owed €600. Vicky requested excavator arrive Monday/Tuesday June 15–16 with a 60-ton road roller to compact all roads. Approve and confirm date with Vicky." },
    { priority: "high",     label: "🟠 High Priority",              title: "Electrician Outstanding ~€7,500",
      desc: "GF + storages electrical approved (€9,500 scope). Paid to date: €400 (May 16) + €1,000 (May 28) = €1,400. Outstanding: ~€7,500 + €1,000 plans + €750 3-phase meter. Electrician currently active — giving power to Yael's unit (large storage)." },
    { priority: "high",     label: "🟠 Waiting on Vicky — 4 Questions",  title: "Tiles — 2nd Order: 4 Questions Sent to Vicky (Jun 16 Eve)",
      desc: "ABM Hellas confirmed factory order Jun 16. Kobi sent 4 questions to Vicky (Jun 16 evening): (1) Tile size: spec says 60×60 for Floor A interior 90 sqm, but ABM quote shows 60×120 — which is correct? (2) 'Ivory' variant: confirm quote is LALPE DI SIUSI IVORY (quote just says NATURAL STRUCTURE). (3) Pallet charges: €223 for 4 pallets + €55 for 2 pallets = €278 — what are these? (4) Price too high: €28.21/sqm (60×120) and €30.22/sqm (120×120) incl. VAT vs expected ~€20/sqm. Asked Vicky to push ABM for better price (large order). NO DEPOSIT UNTIL VICKY RESPONDS AND PRICE IS RESOLVED." },
    { priority: "critical", label: "🔴 Critical — Summer Deadline", title: "House Insulation — Must Complete This Dry Season",
      desc: "Insulation work must be done before autumn rains. Vicky to research method options (spray foam, rock wool, PIR boards, etc.), get pricing, and submit for Kobi's approval before scheduling. Do not delay — dry season window is limited." },
    { priority: "info",     label: "✅ Done June 6",                  title: "Yael's Unit Bathroom — Ordered",
      desc: "Bathroom fixtures ordered from A.DIAMANTOPOULOS KAI SIA OE (Vasilis Diamantopoulos). €614 paid via Wise. Items: P-trap toilet, sink on open cement cabinet (1.20×0.50m), washbasin faucet with push-up, shower system 120×85cm + static glass panel. Delivery by Thursday Jun 11/12. All-microcement confirmed for shower + full bathroom." },
    { priority: "high",     label: "🟠 Kobi Action Required",         title: "Revoke Zoe's Power of Attorney",
      desc: "Vicky strongly recommended revoking Zoe's POA (attorney powers include accessing accounts, signing documents, buying/selling assets). POA was signed with notary Natasha Sidiropoulou in Aidipsos. Yael to find the notary contract. To revoke: contact the notary (can be done by mail or in person). Background: Zoe's accountant caused a €200 penalty by missing insurance declaration deadline — then confused matters by assigning a second accountant while the situation was being resolved." },
    { priority: "info",     label: "✅ Paid Jun 13",                   title: "Bathroom Transport — Paid €45 ✅",
      desc: "Transport of bathroom supplies from Athens (Diamantopoulos Istiaia order) paid Jun 13 as part of Vicky's weekly disbursement. €45 cash. Closed." },
    { priority: "info",     label: "✅ Decided Jun 13",               title: "Pine Bed for Yael's Unit — Approved ✅",
      desc: "Meli to BUILD a custom wood+steel bed for Yael's unit (1.6×2m, pine+steel frame). Kobi approved Jun 13. Vicky confirmed room will be ready for Yael's visit Jun 28–Jul 1." },
    { priority: "info",     label: "🪟 Arriving Jun 22",             title: "Window for Yael's Unit — Arriving June 22",
      desc: "Aluminum window for Yael's unit (large storage) arriving next Monday June 22. Aluminum balcony door: being installed Jun 15–16 by Meli." },
    { priority: "info",     label: "⚠️ Jun 14 Accident",             title: "Meli Fell on Surgery Knee — Monitor",
      desc: "Meli fell and landed on his recently-operated knee on Sunday June 14 while working on site. He is continuing to work (installing the aluminum door Jun 15) but this should be monitored. Vicky is aware." },
    { priority: "info",     label: "🌞 Infrastructure Ready",        title: "Solar Panels — Future Option, No Action Now",
      desc: "Electrical installation already designed with solar/heat pump provisions. ~15 sqm earmarked on 3rd floor terrace (water heaters, AC). PV panels (~65–70 sqm) would use yard area near road. Vicky also recommends heat pump for winter heating. No decision needed now — infrastructure is ready." },
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
    { date: "Jun 18",     category: "Materials - Yael Unit", desc: "Athens shopping — Yael's unit fit-out (Jun 18). Door 70×214 + frame, PVC window 70×75, insect screen 100×120, Pyramis electric water heater 40L 3500W, 9000 BTU AC + outdoor unit, bathroom accessories (soap dish, toothbrush holder, waste bin, towel holder, Gedy hooks, bamboo curtain + misc). Vicky paid by card — reimburse from Greek account. Hammer drill ~€380 in this amount: charge to Antonis account.", vendor: "Athens suppliers (Vicky card)", amount: "€972.55", status: "paid" },
    { date: "Jun 24",     category: "Materials - Structure", desc: "Kairis — cash payment Jun 24 (covers old balance ~€400 + week materials + partial new). Kobi approved €2,000 withdrawal: €1,800 Kairis + €125 beam + ~€75 tools.", vendor: "Kairis", amount: "€1,800", status: "paid" },
    { date: "Jun 24",     category: "Materials - Structure", desc: "Beam (structural column support) + rendering materials. Part of Jun 24 €2,000 cash withdrawal.", vendor: "Kairis / Supplier", amount: "€420", status: "paid" },
    { date: "Jun 22",     category: "Labor",                 desc: "Workers wages week Jun 16–21 (incl. polished cement finish in Yael's unit). Full week Mon–Sat.", vendor: "Workers + Meli", amount: "€2,280", status: "paid" },
    { date: "Jun 22",     category: "Materials - Structure", desc: "Kairis materials (week Jun 15–21) — structural reinforcement period. Running Kairis account.", vendor: "Kairis", amount: "€1,175", status: "paid" },
    { date: "Jun 22",     category: "Furniture - Yael Unit", desc: "Iron bed frame + black matte bedside tables + bed slats (Yael's unit).", vendor: "Supplier", amount: "€350", status: "paid" },
    { date: "Jun 22",     category: "Furnishings - Yael Unit", desc: "Bedding, pillows, bedspread (Yael's unit). Vicky paid herself — to deduct from window amount.", vendor: "Vicky (card)", amount: "€155", status: "paid" },
    { date: "Jun 22",     category: "Equipment",             desc: "Fuel — site operations week Jun 16–21.", vendor: "Gas station", amount: "€40", status: "paid" },
    { date: "Jun 25",     category: "Furniture - Yael Unit", desc: "Mattress for Yael's unit — 30cm thick, 195×170 cm. Pickup Jun 25. Cash price €400 (reduced from €650).", vendor: "Local mattress manufacturer", amount: "€400", status: "due" },
    { date: "Jun 19",     category: "Materials - Tiles",     desc: "Spanish tiles 'Crosscut Marfil' 60×60 — 25.88 m², €11/m². Paid via Wise Jun 19 (NBG blocked). Shipped from Patras Jun 19, arriving before Jun 27. Samples included.", vendor: "Tsintonis Leonidas Nikolaos", amount: "€286", status: "paid" },
    { date: "Jun 15",     category: "Materials - Structure", desc: "Kairis — partial payment to reduce running debt. Vicky requested withdrawal; approved by Yael Jun 15. Reduces Kairis balance from ~€2,400 → ~€400.", vendor: "Kairis", amount: "€2,000", status: "paid" },
    { date: "Jun 8–13",   category: "Labor",          desc: "Workers wages week Jun 8–13 (Mon–Sat). Mon €280 (4w+Meli) + Tue €280 + Wed €330 (4w+Meli+ESAT foreman) + Thu €330 + Fri €680 (5w+Meli+ESAT+Ilir 2 roof welds €300) + Sat €680. ESAT joined from Wed; Ilir (roof welder) Fri–Sat.", vendor: "Workers + Meli + ESAT + Ilir", amount: "€2,580", status: "paid" },
    { date: "Jun 13",     category: "Materials - Plumbing", desc: "Transport — bathroom supplies from Athens (Diamantopoulos Istiaia order for Yael's unit). Closes pending transport item.", vendor: "Istiaia transport", amount: "€45", status: "paid" },
    { date: "Jun 13",     category: "Equipment",      desc: "Fuel — cement mixer + site equipment (week Jun 8–13)", vendor: "Gas station", amount: "€40", status: "paid" },
    { date: "Jun 13",     category: "Materials - Structure", desc: "Kairis materials (week Jun 8–13) — settled against running Kairis account", vendor: "Kairis", amount: "€450", status: "paid" },
    { date: "Jun 13",     category: "Materials - Electrical", desc: "Extension cable", vendor: "Supplier", amount: "€75", status: "paid" },
    { date: "Jun 13",     category: "Materials - Other", desc: "Tarpaulin — to protect materials from rain on site", vendor: "Supplier", amount: "€75", status: "paid" },
    { date: "Jun 13",     category: "Materials - Structure", desc: "Concrete roof anchors with 2-component resin", vendor: "Supplier", amount: "€80", status: "paid" },
    { date: "Jun 6",      category: "Materials - Plumbing", desc: "Bathroom fixtures for Yael's unit (large storage) — toilet (P-trap), sink, washbasin faucet with push-up, shower system. Ordered from A.DIAMANTOPOULOS KAI SIA OE (Vasilis Diamantopoulos). Delivery Thursday Jun 11/12.", vendor: "Diamantopoulos", amount: "€614", status: "paid" },
    { date: "Jun 6",      category: "Materials - Structure", desc: "Kairis partial payment (cash). Running balance: €3,145 + €650 septic + €125 beam + €105 (10 sacks) = €4,045. Paid €2,000; remaining balance ~€2,045.", vendor: "Kairis", amount: "€2,000", status: "paid" },
    // Transport paid Jun 13 (see above)
    { date: "Jun 7",      category: "Workers",    desc: "Workers wages Jun 7 (Sunday) — Meli (€80) + 1 extra worker (€50). Both came in voluntarily. Paid Jun 8 as part of deferred worker payment batch.", vendor: "Workers + Meli", amount: "€130", status: "paid" },
    { date: "Jun 2–6",    category: "Workers",    desc: "Workers wages week Jun 2–6. Mon €280 (4ppl) + Tue €280 + Wed €330 (5ppl) + Thu €330 + Fri €280 + Sat €280. Meli officially back as site manager (€80/day). Replacement stayed Wed+Thu for formwork handover. Start time 06:30 (summer heat).", vendor: "Workers + Meli", amount: "€1,780", status: "paid" },
    { date: "Jun 6",      category: "Materials - Structure", desc: "Septic tank — 2 precast concrete rings + cover + crane placement (Yael's unit). Vicky's decision: same cost as concrete blocks but saves 1 day labor + more durable. Crane places rings; workers finish ceiling.", vendor: "Supplier", amount: "~€650", status: "paid" },
    { date: "Jun 6",      category: "Waste Removal", desc: "Kairis — 1 construction waste container", vendor: "Kairis", amount: "€125", status: "paid" },
    { date: "Jun 6",      category: "Equipment",    desc: "Fuel — cement mixer + site equipment (week Jun 2–6)", vendor: "Gas station", amount: "€50", status: "paid" },
    { date: "Jun 6",      category: "Other",        desc: "Mattress removal from front area. Vicky paid to clear the entrance of old mattresses.", vendor: "Removal service", amount: "€50", status: "paid" },
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
    { date: "Due now",    category: "Materials",  desc: "Kairis — remaining balance. After Jun 15 payment of €2,000 (approved by Yael), outstanding balance is ~€400. Vicky to settle remainder in person.", vendor: "Kairis", amount: "~€400", status: "due" },
    { date: "Upcoming",   category: "Subcontractor - Other", desc: "Excavator — compact all roads with 60-ton road roller. Vicky requested Mon/Tue Jun 15/16.", vendor: "Excavator contractor", amount: "€600", status: "due" },
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
    { name: "ESAT",                   role: "Steel Frame Specialist",             detail: "Built entrance columns + 3rd floor columns and beams. Positive, skilled. Introduced by Vicky June 10. Candidate for future steel frame work." },
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
    { color: "yellow", title: "⏳ Roof Slab Cut — DEFERRED Pending Column Assessment (Jun 17)",
      bodyHtml: "Crack remains confirmed in couch/living area. However, <strong>Vicky (Jun 17) recommended deferring the cut</strong> until the main column supporting 2nd+3rd floors is exposed during the reinforcement campaign — so its interior condition can be properly assessed first. <strong>Kobi agreed.</strong> Decision to cut (+ steel beams) will be made once the column is exposed. This is the prudent approach." },
    { color: "lblue",  title: "📐 Floor Plans & Roof Note",
      bodyHtml: "Ground floor layout adjusted (bathrooms moved, staircase correction).<br><strong>Roof slab (Jun 17 update):</strong> Slab cut DEFERRED — will decide once main column is exposed during RC reinforcement work and its condition assessed. Crack confirmed but cut timing TBD. Original scope: slab cut + steel beams in couch/living area.<br>Concrete demolition blocks kept for built-in yard seating benches (Vicky's request).<br>Vicky to provide updated DWG plans." },
  ],

  // ── Financial summary (owner dashboard cards) ─────────────────────
  financialSummary: {
    paid: [
      { label: "Site Works (excavation, 160m road, trenching, municipality fee)",  amount: "€5,300"   },
      { label: "Storage Buildings",        amount: "€8,761"   },
      { label: "Ground Floor Materials",   amount: "~€10,015" },
      { label: "Plumbing",                 amount: "€3,960"   },
      { label: "Electrical",               amount: "€2,000"   },
      { label: "Workers & Labour",         amount: "~€22,400" },
      { label: "Legal / Admin",            amount: "€3,000"   },
      { label: "Landscaping",              amount: "€375"     },
      { label: "Roof Garden (materials)",  amount: "€1,450"   },
      { label: "Windows & Doors",          amount: "€1,150"   },
      { label: "Yael's Unit Fit-out (Athens Jun 18)", amount: "€972"  },
      { label: "Tiles (Spanish Crosscut Marfil, Jun 19)", amount: "€286" },
      { label: "Yael's Unit Furnishings (bed frame, bedding, mattress)", amount: "~€905" },
    ],
    totalPaid:      "~€72,000",
    totalCommitted: "~€63,927",

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
    progressPct: 26, pctLabel: "26%",
    duePct: 4,   // % of total committed/due now (~€10.6K / ~€275K)
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
      { icon: "💳", title: "Kairis — remaining balance ~€400 (€2,000 paid Jun 15)",
        sub:    "Yael approved €2,000 withdrawal Jun 15. Remaining ~€400 to settle.",
        auth:   "✅ YAEL APPROVED Jun 15 — Vicky to withdraw €2,000 and pay Kairis. Remaining ~€400 to follow.",
        detail: "Running tab history: Jun 6 partial €2,000 paid → €2,045 left; Jun 13 €355 deferred → ~€2,400; Jun 15 €2,000 paid (Yael approved) → ~€400 remaining. Vicky to settle remainder in person." },
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
      { icon: "💳", title: "Confirm Vicky Wise €972.55 Received",   sub: "Praktiker/Athens card reimbursement sent to Revolut LT853250002013391261.",
        who: "Vicky", desc: "Kobi sent Wise transfer Jun 22. Please confirm received. Also: bedding €155 (Vicky card, Jun 22) to be deducted from window amount.",
        amount: "€972.55", payType: "💵 WISE — confirm received", auth: "✅ Wise transfer sent — pending confirmation" },
      { icon: "🛏️", title: "Mattress Pickup — Wed Jun 25",          sub: "Custom 195×170 cm, 30cm thick, €400 cash price (reduced from €650).",
        who: "Local mattress manufacturer", desc: "Vicky picking up Wednesday Jun 25. Bedside tables to be fixed to bed frame (Yael's request). Room must be fully ready Jun 27.",
        amount: "€400", payType: "💵 CASH", auth: "✅ Kobi approved — Vicky collecting Jun 25" },
      { icon: "🧱", title: "Kairis — ~€195 remaining",              sub: "Jun 24: €1,800 paid (Kobi approved €2,000 withdrawal). Small balance remaining.",
        who: "Kairis Materials", desc: "Kairis total owed: €400 old + €1,175 week materials + €420 new = ~€1,995. Paid €1,800 Jun 24. Remaining ~€195.",
        amount: "~€195", payType: "💵 CASH", auth: "✅ Jun 24 withdrawal approved — settle remainder" },
      { icon: "🚜", title: "Excavator — Road Compaction €600",      sub: "60-ton road roller to compact all roads.",
        who: "Excavator contractor", desc: "Approved. Vicky to confirm date and pay.",
        amount: "€600", payType: "💵 CASH", auth: "✅ Kobi approved" },
      { icon: "🔩", title: "Blacksmith — Small Storage €550",       sub: "Door + window + varnish installation",
        who: "Blacksmith", desc: "Small storage door + window (€500) + paint (€50)",
        amount: "€550",   payType: "💵 CASH", auth: "✅ Kobi approved — Pay on completion" },
    ],
    summary: {
      dueNow:     "~€10,600",  dueSub:     "Kairis ~€195 + Electrician ~€8,500 + Blacksmith €550 + Excavator €600 + Mattress €400 + Vicky reimbursements ~€1,100",
      workers:    "✅ Paid Jun 22 + Kairis Jun 24", workersSub: "Workers Jun 16–21 (€2,280 cash). Kairis €1,800 paid Jun 24. Running total ~€72K.",
      paidToDate: "~€72K",
      atmLimit:   "€2K",
      laborerRate: "€50/day",
      skilledRate: "€80/day",
      fuelWeekly:  "~€30/week",
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
    totalTransferred:     100000,
    greekAccountBalance:  35200,   // actual balance as of Jun 24, 2026 (confirmed by Kobi)
    balanceAsOf:          "June 24, 2026",
    totalKnownExpenses:   72000,   // from expense tracking (project records, as of Jun 24)
    israelDirectPayments: 973,     // paid direct from Israeli bank (not via NBG): Vicky reimbursement Jun 24
    // estimated Greek balance = totalTransferred − (totalKnownExpenses − duePending − israelDirectPayments)
    // = 100,000 − (72,000 − 10,600 − 973) ≈ €39,573 estimated; actual 35,200 → ~€4,373 unlogged
    note: "Greek bank: NBG — GR18 0110 3180 0000 3180 0400 611",
  },

  // ── Vicky's communication tab ────────────────────────────────────
  // Used by both dashboard_vicky.html (Comms tab) and dashboard.html (Communication Hub)
  // Update this section each run when open items / contact details change
  vickyComms: {
    // Message from Kobi to Vicky (update when there's something specific to say)
    kobMessage: "Vicky — huge week! Thank you for everything 🙏 We can't wait to see the house on June 27!\n\nThe Wise transfer for €972.55 is sent to your Revolut IBAN — please confirm you received it. Tiles paid Jun 19 via Wise. Jun 22 withdrawal €3,000 ✅. Jun 24 withdrawal €2,000 ✅.\n\nYael is very excited! Please make sure mattress (Wed Jun 25) + bedding are in place, and the bedside tables are fixed to the bed frame per her request.\n\nLooking forward to Yael's visit — take care! 🏠❤️",

    // Items Vicky is waiting on from Kobi — update when decisions are made
    waitingOnKobi: [
      "🔴 Italian tile questions — respond to Kobi's Jun 16 email: (1) 60×60 vs 60×120 for Floor A interior? (2) Is quote the IVORY variant? (3) What are the €278 pallet charges? (4) Push ABM for better price (~€20/sqm expected). Kobi will not pay deposit until these are resolved.",
      "🔴 Confirm Vicky received Wise transfer €972.55 (sent to Revolut LT853250002013391261). Also bedding €155 to be deducted from window amount.",
      "Bedside tables to be fixed to bed frame (Yael's request Jun 24) — please confirm done before Jun 27",
      "Foundation depth: first big column excavation shows foundation much deeper than 0.5m. If >2.5m, propose basement design. Update Kobi on depth findings.",
      "Approve concealed-wall toilet brand for main house (Vicky recommends GROHE ~€780; Kobi open to €400–500 range)",
      "Window/door color — black or not?",
      "Entrance gate quote — approve when it arrives",
      "Property division structure for Notary",
      "Confirm when to order toilets + washbasins for the main house",
      "POA revocation — Yael to sign alone Jun 27–Jul 1 (Kobi sent email to notary Jun 23). Help Yael with appointment.",
    ],

    // Items Vicky must action herself — update each run
    vickyMustAction: [
      "🔴 URGENT — Pay property insurance. Confirm amount due and pay immediately. Send Kobi proof of payment.",
      "⭐ YAEL ARRIVES JUN 27 — Room must be 100% ready: mattress (pickup Wed Jun 25 ✅), bedding (arriving by Jun 27), bed frame ✅, door ✅, window ✅, water heater ✅, AC ✅. Fix bedside tables to bed frame per Yael's request.",
      "⭐ Prepare for Yael's visit June 27–July 1 — full house site walk, help with NBG Istiaia visit, POA notary appointment",
      "🚀 Foundation depth — update Kobi: how deep is the column foundation? If >2.5m, prepare basement concept sketch.",
      "🏦 NBG Istiaia — help Yael resolve account issue at bank Jun 27–Jul 1 (fix personal details + IRIS setup)",
      "🔴 POA revocation — help Yael get appointment with notary Sidiropoulou in Aidipsos during Jun 27–Jul 1 visit",
      "Italian tiles — answer Kobi's 4 questions (Jun 16 email): size mismatch, ivory variant, pallet charges €278, push ABM for ~€20/sqm. No deposit until resolved.",
      "Kairis remaining balance ~€195 — settle in person.",
      "Chase community water connection (URGENT) — plumbing COMPLETE ✅; only community connection blocking pressure test",
      "House insulation — research options + prices, send to Kobi ASAP",
      "Pay metalworker €550 on completion (small storage door + window)",
      "Pay electrician advance €1,000 (approved)",
      "Get gate quote from blacksmith → send to Kobi",
      "WiFi cameras — source options + quote → send to Kobi",
    ],

    // Items Kobi has already authorized — update when new approvals given
    authorized: [
      "Weekly worker wages (pre-approved)",
      "Electricians GF + storages — full scope (€11,250 total)",
      "Small storage blacksmith door + window (€550 on completion)",
      "Kairis — €2,000 payment approved by Yael Jun 15. Withdraw and pay. Remaining balance ~€400 to follow.",
      "Excavator — €600, Mon/Tue Jun 15–16 with 60-ton road roller to compact all roads (Kobi approved)",
      "Bed for Yael's unit (Kobi approved Jun 13) — Meli to BUILD a custom wood+steel bed (1.6×2m, pine+steel frame). Room must be ready by Jun 27 for Yael's visit.",
      "Yael's unit bathroom fixtures ✅ DONE — €614 paid via Wise (Jun 6). All-microcement confirmed.",
      "Athens shopping ✅ DONE Jun 18 — €972.55 (Vicky's card). Door, window, water heater, AC, bathroom accessories for Yael's unit. Reimbursement pending.",
      "Spanish tiles 'Crosscut Marfil' ✅ PAID Jun 19 via Wise — €286 to Tsintonis Leonidas Nikolaos.",
      "Cash withdrawal Jun 22 €3,000 ✅ — Kobi approved. Covers week Jun 16–21 expenses.",
      "Cash withdrawal Jun 24 €2,000 ✅ — Kobi approved. Kairis €1,800 + beam €125 + tools.",
      "Wise transfer €972.55 to Vicky Revolut LT853250002013391261 — Praktiker reimbursement. Confirm received.",
    ],
  },

  // ── Vicky's decisions tab ────────────────────────────────────────
  // statusClass: "ds-waiting" | "ds-answered" | "ds-urgent"
  vickyDecisions: [
    { q: "1. Aluminum windows & doors — what color?",
      body: "Black is preferred by Kobi & Yael but means a 2-month wait and higher cost. Other colors are available sooner and cheaper. This decision affects the entire design language of the house.",
      statusClass: "ds-waiting", status: "⏳ Kobi deciding — waiting" },
    { q: "2. Antonis — roof slab cut decision",
      body: "Crack confirmed in couch/living area slab. Slab cut was '100% confirmed' as of Jun 1. Vicky (Jun 17) recommended deferring until the main column supporting 2nd+3rd floors is exposed during reinforcement work — so its interior condition can be assessed first. Kobi agreed this is the right approach.",
      statusClass: "ds-answered", status: "✅ APPROACH AGREED Jun 17 — defer cut until main column is exposed and assessed. Then decide." },
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
      body: "YAEL'S UNIT (large storage): ✅ DECIDED June 6 — all-microcement confirmed (shower + full bathroom). Fixtures ordered from Diamantopoulos (€614). P-trap toilet, cement cabinet sink, 120×85 shower + static glass panel. Delivery Thu Jun 11/12.\n\nMAIN HOUSE (Apt A/B/C): Vicky recommends GROHE concealed-wall toilet (~€780 per unit) for hard-water durability and easy maintenance. Kobi exploring €400–500 alternatives. Decision needed before finishing phase.",
      statusClass: "ds-answered", status: "✅ YAEL'S UNIT DONE (June 6). Main house — toilet brand still TBD." },
    { q: "8. Property / building division structure",
      body: "Which floor/unit does each owner take? Does the land also need to be split? Notary needs this information to proceed with the property division act. Kobi & Yael must provide clear instructions.",
      statusClass: "ds-urgent",  status: "🔴 URGENT — Notary is waiting. Unblocks the funding application (Exoikonomw)." },
    { q: "9. Entrance gate — approve blacksmith quote",
      body: "Once the blacksmith provides his price for the 5m sliding gate, Vicky needs Kobi's go-ahead before work starts. Expected within the week.",
      statusClass: "ds-waiting", status: "⏳ Quote incoming — send to Kobi immediately on receipt" },
    { q: "10. Yael's Greek SIM card",
      body: "Kobi has a Greek number (+30 6948471034 via Zoe). Yael does not have one yet. A Greek number helps with online approvals and government portals.",
      statusClass: "ds-waiting", status: "⏳ Kobi to decide if needed before next visit" }
  ],

};
