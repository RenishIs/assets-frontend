import CustomCard from "./Card"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <CustomCard title="In-stock"/>
            <CustomCard title="New"/>
            <CustomCard title="Assigned"/>
            <CustomCard title="In-repair"/>
            <CustomCard title="Broken"/>
        </div>
    )
}

export default Dashboard