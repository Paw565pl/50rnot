import Form from "./components/Form";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="mx-auto container px-2 lg:px-0 lg:w-3/4 xl:w-1/2 my-8">
        <Form />
      </main>
    </>
  );
};

export default App;
