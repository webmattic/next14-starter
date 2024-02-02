import { handleGithubLogin } from "../../../lib/action";

const LoginPage = async () => {
  return (
    <div>
      <div>
        <form action={handleGithubLogin}>
          <button>Sign-In with Github</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
