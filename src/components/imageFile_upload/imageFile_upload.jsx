import React, { memo, useRef, useState } from "react";
import styles from "./imageFile_upload.module.css";
const ImageFileUpload = memo(({ imageUploader, onFileChange, imageURL }) => {
  const [loading, setLoading] = useState(false); // 로딩 스테이트
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const onChange = async (event) => {
    setLoading(true); // true 일 때 로딩스피너를 보여준다.
    const uploaded = await imageUploader.upload(event.target.files[0]);
    setLoading(false);

    if (!Object.keys(uploaded).includes("error")) {
      onFileChange(uploaded);
    }
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      {!loading && (
        <div className={styles.upload}>
          {imageURL ? (
            <img
              className={styles.image}
              src={imageURL}
              onClick={onButtonClick}
            />
          ) : (
            <button className={styles.button} onClick={onButtonClick}>
              Picture
            </button>
          )}
        </div>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
});

export default ImageFileUpload;
