import React from "react";
import Layout from "../../connects/Layout";

import { useRouter } from "next/router";
import {
  CenterContainer,
  ScreenContainer,
} from "../../styles/StyledScreenContainer";
import CryptoProjectForm from "../../connects/CryptoProjectForm";

const EditCryptoProjectScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <CryptoProjectForm projectId={id} />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  );
};

export default EditCryptoProjectScreen;
