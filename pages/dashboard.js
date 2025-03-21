export async function getServerSideProps() {
    const res = await fetch(process.env.API_URL); // Uses the environment variable
    const data = await res.json();
  
    return { props: { data } };
  }
  
  export default function Dashboard({ data }) {
    return (
      <div>
        <h1>🚀 Deployed Dashboard (SSR)</h1>
        <p>{data.message}</p>
        <p>Timestamp: {data.timestamp}</p>
      </div>
    );
  }
  