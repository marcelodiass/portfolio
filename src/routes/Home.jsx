import { FaSquareFull as Quadrado } from 'react-icons/fa'
import './styles/home.css'

export default function Home() {


    return (
        <>
            <section className="box-intro">
                <div className="box-intro-1">
                    <h1 className="elevator-pitch-1">Marcelo é um <span className="strong">desenvolvedor</span></h1>
                    <p className="elevator-pitch-2">Ele desenvolve sistemas e sites responsivos onde a tecnologia encontra a criatividade!</p>
                    <button className="contate-me">Contate-me!</button>
                </div>
                <div className="imagem-perfil">
                    <img className='imagem-perfil-foto' src="https://s3-alpha-sig.figma.com/img/f4d7/7922/41ade353515843fc44bf4f33ac8d48cd?Expires=1694390400&Signature=OsuviLMEOpVsGCHL5zNhn9FMn2ufcAoDG9BZHCxTy9p~iHeV54a98XyQUSMcBEqn1qtrBwFGd2WTH~O0OnFTgzIRzBEkGI1B7Ext1x2gA9TEVt7s8HTXogbBJbmwlVy~HY8JQCNhB1aG9fHPokxTTqWvkYo0sAhg5ZC15tsViduHi9qjyhdFsiumOijNraJr4ZZkacWWHA44Y56jMnecESdVFP0XWoepuTd9aT0HYgcUtZfJrZQu1phu2rgg-UJoryOzQXFRkdZ6il~9h16QXn41kfubZ6WHMfLfJ0p9nI6GvwIGoBI-pO7~zK8jiapi2Yc~xHF30cacOsMhH1yO~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <div className="projeto-atual"><Quadrado className='quadrado'></Quadrado>Atualmente trabalhando em <span className='strong'>Portfolio</span></div>
                </div>
            </section>
        </>
    )
}