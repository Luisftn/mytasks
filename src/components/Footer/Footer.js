import "./footer.sass";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>MyTasks @ {currentYear}</p>
    </footer>
  );
}

export default Footer;
