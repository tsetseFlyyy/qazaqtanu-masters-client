import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/ethnogenesis/tribes/$tribe")({
  component: RouteComponent,
});

function RouteComponent() {
  const { tribe } = Route.useParams();
  const [tribeData, setTribeData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchTribe = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/tribes/${tribe}`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTribeData(data);
      } catch (error) {
        console.error("Ошибка при получении данных о роде:", error);
      }
    };

    if (tribe) {
      fetchTribe();
    }
  }, [tribe]);

  if (!tribeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ethnogenesis min-h-screen pt-[200px] pb-[100px]">
      <div className="mx-[217px] flex gap-[100px]">
        <img
          width={258}
          height={460}
          className="max-w-[258px] max-h-[460px]"
          src={`/images/tribes/${tribeData.id}.png`}
          alt=""
        />
        <div>
          <h2 className="text-primary text-[50px]">
            {t(`ethnogenesis_section.tribes.${tribeData.name}`)}
          </h2>
          <div>
            <div className="flex">
              <p className="text-[#585858] text-[22px] w-[160px]">
                Боевой клич:
              </p>
              <p className="text-secondary text-[22px]">
                {tribeData.battleCry}
              </p>
            </div>
            <div className="flex">
              <p className="text-[#585858] text-[22px] w-[160px]">
                Разделение:
              </p>
              <p className="text-secondary text-[22px]">
                {tribeData.division} родов
              </p>
            </div>
            <div className="flex">
              <p className="text-[#585858] text-[22px] w-[160px]">
                Представители:
              </p>
              <p className="text-secondary text-[22px]">
                <div style={{ whiteSpace: "pre-line" }}>
                  {tribeData.representatives.join("\n")}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[217px] mt-[75px]">
        <h3
          className="text-primary text-[50px] pb-[27px]"
          style={{ borderBottom: "1px solid #978661" }}
        >
          Краткая история
        </h3>
        <p className="text-secondary text-[26px] mt-[30px] text-justify">
          {tribeData.description}
        </p>
      </div>
    </div>
  );
}
