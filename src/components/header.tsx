import { Link } from "react-router-dom";
import { FaSearch ,FaShoppingBag, FaSignInAlt} from "react-icons/fa";


const user ={_id:''}

const Header = () => {
  return (
    <nav>
        <Link to ={"/"}>Home</Link>
        <Link to ={"/search"}>
            <FaSearch/>
        </Link>

        <Link to ={"/Cart"}>
        
            <FaShoppingBag/>
        </Link>

{
    user?._id?(
        <>
        </>
    ):  <Link to ={"/login"}>
        
    <FaSignInAlt/>
</Link>
}
    </nav>
  );
  
};

export default Header;