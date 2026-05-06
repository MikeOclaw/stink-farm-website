# Stink Farm Website

Marketing + e-commerce website for **Stink Farm** — the hilarious bluffing card game.  
Live at: [stinkfarmgame.com](https://stinkfarmgame.com)

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Payments:** Stripe Checkout (hosted)
- **Analytics:** Plausible.io (cookieless)
- **Hosting:** Vercel
- **Domain:** Cloudflare DNS → Vercel

---

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repo
git clone https://github.com/MikeOclaw/stink-farm-website.git
cd stink-farm-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values (see Environment Variables below)

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in all values:

| Variable | Description |
|----------|-------------|
| `STRIPE_SECRET_KEY` | Stripe secret key (sk_test_... for dev, sk_live_... for prod) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (pk_test_... or pk_live_...) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret (whsec_...) — from Stripe dashboard |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Your Plausible domain (e.g. stinkfarmgame.com) |
| `NEXT_PUBLIC_APP_URL` | Full URL of the app (e.g. https://stinkfarmgame.com) |

**Never commit `.env.local` or any file with actual secret values.**

---

## Stripe Setup

### Test Mode (development)

1. Use `sk_test_...` and `pk_test_...` keys from the Stripe dashboard
2. For webhook testing locally, use the [Stripe CLI](https://stripe.com/docs/stripe-cli):

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

The CLI will output a webhook signing secret — put this in `STRIPE_WEBHOOK_SECRET`.

### Production

1. In Stripe dashboard → Developers → Webhooks → Add endpoint:
   - URL: `https://stinkfarmgame.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `payment_intent.payment_failed`
2. Copy the signing secret to your Vercel environment variables

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, how to play, card showcase, story, CTA |
| `/buy` | Product page + Stripe checkout |
| `/buy/success` | Order confirmation page |
| `/how-to-play` | Full rules + card type guide |
| `/about` | Origin story |
| `/poker` | Landing page for poker players |
| `/farm-families` | Landing page for farm families |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

### API Routes

| Route | Description |
|-------|-------------|
| `POST /api/checkout` | Creates a Stripe Checkout session |
| `POST /api/webhooks/stripe` | Stripe webhook handler (validates signature) |

---

## Deployment (Vercel)

**Never deploy to production without Mike's explicit approval.**

```bash
# Build locally to check for errors
npm run build

# Deploy via Vercel CLI (preview only — never push to prod without approval)
vercel

# Production deploy (ONLY with Mike's explicit "deploy it")
vercel --prod
```

### Vercel Environment Variables

Set all variables from `.env.example` in Vercel dashboard:  
Project Settings → Environment Variables

Set for both **Preview** and **Production** environments.

---

## Assets

All game assets are in `/public/images/`:

| Folder | Contents |
|--------|----------|
| `/cards/` | 65 card images (675×1050px, rounded corners) |
| `/animals/` | Animal art (transparent bg — use on light backgrounds only!) |
| `/logo/` | Stink Farm logo (white bg only) |
| `/box/` | Box top + bottom art |
| `/photos/` | 6 lifestyle/product photos |

⚠️ **Critical:** Animal art and logo have white fringing. Never place them on dark backgrounds.

---

## Security

- Stripe webhook signature validation required (see `/app/api/webhooks/stripe/route.ts`)
- Rate limiting on checkout and webhook endpoints
- CSP + security headers configured in `next.config.js`
- No secrets in source code — environment variables only
- `.env.local` in `.gitignore`

---

## Scripts

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm audit        # Check for vulnerabilities
```

---

## Contact

Questions: hello@stinkfarmgame.com
