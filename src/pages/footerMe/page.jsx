// src\pages\footerMe\page.jsx
import { FaRunning } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const handleCopyEmail = (e) => {
    e.preventDefault();
    const email = "gansahy@gmail.com"; // Your email address
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Optional: Show a notification or feedback to the user
        alert("Email address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <FaRunning className="mr-2" />
        <p>Stay running, Stay motivated © 2024 - Wut</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <button
          onClick={handleCopyEmail}
          aria-label="Copy email address to clipboard"
          className="flex items-center hover:text-primary transition-colors focus:outline-none"
        >
          <IoMailOutline size={24} className="mr-1" />
          <span>gansahy@gmail.com</span>
        </button>
      </nav>
    </footer>
  );
};

export default Footer;
