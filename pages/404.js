import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const CatchAll = () => {
    const router = useRouter()

    useEffect(()=> {
        setTimeout(() => {
            router.push("/")
        }, 5000);
    }, [])
    return ( 
        <div className="not-found" style={{textAlign:"center"}}>
            <h1>Oops...</h1>
            <h2>That page cannot be found!</h2>
            <p>Go back to the <Link href={"/"}><a style={{textDecoration:"underline",color:"#4979ff"}}> home page </a></Link></p>
        </div>
     );
}
 
export default CatchAll;