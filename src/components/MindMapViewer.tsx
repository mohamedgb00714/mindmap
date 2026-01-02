import React, { useCallback, useRef } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  Node,
  Edge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Panel,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { Button } from './ui/button';
import { Download, Share2 } from 'lucide-react';

interface MindMapViewerProps {
  nodes: Node[];
  edges: Edge[];
}

const MindMapInner: React.FC<MindMapViewerProps> = ({ nodes: initialNodes, edges: initialEdges }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { getNodes } = useReactFlow();

  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onExport = useCallback(() => {
    const element = document.querySelector('.react-flow__viewport') as HTMLElement;
    if (!element) return;

    toPng(element, {
      backgroundColor: '#f8fafc',
      style: {
        transform: 'scale(1)',
      },
    }).then((dataUrl) => {
      download(dataUrl, 'mind-map.png');
    });
  }, []);

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
        minZoom={0.1}
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
        <Panel position="top-right" className="flex gap-2">
          <Button size="sm" variant="outline" className="bg-white/80 backdrop-blur" onClick={onExport}>
            <Download className="w-4 h-4 mr-2" />
            Export PNG
          </Button>
          <Button size="sm" variant="outline" className="bg-white/80 backdrop-blur">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </Panel>
        <Panel position="bottom-left" className="bg-white/80 dark:bg-slate-800/80 p-2 rounded-md border text-xs font-medium shadow-sm">
          💡 Drag nodes to rearrange
        </Panel>
      </ReactFlow>
    </div>
  );
};

export const MindMapViewer: React.FC<MindMapViewerProps> = (props) => (
  <ReactFlowProvider>
    <MindMapInner {...props} />
  </ReactFlowProvider>
);