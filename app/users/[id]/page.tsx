import Link from "next/link";
import { revalidatePath } from "next/cache";
import Button from "app/users/[id]/components/button";
import { getUser, updateUser } from "services/data/users";

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
      <form
        action={async (formData: FormData) => {
          "use server";

          await updateUser(user.id, formData.get("name") as string);

          revalidatePath(`/users/${user.id}`);
        }}
      >
        <input className="input input-secondary" type="text" name="name" />
        <Button />
      </form>
    </div>
  );
};

export default UsersIDPage;
