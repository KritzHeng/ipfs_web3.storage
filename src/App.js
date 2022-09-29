import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return process.env.REACT_APP_WEB3STORAGE_TOKEN
}

function App() {
  const [fileUrl, setFileUrl] = useState(``);
  const web3Storage = new Web3Storage({
    token: 
    getAccessToken(),
 });
  async function onChange(e) {
    const fileInput = document.querySelector('input[type="file"]');
    // const file = e.target.files[0]
    // console.log(file)
    try {
      const cid = await web3Storage.put(fileInput.files, {
        name: "cat pics",
      });
      console.log(cid);
      console.log("2");
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  return (
    <div className="App">
      <h1>IPFS</h1>
      <input type="file" onChange={onChange} />{" "}
      {fileUrl && <img src={fileUrl} width="600px" />}
      <h1>{fileUrl}</h1>
    </div>
  );
}

export default App;
