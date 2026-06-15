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
    lastUpdated:   "15 June 2026",
    weekOf:        "15–21 June 2026",
    projectStart:  "Feb 2026",
    estCompletion: "Late 2026",
  },

  // ── This week's task grid (Vicky Status tab) ──────────────────────
  // urgent: true = red top border, false = blue top border
  weekTasks: [
    { icon: "🏗️", label: "Antonis on site ✅ — Structural work in progress",  sub: "Antonis arrived June 13 for site survey. Structural work began June 15. Phase 4 active! Roof design change + slab cut scope to be finalized this week once roof photos are ready.", urgent: true  },
    { icon: "🏚️", label: "Roof work — primary focus Jun 15–17",  sub: "7 steel beams installed on 3rd floor roof Sun Jun 14 (8×12cm, 7m long, 5mm thick, galvanized, anchored + welded). Roof work is the focus Mon–Wed Jun 15–17. Building permit requires full roof closure + photos for Antonis permit.", urgent: true  },
    { icon: "🏠", label: "House Insulation — URGENT",          sub: "Summer dry season window — don't delay. Vicky to research options + prices.", urgent: true  },
    { icon: "⚡",  label: "Electricity counters — URGENT",      sub: "Electrician needs electricity company counters to continue to next stage.", urgent: true  },
    { icon: "🚪🛏️", label: "Yael's unit — Aluminum door + window + bed", sub: "Aluminum balcony door: being installed Jun 15–16 (Meli motivated by Yael's arrival). Window: arriving MONDAY June 22. Bed (1.6×2m pine+steel): Meli building — target ready Jun 28.", urgent: true },
    { icon: "🔲", label: "Tiles — 2nd Order: waiting on Italy production", sub: "Vicky called ABM Jun 13: 95 sqm 120×60 available now. 120×120 (correct texture) in production in Italy — not yet in stock. Vicky insists on original tile. ABM manager to call MONDAY with Italy timeline.", urgent: true  },
    { icon: "🚜", label: "Excavator due Mon/Tue Jun 15–16 — €600", sub: "60-ton road roller to compact all roads. €600 owed to excavator contractor. Vicky requested Mon/Tue arrival.", urgent: false },
    { icon: "🚿", label: "Yael's unit — Bathroom delivered ✅", sub: "Bathroom fixtures (€614 Wise Jun 6). Transport paid €45 (Jun 13). Septic tank COMPLETE ✅. Aluminum door: installation underway. Window: Jun 22. Bed: Meli building. Room target: ready Jun 28.", urgent: false },
    { icon: "✅", label: "Workers paid through Jun 13 ✅",       sub: "Week Jun 8–13: €2,580 total. Vicky withdrew €3,000 cash Jun 13; total expenses €3,355; €355 deferred → Kairis tab.", urgent: false },
    { icon: "🔧", label: "Kairis balance ~€400 (was ~€2,400)", sub: "Vicky requested + Yael approved €2,000 withdrawal for Kairis on Jun 15. Reduces balance from ~€2,400 → ~€400 remaining. Vicky to settle the remainder in person.", urgent: false },
    { icon: "🔨", label: "Metalworker €550 + Electrician advance €1,000", sub: "Both approved by Kobi. Pay on completion / per schedule.", urgent: false },
    { icon: "🌞", label: "Solar panels — Infrastructure ready (no action now)", sub: "Electrical installation already designed for future solar/heat pump by Vicky's electrician. ~15 sqm earmarked on 3rd floor terrace for water heaters + AC. PV panels (~65–70 sqm) possible in yard near road. No immediate action — decide when ready.", urgent: false },
    { icon: "⚠️", label: "Meli accident — fell on surgery knee Jun 14", sub: "Meli fell and landed on his surgery knee on Sunday June 14. Currently still working and installing the aluminum door. Monitor recovery.", urgent: false },
  ],

  // ── KPI row (owner dashboard top) ────────────────────────────────
  kpis: {
    totalBudget:    "€275K",
    totalBudgetSub: "Vicky: ~1,000–1,050 €/m²",
    paidToDate:     "~€66,000",
    paidSub:        "~24% of total estimate",
    duePending:     "~€10,050",
    dueSub:         "Kairis ~€400 + metalworker €550 + electrician ~€8,500 (incl. advance €1,000) + excavator €600",
    bigItems:       "€147K+",
    bigItemsSub:    "Antonis, tiles, windows, electrical",
  },

  // ── Budget bars ───────────────────────────────────────────────────
  // spent/budget are numbers; use spentLabel/budgetLabel to override display text
  budgetBars: [
    { label: "A. Site Works (excavation, 160m road, trenching, municipality fee)",  spent: 5300,  budget: 6000,  pct: 88, cls: "bar-green"  },
    { label: "B. Storage Buildings",                             spent: 8761,  budget: 13200, pct: 66, cls: "bar-blue"   },
    { label: "C. Ground Floor + Materials",                      spent: 8420,  budget: 11000, pct: 77, cls: "bar-blue"   },
    { label: "D. Plumbing (all floors) — GF COMPLETE ✅",        spent: 3960,  budget: 9000,  pct: 70, cls: "bar-orange" },
    { label: "E. Electrical (all floors) — GF conduits+boxes ✅", spent: 2000,  budgetLabel: "€11,250 approved (GF+storage) + upper TBD", pct: 25, cls: "bar-orange" },
    { label: "F. Tiles & Flooring",                              spent: 0,     budget: 25500, pct: 0,  cls: "bar-red"    },
    { label: "G. Windows & Doors (aluminum)",                    spent: 1150,  budget: 18700, pct: 6,  cls: "bar-red"    },
    { label: "H. Roof Garden / 3rd Floor",                       spent: 1450,  budget: 9500,  pct: 15, cls: "bar-orange" },
    { label: "I. Antonis — Phase 1 (Foundations & Beams)",       spent: 0,     budgetLabel: "€25,000–€30,000", pct: 0, cls: "bar-red" },
    { label: "I2. House Insulation (Summer — urgent)",           spent: 0,     budgetLabel: "TBD",             pct: 0, cls: "bar-red" },
    { label: "J. Landscaping",                                   spent: 375,   budget: 7000,  pct: 5,  cls: "bar-green"  },
    { label: "K. Workers & Labour",                              spentLabel: "~€20,120", budget: 25000, pct: 80, cls: "bar-blue" },
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
      detail: "🚀 STARTED: Antonis arrived June 13 (Sat) for site survey — structural work begins June 15! Land registry + permit resolved. Roof design change + slab cut scope to be finalized. Building permit requires full roof closure + photos (4 more roof layers next week)." },
    { icon: "🔨", status: "ongoing",  name: "Phase 5 — Upper Floors & Roof",
      detail: "3RD FLOOR STRUCTURAL WORK COMPLETE ✅ (June 6) — Apt C upper roof formwork + concrete done. Open for inspection! Dimensions: 6.60m × 3.70m+. 4 MORE ROOF LAYERS going on week of Jun 15 (Ilir roof welding already started). ROOF SLAB CUT — 100% CONFIRMED: crack in couch/living area. Slab will be cut + steel beams added (Antonis now on site). Steel frame for 3rd floor ordered May 26. Concrete demolition blocks kept for yard benches." },
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
    { priority: "high",     label: "🚗 Book Now",                   title: "Car Rental for Yael — June 27–July 1",
      desc: "Approximately €150 for 5 days. Pick up at Athens Airport (ATH) on June 27 after landing 11:25. Return at Athens Airport before the 20:30 flight on July 1. Book ASAP — summer availability is limited." },
    { priority: "high",     label: "📋 Legal — Decide Before Jun 27",      title: "POA Revocation — Timing Decision Needed",
      desc: "Vicky advises Kobi + Yael go TOGETHER to the notary in Aidipsos — saves ~€250 (est. €250/visit). Options: (A) Yael signs her part alone Jun 27–Jul 1; Kobi signs later separately → costs ~€500 total. (B) Wait until both can come → costs ~€250 but delays revocation. Call notary to understand procedure. Original notary: Natasha Sidiropoulou, Aidipsos." },
    { priority: "critical", label: "🔴 Critical — Action Needed",    title: "Electricity Counters — Provide to Electrician",
      desc: "Electrician is ready to proceed and is giving power to Yael's unit (large storage) now. He needs the electricity company counters to continue to the next stage. Provide ASAP." },
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Land Registry Certificate",
      desc: "Vasiliki has temporary cert; formal cert with Notary must be issued ASAP. This unblocks Antonis permit AND property funding application." },
    { priority: "critical", label: "🚀 Phase 4 Begins June 15",       title: "Antonis Arrived ✅ — Structural Work Starts June 15",
      desc: "Antonis arrived Saturday June 13 for site survey. Structural work begins June 15. Ensure funds available for Phase 1 deposit (~€25K–€30K). Roof design change + slab cut scope to be finalized with Antonis now on site. Building permit requires full roof closure + photos — 4 more roof layers going on next week." },
    { priority: "critical", label: "🔴 Critical — Money",           title: "Water Network Connection",
      desc: "Plumber cannot pressure-test pipes or close trenches until community connects water supply. Application submitted; no response yet. Follow up urgently." },
    { priority: "high",     label: "🟠 High Priority",              title: "Kairis Balance ~€2,400 — Vicky to settle in person",
      desc: "Running balance as of Jun 13: €2,045 (prior) + €355 deferred from this week = €2,400. The €355 shortfall was from this week's €3,355 total vs €3,000 withdrawn. Vicky to visit Kairis in person to settle (Kobi's funds)." },
    { priority: "high",     label: "🟠 Due Mon/Tue Jun 15–16",      title: "Excavator — €600 + Road Compaction",
      desc: "Excavator owed €600. Vicky requested excavator arrive Monday/Tuesday June 15–16 with a 60-ton road roller to compact all roads. Approve and confirm date with Vicky." },
    { priority: "high",     label: "🟠 High Priority",              title: "Electrician Outstanding ~€7,500",
      desc: "GF + storages electrical approved (€9,500 scope). Paid to date: €400 (May 16) + €1,000 (May 28) = €1,400. Outstanding: ~€7,500 + €1,000 plans + €750 3-phase meter. Electrician currently active — giving power to Yael's unit (large storage)." },
    { priority: "high",     label: "🟠 High Priority",              title: "Tiles — Waiting on Italy Production (120×120)",
      desc: "First order (330 sqm CANDIA SLAB IVORY) placed May 8. Jun 13: Vicky called ABM — 95 sqm 120×60 in stock now; 120×120 (correct texture) in production in Italy, not yet available. Available 120×120 stock lacks the selected texture. Vicky insists on original tile. ABM manager to call Vicky MONDAY with Italy production timeline. Next: confirm delivery date once Italy production ships." },
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
    { color: "lgreen", title: "✅ Roof Slab Cut — 100% Confirmed (June 1)",
      bodyHtml: "Pre-existing crack discovered in couch/living area under white covering material (hidden ~10 years). Slab <strong>will be cut</strong> in that section and steel beams added. This is the same section previously discussed for the high-ceiling kitchen/living area design. Full extent of damage TBD once cutting begins." },
    { color: "lblue",  title: "📐 Floor Plans & Roof Note",
      bodyHtml: "Ground floor layout adjusted (bathrooms moved, staircase correction).<br><strong>Roof slab (June 1 update):</strong> CUT IS CONFIRMED — crack found in couch area. Slab will be cut; steel beams to be added. This was Sula's side / the area discussed for high ceiling kitchen+living. Damage scope TBD.<br>Concrete demolition blocks kept for built-in yard seating benches (Vicky's request).<br>Vicky to provide updated DWG plans." },
  ],

  // ── Financial summary (owner dashboard cards) ─────────────────────
  financialSummary: {
    paid: [
      { label: "Site Works (excavation, 160m road, trenching, municipality fee)",  amount: "€5,300"   },
      { label: "Storage Buildings",        amount: "€8,761"   },
      { label: "Ground Floor Materials",   amount: "€8,420"   },
      { label: "Plumbing",                 amount: "€3,960"   },
      { label: "Electrical",               amount: "€2,000"   },
      { label: "Workers & Labour",         amount: "~€20,120" },
      { label: "Legal / Admin",            amount: "€3,000"   },
      { label: "Landscaping",              amount: "€375"     },
      { label: "Roof Garden (materials)",  amount: "€1,450"   },
      { label: "Windows & Doors",          amount: "€1,150"   },
    ],
    totalPaid:      "~€66,000",
    totalCommitted: "~€62,955",

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
    progressPct: 23, pctLabel: "23%",
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
      { icon: "🧱", title: "Kairis",                   sub: "Remaining balance ~€400 (after €2,000 paid Jun 15)",
        who: "Kairis Materials", desc: "Vicky requested + Yael approved €2,000 withdrawal Jun 15. Reduces running balance from ~€2,400 → ~€400. Vicky to settle remainder in person.",
        amount: "~€400", payType: "💵 CASH (Vicky in person, Kobi's funds)", auth: "✅ Yael approved Jun 15 — €2,000 withdrawn. Remaining ~€400 to settle." },
      { icon: "🚜", title: "Excavator — Road Compaction", sub: "60-ton road roller to compact all roads. Due Mon/Tue Jun 15–16",
        who: "Excavator contractor", desc: "Vicky requested excavator with 60-ton road roller to compact all roads, Monday or Tuesday June 15–16.",
        amount: "€600", payType: "💵 CASH", auth: "✅ Kobi approved — Vicky to confirm date and pay" },
      { icon: "🔩", title: "Blacksmith — Small Storage", sub: "Door + window + varnish installation",
        who: "Blacksmith", desc: "Small storage door + window (€500) + paint (€50)",
        amount: "€550",   payType: "💵 CASH", auth: "✅ Kobi approved — Pay on completion" },
    ],
    summary: {
      dueNow:     "~€10,050",  dueSub:     "Kairis ~€400 + Electrician ~€8,500 + Blacksmith €550 + Excavator €600",
      workers:    "✅ Paid Jun 13 + Kairis €2,000 Jun 15", workersSub: "Workers Jun 8–13 (€2,580). Kairis €2,000 approved by Yael Jun 15 (reduces balance to ~€400).",
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
    totalKnownExpenses:  66000,   // from expense tracking (project records)
    // implied balance = totalTransferred - totalKnownExpenses = 44,414
    // actual balance 49,500 → ~€5,086 unaccounted (may be expenses not yet logged)
    note: "Greek bank: NBG — GR18 0110 3180 0000 3180 0400 611",
  },

  // ── Vicky's communication tab ────────────────────────────────────
  // Used by both dashboard_vicky.html (Comms tab) and dashboard.html (Communication Hub)
  // Update this section each run when open items / contact details change
  vickyComms: {
    // Message from Kobi to Vicky (update when there's something specific to say)
    kobMessage: "Vicky — thank you for everything, and for pushing through 7 weeks without a weekend. You and the team are incredible. Please take care of yourself — and please have Meli check his knee!\n\nYael is visiting June 27–July 1 🎉. She will walk through the entire house with you. The aluminum door looks amazing — thank you. The solar panel infrastructure answer was perfect, exactly what we needed to hear. We love you all 🙏",

    // Items Vicky is waiting on from Kobi — update when decisions are made
    waitingOnKobi: [
      "Approve concealed-wall toilet brand for main house (Vicky recommends GROHE ~€780 for long-term maintenance; Kobi open to €400–500 range — discuss)",
      "Window/door color — black or not?",
      "Entrance gate quote — approve when it arrives",
      "Property division structure for Notary",
      "Confirm when to order toilets + washbasins for the main house (Yael's unit DONE)",
      "POA revocation timing decision — Vicky recommends Kobi + Yael go TOGETHER (~€250/visit; paying separately = ~€500). Should Yael sign alone Jun 27–Jul 1 and Kobi come later, or wait until both can go together?",
    ],

    // Items Vicky must action herself — update each run
    vickyMustAction: [
      "⭐ Prepare for Yael's visit June 27–July 1 — plan full house site walk with her",
      "Confirm if Yael's unit is sleep-ready by June 27 — send Kobi update by June 20",
      "🚀 Phase 4 in progress — Antonis on site. Roof work focus Jun 15–17. Review Antonis schedule once roof photos are ready.",
      "Roof layers (Jun 15–17) — building permit needs full roof closure + photos (needed for Antonis permit)",
      "Aluminum balcony door (Yael's unit) — complete installation by Jun 16. Window arriving MONDAY June 22.",
      "⚠️ Check on Meli's knee — he fell on his surgery knee Sunday Jun 14. Ensure he's OK to continue.",
      "Excavator — confirm Mon/Tue Jun 15–16 with 60-ton road roller to compact all roads (€600 owed)",
      "Kairis — withdraw €2,000 and pay (approved by Yael Jun 15). Remaining balance ~€400 to settle in person.",
      "Meli to BUILD wood+steel bed for Yael's unit — 1.6×2m, pine+steel frame (approved Jun 13). Room target: ready Jun 28.",
      "Tiles — confirm Italy production timeline for 120×120 with ABM manager (call was Monday Jun 16).",
      "Chase community water connection (URGENT) — plumbing COMPLETE ✅; only community connection blocking pressure test",
      "House insulation — research options + prices, send to Kobi ASAP",
      "Visit microcement supplier — inspect quality, bring video for Kobi+Yael",
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
      "Bed for Yael's unit (Kobi approved Jun 13) — Meli to BUILD a custom wood+steel bed (1.6×2m, pine+steel frame). Room must be ready by Jun 28 for Yael's visit (Jun 28–Jul 1).",
      "Yael's unit bathroom fixtures ✅ DONE — €614 paid via Wise (Jun 6). All-microcement confirmed.",
    ],
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
      statusClass: "ds-waiting", status: "⏳ Kobi to decide if needed before next visit" },
  ],

};
