import { Handle, NodeProps, Position } from "react-flow-renderer";
import {
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, useState } from "react";
import { LaunchOutlined, OndemandVideoOutlined } from "@mui/icons-material";
import { green } from "@mui/material/colors";

type SkillMapElementProps = {
  title: ReactNode;
  description: ReactNode;
  videoLink: string;
};

const SkillMapElement = (props: NodeProps<SkillMapElementProps>) => {
  return (
    <Box display="flex">
      <Handle
        type="target"
        position={Position.Top}
        id={"i___" + props.id}
        isConnectable={false}
      />

      <InternalSkillMapElement id={props.id} {...props.data} />

      <Handle
        type="source"
        position={Position.Bottom}
        id={"o___" + props.id}
        isConnectable={false}
      />
    </Box>
  );
};

const isElementComplete = (elementId: string) => {
  let completionListString = localStorage.getItem("completionList");
  if (completionListString === null) {
    completionListString = JSON.stringify({});
    localStorage.setItem("completionList", completionListString);
  }

  const completionList = JSON.parse(completionListString) as {
    [key: string]: boolean;
  };

  return !!completionList[elementId];
};

const setElementComplete = (elementId: string, status: boolean) => {
  let completionListString = localStorage.getItem("completionList");
  if (completionListString === null) {
    completionListString = JSON.stringify({});
    localStorage.setItem("completionList", completionListString);
  }

  const completionList = JSON.parse(completionListString) as {
    [key: string]: boolean;
  };

  completionList[elementId] = status;

  localStorage.setItem("completionList", JSON.stringify(completionList));
};

export const InternalSkillMapElement = (
  props: SkillMapElementProps & { id: string }
) => {
  const [complete, setComplete] = useState(isElementComplete(props.id));

  console.log("placing " + props.id);
  return (
    <Box
      width="400px"
      component={Paper}
      id={props.id}
      display="flex"
      flexDirection="column"
      paddingY={1}
      paddingX={2}
      sx={{
        backgroundColor: complete ? green[400] : "paper",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        {/* title section */}
        <Box component={Typography} variant={"h5"} paddingY={1}>
          {props.title}
        </Box>
        {/* button section */}
        <Box display="flex" alignItems="flex-start">
          <IconButton
            onClick={() => {
              window.open(props.videoLink, "_blank");
            }}
          >
            <OndemandVideoOutlined />
          </IconButton>
          
          <Checkbox
            sx={{ paddingX: 1 }}
            checked={complete}
            onChange={(v) => {
              setComplete(v.target.checked);
              setElementComplete(props.id, v.target.checked);
            }}
          />
        </Box>
      </Box>
      <Box component={Divider} marginX={-2} />
      <Box component={Typography} variant={"caption"} paddingY={1}>
        {props.description}
      </Box>
    </Box>
  );
};

export default SkillMapElement;
