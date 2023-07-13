import './styles.css';
import Container from 'react-bootstrap/Container';
const Footer = () => {

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

                    <p style={{
                        marginTop: '10px',
                        marginLeft: '205px',
                    }}>Instagram
                    <br />
                    Facebook
                    </p>
                </div>
            </Container>
        </div>
    )
};
  
export default Footer;