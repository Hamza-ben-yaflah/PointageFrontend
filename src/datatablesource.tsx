import "./style/dark.scss";

export interface userR {
  id: number;
  username: string;
  img: string;
  status: string;
  shop: string;
  phonenumber: number;
}

//temporary data
export const userRows: userR[] = [
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
    status: "active",
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
    status: "active",
    phonenumber: 20212232,
  },
];

export interface MagasinR {
  id: number;
  name: string;
  adresse: string;
  phonenumber: number;
  nombre: number;
}

export const MagasinRows: MagasinR[] = [
  {
    id: 1,
    name: "Bizerte",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 5,
  },
  {
    id: 2,
    name: "Bizerte",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 4,
  },
  {
    id: 3,
    name: "Bizerte",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 0,
  },
  {
    id: 4,
    name: "Rue de marseille ",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 2,
  },
  {
    id: 5,
    name: "Tunis",
    phonenumber: 20212232,
    adresse: "6 rue dahlia cite zouhour",
    nombre: 1,
  },
];
export interface clientR {
  id: number;
  organizationName: string;
  clientName: string;
  phonenumber: number;
}

export const clientRows: clientR[] = [
  {
    id: 1,
    organizationName: "Seher Otour",
    clientName: "Mahrez",
    phonenumber: 20212232,
  },
  {
    id: 2,
    organizationName: "Seher Otour",
    clientName: "Mahrez",
    phonenumber: 20212232,
  },

  {
    id: 3,
    organizationName: "Seher Otour",
    clientName: "Mahrez",
    phonenumber: 20212232,
  },
];

export interface Demande {
  id: number;
  date: string;
  name: string;
  type: string;
  status: string;
  dateTreatment: string;
}

export const DemandeRows: Demande[] = [
  {
    id: 1,
    date: "24/11/2002",
    name: "fathi",
    type: "sortie",
    status: "Accepted",
    dateTreatment: "24/11/2002",
  },
  {
    id: 2,
    date: "25/11/2014",
    name: "fathi",
    type: "congé de maladie",
    status: "En cours",
    dateTreatment: "24/11/2002",
  },
  {
    id: 3,
    date: "25/11/2014",
    name: "fathi",
    type: "congé",
    status: "rejected",
    dateTreatment: "24/11/2002",
  },
  {
    id: 4,
    date: "25/11/2014",
    name: "fathi",
    type: "congé",
    status: "En cours",
    dateTreatment: "24/11/2002",
  },
];
