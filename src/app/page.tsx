import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="mx-auto max-w-5xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                🚀 AI-Powered Political Intelligence
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
                Constituency Intelligence Dashboard
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform raw constituency data into actionable strategic insights. Leverage AI to understand voter concerns, identify campaign opportunities, and outwit your opponents—all in one powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white hover:shadow-lg transition-all"
                >
                  Launch Dashboard
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-16 rounded-xl border border-gray-300 bg-gray-900 p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="bg-gray-800 rounded p-4 space-y-2 text-xs text-gray-400">
                  <p>&gt;&gt; Dashboard Ready</p>
                  <p>&gt;&gt; Analyzing constituency: Urban District-42</p>
                  <p>&gt;&gt; Top Issues: Infrastructure (95/100), Employment (87/100)</p>
                  <p>&gt;&gt; Strategy: Focus youth outreach on 3 key areas</p>
                  <p className="text-blue-400">&gt;&gt; AI Analysis Complete ✓</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Core Features</h2>
              <p className="text-xl text-gray-600">
                Everything you need to win your constituency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Constituency Profile
                </h3>
                <p className="text-gray-600">
                  Input area name, population, and key demographics. Build a comprehensive profile of your target constituency.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Issue Heatmap
                </h3>
                <p className="text-gray-600">
                  Enter top local problems and let AI rank them by voter impact. Identify what really matters to voters.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Strategy Advisor
                </h3>
                <p className="text-gray-600">
                  Get AI-powered suggestions for campaign focus areas based on your constituency's unique profile.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Report Generator
                </h3>
                <p className="text-gray-600">
                  One-click AI summary reports ready for party leaders and stakeholders. Professional insights instantly.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⚔️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Opponent Analysis
                </h3>
                <p className="text-gray-600">
                  Compare your data vs opponent's to find weaknesses and identify strategic opportunities for victory.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Real-time Insights
                </h3>
                <p className="text-gray-600">
                  Get live updates on voter sentiment and campaign performance. Make data-driven decisions fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
              How It Works
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Create Constituency Profile",
                  desc: "Input demographics, population, and area characteristics",
                },
                {
                  step: 2,
                  title: "List Local Issues",
                  desc: "Enter top problems voters care about in your constituency",
                },
                {
                  step: 3,
                  title: "AI Analysis",
                  desc: "Our AI ranks issues by voter impact and voter sentiment",
                },
                {
                  step: 4,
                  title: "Get Recommendations",
                  desc: "Receive strategic focus areas and campaign suggestions",
                },
                {
                  step: 5,
                  title: "Compare Opponents",
                  desc: "Find weaknesses in opponent's position to exploit",
                },
                {
                  step: 6,
                  title: "Generate Reports",
                  desc: "Create professional insights reports for leadership",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Win Your Constituency?
            </h2>
            <p className="text-xl opacity-90">
              Start leveraging AI-powered intelligence for your political campaign today.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Launch Dashboard Now
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link></li>
                  <li><a href="#features" className="hover:text-gray-900">Features</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
                <p className="text-gray-600">support@constituency.ai</p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
              <p>&copy; 2026 Constituency Intelligence. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
