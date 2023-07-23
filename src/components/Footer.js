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
                    }}>{t('footer_1')}</h1>
                </div>
                <div className='textFooter2'>
                    <p style={{
                        textAlign: 'left',
                        marginTop: '10px',
                        marginRight: '100px',
                    }}>{t('footer_2')}
                    <br />
                    (999) 999-9999
                    <br />
                    {t('footer_3')}
                    </p>

                    <p style={{
                        textAlign: 'left',
                        marginTop: '10px',
                    }}>{t('footer_4')}
                    <br />
                    {t('footer_5')}
                    <br />
                    {t('footer_6')}
                    </p>

                    <img src={insta} alt='Image of instagram logo' style={{ marginTop:'20px', marginLeft: '200px', width: '60px', height: '60px'}}className='img-fluid'/>
                    <img src={face} alt='Image of facebook logo' style={{ marginTop:'20px', marginLeft: '20px', width: '60px', height: '60px'}}className='img-fluid'/>
                </div>
            </Container>
        </div>
    )
};
  
export default Footer;