import { Box } from "@mui/material";
import dagre from "dagre";
import { useEffect, useState } from "react";
import ReactFlow, {
  Node,
  Edge,
  Background,
  useNodesState,
  useEdgesState,
  MiniMap,
} from "react-flow-renderer";
import { initialNodes, initialEdges } from "./elements";
import SkillMapElement, { InternalSkillMapElement } from "./SkillMapElement";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getNodeHeightAndWidth = (node: Node) => {
  const selector = `[data-id='${node.id}']`;
  console.log(selector);
  const htmlElement: HTMLElement | null = document.getElementById(node.id);

  if (htmlElement === null) throw new Error("missing html element: " + node.id);

  const width = htmlElement.offsetWidth;
  const height = htmlElement.offsetHeight;

  return { height, width };
};

const getElementLayouts = (
  nodes: Node[],
  edges: Edge[],
  direction: string = "TB"
) => {
  const isHorizontal = direction === "LR";

  dagreGraph.setGraph({ rankdir: direction });

  // setup for dagre
  for (const node of nodes) {
    const { height, width } = getNodeHeightAndWidth(node);

    dagreGraph.setNode(node.id, { height: height + 30, width: width + 30 });
  }

  for (const edge of edges) {
    dagreGraph.setEdge(edge.source, edge.target);
  }

  // do the actual layout work
  dagre.layout(dagreGraph);

  // iterate over all of our elements
  for (const node of nodes) {
    const nodeWithPosition = dagreGraph.node(node.id);

    const { height, width } = getNodeHeightAndWidth(node);

    node.position = {
      x: nodeWithPosition.x - width,
      y: nodeWithPosition.y - height,
    };

    console.log("node position: ", JSON.stringify(node.position, null, 2));
  }

  return {
    nodes: nodes.map((v) => ({ ...v })),
    edges: edges.map((v) => ({ ...v })),
  };
};

const nodeTypes = {
  skillTreeNode: SkillMapElement,
};

export const VerticalFlow = () => {
  const [hasMeasuredElements, setHasMeasuredElements] = useState(false);

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  useEffect(() => {
    // used for layouts

    if (hasMeasuredElements) return;

    const { nodes: newNodes, edges: newEdges } = getElementLayouts(
      nodes,
      edges
    );

    setNodes(newNodes);
    setEdges(newEdges);
    setHasMeasuredElements(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMeasuredElements]);

  console.log("re-rendering, node zero: ", nodes[0].position);

  if (!hasMeasuredElements) {
    return (
      <Box position="fixed">
        {nodes.map((v) => (
          <Box position="fixed" key={v.id}>
            <InternalSkillMapElement id={v.id} {...v.data} />
          </Box>
        ))}
      </Box>
    );
  } else {
    return (
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
        <Background gap={18} size={1} />
        <MiniMap />
      </ReactFlow>
    );
  }
};
