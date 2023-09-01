import './styles/header.css'

export default function Header() {

    return (
        <>
            <header>
                <div className='frame'>
                    <div className="logo"></div>
                    <div className="nome">Marcelo</div>
                </div>

                <nav>
                    <ul>
                        <li><span className="hashtag">#</span>home</li>
                        <li><span className="hashtag">#</span>works</li>
                        <li><span className="hashtag">#</span>about-me</li>
                        <li><span className="hashtag">#</span>contacts</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}