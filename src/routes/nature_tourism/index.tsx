import Banner from "@/components/ui/custom/banner/Banner";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Kazakhstan from "@react-map/kazakhstan";
import { useCallback, useRef, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Route = createFileRoute("/nature_tourism/")({
  component: RouteComponent,
});

const kazakhstanTourismDataOld = {
  "Aqmola oblysy": [
    { id: "burabay", name: "Бурабай" },
    { id: "okzhetpes", name: "Окжетпес" },
    { id: "ulken-tengiz", name: "Большой Тенгиз" },
    { id: "kobeituz", name: "Кобейтуз" },
  ],
  "Aqtöbe oblysy": [
    { id: "irgiz-torgai-reserve", name: "Иргиз-Торгайский заповедник" },
    { id: "abat-baitak-mausoleum", name: "Мавзолей Абат-Байтак" },
    { id: "koblandy-caves", name: "Пещеры Кобланды-батыра" },
  ],
  "Almaty oblysy": [
    { id: "charyn-canyon", name: "Чарынский каньон" },
    { id: "kolsai-lakes", name: "Кольсайские озера" },
    { id: "big-almaty-lake", name: "Большое Алматинское озеро" },
    { id: "kaindy-lake", name: "Озеро Кайынды" },
  ],
  "Atyraū oblysy": [
    { id: "inder-salt-lake", name: "Соленое озеро Индер" },
    { id: "ak-zhaiyk-park", name: "Национальный парк Ак Жайык" },
    { id: "ural-river", name: "Урал – самая западная река в Азии" },
  ],
  "Shyghys Qazaqstan oblysy": [
    { id: "katon-karagai", name: "Катон-Карагай" },
    { id: "markakol-lake", name: "Маркакольское озеро" },
    { id: "rakhman-springs", name: "Рахмановские ключи" },
    { id: "bukhtarma-reservoir", name: "Бухтарминское водохранилище" },
  ],
  "Zhambyl oblysy": [
    { id: "aysha-bibi", name: "Айша-Биби" },
    { id: "karakhan", name: "Карахан" },
    { id: "aulie-ata", name: "Аулие-Ата" },
    { id: "talas-gorge", name: "Таласское ущелье" },
  ],
  "Batys Qazaqstan oblysy": [
    { id: "uralsk", name: "Уральск – исторический центр" },
    { id: "uralsk-mosque", name: "Мечеть в Уральске" },
    { id: "ural-national-park", name: "Национальный парк Урал" },
    { id: "chagan-river", name: "Река Чаган" },
  ],
  "Qaraghandy oblysy": [
    { id: "kent-mountains", name: "Кентские горы" },
    { id: "ulytau", name: "Улытау" },
    { id: "akmeshit-mountain", name: "Гора Акмешит" },
    { id: "karkaraly-park", name: "Каркаралинский национальный парк" },
  ],
  "Qostanay oblysy": [
    { id: "nauryzum-reserve", name: "Наурызымский заповедник" },
    { id: "turgai-geoglyphs", name: "Тургайские геоглифы" },
    { id: "sarykol-lake", name: "Озеро Сарыколь" },
  ],
  "Qyzylorda oblysy": [
    { id: "baikonur", name: "Байконур" },
    { id: "kozhanak-ata-mausoleum", name: "Мавзолей Кожанак-Ата" },
    { id: "zhankent-ruins", name: "Руины Жанкент" },
    { id: "kzylkum", name: "Кызылкум" },
  ],
  "Mangghystaū oblysy": [
    { id: "bozzhyra", name: "Бозжыра" },
    { id: "shakpak-ata", name: "Шакпак-Ата" },
    { id: "beket-ata", name: "Бекет-Ата" },
    { id: "tuzbair", name: "Тузбайыр" },
  ],
  "Pavlodar oblysy": [
    { id: "bayanaul", name: "Баянаул" },
    { id: "zhasybay-lake", name: "Озеро Жасыбай" },
    { id: "konyrauliye-cave", name: "Пещера Коныр-Аулие" },
    { id: "akbet-mountains", name: "Горы Акбет" },
  ],
  "Soltüstik Qazaqstan oblysy": [
    { id: "shalkar-imantau", name: "Курорт Шалкар-Имантау" },
    { id: "imantau-lake", name: "Озеро Имантау" },
    { id: "petropavlovsk-park", name: "Парк в Петропавловске" },
  ],
  "Ongtüstik Qazaqstan oblysy": [
    { id: "yasawi-mausoleum", name: "Мавзолей Ходжи Ахмеда Ясави" },
    { id: "arystanbab", name: "Арыстанбаб" },
    { id: "sauran", name: "Сауран" },
    { id: "karatau", name: "Каратау" },
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

  const openImageViewer = useCallback((index: number) => {
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
                className="absolute p-4 bg-dark-gray p-2 rounded shadow w-[300px] z-10"
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
                  {kazakhstanTourismDataOld[selectedState].map((item) => (
                    <Link key={item} to={`/nature_tourism/places/${item.id}`}>
                      <li className="text-secondary text-[18px]">
                        {t(`nature_tourism_section.places.${item.id}`)}
                      </li>
                    </Link>
                  ))}
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
      <section className="mt-[372px] pb-[100px]">
        <h2 className="text-primary text-[50px] ml-[185px]">Фотогалерея</h2>
        <div className="grid grid-cols-4 mx-[185px] gap-[36px] mt-[67px]">
          {images.map((item, index) => (
            <img
              width={360}
              height={225}
              className="w-[360px] h-[225px]"
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
