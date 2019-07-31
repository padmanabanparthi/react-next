import Link from 'next/link';
import ReactPlayer from 'react-player';

export default function About(){
    return(
        <div>
            <Link href="/"><a>Home Page</a></Link>
            <h1>About Page</h1>
            <ReactPlayer url='https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' controls="true"/>
        </div>
    );
}
