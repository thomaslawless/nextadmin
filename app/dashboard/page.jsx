import Card from "./card/card"
import styles from "../ui/dashboard/dashboard.module.css"
const Dashboard = () => {
    return (
        <div>
            <div className={styles.card}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Dashboard