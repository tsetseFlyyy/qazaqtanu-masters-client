import Banner from "@/components/ui/custom/banner/Banner";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main className="home">
      <Banner section="main"/>
      <section className="py-40 px-[220px] flex items-center justify-between gap-20">
        <img src="/images/about.png" alt="about" />
        <div className="text-secondary text-[32px]">
          <div>
            <h2 className="text-primary">{t("main.about")}</h2>
            <p>{t("main.about_description")}</p>
          </div>
          <div className="pt-24">
            <h2 className="text-primary">{t("main.goals_tasks")}</h2>
            <p>{t("main.goals_tasks_description")}</p>
          </div>
          <div className="pt-24">
            <h2 className="text-primary">{t("main.mission")}</h2>
            <p>{t("main.mission_description")}</p>
          </div>
        </div>
      </section>
      <section className="mt-[150px]">
        <h2 className="section-title text-center">
          {t("main.platform_capabilities")}
        </h2>
        <iframe
          className="mt-[121px] mx-auto mb-[250px]"
          width="1050"
          height="600"
          src="https://www.youtube.com/embed/_QT40Ex3nrU?si=eZgOu1jILONNqa8M"
          title="YouTube video player"
          allowfullscreen
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
      <section className="py-16">
        <h2 className="section-title text-center">
          {t("main.kaz_culture_meaning")}
        </h2>
        <p className="text-secondary text-center text-[32px] mt-16 mx-[230px]">
          {t("main.kaz_culture_meaning_description")}
        </p>
        <div className="mt-20 flex items-center mx-40 gap-40">
          <img src="images/nomads.png" alt="nomads" />
          <p className="text-secondary text-left text-[32px] mt-16 ">
            {t("main.nomads_description")}
          </p>
        </div>
        <div className="mt-20 flex items-center mx-40 gap-60">
          <p className="text-secondary text-right text-[32px] mt-16 ">
            {t("main.yurt_description")}
          </p>
          <img src="images/yurt.png" alt="yurt" />
        </div>
        <div className="mt-20 flex items-center mx-40 gap-10">
          <img src="images/abay.png" alt="abay" />
          <p className="text-secondary text-left text-[32px] mt-16 ">
            {t("main.abay_description")}
          </p>
        </div>
        <div className="mt-20 flex items-center mx-40 gap-60">
          <p className="text-secondary text-right text-[32px] mt-16 ">
            {t("main.zheti_ata_description")}
          </p>
          <img src="images/zheti_ata.png" alt="zheti ata" />
        </div>
        <div className="mt-20 flex items-center mx-60 gap-40">
          <img src="images/golden_man.png" alt="golden man" />
          <p className="text-secondary text-left text-[32px] mt-16 ">
            {t("main.golden_man_description")}
          </p>
        </div>
      </section>
      <section className="py-[150px]">
        <h2 className="section-title text-center">Этимология</h2>
        <div className="flex items-center mt-20 mx-24 gap-28">
          <img src="images/ethimology.png" alt="ethimology" />
          <p className="text-secondary text-left text-[32px] mt-16">
            {t("main.etymology_description")}
          </p>
        </div>
      </section>
      <section className="pt-20 pb-[300px]">
        <h2 className="section-title text-center">
          {t("main.seven_treasures")}
        </h2>
        <p className="text-center text-secondary text-[32px] mt-[90px] mx-28">
          {t("main.seven_treasures_description")}
        </p>
        <div className="flex justify-between mx-28 mt-24">
          <div>
            <svg
              fill="#978661"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 188.902 188.902"
              width="150"
              height="150"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M174.873,113.481c-21.775,11.732-23.855-9.641-23.855-9.641c-18.011-2.081-31.398-22.198-31.398-22.198 c-24.32,12.563-10.764,47.998-0.283,61.604c13.464,17.438,3.605,45.655,3.605,45.655s-54.902-4.438-82.929-39.649 c-21.045-26.434-15.601-51.424-9.617-67.918c7.208-19.821,16.952-30.7,31.159-42.271c21.119-17.221,60.139-19.375,60.139-19.375 c0.255-1.463,1.454-3.171,2.985-4.927c-4.699,0.127-10.438,0.52-16.976,1.375c-4.457,0.86-9.383,1.351-14.372,2.813 c-5.107,1.103-10.282,2.875-15.578,4.903c-5.29,1.974-10.491,4.776-15.628,7.693c-4.879,3.401-10.06,6.537-14.159,11.015 c-4.702,3.833-8.127,8.813-11.644,13.589c-3.673,4.685-5.477,10.4-8.225,15.321c-2.039,5.251-3.177,10.663-4.717,15.616 c-1.386,4.992-1.365,9.993-2.068,14.485c-0.594,4.504-1.046,8.635-0.704,12.329c0.121,3.688,0.195,6.922,0.281,9.563 c0.157,5.297,0.254,8.334,0.254,8.334l-0.732,0.065c0,0-0.63-2.967-1.454-8.311c-0.394-2.665-0.884-5.929-1.41-9.676 c-0.804-3.747-0.827-8.026-0.479-12.72c0.266-3.381,0.316-7.046,0.629-10.802L8.898,90.16l9.011-11.042l-9.46-1.354l13.515-10.368 l-9.921-3.156l13.982-7.66l-10.592-3.153l18.255-5.867l-12.62-3.605l20.507-5.642l-11.26-5.175l20.732-2.707l-10.14-5.857 l25.307-2.651c0.121-0.056,0.243-0.115,0.358-0.156l-11.695-5.296l26.602-2.252L69.289,7.9l50.318,3.993 c2.719,0.121,5.095,0.334,7.258,0.57C133.326,6.271,143.486,0,143.486,0c-2.092,2.084-2.926,13.406-2.926,13.406 c2.087-3.783,8.79-7.548,8.79-7.548c-3.76,8.79,0,27.63,0,27.63c10.899,10.902,23.04,48.581,23.04,48.581l4.622,6.694 C182.84,97.161,180.689,110.343,174.873,113.481z"></path>{" "}
                </g>
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.horse")}
            </p>
          </div>
          <div>
            <svg
              width="150"
              height="150"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#978661"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M508.799,191.696C450.224,202.159,318.69,153.52,318.69,153.52c-17.084-3.365-36.147,0.166-51.31,15.799 c0,0-29.981,34.949-34.631,40.372l-4.535-3.011c33.23-31.223,64.338-88.123,67.456-102.189c0.996-4.506-0.91-5.516-4.39-2.889 c-10.224,7.683-39.844,18.334-57.781,27.959c43.86-32.046,62.084-76.583,55.081-96.008c-0.694-1.906-3.235-2.159-4.044-0.938 c-25.013,37.042-120.01,82.352-120.01,82.352c-10.744,7.43-18.817,19.568-18.326,35.938c0,0,1.95,16.926,2.874,39.18 c-29.663-32.768-64.107-36.522-82.938-35.266c-41.361,2.758-34.01,19.2-55.456,38.219c-19.482,17.294-6.354,39.484-6.354,39.484 s40.999-43.816,61.81,16.932c16.896,49.325,20.131,66.446,33.143,79.076c7.408,7.199,13.734,13.192,19.208,18.232 c9.734,16.188,34.226,57.737,34.226,57.737l7.366-1.646l1.458,10.383l-20.29,9.329l-27.194-28.233l-27.338,1.56L76.303,412.06 l16.882-4.397l16.146,0.91l11.134,12.434l11.785,12.506l6.758,14.499l-7.769,7.041l18.023-2.882l-0.029-18.983l26.183-12.565 l-2.051-20.752l16.348-3.668c0,0-0.708-3.827-1.603-8.412c15.279,4.723,35.916,9.95,67.197,18.861l79.154,73.479l20.652-22.543 l-48.148-37.173l53.882,32.09l83.385-75.327l-137.108-9.012c-16.42-8.232-31.396-18.644-45.015-30.269 c40.913-4.722,91.704-35.729,106.564-40.199c7.683-2.31,2.831-8.094,2.831-8.094l-40.206-17.41 c60.741,13.67,101.755-5.466,118.045-15.517c5.199-3.221,4.405-5.979-1.343-6.874c-16.839-2.614-53.189-8.795-79.024-16.983 c71.327,12.145,130.71-11.712,142.683-36.393C512.842,194.014,510.72,191.357,508.799,191.696z"></path>
                </g>
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.dog")}
            </p>
          </div>
          <div>
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#978661"
              width="150"
              height="150"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M486.965,230.141c28.063-31.641,12.375-71.844,10.453-76.781s-5.25-2.859-6.984-0.25 c-1.766,2.609-40.172,50.484-40.172,50.484H248.403c0,0-103.719-148.453-107.297-153.672s-6.328-5.797-8.797-5.797 c-2.484,0-6.344,0.828-6.344,7.984c0,4.688,0,78.953,0,78.953s-101.25,58.375-115.844,66.328 c-14.547,7.984-10.172,17.891-6.578,25.578c3.156,6.828,44,94.109,45.109,96.594c1.094,2.469,3.844,2.469,4.688,0.813 c0.813-1.656,11.547-16.516,13.469-19.813c1.922-3.281,4.406-2.469,6.063-1.078c1.047,0.859,7.156,4.953,9.625,6.859 c2.484,1.938,5.219,0,6.047-1.391c0.844-1.359,13.484-20.344,14.859-22.547s3.297-1.078,4.141-0.531 c0.813,0.531,5.5,5.219,8.797,8.516c3.297,3.031,4.406,1.922,6.875-1.375c0.984-1.281,9.922-14.844,11.844-16.781 c1.906-1.922,3.281-0.828,4.672,1.094c1.375,1.938,14.313,22.031,18.984,29.438c4.672,7.453,4.125,10.734,4.125,13.484 s-13.766,151.625-13.766,151.625h93l15.688-104.031c0,0,95.203,0,101.813,0c6.594,0,20.906,2.203,35.219,16.25 c14.313,14.016,26.125,87.219,26.125,87.219h91.078L486.965,230.141z"></path>
                </g>
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.eagle")}
            </p>
          </div>
          <div>
            <svg
              fill="#978661"
              width="150"
              height="150"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M359.623,145.066l123.55-123.549L461.656,0l-23.268,23.268L422.78,7.66l-21.517,21.517l15.607,15.607l-78.764,78.764 l-10.759,10.759l-52.197,52.199l-21.517,21.517L150.015,311.641l-21.517,21.517l-99.671,99.671L107.998,512l71.295-118.135 l45.488,84.396l56.299-56.299l-21.281-39.483l31.798-31.797l-26.332-51.208l11.25-11.25l38.77,38.77l50.176-50.176l-38.77-38.77 l62.957-62.957L359.623,145.066z M244.728,354.516l-12.085-22.421l10.024-10.024l11.718,22.788L244.728,354.516z"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <polygon points="204.647,154.46 183.129,175.977 191.391,184.24 84.529,291.101 76.267,282.838 54.75,304.357 92.792,342.398 114.309,320.881 106.047,312.618 212.909,205.757 221.171,214.018 242.688,192.501 "></polygon>
                  </g>
                </g>
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.weapon")}
            </p>
          </div>
          <div>
            <svg
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="#978661"
              width="150"
              height="150"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#978661"
                  d="M375.344 18.438c-1.137-.01-2.276.007-3.438.03-13.273.27-28.187 2.787-45.562 8.126-22.4 6.883-38.08 27.877-35.844 50.312 1.62 16.34 15.186 34.143 30.875 45.625 24.664 18.046 42.29 36.65 54.375 54.44l7.625 48.843 18.47-2.907-5.064-32.437c-1.34-23-7.98-45.714-22.342-69.095 14.54 8.79 27.36 18.46 38.03 28.156l28.22 55.72 16.656-8.438-26.53-52.406c-7.148-17.347-17.845-33.647-33.783-49.03 15.97 4.774 30.48 10.84 42.97 17.436l39.906 45.22 14-12.376-40.5-45.875-.094.095C441.37 85.048 426.1 72.19 406.063 61.687v-.093c-.278-.243-.558.187-.812.187-25.3-1.83-47.73-.167-62.28 3.69 13.373-10.633 34.805-18.547 64.592-21.25l47.375 18.31 6.75-17.436-41.375-16-.093-.032c-13.467-6.492-27.824-10.464-44.876-10.625zm-237.688.03c-16.838.232-31.037 4.164-44.375 10.595l-41.468 16.03 6.72 17.438 47.406-18.31c29.77 2.706 51.224 10.62 64.593 21.25-14.55-3.857-36.98-5.52-62.28-3.69-.254 0-.534-.43-.813-.186v.093C87.4 72.192 72.132 85.047 60.188 99.876l-.124-.094-40.5 45.876 14.03 12.375L73.5 112.813c12.49-6.596 27-12.662 42.97-17.437-15.94 15.384-26.668 31.684-33.814 49.03l-26.53 52.407 16.687 8.438L101 149.53c10.672-9.694 23.49-19.366 38.03-28.155-14.36 23.38-21 46.095-22.343 69.094l-5.03 32.436 18.468 2.906 7.594-48.78c12.084-17.806 29.684-36.437 54.374-54.5 15.69-11.483 29.254-29.286 30.875-45.626 2.234-22.435-13.414-43.43-35.814-50.312-19.113-5.873-35.252-8.32-49.5-8.125zM307.72 235.814c-11.41 0-24.272 4.91-40.22 22.718v130.814c19.24-13.898 38.485-19.628 56.563-19.844 22.987-.275 43.643 7.632 61.562 15.438 17.92 7.805 33.542 15.33 44.156 16.468 5.308.57 9.002-.088 12.564-2.312 3.187-1.99 6.62-5.816 10-12.53L431.688 256.81c-10.648 7.425-20.88 11.553-30.72 12.688-13.806 1.592-26.063-2.53-36.75-7.97-21.37-10.875-38.164-25.762-56.5-25.717zm-99.376 5c-18.118-.082-35.583 15.45-57.406 27.093-10.912 5.822-23.348 10.394-37.407 9.156-10.018-.88-20.423-4.782-31.186-12.156L62.906 393.47c13.616 13.096 25.344 15.566 38.594 13.842 14.267-1.855 30.332-9.854 47.406-18.093 17.074-8.24 35.31-16.776 55.438-17.22 14.575-.32 29.73 4.21 44.47 15.344V259.47c-16.255-18.45-24.774-18.62-40.47-18.658zM45.438 278.875l-24.782 158.22 194.906 13v19h83.563v-18.97l195.53-13.03-24.78-158.22-15.53 1.22 16.936 106.5.44 2.78-1.158 2.53c-4.76 10.555-10.745 18.306-18.312 23.033-3.66 2.285-7.59 3.727-11.594 4.53l.03.188-1.998.188c-.084.012-.167.02-.25.03-.958.136-1.915.217-2.875.282h-.125L258.563 437.28l-.782.064-.75-.063-158.467-10.967h-.094c-4.606.203-9.278-.1-13.97-.97-.03-.005-.063.006-.094 0-13.02-2.434-26.164-9.29-38.25-22.124l-3.125-3.314.69-4.5 17.405-115.312-15.688-1.22zM324.28 388.188c-18.502.22-37.827 6.678-59.436 27.625l-2.344 2.28 124.563-12.03c-2.944-1.34-5.893-2.688-8.907-4-17.257-7.518-35.372-14.096-53.875-13.875zm-119.53 2.5c-14.906.328-30.94 7.28-47.72 15.375-3.318 1.6-6.69 3.246-10.06 4.875L254 418.344l-2.72-3.125c-17.09-19.683-31.624-24.86-46.53-24.533z"
                ></path>
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.wisement")}
            </p>
          </div>
          <div>
            <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
              fill="#978661"
              width="150"
              height="150"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    fill="#978661"
                    d="M62.242,47.758l0.014-0.014c-3.239-2.634-6.865-4.874-10.839-6.644C50.502,38.229,50,35.175,50,32V16 c0-8.837-7.163-16-16-16h-4c-8.837,0-16,7.163-16,16v16c0,3.173-0.501,6.226-1.415,9.096c-3.979,1.745-7.526,3.953-10.841,6.648 l0.014,0.014C0.672,48.844,0,50.344,0,52v8c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-8C64,50.344,63.328,48.844,62.242,47.758z M20,19c0-2.209,1.791-4,4-4c2.088,0,3.926-1.068,5-2.687C30.074,13.932,31.912,15,34,15h4c3.313,0,6,2.687,6,6c0,0.188,0,0.5,0,1 c0,12-7.469,18-12,18s-12-6-12-18C20,21.5,20,19,20,19z M25.677,39.439C27.76,41.084,29.99,42,32,42s4.24-0.916,6.323-2.561 c2.743,0.378,5.399,1.018,7.966,1.857c-2.468,2.468-13.311,13.311-13.691,13.691c-0.43,0.43-0.748,0.447-1.183,0.013 C31.03,54.616,20.18,43.766,17.711,41.297C20.277,40.457,22.934,39.817,25.677,39.439z"
                  ></path>{" "}
                  <path
                    fill="#978661"
                    d="M25.882,22.467C25.91,22.419,26.18,22,26.998,22c0.808,0,1.096,0.436,1.111,0.458 C28.287,22.803,28.637,23,28.999,23c0.154,0,0.311-0.035,0.457-0.111c0.491-0.253,0.684-0.856,0.431-1.347 C29.592,20.969,28.651,20,26.998,20c-1.691,0-2.618,0.983-2.9,1.564c-0.233,0.482-0.034,1.045,0.439,1.298 C25.012,23.117,25.61,22.931,25.882,22.467z"
                  ></path>{" "}
                  <path
                    fill="#978661"
                    d="M34.539,22.862c0.475,0.255,1.073,0.068,1.345-0.396C35.912,22.419,36.182,22,37,22 c0.808,0,1.096,0.436,1.111,0.458C38.289,22.803,38.639,23,39.001,23c0.154,0,0.311-0.035,0.457-0.111 c0.491-0.253,0.684-0.856,0.431-1.347C39.594,20.969,38.653,20,37,20c-1.691,0-2.618,0.983-2.9,1.564 C33.866,22.047,34.065,22.609,34.539,22.862z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.wife")}
            </p>
          </div>
          <div>
            <svg
              fill="#978661"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.432 24.432"
              width="150"
              height="150"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M6.42,9.301c1.771,0,3.205-1.435,3.205-3.208c0-1.105,0.389-2.117-0.465-2.691C8.648,3.053,6.4,2.888,5.736,2.888 c-0.79,0-1.817,0.644-2.376,1.119C2.665,4.594,3.213,5.111,3.213,6.092C3.213,7.866,4.646,9.301,6.42,9.301z M4.186,5.779 c0.589-0.107,0.989,0.087,0.989,0.087l0.984-0.479c0,0-0.501,0.724-0.051,0.479C7.11,5.53,8.231,5.67,8.801,5.782 c0.02,0.125,0.038,0.253,0.038,0.386c0,1.32-1.048,2.387-2.349,2.387c-1.294,0-2.343-1.067-2.343-2.387 C4.147,6.035,4.165,5.907,4.186,5.779z"></path>{" "}
                    <path d="M22.066,5.643c-0.015-0.183-0.03-0.365-0.07-0.541c-0.127-1.124-1.133-3.408-4.02-3.34 c-2.488,0.059-3.031,1.932-3.162,3.072c-0.088,0.28-0.145,0.573-0.164,0.878c-3.236,0.565-2.88,3.849-0.904,3.905 c-0.188-1.715,0.63-2.745,0.945-3.076c0.291,1.771,1.82,3.132,3.672,3.132c1.756,0,3.222-1.223,3.619-2.858 c0.303,0.534,0.812,1.628,0.688,2.803C25.783,9.591,24.251,6.032,22.066,5.643z M18.363,8.617c-1.455,0-2.639-1.172-2.672-2.621 c0.531-0.193,0.925-1.113,0.925-1.113s0.315,0.108,0.315,1.147c0.551,0.192,1.508-1.614,1.508-1.614v1.423 c0.607,0.166,2.521-0.054,2.521-0.054l0.071,0.06c0.001,0.03,0.009,0.061,0.009,0.092C21.042,7.415,19.842,8.617,18.363,8.617z"></path>{" "}
                    <polygon points="19.143,9.769 17.568,9.769 16.253,9.769 12.402,14.409 8.675,9.827 4.438,9.827 0,14.699 0.93,15.658 4.107,12.947 4.107,18.205 4.744,18.205 4.744,22.202 4.339,22.202 4.339,22.671 6.184,22.671 6.184,22.202 6.184,18.205 6.875,18.205 6.875,22.202 6.875,22.671 8.716,22.671 8.716,22.202 8.312,22.202 8.312,18.205 9.085,18.205 9.085,13.046 11.625,15.654 12.663,15.398 13.238,15.542 16.115,12.249 16.279,13.554 13.607,18.146 16.689,18.146 16.689,22.144 16.284,22.144 16.284,22.609 18.127,22.609 18.127,22.144 18.129,22.144 18.129,18.146 18.818,18.146 18.818,22.144 18.818,22.609 20.662,22.609 20.662,22.144 20.257,22.144 20.257,18.146 22.646,18.146 20.292,13.554 20.421,11.948 22.67,14.962 24.16,14.591 20.594,9.769 "></polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <p className="text-secondary text-[32px] text-center mt-6">
              {t("main.offspring")}
            </p>
          </div>
        </div>
      </section>
      <section className="pb-[200px]">
        <div className="text-center">
          <span className="block text-[240px] text-white leading-none">25</span>
          <span className="block text-[128px] text-white leading-none">
            {t("main.october")}
          </span>
          <h2 className="text-white text-[64px]">{t("main.event")}</h2>
          <p className="text-white text-[32px] mt-[67px] mx-[470px]">
            {t("main.event_description")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
