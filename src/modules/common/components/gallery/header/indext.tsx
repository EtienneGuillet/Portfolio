import CloseIcon from "../../../../../icons/close";

type GalleryHeaderProps = {
  onClose: () => void;
};

function GalleryHeader({ onClose }: GalleryHeaderProps) {
  return (
    <div className="flex justify-end pt-3 px-3 ">
      <button
        className="transition-colors text-slate-500 hover:text-teal-300"
        type="button"
        onClick={(e) => {
          onClose();
          e.stopPropagation();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default GalleryHeader;
