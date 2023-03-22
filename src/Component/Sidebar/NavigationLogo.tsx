import { Link } from 'react-router-dom';
import StackLogo from '../../assets/Stack Logo.svg';

const NavigationLogo = () => {
    return (
        <Link className='w-100 lg:my-4 min-[320px]:my-2 ml-3' to='/sales' aria-label='Link to home page'>
            <img src={StackLogo} alt="Stack logo" />
        </Link>
    );
};

export default NavigationLogo;