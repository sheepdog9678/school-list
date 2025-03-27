import styled from "styled-components";
import { asynsGetFetch } from "../../_reducers/data";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import Card from "./common/Card";

const Wapper = styled.div`
  width: 100%;
  background-color: #e9ecef;
  padding: 0 10vw;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 16px;
  background-color: #1b78b3;
  color: white;
  font-size: 32px;
`;
const DescBox = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
`;
const DescTitle = styled.div`
  font-size: 32px;
  color: #526173;
  font-weight: bolder;
`;

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asynsGetFetch());
  }, []);
  const data = useAppSelector((state) => state.data.data);
  const flatData = data.flat();
  const isload = useAppSelector((state) => state.data.loading);
  const sortedSchools = flatData.sort((a, b) => {
    const totalA = a.Harvard + a.Princeton + (a.MIT || 0);
    const totalB = b.Harvard + b.Princeton + (b.MIT || 0);
    return totalB - totalA;
  });
  return (
    <>
      <Header>
        <div>PolarisList</div>
        <div style={{ fontSize: "20px" }}>Premium Login</div>
      </Header>
      <Wapper>
        <DescBox>
          <DescTitle>The Best High Schools In America</DescTitle>
          <a href="/" style={{ color: "#1b78b3", textDecoration: "none" }}>
            Like us on Facebook to continue to get the latest updates.
          </a>
          <div>
            Our national high school rankings are based on a{" "}
            <span style={{ fontWeight: "bold" }}>single objective measure</span>
            : the number of students a high school sends to top colleges.
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontWeight: "bold" }}>
              With over 30,000 records,
            </span>{" "}
            PolarisList is the largest aggregator of Harvard, Princeton, and MIT
            matriculation data for US high schools.
          </div>
        </DescBox>
        {isload === "succeeded" ? (
          <>
            {sortedSchools.map((data, index) => (
              <Card data={data} index={index} key={index} />
            ))}
          </>
        ) : (
          <>loading</>
        )}
      </Wapper>
    </>
  );
}

export default HomePage;
