window.onload = function(){
    
    var portBox = document.querySelector('.portfolio_popup');
    var portBtn = portBox.querySelector('.portfolio_popup_close a');
    
    portBtn.addEventListener("click", portNone);
    
    function portNone(e){
        e.preventDefault();
        
        portBox.style.display = 'none';
    };
    
    // 포트폴리오 팝업창 닫기
    
    $('.slide').bxSlider({
    mode: 'fade', // 슬라이드 넘김 효과 페이드인&페이드 아웃
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    pagerType: 'short', // 숫자 형식 페이지 수 체크
    autoControlsCombine: true,
    });
    // bxslider 플러그인01 (제이쿼리)
    
    $('.move_slide').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    pagerType: 'short', // 숫자 형식 페이지 수 체크
    nextSelector: '.move_slide_btn .next', // 다음 버튼 정의
    prevSelector: '.move_slide_btn .prev', // 이전 버튼 정의
    autoControlsCombine: true,
    });
    // bxslider 플러그인02 (제이쿼리)
    
    $('.banner_slide').bxSlider({
    auto: true,
    autoControls: true,
    stopAutoOnClick: true,
    pager: false,
    pagerType: 'false',
    nextSelector: '.slide_btn .next', // 다음 버튼 정의
    prevSelector: '.slide_btn .prev', // 이전 버튼 정의
    autoControlsCombine: true,
    minSlides: 3,
    maxSlides: 7,
    slideWidth: 170,
    slideMargin: 10,
    moveSlides: 1
    });
    // bxslider 플러그인03 (제이쿼리)
    
    var favoriteSlide = $('.favorite_box ul').bxSlider({
            auto: false,
            autoControls: false,
            stopAutoOnClick: false,
            pager: false,
            pagerType: 'false',
            minSlides: 5,
            maxSlides: 5,
            slideWidth: 90,
            });
    var wWidth = window.innerWidth;
    
    if (wWidth > 1200){
            favoriteSlide.destroySlider();
        }
    // window width 값이 1200 이상일 경우 슬라이드 삭제
    
    window.addEventListener("resize", scrollEvent);
    
    function scrollEvent() {
        var wWidth = window.innerWidth;
        if (wWidth > 1200) {
            favoriteSlide.destroySlider();
        }else if (wWidth < 1200) {
            //console.log(wWidth);
            favoriteSlide.reloadSlider();
            // bxslider 플러그인04 (제이쿼리)
        };
    };
    
    // window width 값이 1200 이하일 경우 슬라이드 생성
    
    var moreFavorite = document.querySelector('.favorite .favorite_menu a');
    var moreFavoriteBox = document.querySelector('.favorite .favorite_more');
    var moreFavoriteClose = document.querySelector('.favorite .favorite_more .close a');
    
    moreFavorite.addEventListener("click",moreFavoritePopup);
    moreFavoriteClose.addEventListener("click",moreFavoritePopupClose);
    
    function moreFavoritePopup(e){
        e.preventDefault();
        
        moreFavoriteBox.classList.add('on');
    };
    
    // 자주 찾는 메뉴의 more(+) 박스 클릭 시 창 올리기
    
    function moreFavoritePopupClose(e){
        e.preventDefault();
        
        moreFavoriteBox.classList.remove('on');
    };
    
    // 자주 찾는 메뉴의 close(x) 박스 클릭 시 창 내리기
    
    var nav = document.querySelectorAll('#header .gnb ul li');
    var navBox = document.querySelector('#header .gnb');
    var navSubBox = document.querySelector('#header .gnb_bg');
    var navSubClose = document.querySelector('#header .gnb_close');
    
    navSubClose.addEventListener("click",navBoxClose);
    
    nav.forEach(function(i){
        i.addEventListener("mouseover",navSlide);
        i.addEventListener("click", mNavSlide);
        
        function navSlide(){
            navBox.classList.add('active');
            navSubBox.classList.add('on');
            navSubClose.classList.add('on');
        };
        
        // nav li 에 마우스가 닿았을 경우 서브 메뉴 띄워주기
        
        navBox.addEventListener("mouseleave",navClose);
        
        function navClose(){
            navBox.classList.remove('active');
            navSubBox.classList.remove('on');
            navSubClose.classList.remove('on');
        };
        
        // nav li 에 마우스가 벗어났을 경우 서브 메뉴 내려주기
        
        function mNavSlide(e){
            e.preventDefault();
            
            if (i == mSearchBox){
                return false;
            }else{
                this.classList.toggle('on');
            }
            
        };
        
        // 모바일 메뉴를 눌렀을 경우 on 클래스가 있는지 확인하고 없을 경우 on 클래스 추가, 있을 경우 on 클래스 삭제
    });
    
    function navBoxClose(e){
        e.preventDefault();
        
        navBox.classList.remove('active');
        navSubBox.classList.remove('on');
        navSubClose.classList.remove('on');
        gnb.classList.remove('on');
        mTopNav.classList.remove('on');
        this.classList.remove('active');
        dim.classList.remove('on');
    };
    
    // close 버튼 클릭 시 nav의 서브 메뉴 내려주기
    
    var ftMore = document.querySelectorAll('#footer .ft_top ul li.more');
    var ftMoreClose = document.querySelector('.ft_close_btn a');
    
    ftMore.forEach(function(i){
        i.addEventListener('click', moreBox);
        
        function moreBox(e){
            e.preventDefault();
            
            i.classList.toggle('on');
            ftMoreClose.classList.toggle('on');
        };  
    });
    
    // 하단 푸터 셀렉트박스 토글 클래스, 단 li에 search 클래스가 있는 경우는 제외
    
    var gnb = document.querySelector('#header .gnb');
    var mNavBtn = document.querySelector('.m_nav_btn a');
    var mNavCloseBtn = document.querySelector('#header .gnb_close');
    var mTopNav = document.querySelector('#header .top_nav');
    var dim = document.querySelector('.dim');
    
    mNavBtn.addEventListener("click", mNavBox);
    
    function mNavBox(e){
        e.preventDefault();
        
        gnb.classList.add('on');
        mTopNav.classList.add('on');
        mNavCloseBtn.classList.add('active');
        dim.classList.add('on');
    };
    
    // 모바일 메뉴 버튼 클릭시 메뉴창 올려주기
    
    var mSearchBtn = document.querySelector('.m_nav_search_btn a');
    var mSearchBox = document.querySelector('#header .gnb ul li.search');
    var mSearchCloseBtn = document.querySelector('#header .gnb ul li .search_close a');
    
    mSearchBtn.addEventListener("click", mSearch);
    mSearchCloseBtn.addEventListener("click", mSearchClose);
    
    function mSearch(e){
        e.preventDefault();
        
        mSearchBox.classList.add('on');
    };
    
    // 모바일 검색 버튼 클릭시 검색창 올려주기
    
    function mSearchClose(e){
        e.preventDefault();
        
        mSearchBox.classList.remove('on');
    };
    
    // 모바일 검색 닫기 버튼 클릭시 검색창 닫아주기
    
};