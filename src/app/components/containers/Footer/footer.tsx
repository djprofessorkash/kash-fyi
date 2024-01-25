"use client";

import Typewriter from "typewriter-effect";

interface FooterContent {
	leftJustifiedOutro?: string
}

const Footer = ({ 
    leftJustifiedOutro = "Created with ❤️ by AAKASH \"KASH\" SUDHAKAR."
}: FooterContent): JSX.Element => {
    return (
        <>
            <div>
            <Typewriter 
                onInit = {(typewriter) => {
                    typewriter.typeString(`${leftJustifiedOutro}`).start()
                }} 
                options = {{
                    delay: 12,
                    cursor: ""
                }}
            />
            </div>
        </>
    )
}

export default Footer;