{
  // function : login -> succes, fail ⏱
  type SuccesState = {
    result: "succes"; // 공통적인 key값을 갖게해서 좀 더 직관적이게 사용
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccesState | FailState;

  function login(): LoginState {
    return {
      result: "succes",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    if (state.result === "succes") {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
