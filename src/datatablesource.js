import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./style/dark.scss";
export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "employee",
    headerName: "Employee",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "shop",
    headerName: "Shop",

    width: 230,
  },

  {
    field: "phonenumber",
    headerName: "Phone",

    width: 100,
  },
  {
    field: "notification",
    headerName: "Notification",

    width: 160,
    renderCell: () => {
      return (
        <div>
          <NotificationsNoneOutlinedIcon />
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    shop: "Bizerte",
    phonenumber: 20212232,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    shop: "Bardo",
    status: "passive",
    phonenumber: 20212232,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    shop: "Ariana",
    status: "pending",
    phonenumber: 20212232,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    shop: "Rue de marseille ",
    status: "active",
    phonenumber: 20212232,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    shop: "Tunis",
    status: "passive",
    phonenumber: 20212232,
  },
];

export const MagasinColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "name",
    headerName: "Name",

    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "adresse",
    headerName: "adresse",
    width: 230,
  },

  {
    field: "phonenumber",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "nombre",
    headerName: "Nombre d'employe",
    width: 160,
  },
];

export const MagasinRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    name: "Bizerte",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 5,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Bardo",
    status: "passive",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 4,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Ariana",
    status: "pending",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Rue de marseille ",
    status: "active",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 2,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    name: "Tunis",
    status: "passive",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 1,
  },
];

export const DemandeRows = [
  {
    id: 1,
    date: "24/11/2002",
    name: "fathi",
    type: "sortie",
    status: "Accepted",
  },
  {
    id: 2,
    date: "25/11/2014",
    name: "fathi",
    type: "congé de maladie",
    status: "En cours",
  },
  {
    id: 3,
    date: "25/11/2014",
    name: "fathi",
    type: "congé",
    status: "rejected",
  },
  {
    id: 4,
    date: "25/11/2014",
    name: "fathi",
    type: "congé",
    status: "En cours",
  },
];

export const DemandeColumn = [
  {
    field: "date",
    headerName: "Date",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  },
  {
    field: "status",
    headerName: "Etat",
    width: 230,
  },
];
