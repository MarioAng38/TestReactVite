import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Targoviste", "Bucuresti", "Comisani", "Constanta"];

  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [color, setColor] = useState<
    "primary" | "secondary" | "danger" | "success"
  >("primary");

  const toggleColor = () => {
    setColor((prev) => (prev === "primary" ? "success" : "primary"));
    setAlertVisibility(true);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-5">
        <ListGroup
          items={items}
          heading="Orase"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        {alertVisible && <Alert>Butonul a fost apasat!</Alert>}
      </div>
      <div className="d-flex justify-content-center align-items-center my-5">
        <Button onClick={toggleColor} color={color}>
          My button
        </Button>
      </div>
    </>
  );
}

export default App;
