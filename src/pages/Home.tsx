///import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useViewportScroll
} from "framer-motion";
import 'swiper/css';
import "@/styles/Home.scss";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

interface Swiper {
  activeIndex: number;
}

const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 300
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      //type: "spring",
      bounce: 0.6,
      duration: 1
    }
  }
};

const rotateVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: -70,
    rotate: 30
  },
  onscreen: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      bounce: 0.6,
      duration: 0.6
    }
  }
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};


const ParallaxText = ({children, baseVelocity = 100}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const {scrollY} = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleSlideChange = (swiper: Swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };


  
  return (
    <>
      <section 
        className="profile grid"
      >
        <motion.div 
          className="profile__Img"
          initial={{ opacity: 0, x: 0, y: 181 }} 
          animate={{ opacity: 1, x: 0, y: 0 }} 
          transition={{ duration: 0.7 }}
        >  
          <figure>
            <img src="/assets/profile.jpg" alt="" />
          </figure>
        </motion.div>
        <div className="profile__Text">
          <motion.p
            initial={{ opacity: 0, x: 0, y: 50 }} 
            animate={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I AM
          </motion.p>
          <motion.p
            className="gallient"
            initial={{ opacity: 0, x: 0, y: 50 }} 
            animate={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            CREATIVE
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 0, y: 50 }} 
            animate={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            FRONTEND
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 0, y: 50 }} 
            animate={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            DEVELOPER
          </motion.p>
        </div>
      </section>

      <section 
        className="greeting"
      >
        <motion.div 
          className="greeting__Text"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p variants={scrollVariants}>안녕하세요.<span className="emoji emoji--hello"></span> IT 트렌드에 발 맞추기 위해  항상 노력하는 윤선영입니다.</motion.p>
          <motion.p variants={scrollVariants}>현재 하루가 다르게 변화하는 IT<span className="emoji emoji--it"></span> 트렌드를 따라잡기 위해 열심히 공부 중입니다.</motion.p> 
          <motion.p variants={scrollVariants}>그 자리에 안주하지 않고 항상 공부하고<span className="emoji emoji--study"></span> 변화를 받아 들이는 트렌디한<br className='pcOnly'/> 프론트엔드 개발자로 성장해나가고 싶습니다.<span className="emoji emoji--smile"></span>
          </motion.p>
        </motion.div>
      </section>

      <section className="projects">
        <motion.div 
          className="container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={scrollVariants}>
            <div className="slideNum">
              NO.
              <span className="gallient">
                <span className="index">{currentSlide + 1}</span> / 5
              </span>
            </div>
            <Swiper 
              className="slideWrap"
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide className="slide">
                <a href="https://www.seah.co.kr/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">세아그룹</h4>
                    <p>정보 접근 취약자의 정보 격차를 해소하고, 홈페이지의 사용성을 증대시키기 위해<br/> 웹표준 및 웹접근성을 기반으로 설계하였습니다. 또한 어떤 환경에서도 동일한 경험을 전달하기 위해 풀 반응형 홈페이지로 구축했습니다. 나아가 글로벌 기업의 면모에 맞게 <span className="wsnr">해외 접속자도</span> 원활하게 정보를 볼 수 있도록 글로벌 서버 환경을 구성했습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/seah.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="https://www.seahsteel.co.kr/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">세아그룹 계열사</h4>
                    <p>통합 웹사이트 정체성에 맞는 시각적 / 기능적인 일관성을 유지하기 위해 브랜드 아이덴티티 요소를 체계적으로 재사용하고 각 UI 구성 요소를 모듈화한 디자인 시스템을 구축하였습니다. <span className='wsnr'>모든 요소들은</span> 계열사 각각의 콘텐츠 목적에 맞게끔 조화롭고 유연하게 배치할 수 있도록 제작 되었습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/seahSteel.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="https://www.bgf.co.kr/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">bgf 지주사</h4>
                    <p>기존의 BGF 지주사 사이트 리뉴얼 작업을 담당하였습니다.<br/> 메인페이지는 전면 리뉴얼하였으며, 같은 레이아웃인데 각기 다른 구조로 코딩되어 있던 서브페이지들의 구조를 통일하는 작업을 진행하였습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/bgf.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="https://cafe-jijo.vercel.app/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">카페 지조</h4>
                    <p>풀 페이지 레이아웃의 카페 사이트입니다.<br/> 포켓베이스 SDK를 통해 데이터를 렌더링하였습니다.<br/> 로그인 / 회원가입, 장바구니, 게시판 기능을 구현하였습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/cafejijo.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide>
              <SwiperSlide className="slide">
                <a href="https://dear-xmas.vercel.app/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">dear, xmas</h4>
                    <p>Dear, Xmas는 크리스마스의 감성과 특별한 순간을 함께 쌓아가는 웹 서비스입니다.<br className='pcOnly'/> 크리스마스와 관련된 컨텐츠를 즐길 수 있습니다. 코드 충돌을 줄이고 브랜치 관리가 용이한 Git Flow 방식을 사용하여 기능 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여 작업하였습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/dearXmas.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide>
              {/* <SwiperSlide className="slide">
                <a href="/" target='_blank'>
                  <div className="desc">
                    <h4 className="title">Photoshop</h4>
                    <p>포토샵 보정에 쓰이는 흑백, 엠보싱, 반전효과 등 여러 기능들을 javascript을 사용하여 직접 구현해보며 화소가 어떤 원리로 처리되는지 원리를 파악할 수 있었습니다.</p>
                  </div>
                  <figure>
                    <img src="/assets/images/photoshop.png" alt="" />
                  </figure>
                </a>
              </SwiperSlide> */}
            </Swiper>
          </motion.div>
        </motion.div>
      </section>

      <section className="contact">
        <div className="textLine">
          <div>
            <div>
              <ParallaxText baseVelocity={-5}>Get In Touch · </ParallaxText>
            </div>
          </div>
          <div>
            <div>
              <ParallaxText baseVelocity={5}>Get In Touch · </ParallaxText>
            </div>
          </div>
        </div>

        <motion.div 
          className="getInTouch"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div 
            variants={rotateVariants}
          >
            WANT TO TALK ABOUT SOMETHING?
          </motion.div>
          <motion.h4
            initial={{ opacity: 0, x: 0, y: 300 }} 
            animate={{ opacity: 1, x: 0, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <a href="mailto:sun940204@naver.com">
              <span className="gallient">Get In Touch</span>
            </a>
          </motion.h4>
          <motion.div className="sns">
            <ul>
              <li>
                <a href="https://github.com/seonyeongyoon">GITHUB</a>
              </li>
              <li>
                <a href="https://www.notion.so/5c57a8f76c814815badc0301d705f5f7">NOTION</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sun094">LINKEDIN</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Home;
