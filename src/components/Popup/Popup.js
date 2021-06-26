import './Popup.css';

function Popup({isVisiblePopup, setIsVisiblePopup}) {

  function closePopup() {
    setIsVisiblePopup(false)
  }

  return (
    <div className={`popup ${isVisiblePopup ? 'popup_visibility' : ''}`}>
      <form className='popup__form'>
        <label className='popup__title' for='comment'>New comment</label>
        <textarea id='comment' className='popup__input'></textarea>
        <button className='popup__submit' type='submit'>Save comment</button>
      </form>
    <div onClick={closePopup} className='popup__close'></div>
    </div>
  );
}

export default Popup;