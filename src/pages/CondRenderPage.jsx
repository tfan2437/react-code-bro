import CondRenderProps from "../components/CondRenderProps";
import CondRenderState from "../components/CondRenderState";

const CondRenderPage = () => {
  return (
    <div>
      <CondRenderProps isLoggedIn={true} username="tfan2437" />
      <hr style={{ border: "1px solid #eee" }} />
      <CondRenderState />
    </div>
  );
};

export default CondRenderPage;
