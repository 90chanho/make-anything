import * as React from "react";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import SigninForm from "@src/components/signin/SigninForm";

interface Props {
  pageLoading: boolean;
  Loading: React.ReactNode;
}

function SigninIndexPage(props: Props) {
  const { pageLoading, Loading } = props;

  return (
    <DefaultLayout>
      {pageLoading ? (
        Loading
      ) : (
        <main>
          <p>컨텐츠를 이용하려면 로그인을 해주세요</p>
          <SigninForm />
        </main>
      )}
    </DefaultLayout>
  );
}

export default SigninIndexPage;
