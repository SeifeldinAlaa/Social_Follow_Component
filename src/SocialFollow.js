import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
    faYoutube,
    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";



function SocialFollow() {

    return (

        <div className="social-container">
            <h3 className="social-title">@LearnBuildTeach</h3>
            <a href="https://www.google.com/translate" className="img">

                <img src="https://icon2.cleanpng.com/20180324/ziw/kisspng-google-logo-g-suite-google-5ab6f1f0b9e059.9680510615219389287614.jpg" width=" 2%" />
            </a>
            <a href="https://www.youtube.com/c/jamesqquick"
                className="youtube social">

                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/learnbuildteach"
                className="facebook social">

                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
                className="instagram social">

                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )

}







export default SocialFollow;