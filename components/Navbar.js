import Link from "next/link"
import Image from "next/dist/client/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
            <Image src={"/earth.png"} alt="" width={64} height={64}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;