import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.bxslider_prize').bxSlider({
        minSlides: 3,
        maxSlides:3,
        slideWidth:450,
        slideMargin: 10,
        controls: false,
      });
     
      $(document).on('click', '[data-toggle="lightbox_prize"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox().destroy();
        $(this).ekkoLightbox();
      });
     
    })
  }

}
