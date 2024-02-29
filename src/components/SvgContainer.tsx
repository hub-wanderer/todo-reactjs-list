interface Props {
  svg: any;
}

export default function SvgContainer(props: Props) {
  return (
    <div className="svg-container">
      <img src={props.svg}></img>
    </div>
  );
}
