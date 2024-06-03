import HomeBanner from "../../components/homebanner";



const Home = () => {
    
    

    return (
        <>
            <HomeBanner/>
            <div className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img className="cursor" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" alt=""></img>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex align-items-center">
                                <div className="info">
                                    <h3>Best Seller</h3>
                                    <p>Do not miss the current offers until the end of the march</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Home;