import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import { useTypewriter } from 'react-simple-typewriter';
import image from '../assets/image_avatar.png';
import frame from '../assets/bg.png';
import { Card, CardBody, Image, Slider, Badge, Avatar, CardFooter, CardHeader } from "@nextui-org/react";
import pokedesk from '../assets/pkmn.png';
import isl from '../assets/isl.png';
import cert from '../assets/certpng.png';
import diver from '../assets/diver.png';
import myimg1 from '../assets/myimg1.jpg';
import myimg2 from '../assets/myimg2.jpg';
import myimg3 from '../assets/myimg3.jpg';
import myimg4 from '../assets/myimg4.jpg';
import myimg5 from '../assets/myimg5.jpg';
import myimg6 from '../assets/myimg6.jpg';
import arc from '../assets/arc.jpg';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './Footer';

function Home() {
    const [liked, setLiked] = React.useState(false);
    const resume = "https://drive.google.com/file/d/1WDpuCSVnOeKRJce2N88tPyu0chx2ZvKj/view?usp=sharing"
    const [text] = useTypewriter({
        words: ['Ankit Biswas', 'a Developer'],
        loop: 0,
    });
    const [text1] = useTypewriter({
        words: ['About Me', 'What I Do'],
        loop: 0,
    });
    const [text2] = useTypewriter({
        words: ['My Projects', 'What I Have Done'],
        loop: 0,
    });
    const [text3] = useTypewriter({
        words: ['My Achievements', 'What I Have Achieved'],
        loop: 0,
    });

    const galleryStyle = {
        '--s': '150px',
        '--g': '15px',
        display: 'grid',
        margin: 'calc(var(--s) + var(--g))',
    };

    const imgStyle = {
        gridArea: '1/1',
        width: 'var(--s)',
        aspectRatio: '1.15',
        objectFit: 'cover',
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
        transform: 'translate(var(--_x,0), var(--_y,0)) scale(var(--_t,1))',
        cursor: 'pointer',
        transition: '.2s linear',
        filter: 'grayscale(10)',
    };

    const techstacks = [
        "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=Rc0Xn5AtE8kX&format=png&color=000000"
    ];

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
    ]


    const imgHoverStyle = {
        filter: 'grayscale(0)',
        zIndex: 1,
        transform: 'translate(var(--_x,0), var(--_y,0)) scale(1.15)',
    };
    const [hovered, setHovered] = useState(null);
    useEffect(() => {
        const interval = setInterval(() => {
            setHovered(Math.floor(Math.random() * 7));
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <section id="Home" className='md:flex justify-evenly space-y-8'>
                <div className='px-8 my-auto md:block hidden text-center'>
                    <h1 className="text-5xl font-bold text-center mb-6">
                        I am <span className='text-primary'>{text}</span>
                    </h1>
                    <p className="text-lg text-center">
                        This is a simple website built with NextUI and TailwindCSS.
                    </p>
                    <Button color='primary' variant='solid' className='mt-5 font-bold text-md'>Explore</Button>
                    <div className='mt-6 flex gap-4 justify-center'>
                        {techstacks.map((tech, index) => (
                            <Avatar
                                key={index}
                                radius="md"
                                size="md"
                                src={tech}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="gallery" style={galleryStyle}>
                        <img
                            src={myimg1}
                            alt="a house on a mountain"
                            style={{
                                ...imgStyle,
                                ...(hovered === 0 ? imgHoverStyle : {}),
                                '--_y': 'calc(-100% - var(--g))'
                            }}

                        />
                        <img
                            src={arc}
                            alt="some pink flowers"
                            style={{
                                ...imgStyle,
                                ...(hovered === 1 ? imgHoverStyle : {}),
                            }}

                        />
                        <img
                            src={myimg2}
                            alt="big rocks with some trees"
                            style={{
                                ...imgStyle,
                                ...(hovered === 2 ? imgHoverStyle : {}),
                                '--_x': 'calc(-75% - .87*var(--g))',
                                '--_y': 'calc(-50% - .5*var(--g))'
                            }}

                        />
                        <img
                            src={myimg3}
                            alt="a waterfall, a lot of tree and great view from the sky"
                            style={{
                                ...imgStyle,
                                ...(hovered === 3 ? imgHoverStyle : {}),
                                '--_x': 'calc(75% + .87*var(--g))',
                                '--_y': 'calc(-50% - .5*var(--g))'
                            }}

                        />
                        <img
                            src={myimg4}
                            alt="a cool landscape"
                            style={{
                                ...imgStyle,
                                ...(hovered === 4 ? imgHoverStyle : {}),
                                '--_x': 'calc(-75% - .87*var(--g))',
                                '--_y': 'calc(50% + .5*var(--g))'
                            }}

                        />
                        <img
                            src={myimg5}
                            alt="inside a town between two buildings"
                            style={{
                                ...imgStyle,
                                ...(hovered === 5 ? imgHoverStyle : {}),
                                '--_x': 'calc(75% + .87*var(--g))',
                                '--_y': 'calc(50% + .5*var(--g))'
                            }}

                        />
                        <img
                            src={myimg6}
                            alt="a great view of the sea above mountain"
                            style={{
                                ...imgStyle,
                                ...(hovered === 6 ? imgHoverStyle : {}),
                                '--_y': 'calc(100% + var(--g))'
                            }}

                        />
                    </div>
                </div>
                <div className='px-8 my-auto md:hidden block text-center'>
                    <h1 className="text-3xl font-bold text-center pb-6 pt-12">
                        I am <span className='text-primary'>{text}</span>
                    </h1>
                    <p className="text-lg text-center">
                        This is a simple website built with NextUI and TailwindCSS.
                    </p>
                    <Button color='primary' variant='solid' className='mt-5 font-bold text-md'>Explore</Button>
                    <div className='mt-6 flex gap-4 justify-center'>
                        {techstacks.map((tech, index) => (
                            <Avatar
                                key={index}
                                radius="md"
                                size="md"
                                src={tech}
                            />
                        ))}
                    </div>

                </div>
            </section>
            <section id="About" className='mt-8 text-center'>
                <div className='md:flex justify-between p-14 space-y-10'>
                    <div className='flex justify-center md:w-1/3' style={{ backgroundImage: `url(${frame})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>

                        <Image
                            isBlurred
                            alt="Woman listing to music"
                            className="object-cover m-5"
                            height={300}
                            src={image}
                            width={300}
                        />

                    </div>
                    <div className='md:w-2/3 px-6'>
                        <div className='mt-4'>
                            <h1 className='text-3xl font-bold mb-10'><span className='text-primary'>{"< "}{text1}{" />"}</span></h1>
                            <p className='mt-4'>Passionate about leveraging technology to create innovative solutions, I am a dynamic backend developer with a focus on Node.js, Express, MongoDB, and PostgreSQL. My journey into the tech realm started with Python, where I honed my skills in data analysis and visualization, setting a solid foundation for my programming journey.</p>
                            <div className='md:hidden flex gap-4 justify-center mt-10'>
                                {socialMedias.map((social, index) => (
                                    <Avatar
                                        key={index}
                                        radius="sm"
                                        size="sm"
                                        src={social.icon}
                                        className='cursor-pointer'
                                        onClick={() => window.open(social.url, "_blank")}
                                    />
                                ))}
                            </div>
                            <div className='gap-4 justify-center mt-10 hidden md:flex'>
                                {socialMedias.map((social, index) => (
                                    <Avatar
                                        key={index}
                                        radius="sm"
                                        size="lg"
                                        src={social.icon}
                                        className='cursor-pointer'
                                        onClick={() => window.open(social.url, "_blank")}
                                    />
                                ))}
                            </div>
                            <Button color='primary' variant='solid' className='mt-10 font-bold text-md'
                                onClick={() => window.open(resume, "_blank")}
                            >My Resume</Button>
                        </div>
                    </div>

                </div>
            </section>
            <section id="Achievements" className='text-center mt-20 mb-24 px-10'>
                <h1 className='text-3xl font-bold mb-12'><span className='text-primary'>{"< "}<FontAwesomeIcon icon={faTrophy} size="md" />{" "}{text3}{" />"}</span></h1>
                <div className='md:flex gap-6 justify-center space-y-8 md:space-y-0'>
                    <div className='flex justify-center'>
                    <Card className="col-span-12 sm:col-span-4 h-[300px]">

                        <Image
                            removeWrapper
                            alt="Card background"
                            className="z-0 w-full h-full object-cover"
                            src={cert}
                        />
                    </Card>
                    </div>
                    <div className='flex justify-center'>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src={diver}
                            />
                        </Card>
                    </div>
                </div>
            </section>
            <section id="Projects" className='text-center mt-10 px-14'>
                <h1 className='text-3xl font-bold mb-10'><span className='text-primary'>{"< "}{text2}{" />"}</span></h1>
                <div className='md:flex justify-center gap-10 mt-20 pb-40 space-y-8 md:space-y-0'>

                    {/* <div className='flex justify-center'>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">

                            <Image
                                isZoomed
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src="https://github-production-user-asset-6210df.s3.amazonaws.com/91245104/320290457-54b5bd94-3e67-4a0d-8007-e7ef1850ce34.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240705%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240705T145131Z&X-Amz-Expires=300&X-Amz-Signature=6a00f0f46ee92899503604429152a008d810b98bcc4ba7864bc5dbd68373da84&X-Amz-SignedHeaders=host&actor_id=122113753&key_id=0&repo_id=780466828"
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-black/80">Available soon.</p>
                                <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                    Notify me
                                </Button>
                            </CardFooter>
                        </Card>
                    </div> */}
                    <div className='flex justify-center'>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">

                            <Image
                                isZoomed
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src={pokedesk}
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
                                <p className="text-tiny text-white/80">Poke-Data-2.0</p>
                                <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={() => window.open("https://poke-data-2-0.vercel.app/", "blank")}>
                                    Visit
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='flex justify-center'>
                        <Card className="col-span-12 sm:col-span-4 h-[300px]">

                            <Image
                                isZoomed
                                removeWrapper
                                alt="Card background"
                                className="z-0 w-full h-full object-cover"
                                src={isl}
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-black/80">ISL-DATASET</p>
                                <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={() => window.open("https://github.com/ANKIT-BISWAS-20/ISL-DATASET/tree/main", "blank")}>
                                    Visit
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home;
