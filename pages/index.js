import Link from 'next/link';
import Head from 'next/head';
import PureReactCarousel from '../components/PureReactCarousel';

//import dynamic from 'next/dynamic';
// const HeaderCarousel = dynamic(() => import('../components/3dCarousel'));
const Index = () => (
    <div>
      <Head>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
      </Head>
        <Link href="/about"><a>About Page</a></Link>
        <h1>Home Page</h1>
        {/* <HeaderCarousel/> */}
        <PureReactCarousel/>
        <button onClick={() => loadMorePosts("datahere")} color="danger">Danger!</button>
    </div>
);

function loadMorePosts(data){
    alert("hello"+data);
}

export default Index;
