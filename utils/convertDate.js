export default function convertDate(dateString) {
  const date = new Date(dateString);
  const options = { month: "short", day: "numeric" };
  const month = date.toLocaleString("en-us", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}
