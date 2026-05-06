const brandNames = ["KAHF", "Wardah", "OMG", "Emina", "Labore", "Make Over", "Putri", "Tavi", "Biodef", "Wonderly", "Beyondly", "Earth Love Life"];

const assets = [
  { id: "EA-001", brand: "Wardah", type: "Booth - Current", name: "Halal Beauty Glow Pavilion", price: 45000000, warehouse: "Internal", location: "Jakarta Hub", date: "2024-01-01", pic: "Dian R.", status: "Available", requests: 0, size: "4x6", palette: ["#3f8bdc", "#e6f4ff"] },
  { id: "EA-002", brand: "KAHF", type: "Booth - Current", name: "Men's Care Mountain Booth", price: 45000000, warehouse: "Internal", location: "Jakarta Hub", date: "2023-03-01", pic: "Dian R.", status: "In Use", requests: 2, size: "3x5", palette: ["#0f5132", "#dff7e8"] },
  { id: "EA-003", brand: "OMG", type: "Booth - Current", name: "Color Pop Roadshow Pavilion", price: 52000000, warehouse: "External", location: "Vendor A", date: "2022-08-01", pic: "Budi S.", status: "In Use", requests: 1, size: "6x6", palette: ["#f35c7a", "#fff0f4"] },
  { id: "EA-004", brand: "Emina", type: "Booth - Modular", name: "Bright Play Modular 2x2", price: 18000000, warehouse: "Internal", location: "Surabaya Hub", date: "2023-11-01", pic: "Sinta W.", status: "Available", requests: 3, size: "2x2", palette: ["#ff86a8", "#fff4db"] },
  { id: "EA-005", brand: "Labore", type: "Booth - Modular", name: "Dermalab Modular 3x3", price: 22000000, warehouse: "Internal", location: "Jakarta Hub", date: "2024-02-01", pic: "Sinta W.", status: "Requested", requests: 2, size: "3x3", palette: ["#5177a8", "#eef5ff"] },
  { id: "EA-006", brand: "Make Over", type: "Booth - Modular", name: "Pro Studio Modular 1x1", price: 12000000, warehouse: "Internal", location: "Bandung Hub", date: "2023-06-01", pic: "Sinta W.", status: "Available", requests: 0, size: "1x1", palette: ["#15171f", "#f2f3f7"] },
  { id: "EA-007", brand: "Putri", type: "Booth - Reuse", name: "Retired Heritage Mall Kiosk", price: 4500000, warehouse: "Internal", location: "Reuse Pool", date: "2022-03-01", pic: "Eko P.", status: "Reuse Pool", requests: 0, size: "Material", palette: ["#8f3d72", "#ffe8f5"] },
  { id: "EA-008", brand: "Tavi", type: "Booth - Reuse", name: "Dismantled Nature Counter Set", price: 3200000, warehouse: "Internal", location: "Reuse Pool", date: "2022-01-01", pic: "Eko P.", status: "Reuse Pool", requests: 0, size: "Material", palette: ["#5b7c35", "#eff7e2"] },
  { id: "EA-009", brand: "Biodef", type: "POSM", name: "Daily Defense Standees Pack", price: 8750000, warehouse: "Internal", location: "Jakarta Hub", date: "2023-09-01", pic: "Reni A.", status: "Available", requests: 1, size: "12 pcs", palette: ["#126f89", "#e1f9ff"] },
  { id: "EA-010", brand: "Wonderly", type: "POSM", name: "Wonder Shelf Display Kit", price: 6300000, warehouse: "External", location: "Vendor B", date: "2023-04-01", pic: "Reni A.", status: "In Use", requests: 0, size: "8 pcs", palette: ["#8b5cf6", "#f2edff"] },
  { id: "EA-011", brand: "Beyondly", type: "POSM", name: "Beyond Shelf Talker Bundle", price: 5100000, warehouse: "External", location: "Vendor A", date: "2021-10-01", pic: "Reni A.", status: "Reuse Pool", requests: 0, size: "24 pcs", palette: ["#2563eb", "#eaf0ff"] },
  { id: "EA-012", brand: "Earth Love Life", type: "Inventories", name: "Sustainable Lighting Kit", price: 2200000, warehouse: "Internal", location: "Jakarta Hub", date: "2024-07-01", pic: "Hadi M.", status: "Available", requests: 0, size: "1 set", palette: ["#2f855a", "#e9f7ef"] },
  { id: "EA-013", brand: "Wardah", type: "Inventories", name: "Blue Event Furniture Set", price: 3800000, warehouse: "Internal", location: "Surabaya Hub", date: "2023-03-01", pic: "Hadi M.", status: "In Use", requests: 1, size: "10 pcs", palette: ["#1f6fb2", "#e7f4ff"] },
  { id: "EA-014", brand: "Emina", type: "Inventories", name: "Pink Demo Props Crate", price: 1500000, warehouse: "Internal", location: "Bandung Hub", date: "2022-12-01", pic: "Hadi M.", status: "Available", requests: 0, size: "1 crate", palette: ["#f472b6", "#fff1f8"] }
];

