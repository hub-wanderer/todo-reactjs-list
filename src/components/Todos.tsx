interface Props {
  task_name: string;
  index: any;
}

const Todos = ({ task_name, index }: Props) => {
  return (
    <li key={index}>
      <label className="label-wrapper">
        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input id="cbx-12" type="checkbox" />
            <label htmlFor="cbx-12"></label>
          </div>
        </div>
        <p>{task_name}</p>
      </label>
    </li>
  );
};

export default Todos;
