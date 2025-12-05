import { Form } from "./components/Form";
import { Summary } from "./components/Summary";
import { ListOrders } from "./components/ListOrders";
import { useInitialData } from "./hooks/useInitialData";

import "./App.css";

function App() {
  const { loading } = useInitialData();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="card-content">
        <Form />
        <Summary />
      </div>
      <ListOrders />
    </>
  );
}

export default App;
