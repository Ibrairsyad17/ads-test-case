import Image from "next/image";
import GetStarted from "@/app/components/Homepage/Sections/get-started";
import BroadcastSection from "@/app/components/Homepage/Sections/broadcast-section";
import CampaignSection from "@/app/components/Homepage/Sections/campaign-section";
import AutoReplySection from "@/app/components/Homepage/Sections/auto-reply-section";

export default function Home() {
  return (
    <>
      <GetStarted />
      <BroadcastSection />
      <CampaignSection />
      <AutoReplySection />
    </>
  );
}
