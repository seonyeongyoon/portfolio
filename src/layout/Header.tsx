import { useState, useEffect, useCallback } from "react";
import useStore from "./../store/store";
import DropDownMenu from "./../components/DropDownMenu";
import { Link } from "react-router-dom";
import "./../styles/Header.scss";

const Header = ({}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0); // 스크롤 여부를 판단하여 isScrolled 상태 업데이트
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsClicked(prevState => !prevState);
  }, []);

  const closeMenu = useCallback(() => {
    setIsClicked(false);
  }, []);


  const { toggleDarkMode } = useStore();
  const { isDarkMode } = useStore();

  return (
    <header>
      <div className={`headerBar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logoWrap">
          <p><Link to="/">FRONTEND DEVELOPER</Link></p>
          <h1><Link to="/">YOON SEONYEONG</Link></h1>
        </div>
        <button 
          className="themeBtn"
          onClick={toggleDarkMode}
          title={isDarkMode ? '라이트모드' : '다크모드'}
        >  
        </button>
        <div className="menuBtnWrap">
          <button
            className={`menuBtn ${isClicked ? 'close' : ''}`} 
            onClick={toggleMenu}
          >
            <i></i>
            <i></i>
          </button>
        </div>
      </div>
      {isClicked && <DropDownMenu isOpen={isClicked} closeMenu={() => setIsClicked(false)} />}
    </header>
  );
};

export default Header;
