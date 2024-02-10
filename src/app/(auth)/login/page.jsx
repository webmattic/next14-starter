import { handleGithubLogin } from "../../../lib/action";
import { login } from "../../../lib/action";

const LoginPage = async () => {
  return (
    <div>
      <div>
        <form action={handleGithubLogin}>
          <button>Sign-In with Github</button>
        </form>
        {/* ===== */}
        <form action={login}>
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login with Credentials</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
