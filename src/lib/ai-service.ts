import { Node, Edge } from 'reactflow';

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export interface MindMapData {
  nodes: Node[];
  edges: Edge[];
}

export const generateMindMapData = async (text: string, apiKey: string): Promise<MindMapData> => {
  const prompt = `
    Analyze the following text and extract a hierarchical mind map structure.
    Return ONLY a valid JSON object with "nodes" and "edges" arrays compatible with React Flow.
    
    Rules for Nodes:
    1. The central topic should be the root node.
    2. Use 'default' type for nodes.
    3. Each node needs an 'id', 'data: { label: string }', and 'position: { x: number, y: number }'.
    4. STYLING: Assign colors based on depth:
       - Root: { background: '#1E3A8A', color: '#fff', border: '2px solid #1E3A8A', borderRadius: '8px', padding: '10px' }
       - Level 1: { background: '#10B981', color: '#fff', border: '2px solid #10B981', borderRadius: '8px' }
       - Level 2+: { background: '#fff', color: '#1E3A8A', border: '2px solid #1E3A8A', borderRadius: '8px' }
       Add these to a 'style' object in each node.
    5. Layout: Arrange nodes in a logical tree structure (root at top, children below).
    
    Rules for Edges:
    1. Edges need 'id', 'source', and 'target'.
    2. Use source/target IDs matching the node IDs.
    
    Text to analyze:
    "${text}"
  `;

  const response = await fetch(OPENROUTER_API_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "MindMap AI",
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "Failed to generate mind map");
  }

  const result = await response.json();
  const content = JSON.parse(result.choices[0].message.content);
  
  return content as MindMapData;
};