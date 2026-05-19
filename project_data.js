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
    lastUpdated:   "19 May 2026",
    weekOf:        "19–24 May 2026",
    projectStart:  "Feb 2026",
    estCompletion: "Late 2026",
  },

  // ── KPI row (owner dashboard top) ────────────────────────────────
  kpis: {
    totalBudget:    "€275K",
    totalBudgetSub: "Vicky: ~1,000–1,050 €/m²",
    paidToDate:     "€43,456",
    paidSub:        "~16% of total estimate",
    duePending:     "€14,136",
    dueSub:         "Kairis €2,875 + upcoming bills",
    bigItems:       "€147K+",
    bigItemsSub:    "Antonis, tiles, windows, electrical",
  },

  // ── Budget bars ───────────────────────────────────────────────────
  // spent/budget are numbers; use spentLabel/budgetLabel to override display text
  budgetBars: [
    { label: "A. Site Works",                                    spent: 4700,  budget: 6000,  pct: 78, cls: "bar-green"  },
    { label: "B. Storage Buildings",                             spent: 8111,  budget: 13200, pct: 61, cls: "bar-blue"   },
    { label: "C. Ground Floor + Materials",                      spent: 8420,  budget: 11000, pct: 77, cls: "bar-blue"   },
    { label: "D. Plumbing (all floors)",                         spent: 2660,  budget: 9000,  pct: 30, cls: "bar-orange" },
    { label: "E. Electrical (all floors)",                       spent: 1000,  budget: 9000,  pct: 11, cls: "bar-orange" },
    { label: "F. Tiles & Flooring",                              spent: 0,     budget: 25500, pct: 0,  cls: "bar-red"    },
    { label: "G. Windows & Doors (aluminum)",                    spent: 0,     budget: 18700, pct: 0,  cls: "bar-red"    },
    { label: "H. Roof Garden / 3rd Floor",                       spent: 1450,  budget: 9500,  pct: 15, cls: "bar-orange" },
    { label: "I. Antonis — Phase 1 (Foundations & Beams)",       spent: 0,     budgetLabel: "€25,000–€30,000", pct: 0, cls: "bar-red" },
    { label: "I2. House Insulation (Summer — urgent)",           spent: 0,     budgetLabel: "TBD",             pct: 0, cls: "bar-red" },
    { label: "J. Landscaping",                                   spent: 375,   budget: 7000,  pct: 5,  cls: "bar-green"  },
    { label: "K. Workers & Labour",                              spentLabel: "~€10,840", budget: 25000, pct: 43, cls: "bar-blue" },
    { label: "L. Legal, Admin & Tax",                            spent: 3261,  budget: 11350, pct: 29, cls: "bar-blue"   },
    { label: "Contingency (10%)",                                spent: 0,     budget: 25000, pct: 0,  cls: "bar-green"  },
  ],

  // ── Project phases ────────────────────────────────────────────────
  // status: "done" | "ongoing" | "upcoming" | "blocked"
  phases: [
    { icon: "✅", status: "done",     name: "Phase 1 — Site Preparation",
      detail: "Road (160m), excavation, asbestos removal — COMPLETE" },
    { icon: "🔨", status: "ongoing",  name: "Phase 2 — Storage Buildings",
      detail: "Large storage complete (door installed ✅). Small storage under construction. Electrician arriving this week." },
    { icon: "🔨", status: "ongoing",  name: "Phase 3 — Ground Floor Renovation",
      detail: "Brickwork complete ✅. Plumbing ongoing (water network connection pending). Electrical conduits Apt A+B ongoing." },
    { icon: "🔴", status: "blocked",  name: "Phase 4 — Antonis Main Contract",
      detail: "BLOCKED: Land registry certificate needed. Permit in progress. Notary engaged. Temp. cert received; formal cert imminent." },
    { icon: "🔨", status: "ongoing",  name: "Phase 5 — Upper Floors & Roof",
      detail: "Upper floor materials on roof beams. 3rd floor roof panels ordered (RAL 9006 silver). Antonis needed for structural work." },
    { icon: "⏳", status: "upcoming", name: "Phase 6 — Finishing (Tiles, Insulation, Doors, Kitchen)",
      detail: "First tile order placed May 8 (330 sqm CANDIA SLAB IVORY). Insulation method/pricing needed urgently this summer. Windows/doors TBD (color). Kitchen selection pending." },
    { icon: "🔴", status: "blocked",  name: "Phase 7 — Legal & Funding",
      detail: "Property division with notary blocked (land registry + Antonis). Funding application (Exoikonomw) blocked until Phase 7 complete." },
  ],

  // ── Action items (owner dashboard) ───────────────────────────────
  // priority: "critical" | "high" | "info"
  actionItems: [
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Land Registry Certificate",
      desc: "Vasiliki has temporary cert; formal cert with Notary must be issued ASAP. This unblocks Antonis permit AND property funding application." },
    { priority: "critical", label: "🔴 Critical — Blocking",        title: "Antonis Work Start",
      desc: "Once permit is issued + 10 dry days, Antonis starts structural work. Vicky mediating relationship. Ask Antonis to review roof design change (less insulation area = saving)." },
    { priority: "critical", label: "🔴 Critical — Money",           title: "Water Network Connection",
      desc: "Plumber cannot pressure-test pipes or close trenches until community connects water supply. Application submitted; no response yet. Follow up urgently." },
    { priority: "high",     label: "🟠 High Priority",              title: "Kairis Balance €2,875",
      desc: "Due after steel anchors delivered. Pay promptly once materials confirmed." },
    { priority: "high",     label: "🟠 High Priority",              title: "Electrical Budget Alignment",
      desc: "Vicky asked for the electrical budget screenshot (sent May 18). Electricians to proceed based on agreed scope for all floors." },
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
    { priority: "info",     label: "🔵 Info / Decision Needed",     title: "Aluminum Windows & Doors",
      desc: "Black preferred but 2-month wait + more expensive. Confirm color decision and get quotes. ~25 openings." },
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
    { date: "May 16",     category: "Workers",    desc: "Workers wages (week May 12–16)",                        vendor: "Workers",            amount: "€1,280",      status: "paid"     },
    { date: "May 16",     category: "Blacksmith", desc: "Large storage door + window (full payment)",            vendor: "Blacksmith",         amount: "€400",        status: "paid"     },
    { date: "May 16",     category: "Plumbing",   desc: "Plumber payment #3",                                    vendor: "Plumber",            amount: "€500",        status: "paid"     },
    { date: "May 16",     category: "Electrical", desc: "Advance — Apartment B conduits",                        vendor: "Electricians",       amount: "€400",        status: "paid"     },
    { date: "May 13",     category: "Workers",    desc: "Workers wages balance (prev. week)",                    vendor: "Workers",            amount: "€1,770",      status: "paid"     },
    { date: "May 9",      category: "Materials",  desc: "Kairis — cement forms, iron, insulation coat",          vendor: "Kairis",             amount: "€1,750",      status: "paid"     },
    { date: "May 9",      category: "Workers",    desc: "Workers wages Apr 29–May 9",                            vendor: "Workers",            amount: "€1,440",      status: "paid"     },
    { date: "May 2026",   category: "Materials",  desc: "Kairis — roof panels, ytong, insulation",               vendor: "Kairis",             amount: "€2,875",      status: "due"      },
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
      bodyHtml: "RAL 9006 (silver/grey) insulated panels, 12cm thick.<br>Black or dark grey frame details agreed." },
    { color: "lgreen", title: "✅ Iron Doors & Gate",
      bodyHtml: "Black/dark with clear 2-component varnish (3 coats).<br>Sliding entrance gate — 5m, motorizable later." },
    { color: "yellow", title: "⏳ Aluminum Windows & Doors",
      bodyHtml: "Black preferred — 2-month wait + more expensive.<br>~25 openings across all floors. Decision pending." },
    { color: "yellow", title: "⏳ Kitchen",
      bodyHtml: "LINEA ARMADI Italian kitchen offer received Feb 2026 (via Vicky). Cash/no VAT option available. Vicky can customize oven model. Meeting to review offer still pending — schedule when ready.<br>Also: CANDIA MEGA SLABS (1.60×3.20) available as kitchen countertop — 6.4 linear meters per slab, with invisible induction cooktop integration." },
    { color: "lblue",  title: "📐 Floor Plans Note",
      bodyHtml: "Ground floor layout adjusted (bathrooms moved, staircase correction).<br>3rd floor roof design change discussed with Antonis — TBD.<br>Vicky to provide updated DWG plans." },
  ],

  // ── Financial summary (owner dashboard cards) ─────────────────────
  financialSummary: {
    paid: [
      { label: "Site Works",               amount: "€4,700"   },
      { label: "Storage Buildings",        amount: "€8,111"   },
      { label: "Ground Floor Materials",   amount: "€8,420"   },
      { label: "Plumbing",                 amount: "€2,660"   },
      { label: "Electrical",               amount: "€1,000"   },
      { label: "Workers & Labour",         amount: "~€10,840" },
      { label: "Legal / Admin",            amount: "€2,800"   },
      { label: "Landscaping",              amount: "€375"     },
      { label: "Roof Garden (materials)",  amount: "€1,450"   },
    ],
    totalPaid:      "~€40,356",
    totalCommitted: "~€43,231",

    ahead: [
      { label: "Antonis — Phase 1 (foundations & beams)", amount: "€25K–€30K" },
      { label: "Antonis — Remaining phases (TBD)",        amount: "TBD"        },
      { label: "House Insulation (summer — urgent)",      amount: "TBD"        },
      { label: "Tiles + installation",                    amount: "€25,000"    },
      { label: "Electrical (full house)",                 amount: "€20,000"    },
      { label: "Windows & Doors",                        amount: "€18,700"    },
      { label: "Plumbing balance",                       amount: "€7,200"     },
      { label: "Roof Garden",                            amount: "€8,000"     },
      { label: "Legal / Notary",                         amount: "€5,550"     },
      { label: "Landscaping (full)",                     amount: "€5,000"     },
    ],
    remaining:   "~€149,450",
    contingency: "~€14,900",

    // SVG donut chart values
    progressPct: 16, pctLabel: "16%",
    paidSegment: 80,  paidOffset: 0,
    dueSegment:  10,  dueOffset:  -80,
    remSegment:  333, remOffset:  -90,
    totalRange:  "~€192K – €275K",
  },

  // ── Vicky's approvals tab ────────────────────────────────────────
  vickyApprovals: {
    approved: [
      { icon: "💳", title: "Pay Kairis — Roof panels balance",
        sub:    "€2,875 — pay once steel anchors are delivered and confirmed",
        auth:   "✅ KOBI APPROVED — Go ahead when anchors arrive",
        detail: "30sqm roof panels €1,450 · 9sqm small storage roof €650 · Ytong €700 · finish coat €75. Cash as usual." },
      { icon: "🔨", title: "Electricians — Continue Apartment B",
        sub:    "Advance of €400 already paid. Continue full scope.",
        auth:   "✅ KOBI APPROVED — Proceed per agreed electrical scope",
        detail: "All floors. Use the budget screenshot Kobi sent May 18 as the reference." },
      { icon: "🪟", title: "Small storage — aluminum balcony door + window",
        sub:    "~€450–500 + installation. Mosquito nets required.",
        auth:   "✅ KOBI APPROVED — Get the quote and place order",
        detail: "Kobi confirmed same design language as large storage. Mosquito net on both door and window." },
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
      { icon: "🧱", title: "Kairis",                   sub: "Roof panels + Ytong + insulation",
        who: "Kairis Materials", desc: "30sqm panels · small storage roof · Ytong · coat",
        amount: "€2,875", payType: "💵 CASH", auth: "✅ Kobi approved — Pay when steel anchors confirmed" },
      { icon: "🔩", title: "Blacksmith — Small Storage", sub: "Door + window + varnish installation",
        who: "Blacksmith", desc: "Small storage door + window (€500) + paint (€50)",
        amount: "€550",   payType: "💵 CASH", auth: "✅ Kobi approved — Pay on completion" },
    ],
    summary: {
      dueNow:     "€3,425",  dueSub:     "Kairis + Blacksmith",
      workers:    "~€1,400", workersSub: "5 workers × 5 days",
      paidToDate: "~€43K",
      atmLimit:   "€2K",
    },
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
