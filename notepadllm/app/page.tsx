import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Notepad App</h1>
            <Link href="/notepad">Go to Notepad</Link>
        </div>
    );
};

export default Home;