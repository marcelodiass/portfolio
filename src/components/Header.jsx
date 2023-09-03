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
                        <li><span className="hashtag">#</span>trabalhos</li>
                        <li><span className="hashtag">#</span>sobre-mim</li>
                        <li><span className="hashtag">#</span>contato</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}