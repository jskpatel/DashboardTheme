// Props to be sent: id, name, onChange, value, checked, title

const Switch = ({ id, title, checked, ...renderProps }) => {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id={id}
        checked={checked}
        {...renderProps}
      />
      <label className="form-check-label" htmlFor={id}>
        {title}
      </label>
    </div>
  );
};

export default Switch;
