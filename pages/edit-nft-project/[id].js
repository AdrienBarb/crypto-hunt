import React from "react";
import { useRouter } from "next/router";
import {
  CenterContainer,
  ScreenContainer,
} from "../../styles/StyledScreenContainer";
import NFTProjectForm from "../../connects/NFTProjectForm";
import Layout from "../../connects/Layout";

const EditNFTProjectScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <NFTProjectForm projectId={id} />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  );
};

export default EditNFTProjectScreen;
