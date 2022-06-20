import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Toast = () => {
  return <ToastContainer />;
};
/**
 * Switch para escolher qual tipo de mensagem mostrar
 * modelo de como chamar
 * const successMessage = () => {
    showToast({
      type: "success",
      message: "Colocar a mensagem, aqui",
    });
  };
 */
export const showToast = ({ type, message }) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warn":
      toast.warn(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

/**
 *
 * Exportando direto o toast conforme sua necessidade
 * modelo de como chamar:
 * successMessage("Colocar a mensagem, aqui");
 */
export const successMessage = (message) => {
  showToast({
    type: "success",
    message: message,
  });
};

export const alertMessage = (message) => {
  showToast({
    type: "warn",
    message: message,
  });
};

export const errorMessage = (message) => {
  showToast({
    type: "error",
    message: message,
  });
};

export const infoMessage = (message) => {
  showToast({
    type: "info",
    message: message,
  });
};

export default function ToastAnimated() {
  return <Toast />;
}
/**
 * Criado componente de toast, foi sobrescrito as classes de estilo padrão da biblioteca, para que possamos passar as cores que desejamos.
 * Criado uma função chamada showToast, onde passamos o tipo do toast e a mensagem que ele deve passar.
 * E também foi criado as funções com os toast definidos para usar de forma direta
 */
