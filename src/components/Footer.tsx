import transferIcon from '../assets/transfer-icon.svg';
import EfectivoIcon from '../assets/efectivo-icon.svg';
import tarjetaIcon from '../assets/tarjeta-icon.svg';
import facebook from '../assets/facebook.svg';
import github from '../assets/github-icon.svg';
import instagram from '../assets/instagram.svg';

export function Footer() {
  return (
    <footer >
       <div className="subfooter1">
            <div className="razon">
                <h3>Athens S.A.S</h3>
                <h3>NIT: 9003258</h3>
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/?locale=es_LA" target="_blank" aria-label="Facebook">
                    <img src={facebook} alt="Icono de Facebook"/>
                </a>
                <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className='insta'>
                    <img src={instagram} alt="Icono de Instagram"/>
                </a>
                <a href="https://x.com/?lang=es" target="_blank" aria-label="Twitter">
                    <img src={github} alt="Icono de GitHub"/>
                </a>
            </div>
            <div className="pagos">
                <div className="arriba">
                    <h3>Método de Pagos</h3>
                </div>
                <div className="abajo">
                    <img src={EfectivoIcon} alt="Icono de Efectivo"/>
                    <img src={tarjetaIcon} alt="Icono de Tarjeta"/>
                    <img src={transferIcon} alt="Icono de Transferencia"/>
                </div>
            </div>
        </div>

        <section className="footer__container container">
            <form
                className="footer__form"
                action="https://formspree.io/f/xdoqjpkg"
                method="POST"
            >
                <h2 className="footer__newsletter">¡Contáctanos aquí!</h2>
                <div className="footer__inputs">
                <input type="email" placeholder="Email:" className="footer__input" name="email" />
                <input type="submit" value="Regístrate" className="footer__submit" />
                </div>
            </form>
            <div className="subfooter2">
                <h3>Tecnología</h3>
                <h3>Electrodomésticos</h3>
                <h3>Celulares</h3>
                <h3>Hogar</h3>
            </div>
        </section>

    </footer>
  );
}
