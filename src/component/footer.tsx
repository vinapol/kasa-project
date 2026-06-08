import "../style/footer.scss"

export default function Footer(){
    return(
        <footer className="footer">
            <img src="../assets/logo__white.svg" alt="Logo Kasa" className="footer__logo" />
            <h3 className="footer__copyright">© 2020 Kasa. All rights reserved</h3>
        </footer>
    )
}