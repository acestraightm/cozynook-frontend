import { withTranslation } from "react-i18next";

import * as S from "./styles";

const TextArea = ({ name, id, placeholder, onChange, t }) => (
  <S.Container>
    <S.TextArea
      spellcheck="false"
      placeholder={t(placeholder)}
      id={name}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default withTranslation()(TextArea);
