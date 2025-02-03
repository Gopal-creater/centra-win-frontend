import "./app.css";
import Header from "./components/Header/Header";
import OrderIntakeForm from "./components/OrderIntakeForm/OrderIntakeForm";

function App() {
  return (
    <>
      {/* Header---- */}
      <Header title="New Order Intake - Supply & Install" />

      {/* Body------ */}
      <main className="main">
        <OrderIntakeForm />
      </main>
    </>
  );
}

export default App;
