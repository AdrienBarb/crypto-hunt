import React from "react";
import { StyledSectionHeader } from "../styles/StyledSectionHeader";
import { StyledText } from "../styles/StyledText";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import Colors from "../constants/Colors";
import { HorizontalDivider } from "../styles/StyledDivider";

const SectionHeader = ({
  title,
  buttonUrl,
  buttonText,
  ButtonIcon,
  buttonAction,
  currentUser,
}) => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <StyledSectionHeader>
      <div className="header">
        <StyledText h2 bold karla>
          {title}
        </StyledText>
        {buttonUrl && (
          <Link
            href={
              currentUser
                ? buttonUrl
                : { pathname: "/sign-in", query: { path: router.pathname } }
            }
          >
            {matches ? (
              <ButtonIcon />
            ) : (
              <StyledText link h4 bold color={Colors.yellow}>
                {buttonText}
              </StyledText>
            )}
          </Link>
        )}

        {buttonAction && (
          <div onClick={buttonAction}>
            {matches ? (
              <ButtonIcon />
            ) : (
              <StyledText link h4 bold color={Colors.yellow}>
                {buttonText}
              </StyledText>
            )}
          </div>
        )}
      </div>

      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledSectionHeader>
  );
};

export default SectionHeader;
