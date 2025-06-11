import { Link, useNavigate } from "@tanstack/react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Button } from "../../button";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <header className="fixed flex justify-between px-[220px] py-[15px] bg-dark-gray w-full">
      <Link to="/">
        <p role="heading" className="text-primary heading">
          Qazaqtanu
        </p>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="gap-10">
          <Link to="/history">
            <NavigationMenuItem className="text-secondary text text-[18px]">
              {t("history")}
            </NavigationMenuItem>
          </Link>
          <Link to="/language">
            <NavigationMenuItem className="text-secondary text text-[18px]">
              {t("language")}
            </NavigationMenuItem>
          </Link>
          <Link to="/traditions">
            <NavigationMenuItem className="text-secondary text text-[18px]">
              {t("traditions")}
            </NavigationMenuItem>
          </Link>
          <Link to="/ethnogenesis">
            <NavigationMenuItem className="text-secondary text text-[18px]">
              {t("ethnogenesis")}
            </NavigationMenuItem>
          </Link>
          <Link to="/nature_tourism">
            <NavigationMenuItem className="text-secondary text text-[18px]">
              {t("nature_tourism")}
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
      <Button onClick={() => navigate({ to: "/sign-in" })}>Кіру</Button>
    </header>
  );
};

export default Header;
