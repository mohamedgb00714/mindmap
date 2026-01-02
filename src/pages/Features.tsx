import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, Zap, Share2, Layout as LayoutIcon, Shield, MousePointer2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Advanced AI Analysis",
      description: "Our models understand context, identifying primary themes and supporting details with high accuracy."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Instant Generation",
      description: "Transform thousands of words into a structured visual map in seconds, not minutes."
    },
    {
      icon: <MousePointer2 className="w-8 h-8 text-green-500" />,
      title: "Interactive Canvas",
      description: "Drag, zoom, and rearrange nodes. Customize the layout to fit your mental model perfectly."
    },
    {
      icon: <Share2 className="w-8 h-8 text-purple-500" />,
      title: "Easy Export",
      description: "Export your mind maps as high-resolution PNGs or share interactive links with your team."
    },
    {
      icon: <LayoutIcon className="w-8 h-8 text-pink-500" />,
      title: "Smart Layouts",
      description: "Automatically organize complex hierarchies into clean, readable tree structures."
    },
    {
      icon: <Shield className="w-8 h-8 text-slate-500" />,
      title: "Privacy First",
      description: "Your data and API keys are processed securely and never stored on our servers."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Features for Better Thinking</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Everything you need to turn raw information into actionable knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Features;