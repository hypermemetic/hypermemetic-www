# hypermemetic-www

Redirect shell for `www.hypermemetic.ai` → `https://hypermemetic.ai/`.

No build step. CF Pages serves the contents of `public/` directly:

- `_redirects` does the 301 at the edge for every path
- `index.html` is a fallback (meta-refresh + visible link) for any
  client that doesn't follow `_redirects`

Update via the platform:

```
synapse platform site_redeploy --tenant hypermemetic --name www
```
