import getContent from "../../assets/data/content";
import TelegramIcon from "../../assets/icons/TelegramIcon";
import VKIcon from "../../assets/icons/VKIcon";

function Social() {
  const content = getContent();

  return (
    <ul className="flex gap-3">
      <li>
        <a
          href={content.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          title={content.telegram}
        >
          <TelegramIcon color="var(--color-platinum)" />
        </a>
      </li>
      <li>
        <a
          href={content.vkMessengerLink}
          target="_blank"
          rel="noopener noreferrer"
          title={content.vkMessenger}
        >
          <VKIcon color="var(--color-platinum)" />
        </a>
      </li>
    </ul>
  );
}

export default Social;
