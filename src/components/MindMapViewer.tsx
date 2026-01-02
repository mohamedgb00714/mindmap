import React, { useMemo } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge,
  ConnectionLineType
} from 'reactflow';
import 'reactflow/dist/style.css';

interface MindMapViewerProps {
  nodes: Node[];
  edges: Edge[];
}

export const MindMapViewer: React.FC<MindMapViewerProps> = ({ nodes, edges }) => {
  const defaultEdgeOptions = {
    type: ConnectionLineType.SmoothStep,
    animated: true,
    style: { strokeWidth: 2 },
  };

  return (
    <div className="w-full h-[600px] rounded-xl border bg-white dark:bg-slate-900 overflow-hidden shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
        className="bg-slate-50/50 dark:bg-slate-950/50"
      >
        <Background color="#94a3b8" gap={20} />
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            return '#ff0072';
          }}
          nodeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            return '#fff';
          }}
        />
      </ReactFlow>
    </div>
  );
};