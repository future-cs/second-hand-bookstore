import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function FooterComponent() {
  return (
    <div class="footer">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <div>
            <a href="home" class="footer-logo">
              <img
                src="./img/logo-small.png"
                alt="Company Logo"
                class="logo-img"
              />
              <div className="footer-logo--text">
                <h1 className="logo-h">Chapter Two</h1>
                <div className="logo-tex">Second-Hand Book Store</div>
              </div>
            </a>
            <ul class="social-links">
              <li>
                <a class="footer-link" href="home">
                  <FaInstagramSquare className="social-icon" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="home">
                  <FaFacebookSquare className="social-icon" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="home">
                  <FaTwitterSquare className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
          <p class="copyright">
            Copyrihgt &copy; 2023 by Chapter Two, Inc. All rights reserved.
          </p>
        </div>
        <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <ul class="footer-nav">
            <li>
              <p class="footer-link" href="home">
                2096 Bates Dr, Boston, MA 01730
              </p>
            </li>
            <li>
              <a class="footer-link" href="tel:999-888-7777">
                999-888-7777
              </a>
            </li>
            <li>
              <a class="footer-link" href="mailto:contact@adventurejp.com">
                contact@chaptertwo.com
              </a>
            </li>
          </ul>
        </div>
        <nav class="nav-col">
          <p class="footer-heading">Account</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="home">
                Create account
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Sign in
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                iOS app
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Company</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="home">
                About us
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                For Business
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Partnership
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Resources</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="home">
                Company polices
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Help Center
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Privacy & Terms
              </a>
            </li>
            <li>
              <a class="footer-link" href="home">
                Certifications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default FooterComponent;
