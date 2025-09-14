interface ExpertMediaProps {
  media: {
    url: string;
    caption?: string;
    altText: string;
  };
}

export default function ExpertMedia({ media }: ExpertMediaProps) {
  return (
    <div className="mt-4">
      {/* Image with border directly */}
      <img
        src={media.url}
        alt={media.altText}
        className="w-full h-auto border border-lilac-300 rounded-lg"
      />
      
      {/* Optional caption */}
      {media.caption && (
        <p className="text-xs text-gray-500 text-center mt-2">
          {media.caption}
        </p>
      )}
    </div>
  );
}