
import './App.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Top Products</h4>
                <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Features</h4>
                <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li>Managed Website</li>
                    <li>Manage Reputation</li>
                    <li>Power Tools</li>
                    <li>Marketing Service</li>
                </ul>
            </div>
            <div className="footer-newsletter">
                <h4>Newsletter</h4>
                <p>You can trust us. We only send promo offers.</p>
                <form action="#" method="post">
                    <label htmlFor="email">Your Email Address</label>
                    <input
                        id="email"
                        className="form-control"
                        name="EMAIL"
                        placeholder="Your Email Address"
                        required
                        type="email"
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>
    );
}

export default Footer;
    ``