import PropTypes from "prop-types";

export const DropdownList = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <select></select>
    </div>
  );
};

DropdownList.propTypes = {
  label: PropTypes.string.isRequired,
};
