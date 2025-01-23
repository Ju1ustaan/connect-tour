import { Socials } from "@/constants"
import Image from "next/image"


const Navbar = () => {
    return (
        <div className="fixed top-0 bg-transparent z-20 w-full flex gap-5 md:justify-between md:px-60 p-5">
            <Image
            src={'/assets/logo-black.svg'}
            alt="logo connect"
            width={200}
            height={50}
            />
            <div className="flex flex-row gap-5">
                {
                    Socials.map((social, idx) => (
                        <a href={social.path} target="_blank" key={`${social.name}${idx}`}>
                            <Image
                            src={social.src}
                            alt={social.name}
                            width={30}
                            height={30}
                            /> 
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar