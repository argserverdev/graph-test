import React, { useCallback } from 'react';
import ReactFlow, { Controls, useNodesState, useEdgesState, addEdge, Node, Edge } from 'reactflow';
import { IoBookOutline, IoEarthOutline, IoEyeOutline, IoFootballOutline, IoHandLeftOutline, IoHappyOutline, IoDiceOutline } from 'react-icons/io5';

import 'reactflow/dist/base.css';
import './index.css';
import TurboNode, { TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';
import FunctionIcon from './FunctionIcon';

const initialNodes: Node<TurboNodeData>[] = [
  {
    id: '0',
    position: { x: 20, y: 20 },
    data: { icon: <IoDiceOutline size={ 30 } />, title: '2021 - Parada III: ¿A qué nos gusta jugar?', subline: '' },
    type: 'turbo',
  },
  {
    id: '1',
    position: { x: -1900, y: -200 },
    data: { icon: <IoEyeOutline size={ 30 } />, title: 'Reconocer características de los objetos', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: -1900, y: 0 },
    data: { icon: <IoHandLeftOutline size={ 30 } />, title: 'Explorar acciones a realizarse sobre objetos', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: -2300, y: -400 },
    data: { icon: <IoHappyOutline size={ 30 } />, title: 'Aproximarse a aspectos significativos en historias personales y familiares', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: -1000, y: -500 },
    data: { icon: <IoEyeOutline size={ 30 } />, title: 'Iniciarse en la observación pausada y frecuente', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '5',
    position: { x: -800, y: 100 },
    data: { icon: <IoBookOutline size={ 30 } />, title: 'Organizar información registros', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '6',
    position: { x: 800, y: -400 },
    data: { icon: <IoFootballOutline size={ 30 } />, title: 'Conocer y disfrutar juegos tradicionales', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
  {
    id: '7',
    position: { x: 800, y: -200 },
    data: { icon: <IoEarthOutline size={ 30 } />, title: 'Explorar posibilidades de espacios y materiales', subline: 'Sala 3: Ambiente natural y social' },
    type: 'turbo',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-3',
    source: '1',
    target: '0',
  },
  {
    id: 'e2-3',
    source: '2',
    target: '0',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '0',
  },
  {
    id: 'e3-5',
    source: '4',
    target: '0',
  },
  {
    id: 'e3-6',
    source: '5',
    target: '0',
  },
  {
    id: 'e3-7',
    source: '0',
    target: '6',
  },
  {
    id: 'e3-8',
    source: '0',
    target: '7',
  },
];

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  markerEnd: 'edge-circle',
};

const Flow = () => {
  
  const [ nodes, setNodes, onNodesChange ] = useNodesState( initialNodes );
  const [ edges, setEdges, onEdgesChange ] = useEdgesState( initialEdges );

  const onConnect = useCallback( ( params: any ) => setEdges( ( els ) => addEdge( params, els ) ), [] );

  return (
    <>
      <div className="navbar">
        <h1>Parada 2021 III: ¿A qué nos gusta jugar?</h1>
      </div>
      <ReactFlow
        nodes={ nodes }
        edges={ edges }
        onNodesChange={ onNodesChange }
        onEdgesChange={ onEdgesChange }
        onConnect={ onConnect }
        fitView
        nodeTypes={ nodeTypes }
        edgeTypes={ edgeTypes }
        defaultEdgeOptions={ defaultEdgeOptions }
      >

        <Controls showInteractive={ false } />

        <svg>
          <defs>
            <linearGradient id="edge-gradient">
              <stop offset="0%" stopColor="#ae53ba" />
              <stop offset="100%" stopColor="#2a8af6" />
            </linearGradient>

           
          </defs>
        </svg>
      </ReactFlow>
    </>
  );
};

export default Flow;
