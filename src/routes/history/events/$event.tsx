import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/history/events/$event")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t, i18n } = useTranslation();
  const { event } = Route.useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/events/${event}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setEventData(data);
        console.log("data", data);
      } catch (error) {
        console.error("Ошибка при получении данных о роде:", error);
      }
    };

    if (event) {
      fetchEvent();
    }
  }, [event]);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history min-h-screen pt-[150px]">
      <div className="mx-[217px]">
        <div className="flex gap-[87px]">
          <img
            width={609}
            height={423}
            className="w-[609px] h-[423px]"
            src={`/images/event_${event}.png`}
            alt="epoch"
          />
          <div>
            <h2 className="text-primary text-[50px]">
              {i18n.language === "ru" ? eventData.title.ru : eventData.title.kk}
            </h2>
            <div className="mt-[30px]">
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[160px]">Дата:</p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? eventData.date.ru
                    : eventData.date.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[160px]">Место:</p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? eventData.place.ru
                    : eventData.place.kk}
                </p>
              </div>
              <div className="flex">
                <p className="text-[#585858] text-[22px] w-[160px]">
                  Значение:
                </p>
                <p className="text-secondary text-[22px]">
                  {i18n.language === "ru"
                    ? eventData.meaning.ru
                    : eventData.meaning.kk}
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
            {t("history_section.info")}
          </h3>
          <p className="text-secondary text-[26px] mt-[30px] text-justify">
            {i18n.language === "ru" ? eventData.info.ru : eventData.info.kk}
          </p>
        </div>
      </div>
    </div>
  );
}
