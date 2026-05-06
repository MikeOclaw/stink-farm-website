import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Stink Farm',
  description: 'Terms of service for stinkfarmgame.com.',
};

export default function TermsPage() {
  const lastUpdated = 'May 2026';

  return (
    <section className="bg-cream min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-5xl text-barn-red mb-2">
          Terms of Service
        </h1>
        <p className="font-body text-gray-500 mb-10">Last updated: {lastUpdated}</p>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-cream-dark font-body text-near-black space-y-8 leading-relaxed">
          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">1. Acceptance</h2>
            <p>
              By accessing or purchasing from stinkfarmgame.com, you agree to these Terms of
              Service. If you do not agree, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">2. Products</h2>
            <p>
              We sell Stink Farm, a physical card game. Descriptions, images, and prices are
              accurate to the best of our knowledge. We reserve the right to update product
              details or pricing at any time.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">3. Orders & Payment</h2>
            <p className="mb-4">
              Orders are processed through Stripe. By placing an order, you represent that:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>You are authorized to use the payment method provided</li>
              <li>The information you provide is accurate and complete</li>
              <li>You are 13 years of age or older</li>
            </ul>
            <p>
              We reserve the right to cancel orders if there is an error in pricing, payment
              fails, or we suspect fraud. You will be notified and refunded if an order is
              cancelled.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              4. Shipping & Delivery
            </h2>
            <p>
              We ship within the United States via USPS. Estimated delivery is 5–10 business
              days after your order ships. Pre-orders ship once production is complete.
              We are not responsible for delays caused by USPS or events outside our control.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              5. Returns & Refunds
            </h2>
            <p>
              If your order arrives damaged or incorrect, contact us within 30 days at{' '}
              <a href="mailto:hello@stinkfarmgame.com" className="text-barn-red underline">
                hello@stinkfarmgame.com
              </a>{' '}
              and we will make it right with a replacement or refund. We want you to be
              happy with your purchase.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website — including card art, logo, game design, copy, and
              images — is the property of Stink Farm and protected by copyright. You may not
              reproduce, distribute, or create derivative works without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Stink Farm shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this
              site or products. Our total liability is limited to the amount you paid for
              your order.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Illinois, USA. Any
              disputes shall be resolved in the courts of Illinois.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">9. Changes</h2>
            <p>
              We may update these terms from time to time. The updated date at the top of
              this page reflects the latest revision. Continued use constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-headline text-2xl text-near-black mb-3">10. Contact</h2>
            <p>
              Questions? Email{' '}
              <a href="mailto:hello@stinkfarmgame.com" className="text-barn-red underline">
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
