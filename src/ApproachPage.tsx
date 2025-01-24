import { motion } from 'framer-motion';
import { 
  Target, 
  PieChart, 
  RefreshCw, 
  BookOpen, 
  BarChart2, 
  ShieldCheck 
} from 'lucide-react';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

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

  const methodologySteps = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Comprehensive Analysis",
      description: "Rigorous research and data-driven insights form the foundation of our investment decision-making process."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Performance Optimization",
      description: "Leveraging advanced quantitative models and machine learning to identify high-potential investment opportunities."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Risk Management",
      description: "Proactive risk mitigation strategies to protect and preserve your capital through sophisticated hedging techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="bg-black py-24 text-center">
        <FadeInWhenVisible>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Investment Philosophy
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.3}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto px-6">
            At Upsurge Capital, we blend cutting-edge technology, deep financial expertise, 
            and a personalized approach to deliver exceptional investment strategies.
          </p>
        </FadeInWhenVisible>
      </header>

      {/* Principles Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-16">Core Investment Principles</h2>
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
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-center mb-16">Our Investment Methodology</h2>
          </FadeInWhenVisible>
          <div className="grid md:grid-cols-3 gap-8">
            {methodologySteps.map((step, index) => (
              <FadeInWhenVisible key={step.title} delay={index * 0.2}>
                <motion.div
                  className="bg-gray-900 p-8 rounded-xl"
                  whileHover={{ scale: 1.05, backgroundColor: "rgb(31, 41, 55)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {step.icon}
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-center">
        <FadeInWhenVisible>
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Investments?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-6">
            Discover how our strategic approach can help you achieve your financial goals. 
            Schedule a personalized consultation with our expert advisors.
          </p>
          <motion.button
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </FadeInWhenVisible>
      </section>
    </div>
  );
};

export default ApproachPage;