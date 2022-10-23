import defaultImage from '../../assets/images/noImage.png';

function ImageIcon({ src, size = '30', alt = 'item' }) {
  const width = size === 'auto' ? '100%' : size + 'px';
  const height = size === 'auto' ? 'auto' : size + 'px';
  
  return (
    <img
      alt={alt}
      className={`rounded-circle`}
      src={src || defaultImage}
      style={{ width, height }}
    />
  );
}

export default ImageIcon;
