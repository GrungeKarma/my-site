import './Form.css';

const Form = () => {
  return (
    <form action="" id='contact-form'>
      <div id="info-block">
        <div id="name">
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' id='name' required />
        </div>
        <div id="email">
          <label htmlFor="email">Email:  </label>
          <input type="email" name="email" id="email" required />
        </div>
      </div>


      <div className="radio">
        <div className="radio-item">
          <input type="radio" name="Inquiry" id="generalInquiry" value='generalInquiry' required />
          <label htmlFor='generalInquiry' >General Inquiry</label>
        </div>
        <div className="radio-item">
          <input type="radio" name="Inquiry" id="freelanceInquiry" value='freelanceInquiry' />
          <label htmlFor='freelanceInquiry'>Freelance Inquiry</label>
        </div>
        <div className="radio-item">
          <input type="radio" name="Inquiry" id="fulltimeInquiry" />
          <label htmlFor='fulltimeInquiry'>Fulltime Inquiry</label>
        </div>
      </div>
      <div id="greater-message-area">
        <textarea name="message" form="contact-form" id="message" placeholder="message..." required></textarea>
      </div>
      <div id="greater-button-area">
        <button type="submit" id="submit">submit</button>
      </div>
    </form>

  );
}
export default Form;
