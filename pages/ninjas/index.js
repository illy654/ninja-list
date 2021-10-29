import styles from "../../styles/users.module.css"
import Link from "next/dist/client/link"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: { users: data }
    }
}

const Ninjas = ({ users }) => {
    console.log(users)
    return (
        <div>
            <h1>All Ninjas</h1>
            {users.map(user => (
                <Link key={user.id} href = {"/ninjas/" + user.id}>
                    <a className={styles.single}><h3>
                        {user.name}</h3>   </a>
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;