import * as S from "./styles";

const Anchor = ({ color, width, children, href }) => (
  <S.Anchor color={color} width={width} href={href}>
    {children}
  </S.Anchor>
);

export default Anchor;
