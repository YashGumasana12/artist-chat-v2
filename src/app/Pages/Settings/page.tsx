import Image from 'next/image';
import settingsImage from '../../../assets/images/setting.png';

const Page = () => {
    return (
        <>
            <h1>Here are the images</h1>
            <Image src="/images/setting.png" alt="Your Image" width={500} height={500} />

        </>
    );
}
 
export default Page;
