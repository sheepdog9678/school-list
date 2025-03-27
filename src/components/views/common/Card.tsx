import React from "react";
import styled from "styled-components";
import { data } from "../../../types/data";

interface dataProps {
  data: data;
  index: number;
}

const Wrapper = styled.div<{ $key: boolean }>`
  display: flex;
  width: 100%;
  padding: 16px;
  border-left: 16px solid ${(props) => (props.$key ? "#1fccc0" : "#1b78b3")};
  background-color: #fff;
  margin-bottom: 20px;
`;
const RankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;
`;
const Rank = styled.div`
  font-size: 12px;
`;
const RankNum = styled.div`
  font-size: 32px;
`;
const CardContentBox = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;
const CardContentTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
const CardContentLocation = styled.div`
  font-size: 16px;
`;
const CardContentAddress = styled.div`
  font-size: 14px;
  color: #a9a9a9;
`;
const CardDetailsBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 24px;
`;
const CardDetail = styled.div<{ $name: string }>`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  gap: 8px;
  border-left: 8px solid ${(props) => props.$name};
  margin: 4px 0;
`;
const CardDetailName = styled.div`
  padding-left: 8px;
  font-weight: bold;
`;

function Card({ data, index }: dataProps) {
  return (
    <Wrapper $key={data.key === "public" ? true : false}>
      <RankBox>
        <Rank>Rank</Rank>
        <RankNum>{index + 1}</RankNum>
      </RankBox>
      <CardContentBox>
        <CardContentTitle>{data.school}</CardContentTitle>
        <CardContentLocation>{data.location}</CardContentLocation>
        <CardContentAddress>{data.address}</CardContentAddress>
        <CardDetailsBox>
          <CardDetail $name="#A41034">
            <CardDetailName>Harvard</CardDetailName>
            <div>{data.Harvard}</div>
          </CardDetail>
          <CardDetail $name="#EE7F2D">
            <CardDetailName>Princeton</CardDetailName>
            <div>{data.Princeton}</div>
          </CardDetail>
          <CardDetail $name="#8b959e">
            <CardDetailName>MIT</CardDetailName>
            <div>{data.MIT}</div>
          </CardDetail>
        </CardDetailsBox>
      </CardContentBox>
      <RankBox>
        <Rank>Total</Rank>
        <RankNum>{data.Harvard + data.MIT + data.Princeton}</RankNum>
      </RankBox>
    </Wrapper>
  );
}

export default Card;
