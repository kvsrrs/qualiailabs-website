import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  ShieldCheck,
  Globe,
  Building2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Cpu,
  Database,
  Workflow,
  Sparkles,
} from "lucide-react";

function App() {
  const services = [
    {
      icon: <BrainCircuit size={36} />,
      title: "AI-Led Quality Engineering",
      desc: "Transform enterprise testing with intelligent automation, predictive quality analytics, and autonomous validation frameworks.",
    },
    {
      icon: <Bot size={36} />,
      title: "Enterprise Automation",
      desc: "Accelerate business operations through hyperautomation, workflow orchestration, and AI-assisted delivery models.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Digital Assurance",
      desc: "Deliver resilient platforms with security validation, performance engineering, reliability testing, and observability.",
    },
    {
      icon: <Cpu size={36} />,
      title: "AI Transformation Consulting",
      desc: "Design enterprise-scale AI adoption strategies aligned with operational excellence and measurable business outcomes.",
    },
    {
      icon: <Database size={36} />,
      title: "Data & Platform Engineering",
      desc: "Enable scalable digital ecosystems through cloud-native architecture, modern data platforms, and intelligent integration.",
    },
    {
      icon: <Workflow size={36} />,
      title: "QE Modernization",
      desc: "Modernize legacy QA operating models into scalable Quality Engineering ecosystems powered by AI and DevOps.",
    },
  ];

  const insights = [
    "AI-Driven Test Automation Strategies for Enterprises",
    "Future of Autonomous Quality Engineering",
    "Scaling GenAI Governance Across Enterprises",
    "Modern QE Operating Models for Digital Businesses",
  ];

  const careers = [
    "AI Test Automation Engineers",
    "GenAI Solution Architects",
    "Performance Engineering Specialists",
    "Cloud & DevOps Consultants",
  ];

  return (
    <div className="bg-[#050816] text-white font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#050816]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Sparkles className="text-cyan-400" />
            <h1 className="text-2xl font-bold tracking-wide">
              QualiAI Labs
            </h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#services" className="hover:text-cyan-400">Services</a>
            <a href="#success" className="hover:text-cyan-400">Success Stories</a>
            <a href="#accelerators" className="hover:text-cyan-400">AI Accelerators</a>
            <a href="#casestudies" className="hover:text-cyan-400">Case Studies</a>
            <a href="#genailabs" className="hover:text-cyan-400">GenAI Labs</a>
            <a href="#platforms" className="hover:text-cyan-400">Platforms</a>
            <a href="#academy" className="hover:text-cyan-400">QE Academy</a>
            <a href="#insights" className="hover:text-cyan-400">Insights</a>
            <a href="#careers" className="hover:text-cyan-400">Careers</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-br from-[#050816] via-[#0b122f] to-[#111827]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          <div className="flex justify-center mb-6">
            <Globe size={64} className="text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Engineering Intelligent
            <span className="text-cyan-400"> Digital Quality</span>
            <br />
            for the AI Era
          </h1>

          <p className="text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
            QualiAI Labs is a next-generation consulting and technology
            transformation company specializing in AI-led Quality Engineering,
            Enterprise Automation, Digital Assurance, and Intelligent Platform
            Modernization for global enterprises.
          </p>

          <div className="mt-10 flex gap-5 justify-center flex-wrap">
            <a
              href="#services"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-2xl font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section
        id="whatwedo"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            What We Do
          </h2>

          <p className="text-slate-300 text-xl leading-10">
            We help enterprises modernize their Quality Engineering ecosystems,
            accelerate AI adoption, optimize delivery operations, and build
            resilient digital platforms through innovation-led consulting,
            intelligent automation, and engineering excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-[#12192f] p-8 rounded-3xl border border-slate-700">
              <BrainCircuit size={48} className="text-cyan-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-4">
                AI Innovation
              </h3>
              <p className="text-slate-300">
                AI-powered enterprise modernization and intelligent operational transformation.
              </p>
            </div>

            <div className="bg-[#12192f] p-8 rounded-3xl border border-slate-700">
              <ShieldCheck size={48} className="text-cyan-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-4">
                Digital Quality
              </h3>
              <p className="text-slate-300">
                Enterprise-grade Quality Engineering, assurance, and platform reliability.
              </p>
            </div>

            <div className="bg-[#12192f] p-8 rounded-3xl border border-slate-700">
              <Bot size={48} className="text-cyan-400 mb-5" />
              <h3 className="text-2xl font-semibold mb-4">
                Intelligent Automation
              </h3>
              <p className="text-slate-300">
                Hyperautomation strategies enabling scalable business efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="bg-[#111827] border border-slate-700 rounded-3xl p-8"
              >
                <div className="text-cyan-400 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-5">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-8">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section
        id="success"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Client Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "AI-powered banking QE transformation reducing release cycles by 60%",
              "Global telecom automation platform enabling 85% testing acceleration",
              "Healthcare digital assurance modernization for enterprise-scale compliance",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                  Enterprise Success
                </h3>

                <p className="text-slate-300 leading-8">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Accelerators */}
      <section
        id="accelerators"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">
            AI Accelerators
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Autonomous Testing Frameworks",
              "AI Copilot Accelerators",
              "GenAI QE Assistants",
              "Enterprise Quality Dashboards",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-2xl p-8"
              >
                <Bot size={44} className="mx-auto text-cyan-400 mb-5" />
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="casestudies"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Enterprise Case Studies
          </h2>

          <div className="space-y-8">
            {[
              "Modernizing enterprise QA ecosystems using AI-led automation",
              "Reducing production defects through predictive quality analytics",
              "Scaling cloud-native quality engineering transformation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-3xl p-10"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Case Study {index + 1}
                </h3>

                <p className="text-slate-300 leading-8">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GenAI Labs */}
      <section
        id="genailabs"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            GenAI Labs
          </h2>

          <p className="text-xl text-slate-300 leading-10">
            Innovation hub focused on Generative AI research, enterprise copilots,
            intelligent automation frameworks, AI governance models, and autonomous
            engineering ecosystems.
          </p>
        </div>
      </section>

      {/* Automation Platforms */}
      <section
        id="platforms"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16">
            Automation Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "AI Test Automation Platform",
              "Digital Assurance Platform",
              "Enterprise Workflow Automation",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-3xl p-8"
              >
                <Workflow size={44} className="mx-auto text-cyan-400 mb-5" />

                <h3 className="text-2xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QE Academy */}
      <section
        id="academy"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            QE Academy
          </h2>

          <p className="text-xl text-slate-300 leading-10">
            Enterprise learning ecosystem delivering AI-led Quality Engineering,
            automation, DevOps, cloud testing, and GenAI enablement programs for
            future-ready engineering teams.
          </p>

          <div className="mt-12">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              Explore Training Programs
            </a>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section
        id="partnerships"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-10">
            Strategic Partnerships
          </h2>

          <p className="text-xl text-slate-300 leading-9">
            We collaborate with enterprise technology ecosystems, AI innovators,
            cloud providers, and automation platforms to deliver scalable
            transformation outcomes for global clients.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {["AI Platforms", "Cloud Ecosystems", "Automation Tools", "Enterprise Solutions"].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111827] border border-slate-700 rounded-2xl p-8"
              >
                <Building2 size={42} className="mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section
        id="insights"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Insights & Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((item, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {item}
                </h3>

                <p className="text-slate-300 leading-8">
                  Thought leadership, enterprise research, AI transformation
                  perspectives, and innovation frameworks from QualiAI Labs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section
        id="careers"
        className="py-24 px-6 bg-[#0b1020]"
      >
        <div className="max-w-6xl mx-auto text-center">
          <Briefcase size={54} className="mx-auto text-cyan-400 mb-8" />

          <h2 className="text-5xl font-bold mb-10">
            Careers & AI Opportunities
          </h2>

          <p className="text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
            Join a high-impact consulting and innovation ecosystem shaping the
            future of AI-led Quality Engineering and Enterprise Transformation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {careers.map((role, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-slate-700 rounded-2xl p-8 text-left"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {role}
                </h3>

                <p className="text-slate-300">
                  Apply now and become part of our next-generation engineering
                  and consulting workforce.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="mailto:careers@qualiailabs.com"
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold"
            >
              careers@qualiailabs.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 px-6 bg-[#050816]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-8">
                Global Delivery Centers
              </h3>

              <div className="space-y-6 text-slate-300 text-lg">
                <div className="flex gap-4 items-center">
                  <MapPin className="text-cyan-400" />
                  Hyderabad, India
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-cyan-400" />
                  Bangalore, India
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-cyan-400" />
                  Pune, India
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-cyan-400" />
                  United Kingdom
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-cyan-400" />
                  United States
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8">
                Business Contacts
              </h3>

              <div className="space-y-5 text-slate-300">
                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  admin@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  careers@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  contact@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  finance@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  hr@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  sales@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-cyan-400" />
                  support@qualiailabs.com
                </div>

                <div className="flex gap-4 items-center mt-8">
                  <Phone className="text-cyan-400" />
                  Global Consulting & Delivery Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-400 bg-[#050816]">
        © 2026 QualiAI Labs Technologies. All rights reserved.
      </footer>
    </div>
  );
}

export default App;