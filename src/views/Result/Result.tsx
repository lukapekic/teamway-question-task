import { FunctionComponent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const ResultPageView: FunctionComponent = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    !state && navigate("/");
  }, []);

  if (!state) return null;

  return (
    <div>
      <h1>Congratulations on finished test!</h1>
      <h2>
        Your personality type is:&nbsp;
        <strong>{(state as string).toUpperCase()}</strong>
      </h2>
    </div>
  );
};
