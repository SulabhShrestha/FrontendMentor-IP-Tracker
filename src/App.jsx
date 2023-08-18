import IpHandler from "./components/IpHandler";
import IpProvider from "./context/IpContext";
import Homepage from "./pages/Homepage";

function App() {
  return (

      <IpProvider>
        <IpHandler />
        <Homepage />
      </IpProvider>
  );
}

export default App
