import { Content } from "./Content";
import Header from "./Header";
import { MyFetchContextProvider } from "./fetchContext";

function App() {
  return (
    <MyFetchContextProvider>
      <Header />
      <Content />
    </MyFetchContextProvider>
  );
}

export default App;
