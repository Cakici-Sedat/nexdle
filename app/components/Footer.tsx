import Link from "next/link";

export function Footer() {
    return(
        <div className="w-full">

            <div className="flex flex-row p-2 border-t-2 border-t-trex mx-8 mb-2">
                <div className="basis-1/3 px-4">
                    <Link href="./about-us">
                        About us 
                    </Link>
                </div>
                <div className="basis-1/3 text-center">
                <Link href="./about-us">
                        S&H Games
                    </Link>
                </div>
                <div className="basis-1/3 text-end px-4">
                    <a href="mailto:sedat-cakici@erfunden.de">
                        Contact us
                    </a>
                </div>
            </div>
        </div>

    )
}