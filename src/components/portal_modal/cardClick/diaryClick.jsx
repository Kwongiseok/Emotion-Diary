/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown, Menu } from "antd";
import { SmallDashOutlined } from "@ant-design/icons";
import React, { useCallback } from "react";
import styles from "./diaryClick.module.css";

const DiaryClick = ({
  onClose,
  cardInfo,
  handleClickDate,
  handleOpenModal,
}) => {
  const handleClick = useCallback(() => {
    const clickDate = new Date(cardInfo.year, cardInfo.month, cardInfo.id);
    handleClickDate(clickDate);
    onClose();
    handleOpenModal();
  }, []);
  const userMenu = (
    <Menu>
      <Menu.Item key="1" onClick={handleClick}>
        수정하기
      </Menu.Item>
      <Menu.Item key="2" style={{ color: "red" }}>
        삭제하기
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={styles.clickCardModal}>
      <div className={styles.diary}>
        <div className={styles.imgBox}>
          {cardInfo.imageURL ? (
            <img className={styles.img} src={cardInfo.imageURL} />
          ) : (
            <div className={styles.emptyImg}>hi</div>
          )}
        </div>
        <section className={styles.contentBox}>
          <Dropdown.Button
            style={{ float: "right" }}
            className={styles.dropdownBtn}
            overlay={userMenu}
            icon={
              <SmallDashOutlined
                style={{
                  fontSize: "1.5em",
                  backgroundcolor: "transparent",
                }}
              />
            }
          ></Dropdown.Button>
          <div className={styles.titleBox}>
            <h2 className={styles.day}>{`${cardInfo.year}년 ${
              cardInfo.month + 1
            }월 ${cardInfo.id}일`}</h2>
            <h3
              className={styles.weather}
            >{`오늘의 날씨는 ${cardInfo.weather}`}</h3>
            <h3 className={styles.emotion}>{`기분은 ${cardInfo.emotion}`}</h3>
            <h1 className={styles.title}>{cardInfo.title}</h1>
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
