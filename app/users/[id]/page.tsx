import Link from "next/link";
import Form from "app/users/[id]/components/form";
import { getUser } from "services/data/users";

type UsersIDPageProps = {
  params: {
    id: string;
  };
};

const UsersIDPage = async ({ params }: UsersIDPageProps) => {
  const user = await getUser(params.id);

  return (
    <div className="p-2">
      <Link className="btn btn-secondary" href="/users">
        GO BACK
      </Link>
      <pre>ID: {user.id}</pre>
      <pre>NAME: {user.name}</pre>
      <Form userID={user.id} />
    </div>
  );
};

export default UsersIDPage;
