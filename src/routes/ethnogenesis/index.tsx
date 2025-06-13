import Banner from "@/components/ui/custom/banner/Banner";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/ethnogenesis/")({
  component: RouteComponent,
});

const tribes = {
  senior: [
    "shapyrashty",
    "ysty",
    "oshakty",
    "alban",
    "suan",
    "dulat",
    "kanly",
    "shanyshkyly",
    "zhalayir",
    "syrgeli",
    "shaksham",
  ],
  middle: ["argyn", "naiman", "konyrat", "kypshak", "kerei", "uak"],
  junior: ["karakesek", "bayuly", "zhetiru"],
};

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const [marginValue, setMarginValue] = useState<string>("90");

  useEffect(() => {
    if (i18n.language === "kk") {
      setMarginValue("90");
    } else if (i18n.language === "ru") {
      setMarginValue("60");
    }
  }, [i18n.language]);


  return (
    <main className="ethnogenesis">
      <Banner section="ethnogenesis_section" />
      <section className="pt-24 pb-12">
        <h2 className="section-title text-center">
          {t("ethnogenesis_section.origin_title")}
        </h2>
        <div className="mt-[130px] mx-30 flex items-center gap-[50px]">
          <img src="/images/origin.png" alt="origin" />
          <p
            className="text-secondary text-[32px]"
            dangerouslySetInnerHTML={{
              __html: t("ethnogenesis_section.origin_description"),
            }}
          />
        </div>
      </section>
      <section className="mt-24">
        <h2 className="section-title text-center">
          {t("ethnogenesis_section.three_juz")}
        </h2>
        <p className="mt-20 pb-[200px] mx-[140px] text-secondary text-[32px] text-center">
          {t("ethnogenesis_section.three_juz_description")}
        </p>
        <div>
          <div className="flex flex-col items-center">
            <span className="text-secondary text-center text-[50px] mb-[15px]">
              Алаш
            </span>
            <div className="bg-secondary w-[144px] h-[144px] rounded-[50%]" />
          </div>
          <div className="grid grid-cols-3 mx-[300px]">
            <div className="mt-[50px]">
              <div className="mt-[100px] ml-[100px] mb-[105px] bg-white w-[350px] h-[1px] arrow" />
              <span
                style={{
                  marginLeft: i18n.language === "kk" ? "95px" : "60px",
                }}
                className={`text-secondary text-center text-[32px] mb-[26px]`}
              >
                {t("ethnogenesis_section.senior")}
              </span>
              <div className="ml-[50px] mt-[26px] bg-secondary w-[144px] h-[144px] rounded-[50%]" />
              <div className="flex flex-col w-fit items-center gap-5 ml-[35px] mt-[42px]">
                {tribes.senior.map((tribe) => (
                  <Link to={`/ethnogenesis/tribes/${tribe}`}>
                    <span className="text-secondary text-[32px] text-center">
                      {t(`ethnogenesis_section.tribes.${tribe}`)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="block w-0.5 h-[126px] mt-[107px] mb-[22px]"
                style={{ backgroundColor: "#b0b0b0" }}
              />
              <span className="text-secondary text-center text-[32px] mb-[26px]">
                {t("ethnogenesis_section.middle")}
              </span>
              <div className="bg-secondary w-[144px] h-[144px] rounded-[50%]" />
              <div className="flex flex-col gap-5 mt-[42px] items-center">
                {tribes.middle.map((tribe) => (
                  <Link to={`/ethnogenesis/tribes/${tribe}`}>
                    <span className="text-secondary text-[32px] text-center">
                      {t(`ethnogenesis_section.tribes.${tribe}`)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-[50px]">
              <div className="mt-[100px] mr-[100px] mb-[105px] bg-white w-[350px] h-[1px] arrow-reverse" />
              <span
                style={{ marginLeft: `2${marginValue}px` }}
                className={`text-secondary text-center text-[32px] mb-[26px]`}
              >
                {t("ethnogenesis_section.junior")}
              </span>
              <div className="ml-[250px] mt-[26px] bg-secondary w-[144px] h-[144px] rounded-[50%]" />
              <div className="flex flex-col w-fit items-center gap-5 ml-[258px] mt-[42px]">
                {tribes.junior.map((tribe) => (
                  <Link to={`/ethnogenesis/tribes/${tribe}`}>
                    <span className="text-secondary text-[32px] text-center">
                      {t(`ethnogenesis_section.tribes.${tribe}`)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[186px]">
        <h2 className="section-title text-center">
          {t("ethnogenesis_section.seven_ancestors")}
        </h2>
        <p className="mt-20 mb-16 mx-[140px] text-secondary text-[32px] text-center">
          {t("ethnogenesis_section.seven_ancestors_description")}
        </p>
        <div className="flex flex-col items-center text-[45px]">
          <span className="block text-secondary">
            {t("ethnogenesis_section.bala")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.ake")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.ata")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.argy_ata")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.baba")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.tup_ata")}
          </span>
          <div
            className="block w-0.5 h-[48px]"
            style={{ backgroundColor: "#b0b0b0" }}
          />
          <span className="block text-secondary">
            {t("ethnogenesis_section.tek_ata")}
          </span>
        </div>
      </section>
      <section className="mt-24 flex flex-col items-center">
        <h2 className="section-title text-center">
          {t("ethnogenesis_section.shezhire")}
        </h2>
        <p className="mt-20 pb-[200px] mx-[140px] text-secondary text-[32px] text-center">
          {t("ethnogenesis_section.shezhire_description")}
        </p>
        <img src="/images/shezhire_tree.png" alt="shezhire" />
      </section>
    </main>
  );
}
