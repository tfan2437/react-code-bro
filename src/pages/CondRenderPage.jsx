import CondRenderProps from "../components/CondRenderProps";
import CondRenderState from "../components/CondRenderState";

const CondRenderPage = () => {
  return (
    <div>
      <CondRenderProps isLoggedIn={true} username="tfan2437" />
      <CondRenderState />
    </div>
  );
};

export default CondRenderPage;
