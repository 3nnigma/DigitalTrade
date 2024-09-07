export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === "object"
      ? message[0]
      : message
    : error?.response?.data
      ? error?.response.data[Object.keys(error?.response?.data)[0]]
      : error.message;
};
