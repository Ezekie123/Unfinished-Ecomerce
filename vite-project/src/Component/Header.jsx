// import './App.css'
import { VscSearch } from "react-icons/vsc"
import { BsFillCartCheckFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
const Header = () => {

    return (
        <>
            
            <div className="header">
                <div className="section">
                    <div class="leftHeader">
                        <span class="logo"><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-logo-design-template-0a279abdd76be76cc852e4ac959cc5f4_screen.jpg?ts=1669470887" alt="LOGO" /></span>

                        <ul>
                            <li>Suit Wears</li>
                            <li>Office</li>
                            <li>Casuals</li>
                            <li>Male Polo</li>
                            <li>Male Pants</li>
                            <li>Casuals</li>
                            <li>Female Polo</li>
                            <li>Female Pants</li>

                        </ul>

                    </div>

                    <section class="rightHeader">
                        <div>Sign In</div>
                        <span> <VscSearch /> </span>
                        <span> < BsFillCartCheckFill /></span>
                        <span> <CgProfile /></span>

                    </section>


                </div>
            </div>
             
        </>
    )
}

export default Header 