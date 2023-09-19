import Header from "./Header";
import { MyFetchContextProvider } from "./fetchContext";

function App() {
  return (
    <MyFetchContextProvider>
      <Header />
    </MyFetchContextProvider>
  );
}

export default App;
