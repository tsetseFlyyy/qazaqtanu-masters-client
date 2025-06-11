import Banner from "@/components/ui/custom/banner/Banner";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/history")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();

  const [epochImage, setEpoch] = useState<string>("epoch_1.png");

  const events = [
    {
      title_ru: "Битва при Чирик-Рабате",
      title_kk: "Ширик-Рабат шайқасы",
      time_ru: "IV век до н.э.",
      time_kk: "Б. з. дейінгі IV ғасыр",
    },
    {
      title_ru: "Битва при Бугуу (Бухтарме)",
      title_kk: "Бұғу (Бұқтырма) шайқасы",
      time_ru: "603 год",
      time_kk: "603 жыл",
    },
    {
      title_ru: "Захват Таразa",
      title_kk: "Тараздың жаулап алынуы",
      time_ru: "999 год",
      time_kk: "999 жыл",
    },
    {
      title_ru: "Битва при Айгыржар",
      title_kk: "Айғыржар шайқасы",
      time_ru: "1365 год",
      time_kk: "1365 жыл",
    },
    {
      title_ru: "Битва при Орбулаке",
      title_kk: "Орбұлақ шайқасы",
      time_ru: "1643 год",
      time_kk: "1643 жыл",
    },
    {
      title_ru: "Восстание Сырыма Датова",
      title_kk: "Сырым Датұлы көтерілісі",
      time_ru: "1783–1797 гг.",
      time_kk: "1783–1797 жж.",
    },
    {
      title_ru: "«Алаш» и создание «Алаш Орды»",
      title_kk: "«Алаш» және «Алаш Орда» құрылуы",
      time_ru: "1917 год",
      time_kk: "1917 жыл",
    },
    {
      title_ru: "Провозглашение независимости",
      title_kk: "Тәуелсіздіктің жариялануы",
      time_ru: "16 декабря 1991 года",
      time_kk: "1991 жылғы 16 желтоқсан",
    },
  ];

  const personalities = [
    {
      title_ru: "Ширак (саки)",
      title_kk: "Шырақ (сақтар)",
      time_ru: "VI век до н.э.",
      time_kk: "Б. з. дейінгі VI ғасыр",
    },
    {
      title_ru: "Иштеми-каган",
      title_kk: "Иштеми қаған",
      time_ru: "умер в 576 году",
      time_kk: "576 жылы қайтыс болған",
    },
    {
      title_ru: "Юсуф Баласагуни",
      title_kk: "Жүсіп Баласағұни",
      time_ru: "ок. 1018–1077 гг.",
      time_kk: "шамамен 1018–1077 жж.",
    },
    {
      title_ru: "Жошы-хан",
      title_kk: "Жошы хан",
      time_ru: "ок. 1187–1227 гг.",
      time_kk: "шамамен 1187–1227 жж.",
    },
    {
      title_ru: "Касым-хан",
      title_kk: "Қасым хан",
      time_ru: "ок. 1445–1521 гг.",
      time_kk: "шамамен 1445–1521 жж.",
    },
    {
      title_ru: "Тауке-хан",
      title_kk: "Тәуке хан",
      time_ru: "ок. 1635–1718 гг.",
      time_kk: "шамамен 1635–1718 жж.",
    },
    {
      title_ru: "Абылай-хан",
      title_kk: "Абылай хан",
      time_ru: "1711–1781 гг.",
      time_kk: "1711–1781 жж.",
    },
    {
      title_ru: "Кенесары Касымов",
      title_kk: "Кенесары Қасымұлы",
      time_ru: "1802–1847 гг.",
      time_kk: "1802–1847 жж.",
    },
    {
      title_ru: "Ахмет Байтурсынов",
      title_kk: "Ахмет Байтұрсынұлы",
      time_ru: "1872–1937 гг.",
      time_kk: "1872–1937 жж.",
    },
    {
      title_ru: "Динмухамед Кунаев",
      title_kk: "Дінмұхамед Қонаев",
      time_ru: "1912–1993 гг.",
      time_kk: "1912–1993 жж.",
    },
  ];

  return (
    <main className="history">
      <Banner section="history_section" />
      <section className="mt-[124px] pb-[100px]">
        <h2 className="section-title text-center">
          {t("history_section.chronology_feed")}
        </h2>

        <div className="mt-20 flex flex-col items-center">
          <img
            width={900}
            height={410}
            className="max-h-[410px] object-cover object-top"
            src={`/images/${epochImage}`}
            alt="epoch"
          />
          <div className="mt-20 flex items-end gap-[30px] relative">
            <div className="h-[10px] bg-primary w-[88%] absolute z-0 top-[55%] left-1/2 -translate-x-1/2" />
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_1.png");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.nomads.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.nomads.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_2.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.turk_kaganat.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.turk_kaganat.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_3.jpeg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.karakhanids_islam.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.karakhanids_islam.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_4.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.mongol_empire_golden_horde.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.mongol_empire_golden_horde.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_5.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.kazakh_khan.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.kazakh_khan.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_6.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.russian_empire.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.russian_empire.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_7.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.soviet_period.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.soviet_period.time")}
              </span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer static z-1 hover:scale-110 transition-transform duration-300"
              onClick={() => {
                setEpoch("epoch_8.jpg");
              }}
            >
              <span
                className="text-secondary text-[20px] text-center"
                dangerouslySetInnerHTML={{
                  __html: t("history_section.independent_kazakhstan.text"),
                }}
              />
              <div className="w-[30px] h-[30px] bg-primary rounded-full mt-[16px] mb-[20px]" />
              <span className="text-secondary text-[20px] text-center">
                {t("history_section.independent_kazakhstan.time")}
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[150px]">
        <h2 className="section-title text-center">
          {t("history_section.historical_events")}
        </h2>
        <div className="grid grid-cols-4 pt-[174px] mx-10 gap-[18px]">
          {events.map((event, index) => (
            <div className="flex flex-col items-center" key={index}>
              <img
                width={460}
                height={288}
                className="w-[460px] h-[288px]"
                src={`/images/event_${index + 1}.png`}
                alt="event__1"
              />
              <span className="text-secondary text-[30px] text-center mt-[16px]">
                {i18n.language === "ru" ? event.title_ru : event.title_kk}
              </span>
              <span className="text-secondary text-[26px] text-center">
                {i18n.language === "ru" ? event.time_ru : event.time_kk}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[245px] pb-20">
        <h2 className="section-title text-center">
          {t("history_section.historical_persons")}
        </h2>
        <div className="grid grid-cols-5 pt-[174px] mx-10 gap-[42px]">
          {personalities.map((person, index) => (
            <div className="flex flex-col items-center" key={index}>
              <img
                width={265}
                height={347}
                src={`/images/person_${index + 1}.png`}
                alt="person"
              />
              <span className="text-center text-secondary text-[30px] mt-[20px]">
                {i18n.language === "ru" ? person.title_ru : person.title_kk}
              </span>
              <span className="text-center text-secondary text-[26px]">
                {i18n.language === "ru" ? person.time_ru : person.time_kk}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
