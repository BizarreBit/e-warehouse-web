import ImageIcon from '../../components/common/ImageIcon';
import TitleCard from '../common/card/TitleCard';
import { useAuth } from '../../contexts/AuthContext';
import { updateImageApi } from '../../api/user';
import { useRef, useState } from 'react';
import { useError } from '../../contexts/ErrorContext';
import { useWait } from '../../contexts/WaitContext';

function SettingImage() {
  const [image, setImage] = useState(null);
  const imageInputEl = useRef();

  const { user, fetchMe } = useAuth();
  const { errorTrigger } = useError();
  const { startWait, endWait } = useWait();

  const handleClickSave = async () => {
    try {
      startWait();

      const formData = new FormData();
      formData.append('profileImage', image)
      await updateImageApi(formData)

      await fetchMe();
      setImage(null);
    } catch (err) {
      errorTrigger(err);
    } finally {
      endWait();
    }
  };

  return (
    <TitleCard
      title='Profile Image'
      onClickEdit={!image && (() => imageInputEl.current.click())}
      onClickOk={!!image && handleClickSave}
      onClickCancel={!!image && (() => setImage(null))}
    >
      <input
        type='file'
        className='d-none'
        ref={imageInputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <ImageIcon
        alt='user'
        src={image ? URL.createObjectURL(image) : user.profileImage}
        size={200}
      />
    </TitleCard>
  );
}

export default SettingImage;
