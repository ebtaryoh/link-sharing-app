import Image from "next/image";
import devlogo from "../../../../public/devlinks.png";
import links from "../../../../public/lock.svg";
import profile from "../../../../public/ph_user-circle-bold.svg";

export default function Navbar() {
  return (
    <div className="flex gap-60">
      <div className="flex flex-row items-center gap-4 mb-10 ">
        <Image src={devlogo} alt="devlinks" />
        <p className="font-bold text-2xl">devlinks</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image src={links} alt="/links" />
        <p>Links</p>
      </div>
      <div className="flex flex-row  items-center gap-4">
        <Image src={profile} alt="profile" />
        <p>Profile Details</p>
      </div>
      <p className="flex flex-row items-center">Preview</p>
    </div>
  );
}
