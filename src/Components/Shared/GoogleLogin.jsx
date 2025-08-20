import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
const GoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error, "error this message");
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50 transition"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
