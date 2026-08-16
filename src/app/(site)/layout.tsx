import { Navbar } from "../../components/layout/navbar";
import { Footer } from "../../components/layout/footer";

export default function SiteLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      {modal}
    </>
  );
}