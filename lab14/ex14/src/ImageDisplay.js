import React from "react";
import srcImage from "./Images/src-image.png"; // Import image from src/Images

const ImageDisplay = () => {
  return (
    <div>
      {/* Image from public folder */}
      <h2>Image from Public Folder</h2>
      <img src="/Images/public-image.png" alt="Public Folder Image" width="300" />

      {/* Image from src folder */}
      <h2>Image from Src Folder</h2>
      <img src={srcImage} alt="Src Folder Image" width="300" />
    </div>
  );
};

export default ImageDisplay;
