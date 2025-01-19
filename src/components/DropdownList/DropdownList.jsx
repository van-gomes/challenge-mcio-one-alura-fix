import PropTypes from "prop-types";

export const DropdownList = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

DropdownList.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
