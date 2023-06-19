
import HeaderText from './HeaderText';
import HeaderButton from './HeaderButton';
import HeaderSocial from './HeaderSocial';
import MyPhoto from './MyPhoto';
import HeaderDown from './HeaderDown';
import Container from '../components/Container/Container';

const Header = () => {
    return (
    <Container>
            <section id='#' className='py-10'>
            <HeaderText></HeaderText>
            <HeaderButton></HeaderButton>
            <div className='flex justify-around md:my-10 items-center my-5'>
              <HeaderSocial></HeaderSocial>
              <MyPhoto></MyPhoto>
              <HeaderDown></HeaderDown>
            </div>
        </section>
    </Container>
    );
};

export default Header;