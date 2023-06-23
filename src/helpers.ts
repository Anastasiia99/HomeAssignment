export const temperatureToCelcius = (temp: number) => {
  return (temp - 273).toFixed(0);
};

export const convertTime = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes().toString();
  const formattedMin = minutes.length === 2 ? minutes : "0" + minutes;
  return hours + ":" + formattedMin;
};
