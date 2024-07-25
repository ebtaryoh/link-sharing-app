import Image from "next/image";
import devlogo from "../../../../public/devlinks.png";
import links from "../../../../public/lock.svg";
import profile from "../../../../public/ph_user-circle-bold.svg";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex flex-row gap-3 mb-10">
        <Image src={devlogo} alt="devlinks" />
        <p className="font-bold text-2xl">devlinks</p>
      </div>
      <div className="flex flex-row">
        <Image src={links} alt="/links" />
        <p>Links</p>
      </div>
      <div>
        <Image src={profile} alt="profile" />
        <p>Profile Details</p>
      </div>
      <p>Preview</p>
    </div>
  );
}
