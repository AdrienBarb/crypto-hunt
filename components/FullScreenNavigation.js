import React from "react";
import { StyledFullScreenNavigation } from "../styles/StyledNavigation";
import { LinkButton } from "../styles/StyledButton";
import Link from "next/link";
import { HorizontalMargin } from "../styles/StyledMargin";
import { HorizontalDivider } from "../styles/StyledDivider";
import Colors from "../constants/Colors";

const FullScreenNavigation = ({ state, logout }) => {
  const signOutHandler = async () => {
    await logout();
  };

  return (
    <StyledFullScreenNavigation>
      <div className="navigations-links">
        <Link href="/">
          <LinkButton>Home</LinkButton>
        </Link>
        <HorizontalMargin m2 />
        <Link href="/cryptos">
          <LinkButton>Crypto</LinkButton>
        </Link>
        <HorizontalMargin m2 />
        <Link href="/nfts">
          <LinkButton>NFT's</LinkButton>
        </Link>
        <HorizontalMargin m2 />
        <Link href="/events">
          <LinkButton>Events</LinkButton>
        </Link>
      </div>

      <HorizontalDivider color={Colors.yellow} width="40px" />

      <div className="connection-link">
        {state.usersReducers.currentUser ? (
          <LinkButton onClick={signOutHandler}>Log out</LinkButton>
        ) : (
          <>
            <Link href="/sign-in">
              <LinkButton>Sign in</LinkButton>
            </Link>
            <HorizontalMargin m2 />
            <Link href="/sign-up">
              <LinkButton>Sign up</LinkButton>
            </Link>
          </>
        )}
      </div>
    </StyledFullScreenNavigation>
  );
};

export default FullScreenNavigation;
