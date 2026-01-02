import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { TextInputSection } from "@/components/TextInputSection";
import { MindMapViewer } from "@/components/MindMapViewer";
import { Node, Edge } from "reactflow";
import { motion, AnimatePresence } from "framer-motion";
import { showSuccess, showError } from "@/utils/toast";
import { generateMindMapData } from "@/lib/ai-service";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Key } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mindMapData, setMindMapData] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);
  const [apiKey, setApiKey] = useState("");

  // Load API key from local storage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem("openrouter_api_key");
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleApiKeyChange = (val: string) => {
    setApiKey(val);
    localStorage.setItem("openrouter_api_key", val);
  };

  const handleGenerate = async (text: string) => {
    if (!apiKey) {
      showError("Please enter an OpenRouter API key first.");
      return;
    }

    setIsLoading(true);
    try {
      const data = await generateMindMapData(text, apiKey);
      setMindMapData(data);
      showSuccess("Mind map generated successfully!");
    } catch (err: any) {
      showError(err.message || "Failed to generate mind map. Please check your API key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Transform Text into <span className="text-secondary">Visual Insights</span> Instantly
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Unlock your ideas. Turn complex notes, articles, or transcripts into clear, actionable mind maps effortlessly.
          </motion.p>
        </section>

        <section className="max-w-md mx-auto space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-1">
            <Key className="w-4 h-4" />
            <Label htmlFor="api-key">OpenRouter API Key</Label>
          </div>
          <Input 
            id="api-key"
            type="password" 
            placeholder="sk-or-v1-..." 
            value={apiKey}
            onChange={(e) => handleApiKeyChange(e.target.value)}
            className="bg-white dark:bg-slate-900"
          />
          <p className="text-[10px] text-slate-400 text-center">
            Your key is stored locally in your browser and never sent to our servers.
          </p>
        </section>

        <section>
          <TextInputSection onGenerate={handleGenerate} isLoading={isLoading} />
        </section>

        <AnimatePresence>
          {mindMapData && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Generated Mind Map</h2>
                <div className="flex gap-2">
                  <button className="text-sm font-medium px-3 py-1 rounded-md border hover:bg-slate-50 transition-colors">Export PNG</button>
                  <button className="text-sm font-medium px-3 py-1 rounded-md border hover:bg-slate-50 transition-colors">Share</button>
                </div>
              </div>
              <MindMapViewer nodes={mindMapData.nodes} edges={mindMapData.edges} />
            </motion.section>
          )}
        </AnimatePresence>

        {!mindMapData && !isLoading && (
          <section className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { title: "Innovative AI", desc: "Uses state-of-the-art LLMs to understand context and hierarchy." },
              { title: "Clear Visualization", desc: "Zoom, pan, and rearrange nodes to perfect your mental model." },
              { title: "Efficient Workflow", desc: "Instant generation with privacy-first data handling." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm"
              >
                <h3 className="font-bold mb-2 text-primary">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Index;