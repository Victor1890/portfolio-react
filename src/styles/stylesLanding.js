import styled from 'styled-components';

export const PaperIcon = styled.div`
  color: #012452;
  font-size: 54px;
  margin-bottom: 1.45rem;
  text-align: center;
`;

export const PaperColumn = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  @media (min-width: 1080px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    flex-direction: row;
  }
`;

export const Container = styled.div`
  background-color: ${(props) =>
    props.variantBackground ? '#012452' : '#fff'};
  margin: 0 auto;
  min-height: ${(props) => (props.variantBackground ? '34rem' : '46rem')};
  padding: 2rem;
  padding-bottom: ${(props) => (props.variantBackground ? '6rem' : '0')};
  width: 100vw;
`;

export const CenteredContainer = styled(Container)`
  display: flex;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
`;

export const CenteredWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 42rem;
`;
export const TitleWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;
export const TextWrapper = styled.div`
  margin-top: 1rem;
  height: 8rem;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }
`;
export const PaperComponent = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: -9rem;
  width: 100%;
  @media (min-width: 1080px) {
    flex-direction: row;
    padding: 3rem 1rem 1.5rem;
  }
`;
export const Column = styled.div`
  border-bottom: ${(props) =>
    props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
  display: flex;
  flex-direction: column;
  height: 12rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  @media (min-width: 768px) {
    border-bottom: 0px solid #e6ecf8;
    border-right: ${(props) =>
      props.lastColumn ? '0px solid #e6ecf8' : '1px solid #e6ecf8'};
    width: 30rem;
  }
`;
