import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <Link
        href="https://raikwal-portfolio.vercel.app/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">
          Designed and Built by Lakshya Raikwal.
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
