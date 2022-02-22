import DiscordLogo from "../images/DiscordLogo";

const SocialButton = () => {
  return (
    <button className="bg-red-500 h-12 w-full">
      <DiscordLogo width="26px" height="26px" />
      <span className="text-base font-medium leading-6">Discord</span>
    </button>
  );
};

export default SocialButton;
