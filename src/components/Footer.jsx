import './styles/header.css'
import './styles/footer.css'
import { ImGithub as Github, ImFontSize } from 'react-icons/im'
import { BsLinkedin as Linkedin } from 'react-icons/bs'
import { BsDiscord as Discord } from 'react-icons/bs'

export default function Footer() {


    return (
        <>
            <footer>
                <hr className="horizontal-line" />
                <div className='footer-content'>
                    <div className='frame-desc'>
                        <div className='frame'>
                            <div className="logo"></div>
                            <div className="nome">Marcelo</div>
                            <a href="mailto:marcelodias.desenvolvedor@gmail.com" target='blank'>
                                <div className='email'>marcelodias.desenvolvedor@gmail.com</div>
                            </a>
                        </div>
                        <div>
                            <p className='job'>
                                Fullstack Developer
                            </p>
                        </div>
                    </div>

                    <div className='frame-media'>
                        <p>Media</p>
                        <div className='icon-media'>
                            <Github></Github>
                            <Linkedin></Linkedin>
                            <Discord></Discord>
                        </div>
                    </div>
                </div>
                
                <div className='credits'>© Copyright 2023. Made by Marcelo Dias</div>
            </footer>
        </>
    )
}