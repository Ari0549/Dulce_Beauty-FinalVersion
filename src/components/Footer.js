import './styles.css';
import Container from 'react-bootstrap/Container';
import insta from './instagram.png';
import face from './facebook.png';
import { useTranslation } from 'react-i18next';
const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className='footer'>
            <Container>
                <div className='textFooter1'>
                    <h1 style={{
                        marginRight: 'auto',
                        marginTop: '50px',
                    }}>Clinic</h1>
                    <h1 style={{
                        marginTop: '50px',
                    }}>Social Media</h1>
                </div>
                <div className='textFooter2'>
                    <p style={{
                        textAlign: 'left',
                        marginTop: '10px',
                        marginRight: '100px',
                    }}>Call or text at
                    <br />
                    (999) 999-9999
                    <br />
                    937 MacLaren Street, Ottawa, K1P 5M7
                    </p>

                    <p style={{
                        textAlign: 'left',
                        marginTop: '10px',
                    }}>Opening time:
                    <br />
                    Monday to Friday: 9 a.m. to 5 p.m.
                    <br />
                    Saturday and Sunday: closed
                    </p>

                    <img src={insta} style={{ marginTop:'20px', marginLeft: '200px', width: '60px', height: '60px'}}className='img-fluid'/>
                    <img src={face} style={{ marginTop:'20px', marginLeft: '20px', width: '60px', height: '60px'}}className='img-fluid'/>
                </div>
            </Container>
        </div>
    )
};
  
export default Footer;