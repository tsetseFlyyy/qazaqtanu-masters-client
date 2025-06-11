import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  section: string;
};

const Banner: React.FC<Props> = ({ section }) => {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  useEffect(() => {
    if (bannerRef.current) {
      if (section === "main") {
        bannerRef.current.style.backgroundImage =
          'url("/images/banners/main-bg.png")';
      } else if (section === "ethnogenesis_section") {
        bannerRef.current.style.backgroundImage =
          'url("/images/banners/ethnogenesis-bg.png")';
      } else if (section === "history_section") {
        bannerRef.current.style.backgroundImage =
          'url("/images/banners/history-bg.png")';
      } else if (section === "nature_tourism_section") {
        bannerRef.current.style.backgroundImage =
          'url("/images/banners/nature_tourism-bg.png")';
      }
    }
  }, [section]);

  return (
    <section
      ref={bannerRef}
      className="main-banner banner h-screen  text text-primary text-[80px]"
    >
      <h1 dangerouslySetInnerHTML={{ __html: t(`${section}.title`) }} />
      <p className="text text-secondary mt-12 mb-36 text-[30px] max-w-5xl">
        {t(`${section}.description`)}
      </p>
      <button onClick={() => handleLanguageChange("kk")}>Қазақша</button>
      <button onClick={() => handleLanguageChange("ru")}>Русский</button>
    </section>
  );
};

export default Banner;
