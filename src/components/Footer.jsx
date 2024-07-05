// Footer.js
import React from 'react';
import { Avatar } from '@nextui-org/react';

const Footer = () => {
    const darkMode = localStorage.getItem("darkMode");
    const socialMedias = [
        {
            name: "GitHub",
            url: "https://github.com/ANKIT-BISWAS-20",
            icon: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ankit-biswas-a03899257/",
            icon: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ankit_b15w45/",
            icon: "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100079956308306&mibextid=ZbWKwL",
            icon: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
        },
        {
            name: "Email",
            url: "mailto:biswasankit0004@gmail.com",
            icon: "https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000",
        }
    ];

    return (
        <div className={`border-t-1 py-8 mt-2 ${darkMode ? "border-gray-500" : "border-violet-400"}`}>
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-bold mb-4">Follow Me</h2>
                <div className="flex justify-center gap-4 mb-4">
                    {socialMedias.map((social, index) => (
                        <Avatar
                            key={index}
                            radius="sm"
                            size="lg"
                            src={social.icon}
                            className="cursor-pointer"
                            onClick={() => window.open(social.url, "_blank")}
                        />
                    ))}
                </div>
                <p>&copy; 2024 Ankit Biswas. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
