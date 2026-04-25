# hypermemetic-www

Redirect shell for `www.hypermemetic.ai` → `https://hypermemetic.ai/`.

The redirect happens client-side via three layered mechanisms:

1. **`<meta http-equiv="refresh">`** — fires before the page renders.
2. **`window.location.replace`** — JS fallback, also no-render.
3. **Visible `<a>` link** — fallback for clients without JS or refresh.

A proper HTTP `301` would be ideal but requires either (a) a working
CF Pages `_redirects` parse path on direct-upload (currently not
applied — file is uploaded but ignored), or (b) a CF zone-level
Single Redirect rule (needs `Rulesets:Edit` scope on the API token).

When the token gains that scope, replace this shell with a
zone-level rule and unify under a single `hypermemetic-tools`
Pages project.

## Update

```
synapse platform site_redeploy --tenant hypermemetic --name www
```
