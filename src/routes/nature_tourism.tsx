import Banner from "@/components/ui/custom/banner/Banner";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Kazakhstan from "@react-map/kazakhstan";
import { useCallback, useRef, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Route = createFileRoute("/nature_tourism")({
  component: RouteComponent,
});

const kazakhstanTourismDataOld = {
  "Aqmola oblysy": [
    "Бурабай",
    "Окжетпес",
    "Озеро Боровое",
    "Национальный парк Бурабай",
  ],
  "Aqtöbe oblysy": [
    "Иргиз-Торгайский заповедник",
    "Мавзолей Абат-Байтак",
    "Пещеры Кобланды-батыра",
  ],
  "Almaty oblysy": [
    "Чарынский каньон",
    "Кольсайские озера",
    "Большое Алматинское озеро",
    "Тургеньское ущелье",
  ],
  "Atyraū oblysy": [
    "Соленое озеро Индер",
    "Национальный парк Ак Жайык",
    "Урал – самая западная река в Азии",
  ],
  "Shyghys Qazaqstan oblysy": [
    "Катон-Карагай",
    "Маркакольское озеро",
    "Рахмановские ключи",
    "Бухтарминское водохранилище",
  ],
  "Zhambyl oblysy": ["Айша-Биби", "Карахан", "Аулие-Ата", "Таласское ущелье"],
  "Batys Qazaqstan oblysy": [
    "Уральск – исторический центр",
    "Мечеть в Уральске",
    "Национальный парк Урал",
    "Река Чаган",
  ],
  "Qaraghandy oblysy": [
    "Кентские горы",
    "Улытау",
    "Гора Акмешит",
    "Каркаралинский национальный парк",
  ],
  "Qostanay oblysy": [
    "Наурызымский заповедник",
    "Тургайские геоглифы",
    "Озеро Сарыколь",
  ],
  "Qyzylorda oblysy": [
    "Байконур",
    "Мавзолей Кожанак-Ата",
    "Руины Жанкент",
    "Кызылкум",
  ],
  "Mangghystaū oblysy": ["Бозжыра", "Шакпак-Ата", "Бекет-Ата", "Тузбайыр"],
  "Pavlodar oblysy": [
    "Баянаул",
    "Озеро Жасыбай",
    "Пещера Коныр-Аулие",
    "Горы Акбет",
  ],
  "Soltüstik Qazaqstan oblysy": [
    "Курорт Шалкар-Имантау",
    "Озеро Имантау",
    "Парк в Петропавловске",
  ],
  "Ongtüstik Qazaqstan oblysy": [
    "Мавзолей Ходжи Ахмеда Ясави",
    "Арыстанбаб",
    "Сауран",
    "Каратау",
  ],
};

function RouteComponent() {
  const { t } = useTranslation();

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [clickPosition, setClickPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (state: string | null) => {
    if (selectedState !== state) {
      setSelectedState(state);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setClickPosition({ x, y });
    }
  };

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/images/photo_1.jpg",
    "/images/photo_2.jpg",
    "/images/photo_3.jpg",
    "/images/photo_4.JPG",
    "/images/photo_5.JPG",
    "/images/photo_6.jpg",
    "/images/photo_7.jpg",
    "/images/photo_8.jpg",
    "/images/photo_9.jpg",
    "/images/photo_10.jpg",
    "/images/photo_11.jpeg",
    "/images/photo_12.jpg",
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <main className="nature_tourism">
      <Banner section="nature_tourism_section" />
      <section className="pt-[112px]">
        <h2 className="text-center text-primary text-[50px]">
          {t("nature_tourism_section.unique")}
        </h2>
        <div className="mt-[106px] mx-[120px] flex items-center gap-[62px]">
          <p className="text-secondary text-center text-[32px]">
            {t("nature_tourism_section.unique_text")}
          </p>
          <img src="/images/unique.png" alt="unique" />
        </div>
      </section>
      <section className="pt-[200px]">
        <h2 className="text-center text-primary text-[50px]">
          {t("nature_tourism_section.kaz_map")}
        </h2>
        <div className="flex items-center justify-center pt-[124px]">
          <div
            className="relative w-[1200px] h-[658px]"
            onClick={handleClick}
            ref={containerRef}
          >
            {clickPosition && selectedState && (
              <div
                className="absolute p-4 bg-dark-gray p-2 rounded shadow pointer-events-none w-[300px]"
                style={{
                  top: clickPosition.y,
                  left: clickPosition.x,
                  zIndex: 50,
                }}
              >
                <h4 className="text-primary border-b-primary border-b-[1px] pb-1 text-[22px]">
                  {selectedState}
                </h4>
                <ul className="pt-2">
                  {kazakhstanTourismDataOld[selectedState].map(
                    (item, index) => (
                      <li key={index} className="text-secondary text-[18px]">
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}

            <Kazakhstan
              type="select-single"
              mapColor="#b0b0b0"
              selectColor="#978661"
              size={1200}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </section>
      <section className="mt-[372px]">
        <h2 className="text-primary text-[50px] ml-[185px]">Фотогалерея</h2>
        <div className="grid grid-cols-4 mx-[185px] gap-[36px] my-[67px]">
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              onClick={() => openImageViewer(index)}
              alt=""
            />
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </section>
    </main>
  );
}
