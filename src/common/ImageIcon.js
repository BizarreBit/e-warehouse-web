import defaultImage from '../assets/images/noImage.png'

function ImageIcon({ src, size = "30", alt = 'item' }) {
  return (
    <img
      alt={alt}
      width={size}
      height={size}
      className={`rounded-circle`}
      src={src || defaultImage }
    />
  );
}

export default ImageIcon;
