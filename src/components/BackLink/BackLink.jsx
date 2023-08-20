import { StyledLink, Icon, Box } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Box>
      <StyledLink to={to}>
        <Icon />
        {children}
      </StyledLink>
    </Box>
  );
};
