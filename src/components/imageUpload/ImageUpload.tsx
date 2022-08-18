import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Box from "@mui/material/Box/Box";
import React, { useState } from "react";

const ImageUpload = () => {
  const [fileClient, setFileClient] = useState<any>();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cellWithImg">
        <img
          className="cellImg"
          src={
            fileClient
              ? URL.createObjectURL(fileClient)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=""
        />
      </div>
      <div className="formInput">
        <label htmlFor="file">
          <DriveFolderUploadOutlinedIcon className="icon" />
        </label>
        <input
          type="file"
          id="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.target?.files && setFileClient(e.target.files[0]);

            console.log(fileClient);
          }}
          style={{ display: "none" }}
        />
      </div>
    </Box>
  );
};

export default ImageUpload;
