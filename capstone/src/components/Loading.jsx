import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Loading({ w, h }) {
  return (
    <div className={`flex flex-col justify-between w-full h-full`}>
      <Skeleton style={{ width: w, height: h }} />
    </div>
  );
}

export default Loading;
