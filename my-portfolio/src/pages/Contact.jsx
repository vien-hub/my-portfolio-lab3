export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Email: </label>
            <input type="email" placeholder="your.email@example.com" />
          </div>
          <br />
          <div>
            <label>Message: </label>
            <textarea placeholder="Write your message here..."></textarea>
          </div>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }