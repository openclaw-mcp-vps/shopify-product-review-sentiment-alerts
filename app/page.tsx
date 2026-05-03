export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Sentiment Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Before Your{" "}
          <span className="text-[#58a6ff]">Reviews Turn Toxic</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ReviewSentinel connects to your Shopify store via webhooks, analyzes every new review with AI sentiment analysis, and fires instant email or SMS alerts the moment a negative trend is detected.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. Setup in under 5 minutes.</p>
        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">Real-time</div>
            <div className="text-sm text-[#8b949e]">Webhook-powered monitoring</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">AI</div>
            <div className="text-sm text-[#8b949e]">Sentiment analysis engine</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-bold text-[#58a6ff] mb-1">Instant</div>
            <div className="text-sm text-[#8b949e]">Email &amp; SMS alerts</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited Shopify stores",
              "Real-time webhook ingestion",
              "AI sentiment scoring per review",
              "Configurable alert thresholds",
              "Email + SMS notifications",
              "7-day sentiment trend dashboard",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Shopify store?</h3>
            <p className="text-[#8b949e] text-sm">After subscribing, you enter your Shopify store URL and we automatically register a webhook for new product reviews. No coding required — setup takes under 5 minutes.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What triggers an alert?</h3>
            <p className="text-[#8b949e] text-sm">You set a sentiment threshold (e.g., alert when 3 or more negative reviews arrive within 24 hours, or when average sentiment drops below a score you choose). Alerts fire via email and optionally SMS.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel from your billing portal at any time with no questions asked. Your monitoring stops at the end of the billing period.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} ReviewSentinel. Built for Shopify merchants.
      </footer>
    </main>
  );
}
