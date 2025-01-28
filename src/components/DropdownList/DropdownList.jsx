import PropTypes from "prop-types";

export const DropdownList = ({ label, itens, value, aoAlterado, obrigatorio = false }) => {
  return (
    <div>
      <label>{label}</label>
      <select required={obrigatorio} value={value} onChange={evento => aoAlterado(evento.target.value)}>
        {itens && itens.length > 0 ? (
          itens.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))
        ) : (
          <option disabled>No items available</option>
        )}
      </select>
    </div>
  );
};

DropdownList.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.string.isRequired,
  aoAlterado: PropTypes.func.isRequired,
  obrigatorio: PropTypes.bool
};


