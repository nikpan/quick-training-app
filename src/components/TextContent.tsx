import { Typography } from "@material-ui/core";
import { IContent } from "./Section";

export interface TextContentProps extends IContent{
  textContent: string;
}

export default function TextContent(props: TextContentProps) {
  return (
    <Typography>
      {props.textContent}
    </Typography>
  );
}
