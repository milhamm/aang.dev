# aang.dev

Personal site built with TanStack Start — full-document SSR and a Glass Agency Hero shader background.

## Stack

- [TanStack Start](https://tanstack.com/start) + file-based TanStack Router
- [Shaders](https://shaders.com) WebGPU background (fluted glass + ChromaFlow)
- [oxlint](https://oxc.rs/docs/guide/usage/linter) + [oxfmt](https://oxc.rs/docs/guide/usage/formatter) for linting and formatting
- Nitro server output, deployed via Nixpacks

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & run

```bash
pnpm build
pnpm start
```

[`nixpacks.toml`](nixpacks.toml) pins Node 24 for Nixpacks-based hosts.

## Quality

```bash
pnpm lint     # oxlint --fix
pnpm format   # oxfmt
pnpm check    # oxlint + oxfmt --check (CI)
```
