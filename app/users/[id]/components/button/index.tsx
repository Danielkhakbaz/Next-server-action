"use client";

import { useFormStatus } from "react-dom";

const Button = () => {
  const status = useFormStatus();

  return (
    <button className="btn btn-secondary" type="submit">
      {status.pending ? "Saving..." : "Save"}
    </button>
  );
};

export default Button;
