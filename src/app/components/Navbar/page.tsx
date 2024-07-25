import Image from "next/image";
import devlogo from "../../../../public/devlinks.png";



export default function Navbar() {
    return(
        <div>
             <div className="flex flex-row gap-3 mb-10">
        <Image src={devlogo} alt="devlinks" />
        <p className="font-bold text-2xl">devlinks</p>
      </div>
        </div>
    )

}

