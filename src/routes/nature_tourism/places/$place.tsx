import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/nature_tourism/places/$place")({
  component: RouteComponent,
});

function RouteComponent() {
  const { place } = Route.useParams();
  const [placeData, setPlaceData] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/places/${place}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPlaceData(data);
      } catch (error) {
        console.error("Ошибка при получении данных о роде:", error);
      }
    };

    if (place) {
      fetchPlace();
    }
  }, [place]);

  if (!placeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="nature_tourism min-h-screen">
      <div className="mx-[217px] pt-[150px] pb-[100px]">
        <div className="flex gap-[60px] items-start">
          <img
            src="/images/photo_1.jpg"
            className="w-[639px] h-[463px] object-cover"
            alt={place}
          />
          <div>
            <h2 className="text-primary text-[50px]">
              {i18n.language === "ru" ? placeData.name.ru : placeData.name.kk}
            </h2>
            <div className="flex mt-5">
              <p className="text-[#585858] text-[22px] w-[200px]">
                {t("nature_tourism_section.region")}:
              </p>
              <p className="text-secondary text-[22px]">{placeData.region}</p>
            </div>
            <div className="flex">
              <p className="text-[#585858] text-[22px] w-[200px]">
                {t("nature_tourism_section.category")}: :
              </p>
              <p className="text-secondary text-[22px]">{placeData.category}</p>
            </div>
          </div>
        </div>
        <div className="mt-[54px]">
          <h3
            className="text-primary text-[50px] pb-[27px]"
            style={{ borderBottom: "1px solid #978661" }}
          >
            {t("nature_tourism_section.description_info")}
          </h3>
          <p className="text-secondary text-[26px] mt-[30px] text-justify">
            {i18n.language === "ru"
              ? placeData.description.ru
              : placeData.description.kk}
          </p>
        </div>
      </div>
    </div>
  );
}