const thresholdDate = new Date("2024-11-06");
const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
const shortDate = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });
const requestHistory = [
  { asset: "Modular Booth 3x3", event: "Mall Activation - Jakarta", status: "Requested" },
  { asset: "Launch Standees Pack", event: "Brand Sampling - Bandung", status: "Approved" }
];

const els = {
  entry: document.getElementById("entryScreen"),
  web: document.getElementById("webApp"),
  mobile: document.getElementById("mobileApp"),
  pageTitle: document.getElementById("pageTitle"),
  rows: document.getElementById("assetRows"),
  cards: document.getElementById("cardView"),
  mobileCards: document.getElementById("mobileCards"),
  mobileAssetSelect: document.getElementById("mobileAssetSelect"),
  mobileHistory: document.getElementById("mobileHistory"),
  mobileConfirm: document.getElementById("mobileConfirm"),
  search: document.getElementById("searchInput"),
  brand: document.getElementById("brandFilter"),
  type: document.getElementById("typeFilter"),
  warehouse: document.getElementById("warehouseFilter"),
  status: document.getElementById("statusFilter"),
  roleSelect: document.getElementById("roleSelect"),
  departmentButton: document.getElementById("departmentButton"),
  departmentLabel: document.getElementById("departmentLabel"),
  departmentMenu: document.getElementById("departmentMenu"),
  permissionTitle: document.getElementById("permissionTitle"),
  permissionDescription: document.getElementById("permissionDescription"),
  permissionTasks: document.getElementById("permissionTasks"),
  totalValue: document.getElementById("totalValue"),
  availabilityRate: document.getElementById("availabilityRate"),
  reuseCount: document.getElementById("reuseCount"),
  openRequests: document.getElementById("openRequests"),
  mobileAvailable: document.getElementById("mobileAvailable"),
  activityList: document.getElementById("activityList"),
  assetContextEyebrow: document.getElementById("assetContextEyebrow"),
  assetContextTitle: document.getElementById("assetContextTitle"),
  assetContextDescription: document.getElementById("assetContextDescription"),
  assetContextStats: document.getElementById("assetContextStats"),
  accessDialog: document.getElementById("accessDialog"),
  accessResult: document.getElementById("accessResult")
};

function isAged(asset) {
  return new Date(asset.date) < thresholdDate;
}

function statusClass(status) {
  return status.toLowerCase().replaceAll(" ", "-");
}

function iconText(asset) {
  if (asset.type.includes("Booth")) return "B";
  if (asset.type === "POSM") return "P";
  return "I";
}

