import payment from '../../../public/payment.png'
import { BsFacebook, BsYoutube, BsGithub, BsLinkedin, BsReddit, BsGit } from 'react-icons/bs'
import Container from './Container'
import Logo from './Logo'
import Link from 'next/link'
import Image from "next/image";


const Footer = () => {
    return (
        <div className='w-full bg-darkText text-slate-100'>
            <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                <div className='flex flex-col gap-y-4'>
                    <Logo />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit voluptas magni, minima dicta, fuga doloribus perferendis sequi totam architecto nobis atque voluptatibus provident vitae inventore dolorum id modi, culpa quo porro? Eveniet aut libero aliquid sequi unde, neque et.
                    </p>
                    <div className='flex items-center gap-x-4'>
                        <Link href={'https://www.youtube.com/'}>
                            <span className='socialLink'>
                                <BsYoutube />
                            </span></Link>
                        <Link href={'/'}>
                            <span className='socialLink'>
                                <BsFacebook />
                            </span>
                        </Link>

                        <Link href={'https://github.com/HassanFarooq704'}>
                            <span className='socialLink'>
                                <BsGithub />
                            </span>
                        </Link>

                        <Link href={'https://www.linkedin.com/in/muhammad-hassan-a68132294/'}>
                            <span className='socialLink'>
                                <BsLinkedin />
                            </span>
                        </Link>

                        <Link href={'/'}>
                            <span className='socialLink'>
                                <BsReddit />
                            </span>
                        </Link>

                    </div>
                </div>

                <div>
                    <p className='text-lg'>Latest post</p>
                    <ul className='text-sm font-light mt-2 gap-y-4 flex flex-col '>
                        <li className='flex flex-col'>
                            <span className='text-slate-100 hover:text-orange-600 cursor-pointer durtion-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>January 31,2022</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate-100 hover:text-orange-600 cursor-pointer durtion-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>January 31,2022</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate-100 hover:text-orange-600 cursor-pointer durtion-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>January 31,2022</span>
                        </li>
                        <li className='flex flex-col'>
                            <span className='text-slate-100 hover:text-orange-600 cursor-pointer durtion-200'>Where Music Is Headed Next</span>
                            <span className='text-orange-600'>January 31,2022</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className='text-lg'>Links</p>
                    <ul className='tex-base font-medium mt-2 flex flex-col gap-y-2'>
                        <Link href={'/'}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Home</li>
                        </Link>
                        <Link href={'/cart'}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Cart</li>
                        </Link>
                        <Link href={'/about'}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>About</li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Newsletter</li>
                        </Link>
                        <Link href={'/'}>
                            <li className='hover:text-orange-500 cursor-pointer duration-200'>Contact us</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <p className='text-lg mb-2'>Pay us with your trusted services</p>
                    <Image src={payment} alt='Payment Image' className='w-full h-10 object-cover'/>
                </div>
            </Container>
        </div>
    )
}

export default Footer