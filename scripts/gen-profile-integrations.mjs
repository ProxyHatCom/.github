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
const utm = (c) => `https://proxyhat.com?utm_source=github&utm_medium=readme&utm_campaign=${c}`;
const installCmd = (i) => (i.lang === "python" ? `pip install ${i.repo}` : `npm install ${i.repo}`);
const registry = (i) =>
  i.lang === "python"
    ? `[PyPI](https://pypi.org/project/${i.repo}/)`
    : `[npm](https://www.npmjs.com/package/${i.repo})`;

const all = manifest.integrations;
// Featured = anything already public on GitHub (live repo). Roadmap = the rest.
const featured = all.filter((i) => i.status === "published" || i.status === "scaffolded");
const roadmap = all.filter((i) => !(i.status === "published" || i.status === "scaffolded"));

const statusLabel = {
  published: "**Live**",
  scaffolded: "**Live on GitHub**",
  "upstream-pr-open": "PR open upstream",
  planned: "Planned",
};

function card(i) {
  const title = `### [\`${i.repo}\`](${ORG}/${i.repo})`;
  const line =
    i.status === "published"
      ? `${registry(i)} · route **${i.tool}** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.`
      : `route **${i.tool}** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions. *(npm/PyPI publish pending)*`;
  const install =
    i.status === "published"
      ? "```bash\n" + installCmd(i) + "\n```"
      : `[View on GitHub](${ORG}/${i.repo})`;
  return `${title}\n\n${line}\n\n${install}`;
}

// Two-column featured table (matches the "Open Source Tools" section style).
function featuredTable(items) {
  if (items.length === 0) return "";
  let out = "<table>\n";
  for (let r = 0; r < items.length; r += 2) {
    out += "<tr>\n";
    out += `<td width="50%" valign="top">\n\n${card(items[r])}\n\n</td>\n`;
    if (items[r + 1]) out += `<td width="50%" valign="top">\n\n${card(items[r + 1])}\n\n</td>\n`;
    else out += `<td width="50%" valign="top"></td>\n`;
    out += "</tr>\n";
  }
  out += "</table>";
  return out;
}

function roadmapChips(items) {
  return items
    .slice()
    .sort((a, b) => b.stars - a.stars)
    .map((i) => `\`${i.tool}\``)
    .join(" &nbsp;·&nbsp; ");
}

const block = `${START}
## Framework & Tool Integrations

<br>

First-class ProxyHat support for the tools developers already use — **one line** to send any of them out through residential IPs, with country/city geo-targeting and sticky sessions. **Not forks:** every integration is a maintained plug-in / middleware that depends on the upstream tool, so its updates reach you automatically and ours track new releases in CI.

<br>

${featuredTable(featured)}

<div align="center">

<br>

**Rolling out next** &nbsp;—&nbsp; ${roadmapChips(roadmap)}

<sub>Want your tool supported? [Open an issue](${ORG}) or watch the org.</sub>

</div>

${END}`;

const readme = readFileSync(readmePath, "utf8");
const re = new RegExp(`${START}[\\s\\S]*?${END}`);
if (!re.test(readme)) {
  throw new Error("Integration markers not found in profile/README.md");
}
writeFileSync(readmePath, readme.replace(re, block));
console.log(`Updated integrations block: ${featured.length} featured, ${roadmap.length} on the roadmap.`);
