import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Works} from "./layout/section/works/Works.tsx";
import {Testimony} from "./layout/section/testimony/Testimony.tsx";
import {Contact} from "./layout/section/contact/Contact.tsx";
import {Slogan} from "./layout/section/slogan/Slogan.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./components/particle/Particle.tsx";
import {GoTopBtn} from "./components/goTopBtn/GoTopBtn.tsx";


function App() {
    return (
        <div className="App" >
            <Particle />
                <Header />
                <Main />
                <Skills/>
                <Works/>
                <Testimony/>
                <Contact/>
                <Slogan/>
                <Footer/>
            <GoTopBtn/>
            </div>

    );
}


export default App

