"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Waves, Users, Globe, Recycle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              People. Planet. Purpose.
            </h1>
            <p className="mt-6 text-lg text-emerald-50">
              Hotlane Organisation is a Cape Town–based non-profit advancing ocean conservation, community empowerment, and youth-led sustainability across Africa.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">Get Involved</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Partner With Us</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur shadow-lg">
              <p className="text-xl font-semibold">Founded by</p>
              <p className="mt-2 text-2xl">Khotso Mogotlane</p>
              <p className="mt-4 text-emerald-100">
                Climate advocate • Ocean conservationist • Community builder
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">About Hotlane</h2>
            <p className="mt-4 text-slate-600">
              Hotlane Organisation works at the intersection of environmental sustainability,
              social justice, and youth development. From beach cleanups and circular economy
              projects to ESG advisory and climate storytelling, we turn action into impact.
            </p>
            <p className="mt-4 text-slate-600">
              Our work aligns with the UN Ocean Decade, Global Biodiversity Framework, and Africa-led climate solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-3xl shadow">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex gap-3"><Waves className="text-emerald-600" /> Ocean & coastal conservation</li>
                  <li className="flex gap-3"><Users className="text-emerald-600" /> Youth & community empowerment</li>
                  <li className="flex gap-3"><Recycle className="text-emerald-600" /> Circular economy initiatives</li>
                  <li className="flex gap-3"><Globe className="text-emerald-600" /> ESG & sustainability advisory</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p>Hotlane Organisation • Cape Town, South Africa</p>
          <p>Email: <a href="mailto:hotlaneza@gmail.com" className="underline">hotlaneza@gmail.com</a></p>
          <p>Follow us: <a href="https://www.instagram.com/hotlane_organisation" className="underline">@hotlane_organisation</a></p>
        </div>
      </footer>
    </div>
  );
}
