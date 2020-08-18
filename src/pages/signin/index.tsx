import React from "react";
import DefaultLayout from "@src/components/Layout/DefaultLayout";
import SigninForm from "@src/components/signin/SigninForm";

function SigninIndexPage() {
  return (
    <DefaultLayout>
      <p>컨텐츠를 이용하려면 로그인을 해주세요</p>
      <SigninForm />
    </DefaultLayout>
  );
}

export default SigninIndexPage;
