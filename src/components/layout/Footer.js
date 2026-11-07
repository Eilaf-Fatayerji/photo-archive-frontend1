import '../layout/Footer.css';
function Footer() {
    return (
        <div className="footer" id="contact">
            <div className="footer-content">
                <div>
                    <h3> Artify AI</h3>
                    <p> Oraganize your photos and memories with ease.</p>
                </div>
                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>
            <div className="copyright">
                <p>&copy; 2026 Artify AI. All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;