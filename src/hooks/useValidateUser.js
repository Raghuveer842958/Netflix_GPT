import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useValidateUser = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate();
    if (!user) {
      navigate("/");
    }
}

export default useValidateUser