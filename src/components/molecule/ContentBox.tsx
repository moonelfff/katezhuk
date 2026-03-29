import getContent from "../../assets/data/content";
import { parseMarkdown } from "../../utils/markdownParser";

type Props = {
  content: string | undefined;
};

function ContentBox({ content }: Props) {
  const data = getContent();

  return (
    <div>
      <div className="markdown content-markdown flex flex-col gap-2">
        {content === undefined ? (
          <div className="h-100">{data.loading}</div>
        ) : (
          parseMarkdown(content)
        )}
      </div>
    </div>
  );
}

export default ContentBox;
