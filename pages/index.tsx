import { useKeycloak } from "@react-keycloak/nextjs";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
  const { keycloak } = useKeycloak();
  const loggedinState = keycloak?.authenticated ? (
    <span className="text-success">logged in</span>
  ) : (
    <span className="text-danger">not logged in</span>
  );

  const actionButton = keycloak?.authenticated ? (
    <button onClick={() => keycloak.logout()}>Log Out</button>
  ) : (
    <button onClick={() => keycloak.login()}>Log In</button>
  );

  console.warn({ keycloak });

  return (
    <div>
      <h1 className="mt-5">Hello Next.js + Keycloak 👋</h1>
      <div className="mb-5 lead text-muted">
        This is an example of a Next.js site using Keycloak.
      </div>

      <p>You are: {loggedinState}</p>

      {actionButton}

      <br />
      <br />

      <code>{JSON.stringify(keycloak, null, 2)}</code>
    </div>
  );
};

export default IndexPage;
