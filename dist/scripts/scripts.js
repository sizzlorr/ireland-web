"use strict";$(window).scroll(function(){var e=$(this).scrollTop();$(".girl").css({transform:"translateY("+e/40+"%)"}),$(".leafe-fore").css({transform:"translateY(-"+e/10+"%)"}),$(".leafe-back").css({transform:"translateY(-"+e/15+"%)"}),$(".leafe-regi-fore").css({transform:"translateY(-"+e/20+"%)"}),$(".leafe-regi-back").css({transform:"translateY(-"+e/24+"%)"}),$(".leafe-video-fore").css({transform:"translateY(-"+e/21+"%)"}),$(".leafe-video-back").css({transform:"translateY(-"+e/26+"%)"}),$(".leafe-spiker-fore").css({transform:"translateY(-"+e/21+"%)"}),$(".leafe-spiker-back").css({transform:"translateY(-"+e/26+"%)"})}),$(function(){var s=$(window);s.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var a=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,r=s.scrollTop()-parseInt(200*a);TweenMax.to(s,1.2,{scrollTo:{y:r,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpRdWVyeVN0dWZmLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3BTY3JvbGwiLCJ0aGlzIiwic2Nyb2xsVG9wIiwiY3NzIiwidHJhbnNmb3JtIiwiJHdpbmRvdyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJmaW5hbFNjcm9sbCIsInBhcnNlSW50IiwiVHdlZW5NYXgiLCJ0byIsInNjcm9sbFRvIiwieSIsImF1dG9LaWxsIiwiZWFzZSIsIlBvd2VyMSIsImVhc2VPdXQiLCJvdmVyd3JpdGUiXSwibWFwcGluZ3MiOiJhQUdBQSxFQUFFQyxRQUFRQyxPQUFPLFdBRWIsSUFBSUMsRUFBWUgsRUFBRUksTUFBTUMsWUFDeEJMLEVBQUUsU0FBU00sSUFBSSxDQUNYQyxVQUFhLGNBQWVKLEVBQVcsR0FBSSxPQUUvQ0gsRUFBRSxlQUFlTSxJQUFJLENBQ2pCQyxVQUFhLGVBQWdCSixFQUFXLEdBQUksT0FFaERILEVBQUUsZUFBZU0sSUFBSSxDQUNqQkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BR2hESCxFQUFFLG9CQUFvQk0sSUFBSSxDQUN0QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BRWhESCxFQUFFLG9CQUFvQk0sSUFBSSxDQUN0QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BR2hESCxFQUFFLHFCQUFxQk0sSUFBSSxDQUN2QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BRWhESCxFQUFFLHFCQUFxQk0sSUFBSSxDQUN2QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BR2hESCxFQUFFLHNCQUFzQk0sSUFBSSxDQUN4QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BRWhESCxFQUFFLHNCQUFzQk0sSUFBSSxDQUN4QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLFNBT3BESCxFQUFFLFdBRUQsSUFBSVEsRUFBVVIsRUFBRUMsUUFLaEJPLEVBQVFDLEdBQUcsNEJBQTZCLFNBQVNDLEdBRWhEQSxFQUFNQyxpQkFFTixJQUFJQyxFQUFRRixFQUFNRyxjQUFjQyxXQUFXLE1BQVFKLEVBQU1HLGNBQWNFLE9BQU8sRUFFMUVDLEVBRFlSLEVBQVFILFlBQ01ZLFNBUlYsSUFRbUJMLEdBRXZDTSxTQUFTQyxHQUFHWCxFQVhJLElBV2lCLENBQ2hDWSxTQUFXLENBQUVDLEVBQUdMLEVBQWFNLFVBQVMsR0FDckNDLEtBQU1DLE9BQU9DLFFBQ2JILFVBQVUsRUFDVkksVUFBVyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy8gSGVhZGVyIFBhcmFsbGF4XHJcbi8vXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHRvcFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAkKCcuZ2lybCcpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKCcrIHRvcFNjcm9sbCAvNDAgKyclKSdcclxuICAgIH0pO1xyXG4gICAgJCgnLmxlYWZlLWZvcmUnKS5jc3Moe1xyXG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtJysgdG9wU2Nyb2xsIC8xMCArJyUpJ1xyXG4gICAgfSk7XHJcbiAgICAkKCcubGVhZmUtYmFjaycpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzE1ICsnJSknXHJcbiAgICB9KTtcclxuICAgXHJcbiAgICAkKCcubGVhZmUtcmVnaS1mb3JlJykuY3NzKHtcclxuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLScrIHRvcFNjcm9sbCAvMjAgKyclKSdcclxuICAgIH0pO1xyXG4gICAgJCgnLmxlYWZlLXJlZ2ktYmFjaycpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzI0ICsnJSknXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubGVhZmUtdmlkZW8tZm9yZScpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzIxICsnJSknXHJcbiAgICB9KTtcclxuICAgICQoJy5sZWFmZS12aWRlby1iYWNrJykuY3NzKHtcclxuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLScrIHRvcFNjcm9sbCAvMjYgKyclKSdcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5sZWFmZS1zcGlrZXItZm9yZScpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzIxICsnJSknXHJcbiAgICB9KTtcclxuICAgICQoJy5sZWFmZS1zcGlrZXItYmFjaycpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzI2ICsnJSknXHJcbiAgICB9KTtcclxufSk7XHJcbi8vXHJcbi8vIFNtb290aCBzY3JvbGxcclxuLy9cclxuLy9cclxuJChmdW5jdGlvbigpe1xyXG5cdFxyXG5cdHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cdFxyXG5cdHZhciBzY3JvbGxUaW1lID0gMS4yO1xyXG5cdHZhciBzY3JvbGxEaXN0YW5jZSA9IDIwMDtcclxuXHRcdFxyXG5cdCR3aW5kb3cub24oXCJtb3VzZXdoZWVsIERPTU1vdXNlU2Nyb2xsXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0dmFyIGRlbHRhID0gZXZlbnQub3JpZ2luYWxFdmVudC53aGVlbERlbHRhLzEyMCB8fCAtZXZlbnQub3JpZ2luYWxFdmVudC5kZXRhaWwvMztcclxuXHRcdHZhciBzY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG5cdFx0dmFyIGZpbmFsU2Nyb2xsID0gc2Nyb2xsVG9wIC0gcGFyc2VJbnQoZGVsdGEqc2Nyb2xsRGlzdGFuY2UpO1xyXG5cdFx0XHRcclxuXHRcdFR3ZWVuTWF4LnRvKCR3aW5kb3csIHNjcm9sbFRpbWUsIHtcclxuXHRcdFx0c2Nyb2xsVG8gOiB7IHk6IGZpbmFsU2Nyb2xsLCBhdXRvS2lsbDp0cnVlIH0sXHJcblx0XHRcdFx0ZWFzZTogUG93ZXIxLmVhc2VPdXQsXHJcblx0XHRcdFx0YXV0b0tpbGw6IHRydWUsXHJcblx0XHRcdFx0b3ZlcndyaXRlOiA1XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0fSk7XHRcdFxyXG5cdH0pO1xyXG5cdFxyXG59KTtcclxuIl19
