import React from "react";

export const Home = (props) => {
  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <a
        onClick={(e) => {
          localStorage.removeItem("");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("usuarioNome");
          localStorage.removeItem("usuarioEmail");
          props.setAccessToken("");
        }}
      >
        Sair
      </a>
    </>
  );
};
