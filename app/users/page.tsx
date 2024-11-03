import Link from "next/link";
import { getUsers } from "services/data/users";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <section className="flex flex-col gap-4 p-4">
      {users.map((user) => (
        <Link key={user.id} className="bg-white p-2" href={`/users/${user.id}?name=${user.name}`}>
          <pre>ID: {user.id}</pre>
          <pre>NAME: {user.name}</pre>
        </Link>
      ))}
    </section>
  );
};

export default UsersPage;
