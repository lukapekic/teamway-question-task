import type { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import style from "./Landing.module.scss";

export const LandingPageView: FunctionComponent = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to our peronslity test!</h1>
      <Button
        data-testid="landingView-startButton"
        className={style["startButton"]}
        onClick={() => navigate("/questions")}
      >
        Start test
      </Button>
    </div>
  );
};
