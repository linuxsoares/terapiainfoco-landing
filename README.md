# TerapiaInFoco — Landing Page

Site institucional publicado em [terapiainfoco.com.br](https://terapiainfoco.com.br) via GitHub Pages
(React 19 + Vite + Tailwind v4).

```bash
bun install
bun run dev      # http://localhost:5173
bun run build    # gera dist/
bun run lint
```

## Deploy

Cada push na `main` publica o site pelo workflow `.github/workflows/deploy.yml`. Ele lê as variáveis
do repositório (Settings → Secrets and variables → Actions → Variables):

- `LANDING_API_URL`: URL pública do backend (agendamento, pedidos de acesso, validação de documentos)
- `LANDING_APP_URL`: URL do painel (links de entrar e buscar psicólogo)

## Contratos compartilhados

`src/shared/` é uma cópia dos tipos da API e dos textos legais do repositório do app, que é a fonte da
verdade. Ao mudar os Termos de Uso, o Aviso de Privacidade ou os contratos de leads e validação de
documentos lá, atualize esta cópia também.
