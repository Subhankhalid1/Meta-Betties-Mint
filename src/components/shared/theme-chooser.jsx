import styled from 'styled-components';

const StyledSvg = styled.svg`
  fill: ${({ theme }) => theme.text};
`;

export const ThemeChooser = () => {
  return (
    <StyledSvg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>contrast</title>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM4 16c0-6.627 5.373-12 12-12v24c-6.627 0-12-5.373-12-12z" />
    </StyledSvg>
  );
};
