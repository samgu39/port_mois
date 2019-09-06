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
                        controls: true,
                        stopAutoOnClick: false,
                        minSlides: 5,
                        maxSlides: 5,
                        slideWidth: 90,
                        moveSlides: 0
    });

    window.addEventListener("resize", scrollEvent);
	
    function scrollEvent() {
        var wWidth = window.innerWidth;
		
        //console.log(wWidth);
        
        if (wWidth > 1200) {
            favoriteSlide.destroySlider();
            // window width 값이 1200 이상일 경우 슬라이드 삭제
        }else if (wWidth < 1200) {
            //console.log(wWidth);
            favoriteSlide.reloadSlider();
            // bxslider 플러그인04 (제이쿼리)
            // window width 값이 1200 이하일 경우 슬라이드 생성
        };
    };
    
    // resize된 window의 width값이 1200 이하일 경우 슬라이드 생성
	
	var winScale = window.innerWidth;
	
	if (winScale > 1200) {
            favoriteSlide.destroySlider();
            // window width 값이 1200 이상일 경우 슬라이드 삭제
        }else if (winScale < 1200) {
            //console.log(wWidth);
            favoriteSlide.reloadSlider();
            // bxslider 플러그인04 (제이쿼리)
            // window width 값이 1200 이하일 경우 슬라이드 생성
        };
	
    var moreFavorite = document.querySelector('.favorite .favorite_menu a');
    var moreFavoriteBox = document.querySelector('.favorite .favorite_more');
    var moreFavoriteClose = document.querySelector('.favorite .favorite_more .close a');
    
    moreFavorite.addEventListener("click",moreFavoritePopup);
    moreFavoriteClose.addEventListener("click",moreFavoritePopupClose);
    
    function moreFavoritePopup(e){
        e.preventDefault();
        
        moreFavoriteBox.className = 'favorite_more on';
    };
    
    // 자주 찾는 메뉴의 more(+) 박스 클릭 시 창 올리기
    
    function moreFavoritePopupClose(e){
        e.preventDefault();
        
        moreFavoriteBox.className = 'favorite_more';
    };
    
    // 자주 찾는 메뉴의 close(x) 박스 클릭 시 창 내리기
    
    var nav = document.querySelectorAll('#header .gnb .menubox > li');
    var navBox = document.querySelector('#header .gnb');
    var navBoxUl = document.querySelector('#header .gnb ul');
    var navSubBox = document.querySelector('#header .gnb_bg');
    var navSubClose = document.querySelector('#header .gnb_close');
    var navMcloseBtn = document.querySelector('.m_nav_close_btn a');
    
    navSubClose.addEventListener("click",navBoxClose);
    navMcloseBtn.addEventListener("click",navBoxClose);
    
    for(var i = 0; i < nav.length; ++i){
        nav[i].addEventListener("mouseover",navSlide);
        nav[i].addEventListener("click", mNavSlide);
    };

        function navSlide(){
            navBox.className = 'gnb active on';
            navSubBox.className = 'gnb_bg on';
            navSubClose.className = 'gnb_close on';
            navMcloseBtn.className = 'active';
        };
        
        // nav li 에 마우스가 닿았을 경우 서브 메뉴 띄워주기
        
        navBox.addEventListener("mouseleave",navClose);
        
        function navClose(){
            navBox.className = 'gnb';
            navSubBox.className = 'gnb_bg';
            navSubClose.className = 'gnb_close';
            navMcloseBtn.className = '';
            mTopNav.className = 'top_nav'
            dim.className = 'dim';
        };
        
        // nav li 에 마우스가 벗어났을 경우 서브 메뉴 내려주기
    
        function mNavSlide(e){
            e.preventDefault();
			
            for(var j = 0 ; j < nav.length ; ++j){
				nav[j].className = '';
			}; // 임의로 nav의 [j]값을 지정하여 해당 nav 에 className 제거
            this.className = 'on';
        };
        
        // 모바일 메뉴를 눌렀을 경우 on 클래스가 있는지 확인하고 없을 경우 on 클래스 추가, 있을 경우 on 클래스 삭제
    
    function navBoxClose(e){
        e.preventDefault();
        
        navBox.className = 'gnb';
        navSubBox.className = 'gnb_bg';
        navSubClose.className = 'gnb_close';
        gnb.className = 'gnb';
        mTopNav.className = 'top_nav';
        this.className = '';
        dim.className = 'dim';
        navMcloseBtn.className = 'm_nav_close_btn';
    };
    
    // close 버튼 클릭 시 nav의 서브 메뉴 내려주기
    
    var ftMore = $('#footer .ft_top ul li.more');
    var ftMoreClose = $('.ft_close_btn a');

    ftMore.click(function(e){
        e.preventDefault();
        
        $(this).toggleClass('on');
    });
    
    // 하단 푸터 셀렉트박스 토글 클래스
    
    var gnb = document.querySelector('#header .gnb');
    var mNavBtn = document.querySelector('.m_nav_btn a');
    var mNavCloseBtn = document.querySelector('.m_nav_close_btn a');
    var mTopNav = document.querySelector('#header .top_nav');
    var dim = document.querySelector('.dim');
    
    mNavBtn.addEventListener("click", mNavBox);
    
    function mNavBox(e){
        e.preventDefault();
        
        gnb.className = 'gnb on';
        mTopNav.className = 'top_nav on';
        mNavCloseBtn.className = 'active';
        dim.className = 'dim on';
    };
    
    // 모바일 메뉴 버튼 클릭시 메뉴창 올려주기
    
    var mSearchBtn = document.querySelector('.m_nav_search_btn a');
    var mSearchBox = document.querySelector('#header .gnb .search');
    var mSearchCloseBtn = document.querySelector('#header .gnb .search_close a');
    
    mSearchBtn.addEventListener("click", mSearch);
    mSearchCloseBtn.addEventListener("click", mSearchClose);
    
    function mSearch(e){
        e.preventDefault();
        
        mSearchBox.className = 'search on';
    };
    
    // 모바일 검색 버튼 클릭시 검색창 올려주기
    
    function mSearchClose(e){
        e.preventDefault();
        
        mSearchBox.className = 'search';
    };
    
    // 모바일 검색 닫기 버튼 클릭시 검색창 닫아주기
    
    mianFavoriteSave();
    
    function mianFavoriteSave(){
        var moreFavoriteBox = document.querySelector('.favorite .favorite_more');
        var liFavorite01 = $('.favorite .favorite_box ul li.favorite01'),
            liFavorite02 = $('.favorite .favorite_box ul li.favorite02'),
            liFavorite03 = $('.favorite .favorite_box ul li.favorite03'),
            liFavorite04 = $('.favorite .favorite_box ul li.favorite04'),
            liFavorite05 = $('.favorite .favorite_box ul li.favorite05'),
            liFavorite06 = $('.favorite .favorite_box ul li.favorite06'),
            liFavorite07 = $('.favorite .favorite_box ul li.favorite07'),
            liFavorite08 = $('.favorite .favorite_box ul li.favorite08'),
            liFavorite09 = $('.favorite .favorite_box ul li.favorite09'),
            liFavorite10 = $('.favorite .favorite_box ul li.favorite10'),
            liFavorite11 = $('.favorite .favorite_box ul li.favorite11'),
            liFavorite12 = $('.favorite .favorite_box ul li.favorite12'),
            liFavorite13 = $('.favorite .favorite_box ul li.favorite13'),
            liFavorite14 = $('.favorite .favorite_box ul li.favorite14'),
            liFavorite15 = $('.favorite .favorite_box ul li.favorite15'),
            liFavorite16 = $('.favorite .favorite_box ul li.favorite16'),
            liFavorite17 = $('.favorite .favorite_box ul li.favorite17'),
            liFavorite18 = $('.favorite .favorite_box ul li.favorite18'),
            liFavorite19 = $('.favorite .favorite_box ul li.favorite19'),
            liFavorite20 = $('.favorite .favorite_box ul li.favorite20'),
            liFavorite21 = $('.favorite .favorite_box ul li.favorite21'),
            checkFavorite01 = document.querySelector('.favorite .favorite_more ul li #favorite01'),
            checkFavorite02 = document.querySelector('.favorite .favorite_more ul li #favorite02'),
            checkFavorite03 = document.querySelector('.favorite .favorite_more ul li #favorite03'),
            checkFavorite04 = document.querySelector('.favorite .favorite_more ul li #favorite04'),
            checkFavorite05 = document.querySelector('.favorite .favorite_more ul li #favorite05'),
            checkFavorite06 = document.querySelector('.favorite .favorite_more ul li #favorite06'),
            checkFavorite07 = document.querySelector('.favorite .favorite_more ul li #favorite07'),
            checkFavorite08 = document.querySelector('.favorite .favorite_more ul li #favorite08'),
            checkFavorite09 = document.querySelector('.favorite .favorite_more ul li #favorite09'),
            checkFavorite10 = document.querySelector('.favorite .favorite_more ul li #favorite10'),
            checkFavorite11 = document.querySelector('.favorite .favorite_more ul li #favorite11'),
            checkFavorite12 = document.querySelector('.favorite .favorite_more ul li #favorite12'),
            checkFavorite13 = document.querySelector('.favorite .favorite_more ul li #favorite13'),
            checkFavorite14 = document.querySelector('.favorite .favorite_more ul li #favorite14'),
            checkFavorite15 = document.querySelector('.favorite .favorite_more ul li #favorite15'),
            checkFavorite16 = document.querySelector('.favorite .favorite_more ul li #favorite16'),
            checkFavorite17 = document.querySelector('.favorite .favorite_more ul li #favorite17'),
            checkFavorite18 = document.querySelector('.favorite .favorite_more ul li #favorite18'),
            checkFavorite19 = document.querySelector('.favorite .favorite_more ul li #favorite19'),
            checkFavorite20 = document.querySelector('.favorite .favorite_more ul li #favorite20'),
            checkFavorite21 = document.querySelector('.favorite .favorite_more ul li #favorite21');
    
        if(checkFavorite01.checked){
            liFavorite01.addClass('on');
        }else{
            liFavorite01.removeClass('on');
        };
        
        if(checkFavorite02.checked){
            liFavorite02.addClass('on');
        }else{
            liFavorite02.removeClass('on');
        };

         if(checkFavorite03.checked){
             liFavorite03.addClass('on');
         }else{
             liFavorite03.removeClass('on');
         };

         if(checkFavorite04.checked){
             liFavorite04.addClass('on');
         }else{
             liFavorite04.removeClass('on');
         };

         if(checkFavorite05.checked){
             liFavorite05.addClass('on');
         }else{
             liFavorite05.removeClass('on');
         };

         if(checkFavorite06.checked){
             liFavorite06.addClass('on');
         }else{
             liFavorite06.removeClass('on');
         };

         if(checkFavorite07.checked){
             liFavorite07.addClass('on');
         }else{
             liFavorite07.removeClass('on');
         };

         if(checkFavorite08.checked){
             liFavorite08.addClass('on');
         }else{
             liFavorite08.removeClass('on');
         };

         if(checkFavorite09.checked){
             liFavorite09.addClass('on');
         }else{
             liFavorite09.removeClass('on');
         };

         if(checkFavorite10.checked){
             liFavorite10.addClass('on');
         }else{
             liFavorite10.removeClass('on');
         };

         if(checkFavorite11.checked){
             liFavorite11.addClass('on');
         }else{
             liFavorite11.removeClass('on');
         };

         if(checkFavorite12.checked){
             liFavorite12.addClass('on');
         }else{
             liFavorite12.removeClass('on');
         };

         if(checkFavorite13.checked){
             liFavorite13.addClass('on');
         }else{
             liFavorite13.removeClass('on');
         };

         if(checkFavorite14.checked){
             liFavorite14.addClass('on');
         }else{
             liFavorite14.removeClass('on');
         };

         if(checkFavorite15.checked){
             liFavorite15.addClass('on');
         }else{
            liFavorite15.removeClass('on');
         };

        if(checkFavorite16.checked){
            liFavorite16.addClass('on');
        }else{
            liFavorite16.removeClass('on');
        };

        if(checkFavorite17.checked){
            liFavorite17.addClass('on');
        }else{
            liFavorite17.removeClass('on');
        };

        if(checkFavorite18.checked){
            liFavorite18.addClass('on');
        }else{
            liFavorite18.removeClass('on');
        };

        if(checkFavorite19.checked){
            liFavorite19.addClass('on');
        }else{
            liFavorite19.removeClass('on');
        };

        if(checkFavorite20.checked){
            liFavorite20.addClass('on');
        }else{
            liFavorite20.removeClass('on');
        };

        if(checkFavorite21.checked){
            liFavorite21.addClass('on');
        }else{
            liFavorite21.removeClass('on');
        };
    };
    
    // 페이지가 로드되었을 때 자주 찾는 정보 중 체크되어있는 값만을 띄워주기
    
};

