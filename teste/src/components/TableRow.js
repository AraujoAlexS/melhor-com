import edit from "../assets/edit.svg";
import deleteIcon from "../assets/delete.svg";

function TableRow({ model, brand, price, color, code }) {
  return (
    <tr>
      <td>{code}</td>
      <td>{model}</td>
      <td>{price}</td>
      <td>{brand}</td>
      <td>{color}</td>
      <td>
        <button>
          <img src={edit} alt="editar" />
        </button>
      </td>
      <td>
        <button>
          <img src={deleteIcon} alt="delete" />
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
