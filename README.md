# hypermemetic-www

The `hypermemetic.ai` landing page. Astro static site, deployed through the
plexus-platform's `site.*` methods using the repo-backed config at
`.hyperforge/platform.toml`.

## Local dev

```
npm install
npm run dev    # http://localhost:4321
```

## Build

```
npm run build  # outputs to dist/
```

## Deploy

The platform reads `.hyperforge/platform.toml` and handles the rest:

```
synapse platform site_add --tenant hypermemetic --repo .
```

On subsequent commits:

```
synapse platform site_redeploy --tenant hypermemetic --name www
```
