"use strict";$(window).scroll(function(){var e=$(this).scrollTop();$(".girl").css({transform:"translateY("+e/40+"%)"}),$(".leafe-fore").css({transform:"translateY(-"+e/10+"%)"}),$(".leafe-back").css({transform:"translateY(-"+e/15+"%)"}),$(".leafe-regi-fore").css({transform:"translateY(-"+e/26+"%)"}),$(".leafe-regi-back").css({transform:"translateY(-"+e/30+"%)"}),$(".leafe-video-fore").css({transform:"translateY(-"+e/28+"%)"}),$(".leafe-video-back").css({transform:"translateY(-"+e/33+"%)"})}),$(function(){var s=$(window);s.on("mousewheel DOMMouseScroll",function(e){e.preventDefault();var a=e.originalEvent.wheelDelta/120||-e.originalEvent.detail/3,r=s.scrollTop()-parseInt(200*a);TweenMax.to(s,1.2,{scrollTo:{y:r,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpRdWVyeVN0dWZmLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3BTY3JvbGwiLCJ0aGlzIiwic2Nyb2xsVG9wIiwiY3NzIiwidHJhbnNmb3JtIiwiJHdpbmRvdyIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbHRhIiwib3JpZ2luYWxFdmVudCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJmaW5hbFNjcm9sbCIsInBhcnNlSW50IiwiVHdlZW5NYXgiLCJ0byIsInNjcm9sbFRvIiwieSIsImF1dG9LaWxsIiwiZWFzZSIsIlBvd2VyMSIsImVhc2VPdXQiLCJvdmVyd3JpdGUiXSwibWFwcGluZ3MiOiJhQUdBQSxFQUFFQyxRQUFRQyxPQUFPLFdBRWIsSUFBSUMsRUFBWUgsRUFBRUksTUFBTUMsWUFDeEJMLEVBQUUsU0FBU00sSUFBSSxDQUNYQyxVQUFhLGNBQWVKLEVBQVcsR0FBSSxPQUUvQ0gsRUFBRSxlQUFlTSxJQUFJLENBQ2pCQyxVQUFhLGVBQWdCSixFQUFXLEdBQUksT0FFaERILEVBQUUsZUFBZU0sSUFBSSxDQUNqQkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BR2hESCxFQUFFLG9CQUFvQk0sSUFBSSxDQUN0QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BRWhESCxFQUFFLG9CQUFvQk0sSUFBSSxDQUN0QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BR2hESCxFQUFFLHFCQUFxQk0sSUFBSSxDQUN2QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLE9BRWhESCxFQUFFLHFCQUFxQk0sSUFBSSxDQUN2QkMsVUFBYSxlQUFnQkosRUFBVyxHQUFJLFNBT3BESCxFQUFFLFdBRUQsSUFBSVEsRUFBVVIsRUFBRUMsUUFLaEJPLEVBQVFDLEdBQUcsNEJBQTZCLFNBQVNDLEdBRWhEQSxFQUFNQyxpQkFFTixJQUFJQyxFQUFRRixFQUFNRyxjQUFjQyxXQUFXLE1BQVFKLEVBQU1HLGNBQWNFLE9BQU8sRUFFMUVDLEVBRFlSLEVBQVFILFlBQ01ZLFNBUlYsSUFRbUJMLEdBRXZDTSxTQUFTQyxHQUFHWCxFQVhJLElBV2lCLENBQ2hDWSxTQUFXLENBQUVDLEVBQUdMLEVBQWFNLFVBQVMsR0FDckNDLEtBQU1DLE9BQU9DLFFBQ2JILFVBQVUsRUFDVkksVUFBVyIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cclxuLy8gSGVhZGVyIFBhcmFsbGF4XHJcbi8vXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIHRvcFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcbiAgICAkKCcuZ2lybCcpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKCcrIHRvcFNjcm9sbCAvNDAgKyclKSdcclxuICAgIH0pO1xyXG4gICAgJCgnLmxlYWZlLWZvcmUnKS5jc3Moe1xyXG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtJysgdG9wU2Nyb2xsIC8xMCArJyUpJ1xyXG4gICAgfSk7XHJcbiAgICAkKCcubGVhZmUtYmFjaycpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzE1ICsnJSknXHJcbiAgICB9KTtcclxuICAgXHJcbiAgICAkKCcubGVhZmUtcmVnaS1mb3JlJykuY3NzKHtcclxuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLScrIHRvcFNjcm9sbCAvMjYgKyclKSdcclxuICAgIH0pO1xyXG4gICAgJCgnLmxlYWZlLXJlZ2ktYmFjaycpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzMwICsnJSknXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubGVhZmUtdmlkZW8tZm9yZScpLmNzcyh7XHJcbiAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0nKyB0b3BTY3JvbGwgLzI4ICsnJSknXHJcbiAgICB9KTtcclxuICAgICQoJy5sZWFmZS12aWRlby1iYWNrJykuY3NzKHtcclxuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLScrIHRvcFNjcm9sbCAvMzMgKyclKSdcclxuICAgIH0pO1xyXG59KTtcclxuLy9cclxuLy8gU21vb3RoIHNjcm9sbFxyXG4vL1xyXG4vL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblx0XHJcblx0dmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblx0XHJcblx0dmFyIHNjcm9sbFRpbWUgPSAxLjI7XHJcblx0dmFyIHNjcm9sbERpc3RhbmNlID0gMjAwO1xyXG5cdFx0XHJcblx0JHdpbmRvdy5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGxcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHR2YXIgZGVsdGEgPSBldmVudC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEvMTIwIHx8IC1ldmVudC5vcmlnaW5hbEV2ZW50LmRldGFpbC8zO1xyXG5cdFx0dmFyIHNjcm9sbFRvcCA9ICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcblx0XHR2YXIgZmluYWxTY3JvbGwgPSBzY3JvbGxUb3AgLSBwYXJzZUludChkZWx0YSpzY3JvbGxEaXN0YW5jZSk7XHJcblx0XHRcdFxyXG5cdFx0VHdlZW5NYXgudG8oJHdpbmRvdywgc2Nyb2xsVGltZSwge1xyXG5cdFx0XHRzY3JvbGxUbyA6IHsgeTogZmluYWxTY3JvbGwsIGF1dG9LaWxsOnRydWUgfSxcclxuXHRcdFx0XHRlYXNlOiBQb3dlcjEuZWFzZU91dCxcclxuXHRcdFx0XHRhdXRvS2lsbDogdHJ1ZSxcclxuXHRcdFx0XHRvdmVyd3JpdGU6IDVcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHR9KTtcdFx0XHJcblx0fSk7XHJcblx0XHJcbn0pOyJdfQ==
