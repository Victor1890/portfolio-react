import styled from "styled-components";

export const SectionTitle = styled.div`
  margin: 0 auto;
  max-width: 39rem;
  padding: 2rem 0.5rem 0;
`;

export const Form = styled.form`
  margin: 5rem auto 10rem;
  max-width: 35rem;
  min-height: 25rem;
  padding: 0 1.5rem;
  text-align: center;
`;

export const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FieldWrapper = styled.p`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => (props.last ? "0" : "0.5rem")};
  width: 100%;
`;
export const Label = styled.label`
  color: #2833478a;
  margin-bottom: 0.75rem;
`;
export const Input = styled.input`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  padding: 0.5rem;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 275px;
  }
`;
export const TextArea = styled.textarea`
  background-color: white;
  background-clip: padding-box;
  border: solid 1px #e6ecf8;
  border-radius: 6px;
  box-shadow: none;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
`;
