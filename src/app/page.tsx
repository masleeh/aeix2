import NavbarIndex from "@/components/Common/Navbar/Navbar.index";
import DescriptionIndex from "@/components/IndexPage/Description/Description.index";
import FeaturesIndex from "@/components/IndexPage/Features/Features.index";
import HeaderIndex from "@/components/IndexPage/Header/Header.index";
import PicturesIndex from "@/components/IndexPage/Pictures/Pictures.index";

export default function Home() {
  return (
    <>
      <NavbarIndex />
      <HeaderIndex />
      <DescriptionIndex />
      <PicturesIndex />
      <FeaturesIndex />
    </>
  )
}
