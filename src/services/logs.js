export function handleError(message = "", error) {
  const e = new Error(error);
  console.error(`kanbang + ${message} \n ${e.stack}`);
}

export function handleWarning() {
  console.warn();
}

export function handleSuccess() {
  console.info();
}
