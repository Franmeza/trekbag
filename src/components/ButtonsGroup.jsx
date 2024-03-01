import Button from "./Button";
import { buttonActions } from "../utils/constants";

function ButtonsGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIcomplete,
}) {
  return (
    <section className="button-group">
      {/* {buttonActions.map((action) => (
        <Button  key={action} type="secondary" >
          {action}
        </Button>
      ))} */}
      <Button btnType="secondary" onClick={handleMarkAllAsComplete}>
        {buttonActions[0]}
      </Button>
      <Button btnType="secondary" onClick={handleMarkAllAsIcomplete}>
        {buttonActions[1]}
      </Button>
      <Button btnType="secondary" onClick={handleResetToInitial}>
        {buttonActions[2]}
      </Button>
      <Button btnType="secondary" onClick={handleRemoveAllItems}>
        {buttonActions[3]}
      </Button>
    </section>
  );
}

export default ButtonsGroup;
