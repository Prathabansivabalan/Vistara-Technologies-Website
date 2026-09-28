import React, { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  caption,
  aspectClass = 'aspect-video',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`relative overflow-hidden rounded-lg border border-sky-500/20 bg-[#0A1633] ${aspectClass} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover transition-transform duration-200 hover:scale-[1.01]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#071128] via-[#0D2149] to-[#0284C7]/30 p-6 text-center">
          <span className="font-display text-base font-semibold text-sky-300">
            Vistara Technologies
          </span>
          <span className="mt-1 max-w-md text-xs text-slate-300">{alt}</span>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060E20]/90 via-[#060E20]/30 to-transparent"
        aria-hidden="true"
      />
      {caption && (
        <figcaption className="absolute bottom-3 left-4 right-4 text-xs text-slate-200">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
