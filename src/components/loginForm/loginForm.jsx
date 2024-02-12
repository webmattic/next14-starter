"use client";

import styles from "./loginForm.module.css";
import { login } from "../../lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  // Use useFormState hook for error displays

  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <div>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />

        <button>Login</button>
        {state?.error}
        <Link href="/register">
          Don&quot;t have an Account?<b>Register</b>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
