import RegisterForm from "../../../components/registerForm/registerForm";
import { register } from "../../../lib/action";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
