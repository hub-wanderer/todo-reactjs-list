import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container(props: Props) {
  return (
    <div className="body">
      <div className="container">{props.children}</div>
    </div>
  );
}
