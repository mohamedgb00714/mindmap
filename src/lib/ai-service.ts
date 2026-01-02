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
    
    Rules:
    1. The central topic should be the root node.
    2. Use 'default' type for nodes.
    3. Each node needs an 'id', 'data: { label: string }', and 'position: { x: number, y: number }'.
    4. Arrange nodes in a logical tree structure (root at top or center).
    5. Edges need 'id', 'source', and 'target'.
    
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
      model: "google/gemini-2.0-flash-001", // Using a fast, capable model
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