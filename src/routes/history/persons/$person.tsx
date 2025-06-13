import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/history/persons/$person")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const { person } = Route.useParams();
  const [personData, setPersonData] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/persons/${person}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPersonData(data);
      } catch (error) {
        console.error("Ошибка при получении данных о роде:", error);
      }
    };

    if (person) {
      fetchPerson();
    }
  }, [person]);

  if (!personData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history min-h-screen pt-[150px]">
      <div className="mx-[217px]">
        <div className="flex gap-[87px]">
          <img
            width={382}
            height={499}
            className="w-[382px] h-[499px]"
            src={`/images/person_${person}.png`}
            alt="person"
          />
          <div>
            <h2 className="text-primary text-[50px]">
              {i18n.language === "ru" ? personData.name.ru : personData.name.kk}
            </h2>
            <div className="mt-[30px]">
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[200px]">
                  {t("history_section.status")}:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? personData.status.ru
                    : personData.status.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[200px]">
                  {t("history_section.birth_date")}:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? personData.birth.date.ru
                    : personData.birth.date.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[200px]">
                  {t("history_section.birth_place")}:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? personData.birth.place.ru
                    : personData.birth.place.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[200px]">
                  {t("history_section.death_date")}:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? personData.death.date.ru
                    : personData.death.date.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[200px]">
                  {t("history_section.death_place")}:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? personData.death.place.ru
                    : personData.death.place.kk}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[75px]">
          <h3
            className="text-primary text-[50px] pb-[27px]"
            style={{ borderBottom: "1px solid #978661" }}
          >
            {t("history_section.biography")}
          </h3>
          <p className="text-secondary text-[26px] mt-[30px] text-justify">
            {i18n.language === "ru"
              ? personData.biography.ru
              : personData.biography.kk}
          </p>
        </div>
      </div>
    </div>
  );
}
