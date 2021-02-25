/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown, Image, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { useCallback, useEffect } from "react";
import styles from "./diaryClick.module.css";

const DiaryClick = ({
  deleteDiaryFromList,
  onClose,
  cardInfo,
  handleClickDate,
  handleOpenModal,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  });
  const handleClick = useCallback(() => {
    const clickDate = new Date(cardInfo.year, cardInfo.month, cardInfo.id);
    handleClickDate(clickDate);
    onClose();
    handleOpenModal();
  }, []);
  const handleDelete = useCallback(() => {
    onClose();
    deleteDiaryFromList(cardInfo.year, cardInfo.month, cardInfo.id);
  });
  const userMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleClick}>
        수정하기
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "red" }} onClick={handleDelete}>
        삭제하기
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.clickCardModal}>
      <div className={styles.diary}>
        <div className={styles.imgBox}>
          {cardInfo.imageURL ? (
            <Image
              className={styles.img}
              width="100%"
              height="100%"
              src={cardInfo.imageURL}
            />
          ) : (
            <button className={styles.emptyImg} onClick={handleClick}>
              이미지 추가하기
            </button>
          )}
        </div>
        <section className={styles.contentBox}>
          <Dropdown
            style={{ float: "right" }}
            overlay={userMenu}
            trigger="click"
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{ float: "right", marginRight: "5%", height: "12px" }}
            >
              ...
              <DownOutlined />
            </a>
          </Dropdown>
          <div className={styles.titleBox}>
            <h2 className={styles.day}>{`${cardInfo.year}년 ${
              cardInfo.month + 1
            }월 ${cardInfo.id}일`}</h2>
            <h3
              className={styles.weather}
            >{`오늘의 날씨는 ${cardInfo.weather} 기분은 ${cardInfo.emotion}`}</h3>
            <div className={styles.titleTextBox}>
              <h1 className={styles.title}>{cardInfo.title}</h1>
            </div>
          </div>
          <div className={styles.content}>
            <pre className={styles.diaryText}>{`${cardInfo.diaryText}`}</pre>
          </div>

          <div className={styles.closeBtnBox}>
            <button className={styles.closeBtn} onClick={onClose}>
              X
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryClick;
