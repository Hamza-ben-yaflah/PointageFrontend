import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6439ff",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ListDashboard = () => {
  const { t } = useTranslation(["listDashboard"]);
  const rows = [
    {
      id: 1143155,
      product: "Bardo",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: [
        "fathi ben salah",
        "fathi ben salah",
        "fathi ben salah",
        "fathi ben salah",
      ],
      Entrer: ["9.00h", "9.00h", "9.00h", "9.00h"],
      Sortie: ["--:--", "--:--", "--:--", "--:--"],
      nombre: 4,
      status: "Ouvert",
    },
    {
      id: 2235235,
      product: "Bizert",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: [],
      Entrer: [],
      Sortie: [],
      nombre: 0,
      status: "fermé",
      Notification: () => {
        return (
          <div className="items">
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div></div>
            </div>
          </div>
        );
      },
    },
    {
      id: 2342353,
      product: "Ariana",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: [
        "fathi ben salah",
        "fathi ben salah",
        "fathi ben salah",
        "fathi ben salah",
      ],
      Entrer: ["10.00h", "10.00h", "10.00h", "10.00h"],
      Sortie: ["--:--", "--:--", "--:--", "--:--"],
      nombre: 4,
      status: "Ouvert",
    },
    {
      id: 2357741,
      product: "Rue de marseille",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: ["fathi ben salah", "fathi ben salah"],
      Entrer: ["11.15h", "11.15h"],
      Sortie: ["18:30h", "18:30h"],
      nombre: 2,
      status: "Ouvert",
    },
    {
      id: 2342355,
      product: "Grana",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: ["fathi ben salah"],
      Entrer: ["9.36h"],
      Sortie: ["18:30h"],
      nombre: 1,
      status: "Ouvert",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell">Tracking ID</TableCell> */}
            <StyledTableCell className="tableCell">
              {t("shop")}{" "}
            </StyledTableCell>
            <StyledTableCell className="tableCell">
              {t("employee")}
            </StyledTableCell>
            <StyledTableCell className="tableCell">
              {t("enter")}
            </StyledTableCell>
            <StyledTableCell className="tableCell">
              {t("exist")}
            </StyledTableCell>
            <StyledTableCell className="tableCell">
              {t("number")}
            </StyledTableCell>
            <StyledTableCell className="tableCell">
              {t("status")}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <TableCell className="tableCell">{row.id}</TableCell> */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  <Link to="/products/test" style={{ textDecoration: "none" }}>
                    {row.product}
                  </Link>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                {row.customer.map((el) => (
                  <TableBody>
                    <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />

                      <TableRow>
                        <Link
                          to="/users/test"
                          style={{ textDecoration: "none" }}
                        >
                          {el}
                        </Link>
                      </TableRow>
                    </div>
                  </TableBody>
                ))}{" "}
              </TableCell>
              <TableCell className="tableCell">
                {" "}
                {row.Entrer.map((el) => (
                  <TableBody>
                    <div className="cellWrapper">
                      <div className="image"> </div>
                      <TableRow>{el}</TableRow>
                    </div>
                  </TableBody>
                ))}{" "}
              </TableCell>
              <TableCell className="tableCell">
                {" "}
                {row.Sortie.map((el) => (
                  <TableBody>
                    <div className="cellWrapper">
                      <div className="image"> </div>
                      <TableRow>{el}</TableRow>
                    </div>
                  </TableBody>
                ))}{" "}
              </TableCell>
              <TableCell className="tableCell">{row.nombre}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListDashboard;
