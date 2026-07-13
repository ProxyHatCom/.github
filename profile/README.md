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
## Framework & Tool Integrations

<br>

First-class ProxyHat support for the tools developers already use — **one line** to send any of them out through residential IPs, with country/city geo-targeting and sticky sessions. **Not forks:** every integration is a maintained plug-in / middleware that depends on the upstream tool, so its updates reach you automatically and ours track new releases in CI.

<br>

<table>
<tr>
<td width="50%" valign="top">

### [`scrapy-proxyhat`](https://github.com/ProxyHatCom/scrapy-proxyhat)

[PyPI](https://pypi.org/project/scrapy-proxyhat/) · route **Scrapy** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install scrapy-proxyhat
```

</td>
<td width="50%" valign="top">

### [`crawlee-proxyhat`](https://github.com/ProxyHatCom/crawlee-proxyhat)

[npm](https://www.npmjs.com/package/crawlee-proxyhat) · route **Crawlee** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install crawlee-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`crawl4ai-proxyhat`](https://github.com/ProxyHatCom/crawl4ai-proxyhat)

[PyPI](https://pypi.org/project/crawl4ai-proxyhat/) · route **Crawl4AI** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install crawl4ai-proxyhat
```

</td>
<td width="50%" valign="top">

### [`browser-use-proxyhat`](https://github.com/ProxyHatCom/browser-use-proxyhat)

[PyPI](https://pypi.org/project/browser-use-proxyhat/) · route **browser-use** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install browser-use-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`langchain-proxyhat`](https://github.com/ProxyHatCom/langchain-proxyhat)

[PyPI](https://pypi.org/project/langchain-proxyhat/) · route **LangChain** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install langchain-proxyhat
```

</td>
<td width="50%" valign="top">

### [`puppeteer-extra-plugin-proxyhat`](https://github.com/ProxyHatCom/puppeteer-extra-plugin-proxyhat)

[npm](https://www.npmjs.com/package/puppeteer-extra-plugin-proxyhat) · route **puppeteer-extra** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install puppeteer-extra-plugin-proxyhat
```

</td>
</tr>
</table>

<div align="center">

<br>

**Rolling out next** &nbsp;—&nbsp; `axios` &nbsp;·&nbsp; `yt-dlp` &nbsp;·&nbsp; `Playwright` &nbsp;·&nbsp; `Sherlock` &nbsp;·&nbsp; `requests` &nbsp;·&nbsp; `n8n` &nbsp;·&nbsp; `LlamaIndex` &nbsp;·&nbsp; `Selenium` &nbsp;·&nbsp; `Colly` &nbsp;·&nbsp; `ScrapeGraphAI` &nbsp;·&nbsp; `httpx` &nbsp;·&nbsp; `Stagehand` &nbsp;·&nbsp; `katana/httpx/subfinder` &nbsp;·&nbsp; `nodriver/undetected-chromedriver` &nbsp;·&nbsp; `curl_cffi`

<sub>Want your tool supported? [Open an issue](https://github.com/ProxyHatCom) or watch the org.</sub>

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
