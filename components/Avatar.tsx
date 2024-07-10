import { Avatar } from "@/components/ui/avatar";
import image from "@/public/assets/image-avatar.png";
import Image from "next/image";

const AvatarImg = () => {
  return (
    <Avatar className="w-8 h-8">
      <Image src={image} alt="avatar image" className="rounded-full" />
    </Avatar>
  );
};
export default AvatarImg;
