import styled from "styled-components";

export const CardWrapper = styled.article`
  align-items: center;
  border: 1px solid #e6ecf8;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
  display: flex;
  flex-direction: column;
  height: 25.5rem;
  justify-content: space-around;
  margin: 1rem;
  max-width: 21rem;
  padding: 2rem;
  text-align: center;
  width: 100%;
`;
export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 6rem;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
`;

export const Container = styled.div`
  background-color: white;
  margin: 0 auto;
  min-height: 46rem;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 80rem;
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  max-width: 36rem;
`;

export const CallToAction = styled.span`
  color: #076aeb;
  cursor: pointer;
  font-weight: 550;
`;

export const Divider = styled.div`
  background-color: #e6ecf8;
  height: 1px;
  width: 100%;
`;

export const Company = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  width: 200px;
  @media (min-width: 968px) {
    margin: 1rem;
  }
`;
