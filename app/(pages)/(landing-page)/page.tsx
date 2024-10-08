import GetStarted from "@/app/components/Homepage/Sections/get-started";
import BroadcastSection from "@/app/components/Homepage/Sections/broadcast-section";
import CampaignSection from "@/app/components/Homepage/Sections/campaign-section";
import AutoReplySection from "@/app/components/Homepage/Sections/auto-reply-section";
import OpportunitySection from "@/app/components/Homepage/Sections/opportunity-section";
import FaqFooterSection from "@/app/components/Homepage/Sections/faq-footer-section";
import PricingSection from "@/app/components/Homepage/Sections/pricing-section";

export default function Home() {
  return (
    <>
      <GetStarted />
      <BroadcastSection />
      <CampaignSection />
      <AutoReplySection />
      <OpportunitySection />
      <PricingSection />
      <FaqFooterSection />
    </>
  );
}
