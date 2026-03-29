import Typography from "../atom/Typography";
import getContent from "../../assets/data/content";
import photo from "@/assets/images/kate_zhuk.jpg";
import Image from "../molecule/Image";
import Link from "../molecule/Link";
import ContentBox from "../molecule/ContentBox";

function Profile() {
  const content = getContent();

  return (
    <section className="flex flex-col-reverse justify-between gap-6 lg:flex-row">
      <div className="w-full lg:w-2/3">
        <Typography component="h1">{content.fullName}</Typography>
        <ContentBox title={content.info.title} paragraphs={content.info.text} />
        <Link href={content.telegramLink} title={content.bookConsultation} />
        <Link href={content.blogLink} title={content.blog} />
      </div>
      <div>
        <Image src={photo} alt={content.fullName} className="w-full" />
      </div>
    </section>
  );
}

export default Profile;
