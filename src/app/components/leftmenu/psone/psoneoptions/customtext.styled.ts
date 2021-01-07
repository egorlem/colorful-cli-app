import styled from "styled-components"

export const TextAreaWrapper = styled.div``
export const CustomTextArea = styled.textarea`
  resize: none;
  padding: 6px 6px 6px 5px;
  color: #dadada;
  background-color: #2b2b2b;
  border: 1px solid #3a3a3a;
  width: 100%;
  height: 65px;
  &::placeholder {
  color: #8a8a8a;
  font-size: 1.2rem;
}
`
