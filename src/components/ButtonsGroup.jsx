import Button from "./Button";
import { buttonActions } from "../utils/constants";

function ButtonsGroup() {
  return (
    <section className="button-group">
      {buttonActions.map((action) => (
        <Button key={action} type="secondary">
          {action}
        </Button>
      ))}
    </section>
  );
}

export default ButtonsGroup;
