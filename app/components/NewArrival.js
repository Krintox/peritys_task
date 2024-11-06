import Image from 'next/image';
import newarrive from '../components/images/newarrive.png';
import customer from '../components/images/customer.png'

export default function NewArrive() {
  return (
    <div style={{ width: '90vw', height: 'auto' }} className="mb-8">
      <Image src={newarrive} alt="eyme" layout="responsive" width={100} height={100} />
    </div>
  );
}
