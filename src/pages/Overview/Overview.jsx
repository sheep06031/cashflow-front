/** @jsxImportSource @emotion/react */
import { GrGraphQl } from "react-icons/gr";
import * as s from "./styles";
import { FaDollarSign, FaPiggyBank, FaTag } from "react-icons/fa";

function Overview() {
  return (
    <>
      <div css={s.background}>
        <div css={s.defaultForm}>
          <div css={s.headerContainer}>
            <div>
              <GrGraphQl />
              <span>Overview</span>
            </div>
            <p>something ~~~~</p>
          </div>
          <div css={s.aiFeedBackCard}>
            <p>Smart Feedback</p>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad cum
              nobis voluptate minima voluptas consequatur error, quisquam ut
              rerum perferendis eaque natus doloribus fugit distinctio, hic
              incidunt eum dolorem dolor.
            </div>
          </div>
          <div css={s.cardContainer}>
            <div css={s.card("#0061f2")}>
              <div>
                <span>Salary (expected)</span>
                <p>$4,390</p>
              </div>
              <div id="sign">
                <FaDollarSign />
              </div>
            </div>
            <div css={s.card("red")}>
              <div>
                <span>Spending</span>
                <p>$1,200</p>
              </div>
              <div id="sign">
                <FaTag />
              </div>
            </div>
            <div css={s.card("#00ac69")}>
              <div>
                <span>Savings</span>
                <p>$200</p>
              </div>
              <div id="sign">
                <FaPiggyBank />
              </div>
            </div>
            <div css={s.card("red")}>
              <div>
                <span>Spending</span>
                <p>$1,200</p>
              </div>
              <div id="sign">
                <FaDollarSign />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
