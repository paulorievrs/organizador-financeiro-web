import Button from "../../../form/button/Button";
import AppLogo from "../../../images/AppLogo";
import DiscordLogo from "../../../images/DiscordLogo";
import TextWithLines from "../../../texts/TextWithLines";
import TitleText from "../../../texts/TitleText";

type HeaderProps = {
  title: string;
  onClickDiscord?: (prop: any) => void;
  showSocialButtons?: boolean;
};

const Header = ({
  title,
  onClickDiscord = (prop: any) => {},
  showSocialButtons = false
}: HeaderProps) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center pb-3 ${
          showSocialButtons ? "pb-5" : ""
        }`}
      >
        <AppLogo />
        <TitleText className="mt-10 mb-10">{title}</TitleText>
        {showSocialButtons && (
          <Button
            label="Discord"
            icon={<DiscordLogo width="26px" height="26px" />}
            color="bg-gray-light"
            textColor="text-dark"
            onClick={() =>
              onClickDiscord("Funcionalidade não disponivel ainda.")
            }
          />
        )}
      </div>
      {showSocialButtons && <TextWithLines>ou</TextWithLines>}
    </>
  );
};

export default Header;
