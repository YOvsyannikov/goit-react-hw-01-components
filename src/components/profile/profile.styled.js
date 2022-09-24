import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  padding: 10px;
  box-sizing: border-box;
`;
export const CardContainer = styled.div`
  display: block;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.55) 10px 10px 5px 0px;
  margin-bottom: 16px;
  border-radius: 4px;
`;
export const CardInfo = styled.div`
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;
export const Picture = styled.img`
  display: block;
  height: auto;
  width: 200px;
  margin: 0px auto 8px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`;
export const UserInfo = styled.p`
  color: rgb(169, 170, 172);
  margin-bottom: 8px;
`;
export const StatisticsBox = styled.ul`
  background-color: rgb(243, 246, 249);
  display: flex;
  width: 100%;
  list-style: none;
  padding-left: 0px;
  margin: 0px;
`;
export const StatColums = styled.li`
  text-align: center;
  padding: 8px;
  border: 1px solid rgb(169, 170, 172);
  width: 100%;
`;
export const StatisticNames = styled.span`
  display: block;
  margin-bottom: 8px;
  color: rgb(169, 170, 172);
`;
export const StatisticCount = styled.span`
  color: rgb(34, 48, 66);
  font-weight: 700;
`;
