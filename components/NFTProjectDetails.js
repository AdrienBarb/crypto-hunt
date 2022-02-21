import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { CardButton } from "../styles/StyledButton";
import { StyledText } from "../styles/StyledText";
import { StyledCryptoProjectDetails } from "../styles/StyledCryptoProjectDetails";
import { HorizontalDivider } from "../styles/StyledDivider";
import Colors from "../constants/Colors";
import { useRouter } from "next/router";
import { StyledNFTProjectDetails } from "../styles/StyledNFTProjectDetails";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FiEdit2 } from "react-icons/fi";

const NFTProjectDetails = ({ projectId, getCurrentNFTProject, state }) => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    getCurrentNFTProject(projectId);
  }, [router]);

  return (
    <StyledNFTProjectDetails>
      <div className="header">
        {state.nftProjectsReducers.currentNFTProject && (
          <StyledText h2 bold karla>
            {state.nftProjectsReducers.currentNFTProject.name}
          </StyledText>
        )}
        <Link
          href={
            state.usersReducers.currentUser
              ? `/edit-nft-project/${projectId}`
              : { pathname: "/sign-in", query: { path: router.pathname } }
          }
        >
          {matches ? (
            <FiEdit2 size={16} color={Colors.yellow} />
          ) : (
            <StyledText link h4 bold color={Colors.yellow}>
              EDIT PROJECTS
            </StyledText>
          )}
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledNFTProjectDetails>
  );
};

export default NFTProjectDetails;
