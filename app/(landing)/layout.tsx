import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import SocialsBanner from "../components/SocialsBanner";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <SocialsBanner></SocialsBanner>
      <Header></Header>
      {children}
      <Footer/>
    </>
  )
}
