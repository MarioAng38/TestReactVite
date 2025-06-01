import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Targoviste", "Bucuresti", "Comisani", "Constanta"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Orase"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
