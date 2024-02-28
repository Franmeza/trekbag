import Button from "./Button";

const buttonActions = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset to initial",
  "Remove all items",
];

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
