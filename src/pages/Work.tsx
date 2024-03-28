import "@/styles/Work.scss";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


const Work = () => {
  const [isFixedAnchors, setIsFixedAnchors] = useState(false);
  const [isFixedIndexes, setIsFixedIndexes] = useState<number[]>([]);
  const anchorRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // 고정된 요소의 인덱스를 모아서 상태 업데이트
      const fixedIndexes = projectRefs.current
        .map((ref, index) => ref && scrollTop >= ref.offsetTop ? index : -1)
        .filter(index => index !== -1);
      
      setIsFixedIndexes(fixedIndexes);

      // 앵커가 상단에 닿으면 상태 업데이트
      setIsFixedAnchors(window.scrollY > anchorRef.current!.offsetTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  // const scrollToRef = (ref: React.MutableRefObject<HTMLDivElement>) => {
  //   if (ref.current) {
  //     window.scrollTo({
  //       top: ref.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const handleAnchorClick = (index: number) => {
  //   if (projectRefs.current[index]) {
  //     scrollToRef(projectRefs.current[index]);
  //   }
  // };



  const ParallaxText = ({ children }: { children: React.ReactNode }) => {

    return (
      <motion.div 
        className="top"
      >
        {/* 여기에는 Parallax 효과를 적용할 컨텐츠를 넣습니다. */}
        <h2>{children}&nbsp;</h2>
        <h2>{children}&nbsp;</h2>
        <h2>{children}&nbsp;</h2>
        <h2>{children}&nbsp;</h2>
      </motion.div>
    );
  };
  

  return (
    
    <>
      <section className="intro">
        <h2 className="gallient">PROJECTS</h2>
        <p>제가 작업한 project들을 소개합니다.😀</p>
      </section>

      <section className="works">
        <div ref={anchorRef} className={`anchors ${isFixedAnchors ? 'fixed' : ''}`}>
          <ul className="anchors__container">
            <li><h4>01&nbsp;SEAH</h4></li>
            <li><h4>02&nbsp;SEAH AFFILATES</h4></li>
            <li><h4>03&nbsp;BGF</h4></li>
            <li><h4>04&nbsp;cafe JIJO</h4></li>
            <li><h4>05&nbsp;Dear, Xmas</h4></li>
          </ul>
        </div>

        <div className="projects">
          {/* 1 */}
          <motion.div
            className={`projects__Item ${isFixedIndexes.includes(0) ? 'fixed' : ''}`}
            initial="offscreen"
            whileInView="onscreen"
            ref={el => projectRefs.current[0] = el}
          >
            <a 
              href="https://www.seah.co.kr/" 
              target="_blank" 
            >
              <div className="imgContent">
                <ParallaxText>SEAH GROUP</ParallaxText>
                <div className="bottom">
                  <h3>01</h3><h3>SEAH GROUP</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/seah.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
              <ParallaxText>SEAH GROUP</ParallaxText>
                <div className="bottom">
                  <p>정보 접근 취약자의 정보 격차를 해소하고, 홈페이지의 사용성을 증대시키기 위해<br/> 웹표준 및 웹접근성을 기반으로 설계하였습니다. 또한 어떤 환경에서도 동일한 경험을 전달하기 위해 풀 반응형 홈페이지로 구축했습니다. 나아가 글로벌 기업의 면모에 맞게 <span className="wsnr">해외 접속자도</span> 원활하게 정보를 볼 수 있도록 글로벌 서버 환경을 구성했습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 2 */}
          <motion.div
            className={`projects__Item ${isFixedIndexes.includes(1) ? 'fixed' : ''}`}
            initial="offscreen"
            whileInView="onscreen"
            ref={el => projectRefs.current[1] = el}
          >
            <a 
              href="https://www.seahsteel.co.kr/" 
              target="_blank" 
            >
              <div className="imgContent">
                <ParallaxText>SEAH AFFLIATES</ParallaxText>
                <div className="bottom">
                  <h3>02</h3><h3>SEAH AFFLIATES</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/seahSteel.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <ParallaxText>SEAH AFFLIATES</ParallaxText>
                <div className="bottom">
                  <p>통합 웹사이트 정체성에 맞는 시각적 / 기능적인 일관성을 유지하기 위해, 브랜드 아이덴티티 요소를 체계적으로 재사용하고 각 UI 구성 요소를 모듈화한 디자인 시스템을 구축하였습니다. 모든 요소들은 계열사 각각의 콘텐츠 목적에 맞게끔 조화롭고 유연하게 배치할 수 있도록 제작 되었습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 3 */}
          <motion.div
            className={`projects__Item ${isFixedIndexes.includes(2) ? 'fixed' : ''}`}
            initial="offscreen"
            whileInView="onscreen"
            ref={el => projectRefs.current[2] = el}
          >
            <a 
              href="https://www.bgf.co.kr/" 
              target="_blank"
            >
              <div className="imgContent">
                <ParallaxText>BGF</ParallaxText>
                <div className="bottom">
                  <h3>03</h3><h3>BGF</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/bgf.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <ParallaxText>BGF</ParallaxText>
                <div className="bottom">
                  <p>기존의 BGF 지주사 사이트 리뉴얼 작업을 담당하였습니다.<br/> 메인페이지는 전면 리뉴얼하였으며, 같은 레이아웃인데 각기 다른 구조로 코딩되어 있던 서브페이지들의 구조를 통일하는 작업을 진행하였습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>
          
          {/* 4 */}
          <motion.div
            className={`projects__Item ${isFixedIndexes.includes(3) ? 'fixed' : ''}`}
            initial="offscreen"
            whileInView="onscreen"
            ref={el => projectRefs.current[3] = el}
          >
            <a 
              href="https://cafe-jijo.vercel.app/" 
              target="_blank"
            >
              <div className="imgContent">
                <ParallaxText>cafe jijo</ParallaxText>
                <div className="bottom">
                  <h3>04</h3><h3>cafe jijo</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/cafejijo.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <ParallaxText>cafe jijo</ParallaxText>
                <div className="bottom">
                  <p>풀 페이지 레이아웃의 카페 사이트입니다. 포켓베이스 SDK를 통해 데이터를 렌더링하였습니다. 로그인 / 회원가입, 장바구니, 지도 api를 이용한 메장찾기 기능, 게시판 기능을 구현하였습니다.</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* 5 */}
          <motion.div
            className={`projects__Item ${isFixedIndexes.includes(4) ? 'fixed' : ''}`}
            initial="offscreen"
            whileInView="onscreen"
            ref={el => projectRefs.current[4] = el}
          >
            <a 
              href="https://dear-xmas.vercel.app/" 
              target="_blank"
            >
              <div className="imgContent">
                <ParallaxText>Dear, Xmas</ParallaxText>
                <div className="bottom">
                  <h3>04</h3><h3>Dear, Xmas</h3>
                </div>
                <figure className="imgWrap">
                  <img src="/assets/images/dearXmas.png" alt="" />
                </figure>
              </div>
              <div className="textContent">
                <ParallaxText>Dear, Xmas</ParallaxText>
                <div className="bottom">
                  <p>Dear, Xmas는 크리스마스의 감성과 특별한 순간을 함께 쌓아가는 웹 서비스입니다. 크리스마스와 관련된 컨텐츠를 즐길 수 있습니다. 코드 충돌을 줄이고 브랜치 관리가 용이한 Git Flow 방식을 사용하여 기능 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여 작업하였습니다.</p>
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