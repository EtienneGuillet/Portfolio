"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";
import ChevronLeft from "../../../../icons/chevron-left";
import ChevronRight from "../../../../icons/chevron-right";
import { clx } from "../../../../utils/clx";
import GalleryHeader from "./header/indext";

type GalleryProps = {
  images: ImagesListType;
  className?: string;
};

function Gallery({ images, className }: GalleryProps) {
  const buttonClasses =
    "z-10 transition-colors text-slate-500 hover:text-teal-300 disabled:text-slate-600";
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const goToFirstIndex = useCallback(() => setCurrentIndex(0), []);

  useEffect(() => {
    setTimeout(() => goToFirstIndex(), 200);
  }, [goToFirstIndex, isGalleryOpen]);

  const gotoPrevious = useCallback(
    () => currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1),
    [currentImageIndex]
  );

  const gotoNext = useCallback(
    () =>
      currentImageIndex + 1 < images.length &&
      setCurrentIndex(currentImageIndex + 1),
    [currentImageIndex, images.length]
  );

  return (
    <div
      className={clx("cursor-zoom-in", className)}
      onClick={() => setIsGalleryOpen(true)}
    >
      <div className="relative group/thumbnail-gallery overflow-hidden rounded border-2 border-slate-200/10 transition group-hover:hover:border-teal-300 group-hover:border-slate-200/30">
        <Image
          className="sm:translate-y-1"
          width={200}
          height={48}
          src={images[0].src}
          alt={images[0].alt}
        />
        <span className="top-0 right-0 absolute bg-slate-500/80 group-hover/thumbnail-gallery:bg-slate-500/90 transition text-white flex items-center justify-center rounded-bl size-4 group-hover/thumbnail-gallery:text-teal-300">
          {images.length}
        </span>
      </div>
      <Lightbox
        className="bg-slate-500/50"
        renderHeader={() => (
          <GalleryHeader onClose={() => setIsGalleryOpen(false)} />
        )}
        renderNextButton={() => (
          <button
            disabled={currentImageIndex === images.length - 1}
            className={buttonClasses}
            onClick={gotoNext}
          >
            <ChevronRight />
          </button>
        )}
        renderPrevButton={() => (
          <button
            disabled={currentImageIndex === 0}
            className={buttonClasses}
            onClick={gotoPrevious}
          >
            <ChevronLeft />
          </button>
        )}
        currentIndex={currentImageIndex}
        images={images}
        isOpen={isGalleryOpen}
        onNext={gotoNext}
        onPrev={gotoPrevious}
        onClose={() => setIsGalleryOpen(false)}
        pageTransitionConfig={{
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
        }}
      />
    </div>
  );
}

export default Gallery;
