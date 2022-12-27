import src from './rspImg/ic-reset.svg';

function Button({ className, onClick }) {
  return (
    <button onClick={onClick}>
      <img className={className} src={src} alt='초기화' />
    </button>
  );
}

export default Button;
