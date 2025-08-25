/** @jsxImportSource @emotion/react */
import Modal from "../Modal";

function SignUpModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default SignUpModal;
