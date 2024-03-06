import "@/styles/Work.scss";
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  Variants
} from 'framer-motion';


const Work = () => {
  const [isAnchorFixed, setIsAnchorFixed] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > anchorRef.current!.offsetTop) {
        setIsAnchorFixed(true);
      } else {
        setIsAnchorFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToRef = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  
  const projectRefs = {
    seah: useRef<null>(null),
    seahAffiliates: useRef<null>(null),
    bgf: useRef<null>(null),
    dearXmas: useRef<null>(null),
    photoshop: useRef<null>(null),
  };

  const handleAnchorClick = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    scrollToRef(ref);
  };

  
  const scrollVariants: Variants = {
    offscreen: {
      y: `50vh`,
    },
    onscreen: {
      y: 0,
      transition: {
        //type: "spring",
        //bounce: 0.4,
        //duration: 0.8
      }
    }
  };

  const textVariants: Variants = {
    offscreen: {
      x: `100%`,
    },
    onscreen: {
      x: 0,
      transition: {
        //type: "spring",
        //bounce: 0.4,
        duration: 1.2
      }
    }
  }



  return (
    
    <>
      <section className="intro">
        <h2 className="gallient">PROJECTS</h2>
        <p>제가 작업한 project들을 소개합니다.</p>
      </section>

      <section className="works">
        <div ref={anchorRef} className={`anchors ${isAnchorFixed ? 'fixed' : ''}`}>
          <ul className="anchors__container">
            <li data-index="1" onClick={() => handleAnchorClick(projectRefs.seah)}><h4>01&nbsp;SEAH</h4></li>
            <li data-index="2" onClick={() => handleAnchorClick(projectRefs.seahAffiliates)}><h4>02&nbsp;SEAH AFFILATES</h4></li>
            <li data-index="3" onClick={() => handleAnchorClick(projectRefs.bgf)}><h4>03&nbsp;BGF</h4></li>
            <li data-index="4" onClick={() => handleAnchorClick(projectRefs.dearXmas)}><h4>04&nbsp;DEAR,XMAS</h4></li>
            {/* <li data-index="5" onClick={() => handleAnchorClick(projectRefs.photoshop)}><h4>05&nbsp;PHOTOSHOP</h4></li> */}
          </ul>
        </div>

        <div className="projects">
          {/* 1 */}
          <motion.div 
            className="projects__Item" 
            initial="offscreen"
            whileInView="onscreen" 
            variants={scrollVariants}
            ref={projectRefs.seah}
          >
            <a href="https://www.seah.co.kr/" target="_blank">
              <div className="imgContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <h3>01</h3><h3>SEAH GROUP</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/seah.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                  <h2>SEAH&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <p>정보 접근 취약자의 정보 격차를 해소하고, 홈페이지의 사용성을 증대시키기 위해<br/> 웹표준 및 웹접근성을 기반으로 설계하였습니다. 또한 어떤 환경에서도 동일한 경험을 전달하기 위해 풀 반응형 홈페이지로 구축했습니다. 나아가 글로벌 기업의 면모에 맞게 <span className="wsnr">해외 접속자도</span> 원활하게 정보를 볼 수 있도록 글로벌 서버 환경을 구성했습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 2 */}
          <motion.div 
            className="projects__Item" 
            initial="offscreen"
            whileInView="onscreen" 
            variants={scrollVariants}
            ref={projectRefs.seahAffiliates}
          >
            <a href="https://www.seahsteel.co.kr/" target="_blank">
              <div className="imgContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <h3>02</h3><h3>SEAH AFFLIATES</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/seahSteel.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                  <h2>SEAH AFFLIATES&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <p>통합 웹사이트 정체성에 맞는 시각적 / 기능적인 일관성을 유지하기 위해, 브랜드 아이덴티티 요소를 체계적으로 재사용하고 각 UI 구성 요소를 모듈화한 디자인 시스템을 구축하였습니다. 모든 요소들은 계열사 각각의 콘텐츠 목적에 맞게끔 조화롭고 유연하게 배치할 수 있도록 제작 되었습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 3 */}
          <motion.div 
            className="projects__Item" 
            initial="offscreen"
            whileInView="onscreen" 
            variants={scrollVariants}
            ref={projectRefs.bgf}
          >
            <a href="https://www.bgf.co.kr/" target="_blank">
              <div className="imgContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <h3>03</h3><h3>BGF</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/bgf.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                  <h2>BGF&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <p>기존의 BGF 지주사 사이트 리뉴얼 작업을 담당하였습니다.<br/> 메인페이지는 전면 리뉴얼하였으며, 같은 레이아웃인데 각기 다른 구조로 코딩되어 있던 서브페이지들의 구조를 통일하는 작업을 진행하였습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>
          
          {/* 4 */}
          <motion.div 
            className="projects__Item" 
            initial="offscreen"
            whileInView="onscreen" 
            variants={scrollVariants}
            ref={projectRefs.dearXmas}
          >
            <a href="https://dear-xmas.vercel.app/" target="_blank">
              <div className="imgContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>Dear, Xmas&nbsp;</h2>
                  <h2>Dear, Xmas&nbsp;</h2>
                  <h2>Dear, Xmas&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <h3>04</h3><h3>Dear, Xmas</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/dearXmas.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>Dear, Xmas&nbsp;</h2>
                  <h2>Dear, Xmas&nbsp;</h2>
                  <h2>Dear, Xmas&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <p>Dear, Xmas는 크리스마스의 감성과 특별한 순간을 함께 쌓아가는 웹 서비스입니다. 크리스마스와 관련된 컨텐츠를 즐길 수 있습니다. 코드 충돌을 줄이고 브랜치 관리가 용이한 Git Flow 방식을 사용하여 기능 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여 작업하고, 기능 브랜치로 PR을 올립니다. PR은 코드 리뷰 담당자를 지정하여 검토 후 Merge를 진행합니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 5 */}
          <motion.div 
            className="projects__Item" 
            initial="offscreen"
            whileInView="onscreen" 
            variants={scrollVariants}
            ref={projectRefs.photoshop}
          >
            <a href="https://www.seah.co.kr/" target="_blank">
              <div className="imgContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>PHOTOSHOP&nbsp;</h2>
                  <h2>PHOTOSHOP&nbsp;</h2>
                  <h2>PHOTOSHOP&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <h3>04</h3><h3>PHOTOSHOP</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/dearXmas.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <motion.div className="top" variants={textVariants}>
                  <h2>PHOTOSHOP&nbsp;</h2>
                  <h2>PHOTOSHOP&nbsp;</h2>
                  <h2>PHOTOSHOP&nbsp;</h2>
                </motion.div>
                <div className="bottom">
                  <p>Tout commence ici : savoir tendre l’oreille et parfois la main, pour se rendre entièrement disponible. Laisser l'autre déposer son sujet, sa problématique et quelques fois ses peurs.<br/><br/> C’est aussi prendre le temps de recueillir l’essentiel, <br/> de tout étudier, décortiquer, regrouper. Ne rien laisser au hasard pour que chaque information, chaque détail partagé, devienne une opportunité pour vous aider à vous démarquer.</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Work;