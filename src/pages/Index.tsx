import { useState } from "react";
import { Layout } from "@/components/Layout";
import { TextInputSection } from "@/components/TextInputSection";
import { MindMapViewer } from "@/components/MindMapViewer";
import { Node, Edge } from "reactflow";
import { motion, AnimatePresence } from "framer-motion";
import { showSuccess, showError } from "@/utils/toast";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mindMapData, setMindMapData] = useState<{ nodes: Node[]; edges: Edge[] } | null>(null);

  const handleGenerate = async (text: string) => {
    setIsLoading(true);
    
    // Mocking AI generation for now as per task "Integrate AI API" which is pending
    setTimeout(() => {
      try {
        const mockNodes: Node[] = [
          { 
            id: '1', 
            type: 'input',
            data: { label: 'Central Topic' }, 
            position: { x: 250, y: 0 },
            style: { background: '#3b82f6', color: '#fff', borderRadius: '8px', padding: '10px' }
          },
          { 
            id: '2', 
            data: { label: 'Key Concept A' }, 
            position: { x: 100, y: 100 },
            style: { background: '#fff', border: '2px solid #3b82f6', borderRadius: '8px' }
          },
          { 
            id: '3', 
            data: { label: 'Key Concept B' }, 
            position: { x: 400, y: 100 },
            style: { background: '#fff', border: '2px solid #3b82f6', borderRadius: '8px' }
          },
          { 
            id: '4', 
            data: { label: 'Detail A1' }, 
            position: { x: 0, y: 200 },
            style: { background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }
          },
        ];

        const mockEdges: Edge[] = [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          { id: 'e2-4', source: '2', target: '4' },
        ];

        setMindMapData({ nodes: mockNodes, edges: mockEdges });
        showSuccess("Mind map generated successfully!");
      } catch (err) {
        showError("Failed to generate mind map. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Visualize Your <span className="text-primary">Thoughts</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Turn complex text into clear, hierarchical mind maps instantly using advanced AI.
          </motion.p>
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
              { title: "AI Powered", desc: "Uses state-of-the-art LLMs to understand context and hierarchy." },
              { title: "Interactive", desc: "Zoom, pan, and rearrange nodes to perfect your visualization." },
              { title: "Fast & Secure", desc: "Instant generation with privacy-first data handling." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm"
              >
                <h3 className="font-bold mb-2">{feature.title}</h3>
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