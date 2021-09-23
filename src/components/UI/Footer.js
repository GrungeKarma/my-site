import './Footer.css';
import Social from './Social';

function Footer() {
    return (
        <div className="footer">
            <div className="flex-container">
                <Social />
                <span id="footer-text">&copy; Anthony Lopez</span>
            </div>
        </div>
    );
}

export default Footer;
