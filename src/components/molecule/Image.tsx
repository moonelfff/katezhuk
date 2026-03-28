type Props = {
  src: string;
  alt: string;
  className?: string;
};

function Image({ src, alt, className }: Props) {
  return (
    <div className={className}>
      <div className="shadow-effect shadow-effect-offset mt-2">
        <div className="image-glass rounded-3xl">
          <img src={src} alt={alt} className={className} />
          <div className="image-shadow" />
        </div>
      </div>
    </div>
  );
}

export default Image;
