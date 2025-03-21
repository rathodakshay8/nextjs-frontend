import { supabase } from "../lib/supabase";

export async function getServerSideProps() {
  const { data: users, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error);
    return { props: { users: [] } };
  }

  return { props: { users } };
}

export default function Dashboard({ users }) {
  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Supabase User Dashboard</h1>
        
        {users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </div>
      
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: #f4f4f4;
          padding: 20px;
        }
        .card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
          text-align: center;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        th {
          background: #007bff;
          color: white;
        }
        tr:nth-child(even) {
          background: #f9f9f9;
        }
      `}</style>
    </div>
  );
}
