import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  PieChart,
  Target,
  RefreshCw
} from 'lucide-react';

// Custom Animation Components
const TextReveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const FadeInWhenVisible = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

// Approach Page Component
const ApproachPage = () => {
  const principlesData = [
    {
      icon: <Target className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Strategic Goal Alignment",
      description: "We begin by deeply understanding your unique financial objectives, risk tolerance, and long-term aspirations."
    },
    {
      icon: <PieChart className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Diversified Portfolio Construction",
      description: "Our investment strategies leverage comprehensive diversification across asset classes, sectors, and geographic regions."
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Adaptive Investment Approach",
      description: "We continuously monitor market conditions and dynamically adjust portfolios to optimize performance and manage risk."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <FadeInWhenVisible>
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white">
            Our Investment Philosophy
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            At Upsurge Capital, we blend cutting-edge technology, deep financial expertise, 
            and a personalized approach to deliver exceptional investment strategies.
          </p>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-3 gap-8">
          {principlesData.map((principle, index) => (
            <FadeInWhenVisible key={principle.title} delay={index * 0.2}>
              <motion.div
                className="bg-gray-900 p-8 rounded-xl"
                whileHover={{ scale: 1.05, backgroundColor: "rgb(31, 41, 55)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {principle.icon}
                <h3 className="text-xl font-semibold mb-4 text-white">{principle.title}</h3>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <motion.nav 
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm px-6 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <Link to="/" className="text-white text-xl font-bold">Upsurge Capital</Link>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Our Approach', path: '/approach' },
                { label: 'Contact', href: '#contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * i }}
                >
                  {item.path ? (
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-blue-400"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className="text-gray-300 hover:text-blue-400"
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.nav>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <header className="relative h-screen bg-black">
                <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-5rem)] flex items-center">
                  <div className="max-w-3xl">
                    <TextReveal delay={0.3}>
                      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Securing Your Financial Future Through Strategic Investment
                      </h1>
                    </TextReveal>
                    <TextReveal delay={0.5}>
                      <p className="text-xl text-gray-300 mb-8">
                        We combine decades of experience with innovative strategies to deliver exceptional returns for our clients.
                      </p>
                    </TextReveal>
                    <TextReveal delay={0.7}>
                      <motion.button
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Schedule a Consultation</span>
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </TextReveal>
                  </div>
                </div>
              </header>

              {/* Services Section */}
              <section id="services" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                  <FadeInWhenVisible>
                    <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
                  </FadeInWhenVisible>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />,
                        title: "Portfolio Management",
                        description: "Customized investment strategies aligned with your goals and risk tolerance."
                      },
                      {
                        icon: <Shield className="h-12 w-12 text-blue-500 mb-4" />,
                        title: "Wealth Preservation",
                        description: "Protecting and growing your assets through diversified investment approaches."
                      },
                      {
                        icon: <Globe className="h-12 w-12 text-blue-500 mb-4" />,
                        title: "Global Investment",
                        description: "Access to international markets and diverse investment opportunities worldwide."
                      }
                    ].map((service, index) => (
                      <FadeInWhenVisible key={service.title} delay={index * 0.2}>
                        <motion.div
                          className="bg-gray-900 p-8 rounded-xl"
                          whileHover={{ scale: 1.05, backgroundColor: "rgb(31, 41, 55)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {service.icon}
                          <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                        </motion.div>
                      </FadeInWhenVisible>
                    ))}
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-2 gap-12">
                    <FadeInWhenVisible>
                      <div>
                        <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
                        <p className="text-gray-300 mb-8">
                          Let's discuss how we can help you achieve your financial goals. Our team is ready to provide expert guidance tailored to your needs.
                        </p>
                        <div className="space-y-4">
                          {[
                            { icon: <Phone className="h-5 w-5 text-blue-500" />, text: "+1 (555) 123-4567" },
                            { icon: <Mail className="h-5 w-5 text-blue-500" />, text: "contact@upsurgecapital.com" },
                            { icon: <MapPin className="h-5 w-5 text-blue-500" />, text: "123 Financial District, New York, NY 10004" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center space-x-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 }}
                              viewport={{ once: true }}
                            >
                              {item.icon}
                              <span className="text-gray-300">{item.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible delay={0.3}>
                      <form className="space-y-6">
                        {[
                          { id: "name", label: "Name", type: "text" },
                          { id: "email", label: "Email", type: "email" },
                          { id: "message", label: "Message", type: "textarea" }
                        ].map((field, index) => (
                          <motion.div
                            key={field.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
                              {field.label}
                            </label>
                            {field.type === "textarea" ? (
                              <textarea
                                id={field.id}
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                              />
                            ) : (
                              <input
                                type={field.type}
                                id={field.id}
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                              />
                            )}
                          </motion.div>
                        ))}
                        <motion.button
                          type="submit"
                          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Send Message
                        </motion.button>
                      </form>
                    </FadeInWhenVisible>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid md:grid-cols-4 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="h-6 w-6 text-blue-500" />
                        <span className="text-lg font-bold">Upsurge Capital</span>
                      </div>
                      <p className="text-gray-400">
                        Your trusted partner in building and preserving wealth through strategic investment management.
                      </p>
                    </motion.div>
                    {[
                      {
                        title: "Quick Links",
                        links: ["Services", "About Us", "Our Approach", "Contact"]
                      },
                      {
                        title: "Services",
                        links: ["Portfolio Management", "Wealth Preservation", "Global Investment", "Financial Planning"]
                      },
                      {
                        title: "Legal",
                        links: ["Privacy Policy", "Terms of Service", "Disclaimer"]
                      }
                    ].map((section, sectionIndex) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectionIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="font-semibold mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.links.map((link) => (
                            <motion.li
                              key={link}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                              <a href="#" className="text-gray-400 hover:text-white">
                                {link}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <p>&copy; 2025 Upsurge Capital. All rights reserved.</p>
                  </motion.div>
                </div>
              </footer>
            </>
          } />
          <Route path="/approach" element={<ApproachPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;