function favoriteSave(){
    var checkBox = $('.favorite .favorite_more ul li input:checkbox[type="checkbox"]:checked');
    var moreFavoriteBox = document.querySelector('.favorite .favorite_more');
    var liFavorite01 = $('.favorite .favorite_box ul li.favorite01'),
        liFavorite02 = $('.favorite .favorite_box ul li.favorite02'),
        liFavorite03 = $('.favorite .favorite_box ul li.favorite03'),
        liFavorite04 = $('.favorite .favorite_box ul li.favorite04'),
        liFavorite05 = $('.favorite .favorite_box ul li.favorite05'),
        liFavorite06 = $('.favorite .favorite_box ul li.favorite06'),
        liFavorite07 = $('.favorite .favorite_box ul li.favorite07'),
        liFavorite08 = $('.favorite .favorite_box ul li.favorite08'),
        liFavorite09 = $('.favorite .favorite_box ul li.favorite09'),
        liFavorite10 = $('.favorite .favorite_box ul li.favorite10'),
        liFavorite11 = $('.favorite .favorite_box ul li.favorite11'),
        liFavorite12 = $('.favorite .favorite_box ul li.favorite12'),
        liFavorite13 = $('.favorite .favorite_box ul li.favorite13'),
        liFavorite14 = $('.favorite .favorite_box ul li.favorite14'),
        liFavorite15 = $('.favorite .favorite_box ul li.favorite15'),
        liFavorite16 = $('.favorite .favorite_box ul li.favorite16'),
        liFavorite17 = $('.favorite .favorite_box ul li.favorite17'),
        liFavorite18 = $('.favorite .favorite_box ul li.favorite18'),
        liFavorite19 = $('.favorite .favorite_box ul li.favorite19'),
        liFavorite20 = $('.favorite .favorite_box ul li.favorite20'),
        liFavorite21 = $('.favorite .favorite_box ul li.favorite21'),
        checkFavorite01 = document.querySelector('.favorite .favorite_more ul li #favorite01'),
        checkFavorite02 = document.querySelector('.favorite .favorite_more ul li #favorite02'),
        checkFavorite03 = document.querySelector('.favorite .favorite_more ul li #favorite03'),
        checkFavorite04 = document.querySelector('.favorite .favorite_more ul li #favorite04'),
        checkFavorite05 = document.querySelector('.favorite .favorite_more ul li #favorite05'),
        checkFavorite06 = document.querySelector('.favorite .favorite_more ul li #favorite06'),
        checkFavorite07 = document.querySelector('.favorite .favorite_more ul li #favorite07'),
        checkFavorite08 = document.querySelector('.favorite .favorite_more ul li #favorite08'),
        checkFavorite09 = document.querySelector('.favorite .favorite_more ul li #favorite09'),
        checkFavorite10 = document.querySelector('.favorite .favorite_more ul li #favorite10'),
        checkFavorite11 = document.querySelector('.favorite .favorite_more ul li #favorite11'),
        checkFavorite12 = document.querySelector('.favorite .favorite_more ul li #favorite12'),
        checkFavorite13 = document.querySelector('.favorite .favorite_more ul li #favorite13'),
        checkFavorite14 = document.querySelector('.favorite .favorite_more ul li #favorite14'),
        checkFavorite15 = document.querySelector('.favorite .favorite_more ul li #favorite15'),
        checkFavorite16 = document.querySelector('.favorite .favorite_more ul li #favorite16'),
        checkFavorite17 = document.querySelector('.favorite .favorite_more ul li #favorite17'),
        checkFavorite18 = document.querySelector('.favorite .favorite_more ul li #favorite18'),
        checkFavorite19 = document.querySelector('.favorite .favorite_more ul li #favorite19'),
        checkFavorite20 = document.querySelector('.favorite .favorite_more ul li #favorite20'),
        checkFavorite21 = document.querySelector('.favorite .favorite_more ul li #favorite21');
    
    if(checkBox.checked){
        checkto = true;
    }else{
        checkto = false;
    };
    
//    console.log(checkBox.length);
    
    if(checkBox.length == 8){
        
        var qna = confirm('저장하시겠습니까?');
        
        if(qna){
            moreFavoriteBox.className = 'favorite_more';
        
            if(checkFavorite01.checked){
                liFavorite01.addClass('on');
            }else{
                liFavorite01.removeClass('on');
            };

            if(checkFavorite02.checked){
                liFavorite02.addClass('on');
            }else{
                liFavorite02.removeClass('on');
            };

            if(checkFavorite03.checked){
                liFavorite03.addClass('on');
            }else{
                liFavorite03.removeClass('on');
            };

            if(checkFavorite04.checked){
                liFavorite04.addClass('on');
            }else{
                liFavorite04.removeClass('on');
            };

            if(checkFavorite05.checked){
                liFavorite05.addClass('on');
            }else{
                liFavorite05.removeClass('on');
            };

            if(checkFavorite06.checked){
                liFavorite06.addClass('on');
            }else{
                liFavorite06.removeClass('on');
            };

            if(checkFavorite07.checked){
                liFavorite07.addClass('on');
            }else{
                liFavorite07.removeClass('on');
            };

            if(checkFavorite08.checked){
                liFavorite08.addClass('on');
            }else{
                liFavorite08.removeClass('on');
            };

            if(checkFavorite09.checked){
                liFavorite09.addClass('on');
            }else{
                liFavorite09.removeClass('on');
            };

            if(checkFavorite10.checked){
                liFavorite10.addClass('on');
            }else{
                liFavorite10.removeClass('on');
            };

            if(checkFavorite11.checked){
                liFavorite11.addClass('on');
            }else{
                liFavorite11.removeClass('on');
            };

            if(checkFavorite12.checked){
                liFavorite12.addClass('on');
            }else{
                liFavorite12.removeClass('on');
            };

            if(checkFavorite13.checked){
                liFavorite13.addClass('on');
            }else{
                liFavorite13.removeClass('on');
            };

            if(checkFavorite14.checked){
                liFavorite14.addClass('on');
            }else{
                liFavorite14.removeClass('on');
            };

            if(checkFavorite15.checked){
                liFavorite15.addClass('on');
            }else{
                liFavorite15.removeClass('on');
            };

            if(checkFavorite16.checked){
                liFavorite16.addClass('on');
            }else{
                liFavorite16.removeClass('on');
            };

            if(checkFavorite17.checked){
                liFavorite17.addClass('on');
            }else{
                liFavorite17.removeClass('on');
            };

            if(checkFavorite18.checked){
                liFavorite18.addClass('on');
            }else{
                liFavorite18.removeClass('on');
            };

            if(checkFavorite19.checked){
                liFavorite19.addClass('on');
            }else{
                liFavorite19.removeClass('on');
            };

            if(checkFavorite20.checked){
                liFavorite20.addClass('on');
            }else{
                liFavorite20.removeClass('on');
            };

            if(checkFavorite21.checked){
                liFavorite21.addClass('on');
            }else{
                liFavorite21.removeClass('on');
            };
        }else{
            return false;
        };
        
       }else{
        alert('8개 메뉴를 선택하셔야 저장이 가능합니다.');
       };
};

    // 자주 찾는 정보 중 체크되어있는 값만을 띄워주기

function favoriteReset(){
    var checkBox = $('.favorite .favorite_more ul li input:checkbox[type="checkbox"]:checked');
    
    checkBox.removeAttr("checked");
};

    // 초기화 버튼 클릭 시 체크된 값 리셋