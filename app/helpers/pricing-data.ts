import {
  ContactIcon,
  FilesIcon,
  MonitorCheck,
  Phone,
  ScreenShareIcon,
  TimerIcon,
  TrendingUpIcon,
} from "lucide-react";

export const pricingPlans = [
  {
    name: "Starter",
    price: { monthly: "Gratis", yearly: "Gratis" },
    description:
      "Mulai perjalanan Anda dengan paket Starter kami. Fitur-fitur dasar untuk memulai, seperti pesan, dan manajemen kontak sederhana. Dapatkan integrasi yang membantu dan antarmuka kontak WhatsApp.",
    features: [
      {
        icon: TimerIcon,
        title: "100 Auto Reply",
      },
      {
        icon: ScreenShareIcon,
        title: "500 Broadcast",
      },
      {
        icon: TrendingUpIcon,
        title: "50 Campaign",
      },
      {
        icon: ContactIcon,
        title: "500 Contact",
      },
      {
        icon: Phone,
        title: "50 Device",
      },
      {
        icon: FilesIcon,
        title: "Excel / CSV Contact Import",
      },
      {
        icon: MonitorCheck,
        title: "Google Contact Sync",
      },
    ],
    buttonText: "Start Now",
    buttonVariant: "blue",
  },
  {
    name: "Basic",
    price: { monthly: "Rp. 65.000", yearly: "Rp. 650.000" },
    description:
      "Dapatkan akses kepada fitur-fitur dengan Basic. Termasuk semua fitur Starter, ditambah otomatis, sistem pesan. Nikmati kemampuan integrasi yang luas dengan antarmuka kontak Google dan WhatsApp.",
    features: [
      {
        icon: TimerIcon,
        title: "100 Auto Reply",
      },
      {
        icon: ScreenShareIcon,
        title: "500 Broadcast",
      },
      {
        icon: TrendingUpIcon,
        title: "50 Campaign",
      },
      {
        icon: ContactIcon,
        title: "500 Contact",
      },
      {
        icon: Phone,
        title: "50 Device",
      },
      {
        icon: FilesIcon,
        title: "Excel / CSV Contact Import",
      },
      {
        icon: MonitorCheck,
        title: "Google Contact Sync",
      },
    ],
    buttonText: "Get Started",
    buttonVariant: "warning",
  },
  {
    name: "Premium",
    price: { monthly: "Rp. 76.000", yearly: "Rp. 800.000" },
    description:
      "Tingkatkan pengalaman Anda dengan Premium. Fitur-fitur lanjutan untuk meningkatkan produktivitas. Dapatkan integrasi yang luas dengan antarmuka kontak Google dan WhatsApp.",
    features: [
      {
        icon: TimerIcon,
        title: "100 Auto Reply",
      },
      {
        icon: ScreenShareIcon,
        title: "500 Broadcast",
      },
      {
        icon: TrendingUpIcon,
        title: "50 Campaign",
      },
      {
        icon: ContactIcon,
        title: "500 Contact",
      },
      {
        icon: Phone,
        title: "50 Device",
      },
      {
        icon: FilesIcon,
        title: "Excel / CSV Contact Import",
      },
      {
        icon: MonitorCheck,
        title: "Google Contact Sync",
      },
    ],
    buttonText: "Get Started",
    buttonVariant: "blue",
  },
  {
    name: "Pro",
    price: { monthly: "Rp. 86.000", yearly: "Rp. 900.000" },
    description:
      "Jelajahi seluruh fitur dengan paket Pro kami. Dapatkan akses tak terbatas ke semua fitur, sistem otomatis dan integrasi yang luas dengan antarmuka kontak Google dan WhatsApp.",
    features: [
      {
        icon: TimerIcon,
        title: "100 Auto Reply",
      },
      {
        icon: ScreenShareIcon,
        title: "500 Broadcast",
      },
      {
        icon: TrendingUpIcon,
        title: "50 Campaign",
      },
      {
        icon: ContactIcon,
        title: "500 Contact",
      },
      {
        icon: Phone,
        title: "50 Device",
      },
      {
        icon: FilesIcon,
        title: "Excel / CSV Contact Import",
      },
      {
        icon: MonitorCheck,
        title: "Google Contact Sync",
      },
    ],
    buttonText: "Get Started",
    buttonVariant: "blue",
  },
];
