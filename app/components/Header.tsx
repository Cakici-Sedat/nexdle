import Image from 'next/image'
import Link from "next/link";
import logo from "./../favicon.ico";

export function Header() {
    return(
        <div className="flex flex-row p-2 border-b-2 mx-8 mt-2 border-trex">
            <div className="basis-1/3 px-4">
                <Link href="./">
                <Image className="rounded-md" src={logo} width={25} height={25} alt="Nexdle"/>
                </Link>
            </div>
            <div className="basis-1/3 text-center">
                Remixdle
            </div>
            <div className="basis-1/3 text-end px-4">
                <Link href="/login" className="rounded-xl text-trextrex md:w-max md:px-12 px-6 bg-blue-400 hover:bg-blue-800 focus:bg-blue-800 focus:bg-opacity-50" >
                    Login
                </Link>
            </div>
        </div>
    )
}