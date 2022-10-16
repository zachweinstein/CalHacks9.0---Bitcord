import React from "react";
import {observer} from "mobx-react";

const Home = observer(() => {
  const loggedOutView = (
    <>
      <div>You are logged out.</div>
      <div>
        <button
          type="button"
          className="primary-button"
          onClick={() => rootStore.Authenticate()}
        >
          Log in
        </button>
      </div>
    </>
  );

  const loggedInView = (
    <>
      <div>You are logged in.</div>
      <div>
        <button
          type="button"
          className="primary-button"
          onClick={() => rootStore.Logout()}
        >
          Log out
        </button>
      </div>
    </>
  );

  if(rootStore.loggedIn) {
    return loggedInView;
  } else {
    return loggedOutView;
  }
});

export default Home;
