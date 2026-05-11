import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Stink Farm',
  description: 'Privacy policy for stinkfarmgame.com. Learn how we collect and use your data.',
};

export default function PrivacyPage() {
  const lastUpdated = 'May 2026';

  return (
    <section className="bg-cream min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-5xl text-barn-red mb-2">Privacy Policy</h1>
        <p className="font-body text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-cream-dark font-body text-near-black space-y-8 leading-relaxed">
          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">1. Overview</h2>
            <p>
              Stink Farm (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates
              stinkfarmgame.com. We are committed to protecting your privacy and being
              transparent about how we use information.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">2. Data We Collect</h2>
            <h3 className="font-semibold mb-2">When You Make a Purchase</h3>
            <p className="mb-4">
              Purchases are processed by Stripe, a secure third-party payment processor. We
              never see or store your credit card number. Stripe provides us with your:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Shipping address</li>
              <li>Order amount and status</li>
            </ul>
            <p>
              We use this information only to fulfill your order and send you shipping
              confirmation.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Analytics</h3>
            <p>
              We use Plausible Analytics — a privacy-first, cookieless analytics platform. It
              collects aggregated, anonymized data about page views and conversions. No
              personal data or IP addresses are stored. No cookie consent banner is needed.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To fulfill and ship your order</li>
              <li>To send order confirmation and shipping updates</li>
              <li>To improve our website (via anonymized analytics)</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> sell, rent, or share your personal information with
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">4. Data Retention</h2>
            <p>
              Order data is retained in Stripe&apos;s systems for as long as required for
              business and legal purposes. You may request deletion of your personal data by
              emailing us at hello@stinkfarmgame.com.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">5. Cookies</h2>
            <p>
              We do not use tracking cookies. Our analytics provider (Plausible) is
              cookie-free. No cookie consent banner is needed.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              6. Third-Party Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Stripe</strong> — payment processing. See{' '}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-barn-red underline"
                >
                  Stripe&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Plausible Analytics</strong> — anonymized web analytics. See{' '}
                <a
                  href="https://plausible.io/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-barn-red underline"
                >
                  Plausible&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Vercel</strong> — website hosting. See{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-barn-red underline"
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">7. Your Rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by emailing{' '}
              <a
                href="mailto:hello@stinkfarmgame.com"
                className="text-barn-red underline"
              >
                hello@stinkfarmgame.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">8. Security</h2>
            <p>
              We take reasonable measures to protect your information. Our site uses HTTPS
              encryption, and payment processing is handled entirely by Stripe — card data
              never touches our servers.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">9. Changes</h2>
            <p>
              We may update this policy occasionally. If we make material changes, we will
              update the date at the top of this page. Continued use of the site constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">10. Contact Us</h2>
            <p>
              Questions about this privacy policy? Contact us at{' '}
              <a
                href="mailto:hello@stinkfarmgame.com"
                className="text-barn-red underline"
              >
                hello@stinkfarmgame.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
