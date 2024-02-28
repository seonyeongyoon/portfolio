import { useState } from "react";
import "./../styles/About.scss"
import { motion, useCycle, Variants } from "framer-motion";

const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 200
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      //type: "spring",
      bounce: 0.6,
      duration: 0.7
    }
  }
};

const toggleList = {
  open: {
    height: "auto",
    transition: {
      delay: .7,
      stiffness: 20,
      restDelta: 2
    }
  },
  closed: {
    height: 0,
    transition: {
      delay: .7,
      stiffness: 400,
      damping: 40
    }
  }
};

const About = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const toggleOpen2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
  };

  const toggleOpen3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
  };

  const [isClicked, setIsClicked] = useState(false);
  const handleToggle = () => {
    setIsClicked(!isClicked);
  }
  const [isOpen, toggleOpen] = useCycle(false, true);
  //const containerRef = useRef(null);
  //const { height } = useDimensions(containerRef)

  return (
    <>
      <section className="about">
        <motion.div 
          className="about__Img"
          initial={{ opacity: 0, x: 0, y: 181 }} 
          animate={{ opacity: 1, x: 0, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <figure>
            <img src="/public/assets/About.jpg" alt="" />
          </figure>
          
        </motion.div>
        
        <div className="about__Text gallient">
          <div>
            <h2>Hello</h2>
            <div className="descWrap">
              <h3>About Seonyeong</h3>
              <h3>About Seonyeong</h3>
              <h3>About Seonyeong</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="introduce">
        <motion.div className="center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={scrollVariants}
        >
          <div className="text">
            <p>트렌디한 개발자가 되기 위해서는 나날이 변화하는 IT 트랜드에 관심을 가지고 따라잡으려는 노력 하겠습니다. 트렌디한 기술들에 관심을 가지고 공부 중이며, 제가 관심 있는 분야를 공부하는 것에 매우 재미를 느끼고 있습니다. 꾸준히 프론트엔드 개발 관련 기사나 컬럼들을 찾아보고 레퍼런스를 찾아보며, 필요에 의해 의무적으로 공부하는 것이 아닌, 프론트엔드 개발에 매료되어 자발적으로 공부하는 프론트엔드 개발자가 되고 싶습니다.</p>
          </div>
          <div className="text">
            <p>웹 에이전시에서 실무를 하며 다양한 기업 사이트를 제작하였습니다. 
              삼성 반도체, 삼성 네트웍스의 다양한 제품 페이지 제작과, 세아그룹 사이트, 세아그룹 계열사 사이트, BGF 사이트를 리뉴얼 작업하였습니다.
              다양한 국가의 사람들이 이용하는 사이트인 만큼 크로스브라우징 지원이 안되는 최신 기술 보다는 웹 접근성을 가장 염두에 두고 보수적인 코딩을 하였습니다. 
              실무 경험을 통해 각 사이트의 특징에 따라 사이트 구축 방법 및, 
              사용하는 기술이 다르다는 것을 배웠습니다. 
              앞으로도 사이트 제작 전 제작해야 할 사이트의 특징을 우선적으로 파악 후 체계적인 업무를 수행하는 실무자가 되겠습니다.</p>
          </div>
        </motion.div>
      </section>

      <section className="career">
        <div className="career__listWrap center">
          <motion.div 
            className="career__list"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={scrollVariants}  
          >
            <ul>
              <li>
                <button className="row" onClick={() => {toggleOpen1();}}>
                  <svg className="starsvg" width="35px" height="35px" viewBox="0 0 35 35" version="1.1"><title>image</title><g id="desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ABOUT" transform="translate(-219.000000, -3207.000000)" fill="#ffffffde" fillRule="nonzero"><g id="image" transform="translate(219.000000, 3207.000000)"><polygon id="Path" points="10.428 34.45 11.328 23.56 0.528 24.82 8.718 17.71 0.528 10.51 11.328 11.86 10.428 0.97 17.268 9.43 24.198 0.97 23.208 11.86 34.008 10.51 25.818 17.71 34.008 24.82 23.208 23.56 24.198 34.45 17.268 25.9"></polygon></g></g></g></svg>
                  <span className="col">웹 에이전시 나인파이브</span>
                  <span className="col-auto">2021 - 2022</span>
                </button>
                <motion.ul
                  initial={false}
                  animate={isOpen1 ? "open" : "closed"}
                  variants={toggleList}
                  //custom={height}
                  //ref={containerRef}
                >
                  <li>
                    <a href="https://www.seah.co.kr/" target="_blank">
                      <span className="col">Seah Group</span>
                      <span className="col-auto">2022</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.seahsteel.co.kr/" target="_blank">
                      <span className="col">Seah Group Affilates</span>
                      <span className="col-auto">2021 - 2022</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bgf.co.kr/" target="_blank">
                      <span className="col">BGF</span>
                      <span className="col-auto">2021 - 2022</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                </motion.ul>
              </li>
              <li>
                <button className="row" onClick={toggleOpen2}>
                  <svg className="starsvg" width="35px" height="35px" viewBox="0 0 35 35" version="1.1"><title>image</title><g id="desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ABOUT" transform="translate(-219.000000, -3207.000000)" fill="#ffffffde" fillRule="nonzero"><g id="image" transform="translate(219.000000, 3207.000000)"><polygon id="Path" points="10.428 34.45 11.328 23.56 0.528 24.82 8.718 17.71 0.528 10.51 11.328 11.86 10.428 0.97 17.268 9.43 24.198 0.97 23.208 11.86 34.008 10.51 25.818 17.71 34.008 24.82 23.208 23.56 24.198 34.45 17.268 25.9"></polygon></g></g></g></svg>
                  <span className="col">멋쟁이사자처럼 프론트엔드스쿨</span>
                  <span className="col-auto">2023</span>
                </button>
                <motion.ul
                  initial={false}
                  animate={isOpen2 ? "open" : "closed"}
                  variants={toggleList}
                >
                  <li>
                    <a href="https://github.com/energizo/lion-place/tree/develop" target="_blank">
                      <span className="col">자바스크립트 프로젝트</span>
                      <span className="col-auto">2023</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                  <li>
                    <a href="https://cafe-jijo.vercel.app/" target="_blank">
                      <span className="col">리액트 프로젝트</span>
                      <span className="col-auto">2023</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                </motion.ul>
              </li>
              <li>
                <button className="row" onClick={toggleOpen3}>
                  <svg className="starsvg" width="35px" height="35px" viewBox="0 0 35 35" version="1.1"><title>image</title><g id="desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="ABOUT" transform="translate(-219.000000, -3207.000000)" fill="#ffffffde" fillRule="nonzero"><g id="image" transform="translate(219.000000, 3207.000000)"><polygon id="Path" points="10.428 34.45 11.328 23.56 0.528 24.82 8.718 17.71 0.528 10.51 11.328 11.86 10.428 0.97 17.268 9.43 24.198 0.97 23.208 11.86 34.008 10.51 25.818 17.71 34.008 24.82 23.208 23.56 24.198 34.45 17.268 25.9"></polygon></g></g></g></svg>
                  <span className="col">멋쟁이사자처럼 프론트엔드스쿨 플러스</span>
                  <span className="col-auto">2023</span>
                </button>
                <motion.ul
                  initial={false}
                  animate={isOpen3 ? "open" : "closed"}
                  variants={toggleList}
                >
                  {/* <li>
                    <a href="">
                      <span className="col">자바스크립트 프로젝트</span>
                      <span className="col-auto">2023</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="col">리액트 프로젝트</span>
                      <span className="col-auto">2023</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://dear-xmas.vercel.app/" target="_blank">
                      <span className="col">Next.js 프로젝트</span>
                      <span className="col-auto">2023</span>
                      <span className="col-2"></span>
                      <span className="col-auto text-end"><svg width="9" height="9" viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg"><path d="M.5.5h8M.7 8.3l7-7m.8.197V8.5" stroke="#FFF" fill="none" fillRule="evenodd" stroke-linecap="square"></path></svg></span>
                    </a>
                  </li>
                </motion.ul>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;