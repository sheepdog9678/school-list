import styled from "styled-components";
import { asynsGetFetch } from "../../_reducers/data";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";

const Wapper = styled.div``;

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asynsGetFetch());
  }, []);
  const data = useAppSelector((state) => state.data.data);
  const isload = useAppSelector((state) => state.data.loading);
  console.log(data);
  return <Wapper>홈페이지 view</Wapper>;
}

export default HomePage;
