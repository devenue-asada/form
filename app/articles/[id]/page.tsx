const Home = ({ params }: any) => {
    return (
        <div>
            詳細
            <div> {params.id} </div>
        </div>
    );
};

export default Home;
