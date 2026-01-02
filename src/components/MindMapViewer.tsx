import React, { useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Panel
} from 'reactflow';
import 'reactflow/dist/style.css';

interface MindMapViewerProps {
  nodes: Node[];
  edges: Edge[];
}

export const MindMapViewer: React.FC<MindMapViewerProps> = ({ nodes: initialNodes, edges: initialEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes/edges when props change (e.g., new generation)
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const defaultEdgeOptions = {
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { strokeWidth: 2, stroke: '#94a3b8' },
  };

  return (
    <div className="w-full h-[700px] rounded-xl border bg-white dark:bg-slate-900 overflow-hidden shadow-inner relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        className="bg-slate-50/50 dark:bg-slate-950/50"
        minZoom={0.2}
        maxZoom={4}
      >
        <Background color="#cbd5e1" gap={20} size={1} />
        <Controls />
        <MiniMap 
          nodeStrokeWidth={3}
          zoomable
          pannable
          className="bg-white dark:bg-slate-900 border rounded-lg"
        />
        <Panel position="top-right" className="bg-white/80 dark:bg-slate-800/80 p-2 rounded-md border text-xs font-medium shadow-sm">
          💡 Drag nodes to rearrange
        </Panel>
      </ReactFlow>
    </div>
  );
};