<picture>
  <source media="(prefers-color-scheme: dark)" srcset="mainlogowhite.png">
  <source media="(prefers-color-scheme: light)" srcset="mainlogo.png">
  <img alt="ProxyHat" src="mainlogowhite.png" width="260">
</picture>

<br><br>

<div align="center">

### Residential proxies &amp; open-source tooling for web scraping and AI agents

**50M+ residential IPs · 195+ countries · AI-filtered for clean traffic**

<br>

[![Website](https://img.shields.io/badge/proxyhat.com-4F8BFF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://proxyhat.com?utm_source=github&utm_medium=readme&utm_campaign=org_profile)
[![Docs](https://img.shields.io/badge/Docs-1F2937?style=for-the-badge&logo=readthedocs&logoColor=white)](https://proxyhat.com/docs?utm_source=github&utm_medium=readme&utm_campaign=org_profile)
[![npm](https://img.shields.io/npm/v/proxyhat?style=for-the-badge&logo=npm&label=SDK&color=CB3837)](https://www.npmjs.com/package/proxyhat)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

<br>

ProxyHat is residential-proxy infrastructure — plus the open-source **SDKs, tools, and framework integrations** that make it *one line of code* to route your scrapers, crawlers, and AI agents through clean residential IPs. Everything below is MIT-licensed and works with any `PROXY_URL`; first-class support for ProxyHat is the natural fuel.

<br>

---

## Official SDKs

One API client + connection helpers — rotation, geo-targeting (country / region / city), and sticky sessions — for every stack.

<table>
<tr>
<td width="33%" valign="top">

### Node · [`proxyhat`](https://github.com/ProxyHatCom/node-sdk)

[![npm](https://img.shields.io/npm/v/proxyhat?logo=npm&label=npm&color=CB3837)](https://www.npmjs.com/package/proxyhat)

```bash
npm install proxyhat
```

</td>
<td width="33%" valign="top">

### Python · [`proxyhat`](https://github.com/ProxyHatCom/python-sdk)

[![PyPI](https://img.shields.io/pypi/v/proxyhat?logo=pypi&logoColor=white&label=pypi&color=3775A9)](https://pypi.org/project/proxyhat/)

```bash
pip install proxyhat
```

</td>
<td width="33%" valign="top">

### Go · [`go-sdk`](https://github.com/ProxyHatCom/go-sdk)

[![Go](https://img.shields.io/badge/go-module-00ADD8?logo=go&logoColor=white)](https://github.com/ProxyHatCom/go-sdk)

```bash
go get github.com/ProxyHatCom/go-sdk
```

</td>
</tr>
</table>

## Tools

<table>
<tr>
<td width="50%" valign="top">

### [`HatFetch`](https://github.com/ProxyHatCom/HatFetch) — MCP server

[![npm](https://img.shields.io/npm/v/hatfetch?logo=npm&label=npm&color=CB3837)](https://www.npmjs.com/package/hatfetch)

Give Claude / Cursor / any MCP client `scrape` · `crawl` · `screenshot` → clean Markdown. Fast HTTP first, real stealth browser through residential proxies when a page is blocked.

</td>
<td width="50%" valign="top">

### [`hatbreak`](https://github.com/ProxyHatCom/hatbreak) — anti-detect engine

[![npm](https://img.shields.io/npm/v/hatbreak?logo=npm&label=npm&color=CB3837)](https://www.npmjs.com/package/hatbreak)

URL → clean Markdown. Auto-escalates HTTP → stealth browser (Patchright) via residential proxies + CAPTCHA solving + humanization, with an SSRF guard.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`socks5-bench`](https://github.com/ProxyHatCom/socks5-bench) — proxy benchmarking

Latency (p50/p95), success rates, and IP-rotation metrics for any SOCKS5 proxy, from the command line.

```bash
pipx install git+https://github.com/ProxyHatCom/socks5-bench.git
```

</td>
<td width="50%" valign="top">

### [`ipvet`](https://github.com/ProxyHatCom/ipvet) — IP reputation

Check proxy IP reputation before you burn requests: 12 DNSBLs, datacenter/residential classification, 0–100 scoring.

```bash
pipx install git+https://github.com/ProxyHatCom/ipvet.git
```

</td>
</tr>
</table>

<!-- INTEGRATIONS:START -->
## Framework &amp; Tool Integrations

<br>

**21 first-class integrations** — route the tools you already use through ProxyHat residential proxies in **one line**, with country/city geo-targeting and sticky sessions. **Not forks:** each is a maintained plug-in / middleware that depends on the upstream tool, so its updates reach you automatically and ours track new releases in CI.

Install with `npm i <package>` · `pip install <package>` · `go get github.com/ProxyHatCom/<package>`. Works with any `PROXY_URL`; ProxyHat is the first-class default.

<br>

#### 🕷️ Scraping & crawling

| Tool | Package | Version |
|:--|:--|:--|
| **Scrapy** | [`scrapy-proxyhat`](https://github.com/ProxyHatCom/scrapy-proxyhat) | [![python](https://img.shields.io/pypi/v/scrapy-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/scrapy-proxyhat/) |
| **Crawl4AI** | [`crawl4ai-proxyhat`](https://github.com/ProxyHatCom/crawl4ai-proxyhat) | [![python](https://img.shields.io/pypi/v/crawl4ai-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/crawl4ai-proxyhat/) |
| **Colly** | [`colly-proxyhat`](https://github.com/ProxyHatCom/colly-proxyhat) | [![go](https://img.shields.io/github/v/tag/ProxyHatCom/colly-proxyhat?logo=go&logoColor=white&label=Go&color=00ADD8)](https://pkg.go.dev/github.com/ProxyHatCom/colly-proxyhat) |
| **Crawlee** | [`crawlee-proxyhat`](https://github.com/ProxyHatCom/crawlee-proxyhat) | [![node](https://img.shields.io/npm/v/crawlee-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/crawlee-proxyhat) |

#### 🌐 Browser automation

| Tool | Package | Version |
|:--|:--|:--|
| **puppeteer-extra** | [`puppeteer-extra-plugin-proxyhat`](https://github.com/ProxyHatCom/puppeteer-extra-plugin-proxyhat) | [![node](https://img.shields.io/npm/v/puppeteer-extra-plugin-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/puppeteer-extra-plugin-proxyhat) |
| **Playwright** | [`playwright-proxyhat`](https://github.com/ProxyHatCom/playwright-proxyhat) | [![node](https://img.shields.io/npm/v/playwright-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/playwright-proxyhat) |
| **Selenium** | [`selenium-proxyhat`](https://github.com/ProxyHatCom/selenium-proxyhat) | [![python](https://img.shields.io/pypi/v/selenium-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/selenium-proxyhat/) |
| **Stagehand** | [`stagehand-proxyhat`](https://github.com/ProxyHatCom/stagehand-proxyhat) | [![node](https://img.shields.io/npm/v/stagehand-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/stagehand-proxyhat) |
| **nodriver/undetected-chromedriver** | [`nodriver-proxyhat`](https://github.com/ProxyHatCom/nodriver-proxyhat) | [![python](https://img.shields.io/pypi/v/nodriver-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/nodriver-proxyhat/) |

#### 🤖 AI agents & LLM

| Tool | Package | Version |
|:--|:--|:--|
| **LangChain** | [`langchain-proxyhat`](https://github.com/ProxyHatCom/langchain-proxyhat) | [![python](https://img.shields.io/pypi/v/langchain-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/langchain-proxyhat/) |
| **browser-use** | [`browser-use-proxyhat`](https://github.com/ProxyHatCom/browser-use-proxyhat) | [![python](https://img.shields.io/pypi/v/browser-use-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/browser-use-proxyhat/) |
| **LlamaIndex** | [`llamaindex-proxyhat`](https://github.com/ProxyHatCom/llamaindex-proxyhat) | [![python](https://img.shields.io/pypi/v/llamaindex-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/llamaindex-proxyhat/) |
| **ScrapeGraphAI** | [`scrapegraphai-proxyhat`](https://github.com/ProxyHatCom/scrapegraphai-proxyhat) | [![python](https://img.shields.io/pypi/v/scrapegraphai-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/scrapegraphai-proxyhat/) |

#### ⚡ HTTP clients

| Tool | Package | Version |
|:--|:--|:--|
| **axios** | [`axios-proxyhat`](https://github.com/ProxyHatCom/axios-proxyhat) | [![node](https://img.shields.io/npm/v/axios-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/axios-proxyhat) |
| **requests** | [`requests-proxyhat`](https://github.com/ProxyHatCom/requests-proxyhat) | [![python](https://img.shields.io/pypi/v/requests-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/requests-proxyhat/) |
| **httpx** | [`httpx-proxyhat`](https://github.com/ProxyHatCom/httpx-proxyhat) | [![python](https://img.shields.io/pypi/v/httpx-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/httpx-proxyhat/) |
| **curl_cffi** | [`curl-cffi-proxyhat`](https://github.com/ProxyHatCom/curl-cffi-proxyhat) | [![python](https://img.shields.io/pypi/v/curl-cffi-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/curl-cffi-proxyhat/) |

#### 🔎 OSINT & recon

| Tool | Package | Version |
|:--|:--|:--|
| **Sherlock** | [`sherlock-proxyhat`](https://github.com/ProxyHatCom/sherlock-proxyhat) | [![python](https://img.shields.io/pypi/v/sherlock-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/sherlock-proxyhat/) |
| **katana/httpx/subfinder** | [`projectdiscovery-proxyhat`](https://github.com/ProxyHatCom/projectdiscovery-proxyhat) | [![go](https://img.shields.io/github/v/tag/ProxyHatCom/projectdiscovery-proxyhat?logo=go&logoColor=white&label=Go&color=00ADD8)](https://pkg.go.dev/github.com/ProxyHatCom/projectdiscovery-proxyhat) |

#### 📥 Media & no-code

| Tool | Package | Version |
|:--|:--|:--|
| **yt-dlp** | [`yt-dlp-proxyhat`](https://github.com/ProxyHatCom/yt-dlp-proxyhat) | [![python](https://img.shields.io/pypi/v/yt-dlp-proxyhat?logo=pypi&logoColor=white&label=PyPI&color=3775A9)](https://pypi.org/project/yt-dlp-proxyhat/) |
| **n8n** | [`n8n-nodes-proxyhat`](https://github.com/ProxyHatCom/n8n-nodes-proxyhat) | [![node](https://img.shields.io/npm/v/n8n-nodes-proxyhat?logo=npm&logoColor=white&label=npm&color=CB3837)](https://www.npmjs.com/package/n8n-nodes-proxyhat) |

<div align="center">

<br>

<sub>Want your tool supported next? [Open an issue](https://github.com/ProxyHatCom) or watch the org.</sub>

</div>

<!-- INTEGRATIONS:END -->

## Quickstart

```bash
# Any HTTP client — point it at the gateway
curl -x http://USER:PASS@gate.proxyhat.com:8080 https://api.ipify.org
```

```ts
// …or go from an API key to a ready proxy URL with the SDK
import { ProxyHat } from "proxyhat";

const proxy = new ProxyHat({ apiKey: process.env.PROXYHAT_API_KEY });
const url = await proxy.connectionUrl({ country: "us" }); // rotating US residential IP
```

<div align="center">

<br>

---

<br>

[**Get started**](https://proxyhat.com/register?utm_source=github&utm_medium=readme&utm_campaign=org_profile) &nbsp;·&nbsp; [Pricing](https://proxyhat.com/pricing?utm_source=github&utm_medium=readme&utm_campaign=org_profile) &nbsp;·&nbsp; [Docs](https://proxyhat.com/docs?utm_source=github&utm_medium=readme&utm_campaign=org_profile) &nbsp;·&nbsp; [Locations](https://proxyhat.com/locations?utm_source=github&utm_medium=readme&utm_campaign=org_profile) &nbsp;·&nbsp; [support@proxyhat.com](mailto:support@proxyhat.com)

<sub>Pay-as-you-go from $3.85/GB · crypto accepted · traffic never expires · 99.9% uptime SLA</sub>

</div>
