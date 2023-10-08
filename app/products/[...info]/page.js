async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      cache: "no-cache",
    });
    const resData = await res.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
}
const InfoPage = async ({ params }) => {
  const data = await getData();
  return (
    <div>
      <h1>InfoPage</h1>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>id {item.id}</p>
              <p>title {item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoPage;
