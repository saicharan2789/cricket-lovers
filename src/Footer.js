

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} My Company. All rights reserved.</p>
      <p>Built with React.</p>
    </footer>
  );
};

export default Footer;