import React from "react";
import DiaryCard from "../diaryCard/diaryCard";
import styles from "./diaryCards.module.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

const DiaryCards = ({
  diaryList,
  deleteDiaryFromList,
  handleClickDate,
  handleOpenModal,
}) => {
  return (
    <section className={styles.DiaryCards}>
      <Row gutter={[16, 16]} wrap={true} style={{ width: "100%" }}>
        {diaryList &&
          Object.keys(diaryList).map((key) => (
            <Col lg={8} md={12} xs={24} align="middle" key={key}>
              <DiaryCard
                deleteDiaryFromList={deleteDiaryFromList}
                cardInfo={diaryList[key]}
                handleClickDate={handleClickDate}
                handleOpenModal={handleOpenModal}
                key={key}
              />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default DiaryCards;
