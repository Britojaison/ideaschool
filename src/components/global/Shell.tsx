import Header from "./Header";
import Footer from "./Footer";
import AnnouncementCard from "./AnnouncementCard";
import HomeForm from "@/components/homepage/HomeForm";
import LenisScroller from "./LenisScroller";
export default function Shell({ children, headerOverlay = false }: { children: React.ReactNode; headerOverlay?: boolean }) {
  return <LenisScroller><div className="newSite"><Header overlay={headerOverlay} /><main>{children}</main><Footer /><AnnouncementCard /><HomeForm /></div></LenisScroller>;
}
