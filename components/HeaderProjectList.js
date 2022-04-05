import React from "react";
import Link from "next/link";
import { CardButton, LinkButton } from "../styles/StyledButton";
import { useRouter } from "next/router";
import { StyledHeaderProjectList } from "../styles/StyledHeaderProjectList";
import { StyledText } from "../styles/StyledText";
import { HorizontalDivider } from "../styles/StyledDivider";
import Colors from "../constants/Colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GrFormAdd } from "react-icons/gr";

const HeaderProjectList = ({ state, title, addUrl }) => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <StyledHeaderProjectList>
      <div className="header-top">
        <StyledText h2 bold karla>
          {title}
        </StyledText>
        {addUrl && (
          <Link
            href={
              state.usersReducers.currentUser
                ? `${addUrl}`
                : { pathname: "/sign-in", query: { path: router.pathname } }
            }
          >
            {matches ? (
              <GrFormAdd size={22} color={Colors.yellow} />
            ) : (
              <StyledText link h4 bold color={Colors.yellow}>
                ADD PROJECTS
              </StyledText>
            )}
          </Link>
        )}
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledHeaderProjectList>
  );
};

export default HeaderProjectList;
