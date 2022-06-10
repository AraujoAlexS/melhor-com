import TableRow from "./TableRow";
import "../styles/table.css";

function Table(props) {
  const arr = props.arr;
  return (
    <div>
      <table>
        <tr>
          <th>Código</th>
          <th>Modelo</th>
          <th>Preço</th>
          <th>Marca</th>
          <th>Cor</th>
          <th></th>
          <th></th>
        </tr>
        {arr.map((row) => (
          <TableRow {...row} />
        ))}
      </table>
    </div>
  );
}

export default Table;
