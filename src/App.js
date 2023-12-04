import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './App.css';

function App() {
  // 변수
  const [state, setState] = useState(false)

  // 메서드
  const stateMove = () => {
    setState(!state)
  }

  return (
    <div className={state ? 'container active' : 'container'} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>회원가입</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>또는 이메일로 회원가입할 수 있습니다.</span>
          <input type="text" placeholder='이름' />
          <input type="email" placeholder='이메일' />
          <input type="password" placeholder='비밀번호' />
          <button>회원가입</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>로그인</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>또는 이메일과 비밀번호를 입력해서 로그인하세요.</span>
          <input type="email" placeholder='이메일' />
          <input type="password" placeholder='비밀번호' />
          <a href="#">비밀번호를 잊었나요?</a>
          <button>로그인</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1>환영합니다!</h1>
            <p>로그인하고 사이트를 이용하세요.</p>
            <button className='hidden' id='login' onClick={stateMove}>로그인</button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1>어서오세요!</h1>
            <p>회원가입하고 사이트를 이용해보세요.</p>
            <button className='hidden' id='register' onClick={stateMove}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
