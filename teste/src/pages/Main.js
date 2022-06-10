import { Link } from "react-router-dom";
import Table from "../components/Table";
import "../styles/main.css";

function Main() {
  const phone = [
    {
      model: "Galaxy 5",
      brand: "Sansung",
      price: "900",
      date: "26/04/2019",
      endDate: "12/12/2022",
      color: "BLACK",
      code: "#12212",
    },
    {
      model: "Galaxy 5",
      brand: "Sansung",
      price: "900",
      date: "26/04/2019",
      endDate: "12/12/2022",
      color: "WHITE",
      code: "#12212",
    },
  ];

  return (
    <main className="main">
      <div className="table-wrapper">
        <div className="table-head">
          <span>Produtos</span>
          <span>
            <Link to="/addphone">Add Phone</Link>
          </span>
        </div>
        <Table arr={phone} />
      </div>
    </main>
  );
}

export default Main;
