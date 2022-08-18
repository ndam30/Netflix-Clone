import Main from "../components/Main";
import Row from "../components/Row";
import Requests from "../Requests";

const Home = () => {
    return ( 
        <>
        <Main/>
        {/* <Row title='Up Coming' fetchURL={Requests.requestUpcoming}/> */}
        <Row rowID = '1'title='Popular' fetchURL={Requests.requestPopular}/>
        <Row rowID = '2' title='Top Rated' fetchURL={Requests.requestTopRated}/>
        <Row rowID = '3' title='Trending' fetchURL={Requests.requestTrending}/>
        {/*<Row title='Latest' fetchURL={Requests.requestLatest}/> */}
        </>
     );
}
 
export default Home;