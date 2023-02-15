{
  /**
   *  Union Type: OR => 여러개의 타입중에 하나만 할당할때 쓴다.
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function : login -> succes, fail ⏱
  type SuccesState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccesState | FailState;

  function login(): LoginState {
    //발생할 수 있는 것중 하나만 리턴
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState(state: LoginState) {
    // bad
    if ('response' in state) {
      console.log(`${state.response.body}`);
    } else {
      console.log(`${state.reason}`);
    }
  }
}
