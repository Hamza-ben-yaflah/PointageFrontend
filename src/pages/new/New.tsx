import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import TextField from "@mui/material/TextField";

const New = ({ inputs, title }: any) => {
  const [file, setFile] = useState();

  return (
    <div className="">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default New;
