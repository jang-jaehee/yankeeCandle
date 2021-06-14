$(document).ready(function(){
    $('.jarBx').bxSlider({
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out            
        speed: 500, // m/s ex > 1000 = 1s
        easing: 'ease-out', // 동작 가속도 css와 동일.
        adaptiveHeight: true, // 'mode : horizontal' 시에만 구동. 각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //adaptiveHeight 동작속도
        
        startSlide: 1,  //시작시 사용할 slide indexNumb(0부터시작)
        randomStart: false, //  시작시 random slide 여부

        infiniteLoop: true, //마지막에 도달 했을시, 첫슬라이드로 갈 것인가 멈출것인가
        hideControlOnEnd: true, //첫번째 슬라이드 일경우 이전 버튼 삭제, 마지막 슬라이드 일 경우 다음 버튼 삭제 단, infiniteLoop: false 일 경우만 사용 가능.
    
        preloadImages: 'visible', // "visible"은 현재 보여지는 슬라이드 이미지만 로드 이후 순차적 로드, "all"로 설정하면 이미지가 모두 로드되야 작동.
    
        // responsive method
        responsive: true, //반응형 지원여부
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css .bx-wrapper class에 width 고정, height는 이미지 높이에 따라 자동 조정.

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled: false, //터치스와이프 기능 사용여부 //chrome 터치불가현상.
        swipeThreshold: 0, //터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        oneToOneTouch: false, // fade 효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부

        // pager method
        pager: true, //pager 인디케이터 출력여부
        //pagerType: 'short',  pager 타입 설정. full은 default, short 은 1/4 이런 형식의  출력
        //pagerShortSeparator: ' | ', short 타입 일 경우 카운트 사이 문자 설정 
        // pagerSelector: '.newPager' 기본 pager 를 대체
        pagerCustom: '.thumbPager', //pagerCustom

        // control method
        controls: true, // 좌,우 컨트롤 버튼 출력 여부
        /*
            customize controler
            1. 이미지를 수정하는 방법
            images / controls.png 파일 자체를 수정 하여 디자인을 바꿀수있다.
            만약 크기가 커지거나 작아진다면, 그에 맞는 좌표값을 크롬 개발자
            도구에서 찾아내어 수정 해줘야 한다.
            (기존 객체 css 위치 jquery.bxslider.css 파일 내 125번 라인
            .bx-wrapper .bx-controls-direction a 부분을 수정 하면 됨)

            2. 객체삽입방법
            nextSelector와 prevSelector 함수를 삽입하고, 
            만들어 낼 객체의 클래스명을 지목한후, body 내에 해당 
            클래스이름을 가진 객체를 만들어준다. 
            단, 여기서 주의할 점은 객체를 만들고 스타일을 지정할 대상은
            객체 안의 a 태그를 지목해야 한다.
            a 태그가 객체 안에 자동으로 생성 되기 때문에..

        */
        // auto: true,
        // autoControls: true,
        // autoControlsCombine: true,
        // autoControlsSelector: '.newAutoControl',// 기본 autoControl을 대체
        //startText: '시작', 재생 버튼에 text 삽입
        //stopText: '중지', 중지 버튼에 text 삽입
        // customizing 방법은 controler 와 동일

        autoStart: true, 
        /*
            페이지 로드가 되면, 슬라이드의 자동시작 여부
            -p.s video가 slide 목록중에 포함 되어있으면 역,정순 배열 재생시에
            infinite loop 자체와 hideControlOnEnd 기능의 영향을 받으니
            해당 옵션 조정후 사용 권장
        */
        autoDirection: 'next', // 자동 재생 시에 정순, 역순(prev) 방식 설정
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false: 오버무시) 
        autoDelay: 0, // 자동 재생 전 대기 시간 설정
        pause: 4000, // 자동 재생 시 각 슬라이드 별 노출 시간
        keyboardEnabled : false, //키보드 조작 가능하게 할지 여부
        stopAutoOnClick : true, // control 부분 (이전,다음,자동재생 등)과 상호작용시 자동작동 중지.
        
        //Carousel method
            minSlides: 2, //Carousel은 여러개의 객체를 보여주게 하는데, minSlides는 화면 크기가 줄어도 최저 몇개를 보여줄 것인가 의 값.  
            maxSlides: 3, //maxSlides는 최대 몇개의 객체를 보여줄 것인가 의 값
            slideMargin: 10, // img와 img 사이 간격
            moveSlides : 0, // 전환시 한번에 이동할 slide 수.
            slideWidth : 0, //각 슬라이드 별 width.
            shrinkItems : true, //carousel에 전체 이미지를 다 뿌리고, min, max 수치를 기반으로 뷰포트에 맞게 이미지를 축소.

        // accessibility method
        // ariaLive : true, //슬라이더에 Aria Live 속성을 추가.
        // ariaHidden : true //보이지 않는 슬라이드에 Aria Hidden 속성을 추가

        // callBack method는 https://bxslider.com/options/ 참고.

        // public method
        /*
        goToSlide
        제공된 슬라이드 인덱스 (0부터 시작)로 슬라이드 전환을 수행합니다.
        goToNextSlide
        "다음"슬라이드 전환을 수행합니다.
        goToPrevSlide
        "이전"슬라이드 전환을 수행합니다.
        startAuto
        자동 쇼를 시작합니다. auto 컨트롤이 업데이트되지 않도록 false를 제공하십시오.
        stopAuto
        자동 쇼를 중단합니다. auto 컨트롤이 업데이트되지 않도록 false를 제공하십시오.
        getCurrentSlide
        현재 활성 슬라이드를 반환합니다.
        getSlideCount
        슬라이더에있는 총 슬라이드 수를 반환합니다.
        redrawSlider
        슬라이더를 다시 그립니다. 숨겨진 슬라이더를 숨긴 후에 다시 그려야 할 때 유용합니다.
        reloadSlider
        슬라이더를 다시로드합니다. 슬라이드를 즉시 추가 할 때 유용합니다. 선택적 설정 개체를 수락합니다.
        destroySlider
        슬라이더를 파괴하십시오. 그러면 모든 슬라이더 요소가 원래 상태로 되돌려집니다 (슬라이더를 호출하기 전에).
        */

        //etc trash
        //useCSS: true, slide animation에 jquery animate를 사용할 것이라면 false
        //slideSelector : 기본 직계 자손을 슬라이드 하지만, 내부 특정 객체를 선택하고자 할때 사용.

    });
    $('.slider').bxSlider({
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out            
        speed: 500, // m/s ex > 1000 = 1s
        easing: 'ease-out', // 동작 가속도 css와 동일.
        adaptiveHeight: true, // 'mode : horizontal' 시에만 구동. 각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed: 500, //adaptiveHeight 동작속도
        
        startSlide: 0,  //시작시 사용할 slide indexNumb(0부터시작)
        randomStart: false, //  시작시 random slide 여부

        infiniteLoop: true, //마지막에 도달 했을시, 첫슬라이드로 갈 것인가 멈출것인가
        hideControlOnEnd: true, //첫번째 슬라이드 일경우 이전 버튼 삭제, 마지막 슬라이드 일 경우 다음 버튼 삭제 단, infiniteLoop: false 일 경우만 사용 가능.
    
        preloadImages: 'visible', // "visible"은 현재 보여지는 슬라이드 이미지만 로드 이후 순차적 로드, "all"로 설정하면 이미지가 모두 로드되야 작동.
    
        // responsive method
        responsive: true, //반응형 지원여부
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css .bx-wrapper class에 width 고정, height는 이미지 높이에 따라 자동 조정.

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled: false, //터치스와이프 기능 사용여부 //chrome 터치불가현상.
        swipeThreshold: 0, //터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        oneToOneTouch: false, // fade 효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부

        // pager method
        pager: true, //pager 인디케이터 출력여부
        //pagerType: 'short',  pager 타입 설정. full은 default, short 은 1/4 이런 형식의  출력
        //pagerShortSeparator: ' | ', short 타입 일 경우 카운트 사이 문자 설정 
        // pagerSelector: '.newPager' 기본 pager 를 대체
        pagerCustom: '.thumbPager', //pagerCustom

        // control method
        controls: true, // 좌,우 컨트롤 버튼 출력 여부
        /*
            customize controler
            1. 이미지를 수정하는 방법
            images / controls.png 파일 자체를 수정 하여 디자인을 바꿀수있다.
            만약 크기가 커지거나 작아진다면, 그에 맞는 좌표값을 크롬 개발자
            도구에서 찾아내어 수정 해줘야 한다.
            (기존 객체 css 위치 jquery.bxslider.css 파일 내 125번 라인
            .bx-wrapper .bx-controls-direction a 부분을 수정 하면 됨)

            2. 객체삽입방법
            nextSelector와 prevSelector 함수를 삽입하고, 
            만들어 낼 객체의 클래스명을 지목한후, body 내에 해당 
            클래스이름을 가진 객체를 만들어준다. 
            단, 여기서 주의할 점은 객체를 만들고 스타일을 지정할 대상은
            객체 안의 a 태그를 지목해야 한다.
            a 태그가 객체 안에 자동으로 생성 되기 때문에..

        */
        // auto: true,
        // autoControls: true,
        // autoControlsCombine: true,
        // autoControlsSelector: '.newAutoControl',// 기본 autoControl을 대체
        //startText: '시작', 재생 버튼에 text 삽입
        //stopText: '중지', 중지 버튼에 text 삽입
        // customizing 방법은 controler 와 동일

        autoStart: true, 
        /*
            페이지 로드가 되면, 슬라이드의 자동시작 여부
            -p.s video가 slide 목록중에 포함 되어있으면 역,정순 배열 재생시에
            infinite loop 자체와 hideControlOnEnd 기능의 영향을 받으니
            해당 옵션 조정후 사용 권장
        */
        autoDirection: 'next', // 자동 재생 시에 정순, 역순(prev) 방식 설정
        autoHover: true, // 슬라이드 오버시 재생 중단 여부 (false: 오버무시) 
        autoDelay: 0, // 자동 재생 전 대기 시간 설정
        pause: 4000, // 자동 재생 시 각 슬라이드 별 노출 시간
        keyboardEnabled : false, //키보드 조작 가능하게 할지 여부
        stopAutoOnClick : true, // control 부분 (이전,다음,자동재생 등)과 상호작용시 자동작동 중지.
        
        //Carousel method
            minSlides: 2, //Carousel은 여러개의 객체를 보여주게 하는데, minSlides는 화면 크기가 줄어도 최저 몇개를 보여줄 것인가 의 값.  
            maxSlides: 3, //maxSlides는 최대 몇개의 객체를 보여줄 것인가 의 값
            slideMargin: 10, // img와 img 사이 간격
            moveSlides : 0, // 전환시 한번에 이동할 slide 수.
            slideWidth : 0, //각 슬라이드 별 width.
            shrinkItems : true, //carousel에 전체 이미지를 다 뿌리고, min, max 수치를 기반으로 뷰포트에 맞게 이미지를 축소.

        // accessibility method
        // ariaLive : true, //슬라이더에 Aria Live 속성을 추가.
        // ariaHidden : true //보이지 않는 슬라이드에 Aria Hidden 속성을 추가

        // callBack method는 https://bxslider.com/options/ 참고.

        // public method
        /*
        goToSlide
        제공된 슬라이드 인덱스 (0부터 시작)로 슬라이드 전환을 수행합니다.
        goToNextSlide
        "다음"슬라이드 전환을 수행합니다.
        goToPrevSlide
        "이전"슬라이드 전환을 수행합니다.
        startAuto
        자동 쇼를 시작합니다. auto 컨트롤이 업데이트되지 않도록 false를 제공하십시오.
        stopAuto
        자동 쇼를 중단합니다. auto 컨트롤이 업데이트되지 않도록 false를 제공하십시오.
        getCurrentSlide
        현재 활성 슬라이드를 반환합니다.
        getSlideCount
        슬라이더에있는 총 슬라이드 수를 반환합니다.
        redrawSlider
        슬라이더를 다시 그립니다. 숨겨진 슬라이더를 숨긴 후에 다시 그려야 할 때 유용합니다.
        reloadSlider
        슬라이더를 다시로드합니다. 슬라이드를 즉시 추가 할 때 유용합니다. 선택적 설정 개체를 수락합니다.
        destroySlider
        슬라이더를 파괴하십시오. 그러면 모든 슬라이더 요소가 원래 상태로 되돌려집니다 (슬라이더를 호출하기 전에).
        */

        //etc trash
        //useCSS: true, slide animation에 jquery animate를 사용할 것이라면 false
        //slideSelector : 기본 직계 자손을 슬라이드 하지만, 내부 특정 객체를 선택하고자 할때 사용.

    });
});