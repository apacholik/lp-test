import styled from 'styled-components';

const CustomFieldBorder = styled.div`
  display: inline-block;
  background: ${({theme}) => theme.inputs.primary};
  border-radius: 8px;
`;

const CustomFieldWrapper = styled.div`
  background: white;
  border-radius: 7px;
  padding: 6px 12px;
  margin: 1px;
`;

const Input = styled.input`
  width: 100%;
  border: 0px;
  font-size: 20px;
`;

export const CustomFiled = (props) => {
  return (
    <CustomFieldBorder>
      <CustomFieldWrapper>
        <Input {...props} />
      </CustomFieldWrapper>
    </CustomFieldBorder>
  )
}