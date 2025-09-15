import Image from 'next/image';

interface ExpertMediaProps {
  media: {
    url: string;
    caption?: string;
    altText: string;
  };
}

export default function ExpertMedia({ media }: ExpertMediaProps) {
  return (
    <div className="expert-media">
      <Image
        src={media.url}
        alt={media.altText}
        width={400}
        height={300}
        className="rounded-lg"
      />
      {media.caption && (
        <p className="caption">{media.caption}</p>
      )}
    </div>
  );
}