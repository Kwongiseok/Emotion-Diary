import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./serviceApp/auth_Service";
import DatabaseService from "./serviceApp/dataService";
import ImageUploader from "./serviceApp/image_uploader";
import ImageFileUpload from "./components/imageFile_upload/imageFile_upload";

const authService = new AuthService();
const dbService = new DatabaseService();
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileUpload {...props} imageUploader={imageUploader} />
));
ReactDOM.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      authService={authService}
      dbService={dbService}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
