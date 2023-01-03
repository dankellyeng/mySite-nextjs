// @ts-ignore
import styled from "styled-components";

// @ts-ignore
const Styles = styled.div`
  .footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 14px;
    background-color: #c7d1cf;
  }
`;

export default function Footer() {
  return (
    <Styles>
      <div className="footer">
        <p>© 2022 Dan Kelly</p>
        <p>All Rights Reserved.</p>
      </div>
    </Styles>
  );
}
