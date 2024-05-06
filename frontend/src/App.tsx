import Form from "./components/Form";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <main className="mx-auto container lg:w-1/2 px-2 my-8">
        <Form />
      </main>
    </>
  );
};

export default App;
