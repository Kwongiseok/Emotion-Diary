import React from "react";
import DiaryCard from "../diaryCard/diaryCard";
import styles from "./diaryCards.module.css";
import "antd/dist/antd.css";
import { Row, Col } from "antd";

const DiaryCards = ({ diaryList }) => {
  return (
    <section className={styles.DiaryCards}>
      <Row gutter={[6, 6]} wrap={true}>
        {diaryList &&
          Object.keys(diaryList).map((key) => (
            <Col xs={24} md={12} xl={8} align="middle" key={key}>
              <DiaryCard cardInfo={diaryList[key]} key={key} />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default DiaryCards;
