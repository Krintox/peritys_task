import Image from 'next/image';
import eymeimg from '../components/images/eyme.png';

export default function Eyme() {
  return (
    <div style={{ width: '90vw', height: 'auto' }}>
      <Image src={eymeimg} alt="eyme" layout="responsive" width={100} height={100} />
    </div>
  );
}