function assetImage(asset) {
  const [primary, secondary] = asset.palette;
  const label = asset.brand.slice(0, 3).toUpperCase();
  const shape = asset.type === "POSM"
    ? '<rect x="92" y="36" width="44" height="86" rx="8" fill="white" opacity=".92"/><rect x="101" y="49" width="26" height="9" rx="4" fill="' + primary + '" opacity=".75"/><rect x="101" y="66" width="26" height="40" rx="5" fill="' + primary + '" opacity=".2"/>'
    : asset.type === "Inventories"
      ? '<rect x="80" y="70" width="64" height="48" rx="10" fill="white" opacity=".92"/><path d="M94 70v-9c0-7 6-13 13-13h10c7 0 13 6 13 13v9" fill="none" stroke="' + primary + '" stroke-width="7" stroke-linecap="round" opacity=".72"/>'
      : '<rect x="76" y="58" width="78" height="62" rx="10" fill="white" opacity=".92"/><rect x="88" y="72" width="54" height="34" rx="6" fill="' + primary + '" opacity=".18"/><path d="M76 58l20-20h38l20 20" fill="white" opacity=".7"/>';
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 132"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="' + primary + '"/><stop offset="1" stop-color="' + secondary + '"/></linearGradient></defs><rect width="180" height="132" rx="18" fill="url(#g)"/><circle cx="34" cy="31" r="28" fill="white" opacity=".2"/><circle cx="162" cy="116" r="42" fill="white" opacity=".25"/>' + shape + '<text x="20" y="106" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800">' + label + '</text></svg>';
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function populateBrandOptions() {
  const brandOptions = '<option value="">All brands</option>' + brandNames.map((brand) => `<option>${brand}</option>`).join("");
  els.brand.innerHTML = brandOptions;
  document.querySelectorAll(".dialogBrand").forEach((select) => {
    select.innerHTML = brandNames.map((brand) => `<option>${brand}</option>`).join("");
  });
}

function showEntry(target) {
  els.entry.classList.toggle("hidden", target !== "home");
  els.web.classList.toggle("hidden", target !== "web");
  els.mobile.classList.toggle("hidden", target !== "mobile");
  document.body.classList.toggle("mobile-mode", target === "mobile");
}

function filteredAssets() {
  const query = els.search.value.trim().toLowerCase();
  return assets.filter((asset) => {
    const haystack = [asset.id, asset.brand, asset.type, asset.name, asset.pic, asset.location, asset.status].join(" ").toLowerCase();
    return (!query || haystack.includes(query))
      && (!els.brand.value || asset.brand === els.brand.value)
      && (!els.type.value || asset.type === els.type.value)
      && (!els.warehouse.value || asset.warehouse === els.warehouse.value)
      && (!els.status.value || asset.status === els.status.value);
  });
}

function renderSummary(list) {
  const total = list.reduce((sum, asset) => sum + asset.price, 0);
  const available = list.filter((asset) => asset.status === "Available").length;
  const open = list.reduce((sum, asset) => sum + asset.requests, 0);
  const reuse = list.filter((asset) => isAged(asset) || asset.status === "Reuse Pool").length;
  const rate = list.length ? Math.round((available / list.length) * 100) : 0;

  els.totalValue.textContent = rupiah.format(total).replace(/\s/g, " ");
  els.availabilityRate.textContent = `${rate}%`;
  els.reuseCount.textContent = reuse;
  els.openRequests.textContent = open;
  els.mobileAvailable.textContent = available;
}

function renderRows(list) {
  if (!list.length) {
    els.rows.innerHTML = `
      <tr>
        <td colspan="8">
          <div class="empty-state">
            <strong>No assets hidden here</strong>
            <span>Change or clear the filters to return to the full stakeholder demo data.</span>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  els.rows.innerHTML = list.map((asset) => `
    <tr class="${isAged(asset) ? "is-aged" : ""}">
      <td>
        <div class="asset-name">
          <img class="asset-thumb" src="${assetImage(asset)}" alt="${asset.name}">
          <div>${asset.name}<span class="subtext">${asset.id} · ${asset.type} · ${asset.size}</span></div>
        </div>
      </td>
      <td>${asset.brand}</td>
      <td><span class="warehouse ${asset.warehouse.toLowerCase()}">${asset.warehouse}</span><span class="subtext">${asset.location}</span></td>
      <td>${shortDate.format(new Date(asset.date))}${isAged(asset) ? '<span class="subtext">Review due</span>' : ""}</td>
      <td>${asset.pic}</td>
      <td><span class="status ${statusClass(asset.status)}">${asset.status}</span></td>
      <td><span class="request-chip">${asset.requests}</span></td>
      <td>${rupiah.format(asset.price).replace(/\s/g, " ")}</td>
    </tr>
  `).join("");
}

function renderCards(list) {
  if (!list.length) {
    els.cards.innerHTML = '<div class="empty-state"><strong>No assets hidden here</strong><span>Change or clear the filters to return to the full stakeholder demo data.</span></div>';
    return;
  }

  els.cards.innerHTML = list.map((asset) => `
    <article class="asset-card">
      <img class="asset-card-image" src="${assetImage(asset)}" alt="${asset.name}">
      <header>
        <span class="asset-token">${iconText(asset)}</span>
        <div>
          <strong>${asset.name}</strong>
          <span class="subtext">${asset.id} · ${asset.brand}</span>
        </div>
      </header>
      <span class="status ${statusClass(asset.status)}">${asset.status}</span>
      <span class="subtext">${asset.type} · ${asset.size}</span>
      <span class="subtext">${asset.location} · ${shortDate.format(new Date(asset.date))}</span>
      <footer>
        <span class="warehouse ${asset.warehouse.toLowerCase()}">${asset.warehouse}</span>
        <strong>${asset.requests} req</strong>
      </footer>
    </article>
  `).join("");
}

function renderMobile(list) {
  const available = assets.filter((asset) => asset.status === "Available");
  els.mobileCards.innerHTML = available.slice(0, 4).map((asset) => `
    <article class="mobile-card">
      <div class="mobile-card-media">
        <img src="${assetImage(asset)}" alt="${asset.name}">
        <div>
          <strong>${asset.name}</strong>
          <span>${asset.brand} · ${asset.type}</span>
        </div>
      </div>
      <div class="mobile-card-row"><span>${asset.location}</span><span class="status ${statusClass(asset.status)}">${asset.status}</span></div>
    </article>
  `).join("");

  els.mobileAssetSelect.innerHTML = available.map((asset) => `<option value="${asset.id}">${asset.name} · ${asset.brand}</option>`).join("");
}

function renderActivity() {
  const activity = [
    ["Request created", "Labore asked for Dermalab Modular 3x3", "12 min ago"],
    ["PIC review", "Retired Mall Kiosk moved into reuse review", "48 min ago"],
    ["Vendor audit", "Vendor A updated Shelf Talker Bundle condition", "Today"],
    ["Asset reserved", "Launch Standees Pack reserved for Bandung", "Yesterday"]
  ];
  els.activityList.innerHTML = activity.map((item) => `
    <div class="activity-item">
      <span></span>
      <div><strong>${item[0]}</strong><small>${item[1]}</small></div>
      <em>${item[2]}</em>
    </div>
  `).join("");
}

function renderHistory() {
  els.mobileHistory.innerHTML = requestHistory.map((item) => `
    <article class="mobile-card">
      <div class="mobile-card-media">
        <img src="${assetImage(assets.find((asset) => asset.name === item.asset) || assets[0])}" alt="${item.asset}">
        <div>
          <strong>${item.asset}</strong>
          <span>${item.event}</span>
        </div>
      </div>
      <div class="mobile-card-row">
        <span>Request status</span>
        <span class="status ${statusClass(item.status)}">${item.status}</span>
      </div>
    </article>
  `).join("");
}

function renderAssetContext(section) {
  const contexts = {
    assets: {
      eyebrow: "Asset workspace",
      title: "Inventory, availability, and ownership",
      description: "Full asset list for internal teams to monitor ownership, stock location, availability, open requests, and estimated value.",
      stats: [["Tracked assets", assets.length], ["Available assets", assets.filter((asset) => asset.status === "Available").length], ["Total brands", brandNames.length]]
    },
    requests: {
      eyebrow: "Request center",
      title: "Pending asset requests and PIC routing",
      description: "Shows which assets have active demand, who owns the approval, and what should be reserved for upcoming events.",
      stats: [["Pending rows", assets.filter((asset) => asset.status === "Requested").length], ["Open request count", assets.reduce((sum, asset) => sum + asset.requests, 0)], ["PIC SLA", "< 24h"]]
    },
    recycle: {
      eyebrow: "Reuse pool",
      title: "Recycling candidates and material recovery",
      description: "Assets past lifecycle threshold or already retired are grouped here for PIC review, dismantling, and modular booth material planning.",
      stats: [["Reuse pool assets", assets.filter((asset) => asset.status === "Reuse Pool").length], ["PIC review queue", assets.filter((asset) => isAged(asset)).length], ["Material stock", "31 units"]]
    },
    vendors: {
      eyebrow: "Vendor visibility",
      title: "External warehouse assets and audit status",
      description: "Vendor-held booths and POSM stay visible alongside internal stock so retrieval lead time, condition, and ownership are easy to explain.",
      stats: [["External assets", assets.filter((asset) => asset.warehouse === "External").length], ["Vendor locations", "2"], ["Audit completion", "89%"]]
    }
  };
  const context = contexts[section] || contexts.assets;
  els.assetContextEyebrow.textContent = context.eyebrow;
  els.assetContextTitle.textContent = context.title;
  els.assetContextDescription.textContent = context.description;
  els.assetContextStats.innerHTML = context.stats.map((stat) => `
    <div class="context-stat">
      <span>${stat[0]}</span>
      <strong>${stat[1]}</strong>
    </div>
  `).join("");
}

function selectedDepartment() {
  return els.departmentLabel.textContent;
}

function renderPermissions() {
  const role = els.roleSelect.value;
  const department = selectedDepartment();
  const isSuper = role === "Super Admin";
  const scope = isSuper ? "All Department" : department;
  const allTasks = [
    ["Dashboard Control", "View full company metrics, lifecycle health, and operational movement."],
    ["Asset Management", "Create, edit, filter, reserve, and update all asset records."],
    ["Request Approval", "Approve, reject, assign PIC, and monitor request SLA."],
    ["Reuse Pool", "Move assets to reuse review, create dismantling tasks, and track recovered material."],
    ["Vendor Control", "Manage external warehouse visibility, retrieval lead time, and audit status."],
    ["User Access", "Manage admin roles, department access, and permissions."]
  ];
  const departmentTasks = {
    "All Department": [
      ["Cross-department View", "View Commercial and Marketing data in one dashboard."],
      ["Request Coordination", "Submit and monitor asset requests across all departments."],
      ["Asset Readiness", "Track availability, PIC ownership, and event preparation status."]
    ],
    Commercial: [
      ["Sales Event Readiness", "Request booths, POSM, and inventory for trade or retail activation."],
      ["Vendor Retrieval", "Check external vendor storage and request lead time before event setup."],
      ["Usage Monitoring", "Track in-use assets and open requests for commercial events."]
    ],
    Marketing: [
      ["Campaign Asset Planning", "Reserve brand booths, POSM, and props for campaign activations."],
      ["Reuse Recommendation", "Review aged assets and propose modular reuse for future campaigns."],
      ["Brand Asset Visibility", "Monitor assets by Paragon brand, PIC, status, and location."]
    ]
  };
  const tasks = isSuper ? allTasks : departmentTasks[department];

  els.permissionTitle.textContent = `${role} · ${scope}`;
  els.permissionDescription.textContent = isSuper
    ? "Can do anything across the platform: dashboard, assets, requests, reuse pool, vendors, and access control."
    : `Can manage dashboard tasks scoped to ${department}, including asset visibility, request coordination, and department-specific event needs.`;
  els.permissionTasks.innerHTML = tasks.map((task) => `
    <div class="permission-task">
      <strong>${task[0]}</strong>
      <span>${task[1]}</span>
    </div>
  `).join("");
}

function render() {
  const list = filteredAssets();
  renderSummary(list);
  renderRows(list);
  renderCards(list);
  renderMobile(list);
  renderActivity();
  renderHistory();
  renderPermissions();
}

function setSection(section) {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.section === section);
  });
  document.querySelectorAll(".web-section").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `section-${section === "dashboard" ? "dashboard" : "assets"}`);
  });

  const titles = {
    dashboard: "Dashboard",
    assets: "Assets",
    requests: "Requests",
    recycle: "Reuse Pool",
    vendors: "Vendors"
  };
  els.pageTitle.textContent = titles[section] || "Assets";
  els.search.value = "";
  els.brand.value = "";
  els.type.value = "";
  els.status.value = section === "requests" ? "Requested" : section === "recycle" ? "Reuse Pool" : "";
  els.warehouse.value = section === "vendors" ? "External" : "";
  renderAssetContext(section);
  render();
}

document.querySelectorAll("[data-entry]").forEach((button) => {
  button.addEventListener("click", () => showEntry(button.dataset.entry));
});

document.querySelectorAll("#searchInput, #brandFilter, #typeFilter, #warehouseFilter, #statusFilter").forEach((control) => {
  control.addEventListener("input", render);
});

els.roleSelect.addEventListener("change", renderPermissions);

els.departmentButton.addEventListener("click", () => {
  const isOpen = !els.departmentMenu.classList.contains("hidden");
  els.departmentMenu.classList.toggle("hidden", isOpen);
  els.departmentButton.setAttribute("aria-expanded", String(!isOpen));
});

els.departmentMenu.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    els.departmentLabel.textContent = button.dataset.department;
    els.departmentMenu.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    els.departmentMenu.classList.add("hidden");
    els.departmentButton.setAttribute("aria-expanded", "false");
    renderPermissions();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".department-select")) {
    els.departmentMenu.classList.add("hidden");
    els.departmentButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.getElementById("tableView").classList.toggle("hidden", button.dataset.view !== "table");
    document.getElementById("cardView").classList.toggle("hidden", button.dataset.view !== "cards");
  });
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setSection(button.dataset.section));
});

document.querySelectorAll("[data-mobile-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.mobileTab;
    document.querySelectorAll("[data-mobile-tab]").forEach((item) => item.classList.toggle("active", item.dataset.mobileTab === tab));
    document.querySelectorAll(".mobile-screen").forEach((screen) => screen.classList.toggle("active", screen.id === `mobile-${tab}`));
    document.getElementById("mobileScreenTitle").textContent = tab === "request" ? "Request Asset" : tab === "available" ? "Available Assets" : "Request History";
  });
});

document.getElementById("accessRequestBtn").addEventListener("click", () => {
  els.accessResult.classList.add("hidden");
  els.accessDialog.showModal();
});

document.getElementById("grantAccessBtn").addEventListener("click", () => {
  els.accessResult.classList.remove("hidden");
});

document.getElementById("mobileSubmitRequest").addEventListener("click", () => {
  const selected = assets.find((asset) => asset.id === els.mobileAssetSelect.value);
  const eventName = document.getElementById("mobileEventName").value || "Untitled event";
  if (selected) {
    selected.requests += 1;
    selected.status = "Requested";
    requestHistory.unshift({ asset: selected.name, event: eventName, status: "Requested" });
  }
  els.mobileConfirm.classList.remove("hidden");
  setTimeout(() => els.mobileConfirm.classList.add("hidden"), 2500);
  render();
});

document.getElementById("mobileScanBtn").addEventListener("click", () => {
  document.getElementById("mobileEventName").value = "Scanned Asset Request";
});

document.getElementById("syncBtn").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const original = button.innerHTML;
  button.innerHTML = '<span class="icon icon-sync"></span>Synced';
  setTimeout(() => {
    button.innerHTML = original;
  }, 1200);
});

populateBrandOptions();
renderAssetContext("assets");
render();
