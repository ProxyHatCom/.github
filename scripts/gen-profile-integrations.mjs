#!/usr/bin/env node
// Regenerates the "Framework & Tool Integrations" block in profile/README.md
// from integrations.json (the single source of truth). Run: `node scripts/gen-profile-integrations.mjs`.
// A GitHub Action re-runs this whenever integrations.json changes.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(join(root, "integrations.json"), "utf8"));
const readmePath = join(root, "profile", "README.md");

const START = "<!-- INTEGRATIONS:START -->";
const END = "<!-- INTEGRATIONS:END -->";
const ORG = "https://github.com/ProxyHatCom";

// Category display order + a small icon per group.
const CATEGORIES = [
  ["Scraping & crawling", "🕷️"],
  ["Browser automation", "🌐"],
  ["AI agents & LLM", "🤖"],
  ["HTTP clients", "⚡"],
  ["OSINT & recon", "🔎"],
  ["Media & no-code", "📥"],
  ["Other", "📦"],
];

const registryUrl = (i) =>
  i.lang === "python"
    ? `https://pypi.org/project/${i.repo}/`
    : i.lang === "go"
      ? `https://pkg.go.dev/github.com/ProxyHatCom/${i.repo}`
      : `https://www.npmjs.com/package/${i.repo}`;

// Live version badge (shields.io) — updates itself as new versions ship.
function versionBadge(i) {
  if (i.lang === "python")
    return `https://img.shields.io/pypi/v/${i.repo}?logo=pypi&logoColor=white&label=PyPI&color=3775A9`;
  if (i.lang === "go")
    return `https://img.shields.io/github/v/tag/ProxyHatCom/${i.repo}?logo=go&logoColor=white&label=Go&color=00ADD8`;
  return `https://img.shields.io/npm/v/${i.repo}?logo=npm&logoColor=white&label=npm&color=CB3837`;
}

const published = (i) => i.status === "published";

function row(i) {
  const pkg = `[\`${i.repo}\`](${ORG}/${i.repo})`;
  if (published(i)) {
    return `| **${i.tool}** | ${pkg} | [![${i.lang}](${versionBadge(i)})](${registryUrl(i)}) |`;
  }
  const label = i.status === "scaffolded" ? "publishing soon" : "planned";
  return `| **${i.tool}** | ${pkg} | _${label}_ |`;
}

function categoryTables(items) {
  const out = [];
  for (const [name, icon] of CATEGORIES) {
    const group = items.filter((i) => (i.category || "Other") === name);
    if (group.length === 0) continue;
    group.sort((a, b) => b.stars - a.stars);
    out.push(
      `#### ${icon} ${name}\n\n| Tool | Package | Version |\n|:--|:--|:--|\n${group.map(row).join("\n")}`,
    );
  }
  return out.join("\n\n");
}

const all = manifest.integrations;
const liveCount = all.filter(published).length;

const block = `${START}
## Framework &amp; Tool Integrations

<br>

**${liveCount} first-class integrations** — route the tools you already use through ProxyHat residential proxies in **one line**, with country/city geo-targeting and sticky sessions. **Not forks:** each is a maintained plug-in / middleware that depends on the upstream tool, so its updates reach you automatically and ours track new releases in CI.

Install with \`npm i <package>\` · \`pip install <package>\` · \`go get github.com/ProxyHatCom/<package>\`. Works with any \`PROXY_URL\`; ProxyHat is the first-class default.

<br>

${categoryTables(all)}

<div align="center">

<br>

<sub>Want your tool supported next? [Open an issue](${ORG}) or watch the org.</sub>

</div>

${END}`;

const readme = readFileSync(readmePath, "utf8");
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (!re.test(readme)) throw new Error("Integration markers not found in profile/README.md");
writeFileSync(readmePath, readme.replace(re, block));
console.log(`Updated integrations block: ${liveCount}/${all.length} published across ${new Set(all.map((i) => i.category)).size} categories.`);
