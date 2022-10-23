import SettingImage from '../components/setting/SettingImage';
import SettingText from '../components/setting/SettingText';

function SettingPage() {
  return (
    <>
      <div className='pb-4'>
        <div className='fs-3 fw-bold'>Setting</div>
        <div className='fs-6'>The setting of your e-Warehouse account.</div>
      </div>

      <div className='d-flex flex-wrap justify-content-center align-items-start'>
        <SettingImage />
        <SettingText />
      </div>
    </>
  );
}

export default SettingPage;
