import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-latestatljps',
  templateUrl: './latestatljps.component.html',
  styleUrls: ['./latestatljps.component.css']
})
export class LatestatljpsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.bxslider_ljps').bxSlider({
        minSlides:3,
        maxSlides:3,
        slideWidth:800,
        slideMargin: 10,
        controls: false,
        touchEnabled:false
      });
     
      $(document).on('click', '[data-toggle="lightbox_ljps"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox().destroy();
        $(this).ekkoLightbox();
      });
      
    })
  }

}
