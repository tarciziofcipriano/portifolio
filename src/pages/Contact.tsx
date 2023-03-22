import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return <Box>{t("TEXT.CONTACT")}</Box>;
};

export default Contact;
