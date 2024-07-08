import Link from "next/link";

const HomePage = async () => {
  return (
    <Link className="btn btn-primary" href="/users">
      Users
    </Link>
  );
};

export default HomePage;
