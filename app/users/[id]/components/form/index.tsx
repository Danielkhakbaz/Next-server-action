import Button from "app/users/[id]/components/button";
import { updateUserAction } from "app/users/[id]/actions/update-user";

type FormProps = {
  userID: string;
};

const Form = ({ userID }: FormProps) => {
  return (
    <form action={updateUserAction.bind(null, userID)}>
      <input className="input input-secondary" type="text" name="name" />
      <Button />
    </form>
  );
};

export default Form;
