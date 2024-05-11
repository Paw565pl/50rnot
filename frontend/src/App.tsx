import Form from "./components/Form";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="container mx-auto my-8 px-2 lg:w-3/4 lg:px-0 xl:w-1/2">
        <Form />
      </main>
    </>
  );
};

export default App;
