import {AiOutlineDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const HeaderDown = () => {
    return (
        <div className='hidden md:block'>
            <Link to='/about'><AiOutlineDown className='text-white text-2xl'></AiOutlineDown></Link>
        </div>
    );
};

export default HeaderDown;