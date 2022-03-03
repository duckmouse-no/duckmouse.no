export const getClassName = (
  size: 'small' | 'medium' | 'large',
  type: 'primary' | 'inactive'
) => {
  let className = '';

  if (size === 'small') {
    className = 'py-2 px-4';
  } else if (size === 'medium') {
    className = 'text-lg py-4 px-8';
  } else if (size === 'large') {
    className = 'text-lg py-4 px-10';
  }

  className +=
    type === 'primary'
      ? ' bg-btnA drop-shadow-btnA'
      : ' bg-btnI drop-shadow-mdI cursor-default';

  return className;
};
