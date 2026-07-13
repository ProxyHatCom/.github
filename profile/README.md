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
<tr>
<td width="50%" valign="top">

### [`playwright-proxyhat`](https://github.com/ProxyHatCom/playwright-proxyhat)

[npm](https://www.npmjs.com/package/playwright-proxyhat) · route **Playwright** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install playwright-proxyhat
```

</td>
<td width="50%" valign="top">

### [`requests-proxyhat`](https://github.com/ProxyHatCom/requests-proxyhat)

[PyPI](https://pypi.org/project/requests-proxyhat/) · route **requests** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install requests-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`httpx-proxyhat`](https://github.com/ProxyHatCom/httpx-proxyhat)

[PyPI](https://pypi.org/project/httpx-proxyhat/) · route **httpx** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install httpx-proxyhat
```

</td>
<td width="50%" valign="top">

### [`colly-proxyhat`](https://github.com/ProxyHatCom/colly-proxyhat)

[npm](https://www.npmjs.com/package/colly-proxyhat) · route **Colly** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install colly-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`curl-cffi-proxyhat`](https://github.com/ProxyHatCom/curl-cffi-proxyhat)

[PyPI](https://pypi.org/project/curl-cffi-proxyhat/) · route **curl_cffi** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install curl-cffi-proxyhat
```

</td>
<td width="50%" valign="top">

### [`llamaindex-proxyhat`](https://github.com/ProxyHatCom/llamaindex-proxyhat)

[PyPI](https://pypi.org/project/llamaindex-proxyhat/) · route **LlamaIndex** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install llamaindex-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`selenium-proxyhat`](https://github.com/ProxyHatCom/selenium-proxyhat)

[PyPI](https://pypi.org/project/selenium-proxyhat/) · route **Selenium** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install selenium-proxyhat
```

</td>
<td width="50%" valign="top">

### [`axios-proxyhat`](https://github.com/ProxyHatCom/axios-proxyhat)

[npm](https://www.npmjs.com/package/axios-proxyhat) · route **axios** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install axios-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`stagehand-proxyhat`](https://github.com/ProxyHatCom/stagehand-proxyhat)

[npm](https://www.npmjs.com/package/stagehand-proxyhat) · route **Stagehand** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install stagehand-proxyhat
```

</td>
<td width="50%" valign="top">

### [`scrapegraphai-proxyhat`](https://github.com/ProxyHatCom/scrapegraphai-proxyhat)

[PyPI](https://pypi.org/project/scrapegraphai-proxyhat/) · route **ScrapeGraphAI** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install scrapegraphai-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`sherlock-proxyhat`](https://github.com/ProxyHatCom/sherlock-proxyhat)

[PyPI](https://pypi.org/project/sherlock-proxyhat/) · route **Sherlock** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install sherlock-proxyhat
```

</td>
<td width="50%" valign="top">

### [`yt-dlp-proxyhat`](https://github.com/ProxyHatCom/yt-dlp-proxyhat)

[PyPI](https://pypi.org/project/yt-dlp-proxyhat/) · route **yt-dlp** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install yt-dlp-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`nodriver-proxyhat`](https://github.com/ProxyHatCom/nodriver-proxyhat)

[PyPI](https://pypi.org/project/nodriver-proxyhat/) · route **nodriver/undetected-chromedriver** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
pip install nodriver-proxyhat
```

</td>
<td width="50%" valign="top">

### [`projectdiscovery-proxyhat`](https://github.com/ProxyHatCom/projectdiscovery-proxyhat)

[npm](https://www.npmjs.com/package/projectdiscovery-proxyhat) · route **katana/httpx/subfinder** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install projectdiscovery-proxyhat
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [`n8n-nodes-proxyhat`](https://github.com/ProxyHatCom/n8n-nodes-proxyhat)

[npm](https://www.npmjs.com/package/n8n-nodes-proxyhat) · route **n8n** through ProxyHat residential proxies — rotating IPs, geo-targeting, sticky sessions.

```bash
npm install n8n-nodes-proxyhat
```

</td>
<td width="50%" valign="top"></td>
</tr>
</table>

<div align="center">

**Rolling out next** &nbsp;—&nbsp; 

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
