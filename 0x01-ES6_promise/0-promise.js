export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0, 'true');
  });
}
