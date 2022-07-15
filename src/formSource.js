export const userInputs = [
  {
    id: 1,
    label: "Nom",
    type: "text",
    placeholder: "",
  },
  {
    id: 2,
    label: "Prenom",
    type: "text",
    placeholder: "",
  },
  {
    id: 3,
    label: "Email",
    type: "mail",
    placeholder: "",
  },
  {
    id: 4,
    label: "Num Tel",
    type: "text",
    placeholder: "",
  },
  {
    id: 5,
    label: "Password",
    type: "password",
  },
  {
    id: 6,
    label: "Address",
    type: "text",
    placeholder: "",
  },
  {
    id: 7,
    label: "Pays",
    type: "text",
    placeholder: "",
  },
  {
    id: 8,
    label: "CIN",
    type: "text",
    placeholder: "",
  },
  {
    id: 9,
    label: "MAT_CNSS",
    type: "text",
    placeholder: "",
  },
  {
    id: 10,
    label: "MAT_CNSS",
    type: "text",
    placeholder: "",
  },
  {
    id: 11,
    label: "Ville",
    type: "text",
    placeholder: "",
  },
  {
    id: 12,
    label: "Date de naissance",
    type: "date",
    placeholder: "",
  },
  {
    id: 13,
    label: "Situation",
    renderCell: () => {
      return (
        <select id="cars" name="cars">
          <option value="volvo">Marié </option>
        </select>
      );
    },
    placeholder: "",
  },
  {
    id: 14,
    label: "Type de contrat",
    for: "contrat",
    renderCell: () => {
      return (
        <select id="contrat" name="contrat">
          <option value="CDI">CDI</option>
        </select>
      );
    },
    placeholder: "",
  },
  {
    id: 14,
    label: "Niveau",
    for: "contrat",
    renderCell: () => {
      return (
        <select id="contrat" name="contrat">
          <option value="CDI">baccalauréat</option>
        </select>
      );
    },
    placeholder: "",
  },
];

export const productInputs = [
  {
    id: 1,
    label: "Title",
    type: "text",
    placeholder: "Apple Macbook Pro",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Description",
  },
  {
    id: 3,
    label: "Category",
    type: "text",
    placeholder: "Computers",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "100",
  },
  {
    id: 5,
    label: "Stock",
    type: "text",
    placeholder: "in stock",
  },
];
