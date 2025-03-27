import styled from "styled-components";
import { asynsGetFetch } from "../../_reducers/data";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import Card from "./common/Card";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10vw;
  background-color: #b0b0b0;
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
    <Wapper>
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
  );
}

export default HomePage;
