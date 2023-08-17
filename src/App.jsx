import IpHandler from "./components/IpHandler";
import IpProvider from "./context/IpContext";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="relative">
      <IpProvider>
        <IpHandler />
        <Homepage />
      </IpProvider>
    </div>
  );
}

export default App
