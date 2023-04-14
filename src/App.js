import "./App.css";
import Cards from "./components/cards/Cards";
import { useState, useEffect } from "react";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import { Routes, Route, useNavigate } from "react-router-dom";
import Error404 from "./components/error/Errors";
import MyComponent from "./components/metele/Metele";
import Form from "./components/form/form";
import Apps2 from "./components/apps2/Apps2";
import "./app2.css";
import Letras from "./components/letras/letras";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const password = userData.password;
    const username = userData.username;

    if (userData.password === password && userData.username === username) {
      setAccess(true);

      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function handleCloseCard(id) {
    setCharacters((prevChars) => prevChars.filter((char) => char.id !== id));
  }

  function onSearch(newCharacter) {
    if (newCharacter === "random") {
      const randomId = Math.floor(Math.random() * 671) + 1;
      fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            const isCharacterExist = characters.some(
              (char) => char.id === data.id
            );
            if (!isCharacterExist) {
              setCharacters((prevChars) => [
                ...prevChars,
                { ...data, id: data.id },
              ]);
            } else {
              window.alert("Este personaje ya fue agregado");
            }
          }
        })
        .catch((error) => {
          window.alert("Ha ocurrido un error al buscar el personaje.");
          console.error(error);
        });
    } else {
      fetch(`https://rickandmortyapi.com/api/character/${newCharacter}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            const isCharacterExist = characters.some(
              (char) => char.id === data.id
            );
            if (!isCharacterExist) {
              setCharacters((prevChars) => [
                ...prevChars,
                { ...data, id: data.id },
              ]);
            } else {
              window.alert("Este personaje ya fue agregado");
            }
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((error) => {
          window.alert("Ha ocurrido un error al buscar el personaje.");
          console.error(error);
        });
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path={"/home"}
          element={
            <>
              <Apps2 />
              <Letras />
              <MyComponent onSearch={onSearch} />
              <Cards
                characters={characters}
                onClose={(id) => handleCloseCard(id)}
              />
            </>
          }
        />

        <Route
          path="/detail/:detailId"
          element={
            <>
              <Apps2 />
              <Detail />
            </>
          }
        />
        <Route
          path="/about"
          element={[
            <>
              <MyComponent onSearch={onSearch} />
              <About />,
            </>,
          ]}
        />
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
