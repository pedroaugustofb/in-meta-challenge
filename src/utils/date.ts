export function formatDate(date: string) {
  // example: 2021-09-01T00:00:00.000Z to 9/1/2021
  return new Date(date).toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
}
