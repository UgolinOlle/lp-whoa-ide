"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Hero } from "@/components/hero";

export default function LandingPage() {
  return (
    <main className="bg-muted py-16">
      <Hero />

      <section className="bg-background py-16 border-t">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">Unleash the power</h2>
          <p className="text-muted-foreground mb-10">
            The SaaS development framework to quickly build your SaaS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl bg-muted p-6 shadow"
            >
              <p className="text-xs font-medium text-green-600 mb-2">
                40 HOURS SAVED
              </p>
              <h3 className="text-lg font-semibold mb-1">
                Application Dashboard
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                The end-user portal with the core features of your SaaS.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ Dashboard
                </span>
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ Members & Subscription
                </span>
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ User & Account Settings
                </span>
              </div>
              <Image
                src="/dashboard.png"
                alt="Dashboard Screenshot"
                width={600}
                height={400}
                className="rounded mt-6"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl bg-muted p-6 shadow"
            >
              <p className="text-xs font-medium text-green-600 mb-2">
                100 HOURS SAVED
              </p>
              <h3 className="text-lg font-semibold mb-1">
                Subscriptions & Payments
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stripe Flat-rate, Per-seat, One-time, and Usage-based pricing
                models + coupons.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ Flat-rate & Per-seat
                </span>
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ Usage-based
                </span>
                <span className="bg-background px-2 py-1 rounded shadow">
                  ✅ One-time
                </span>
              </div>
              <Image
                src="/subscriptions.png"
                alt="Subscriptions Screenshot"
                width={600}
                height={400}
                className="rounded mt-6"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
